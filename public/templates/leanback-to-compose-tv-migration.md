# Leanback to Compose for TV Migration

Migrate an Android TV application from the legacy Leanback UI Toolkit, Android Views, or Support Fragments to Jetpack Compose for TV (`androidx.tv`) — covering browse screens, settings screens, authentication screens, and video playback screens, and replacing `BrowseSupportFragment`, `LeanbackSettingsFragment`, `PreferenceFragment`, `VideoSupportFragment`, `GuidedStepSupportFragment`, `SearchSupportFragment`, `VerticalGridSupportFragment`, `Presenter`, `ArrayObjectAdapter`, and `CursorMapper` with modern Compose equivalents.

## The 10-Foot UI

A "10-foot UI" is a design paradigm for televisions, tailored for viewing from roughly 3 meters away:

- **Viewing distance** — text and UI elements must be comfortably readable from a distance; layouts stay uncluttered, without dense blocks of text.
- **Color contrast** — high-contrast palettes and distinct visual indicators keep focused states visible across different TV panels, which often have lower display contrast.
- **D-pad navigation** — interaction relies on a directional remote with limited 4-way navigation (up/down/left/right); components are organized into clear spatial grids and carousels without focus traps.

## Core Architecture and Library Selection

- **UI modernization**: favor custom, cinematic layouts over legacy 1:1 templates — dynamic gradient hero backdrops, custom focus animations, custom navigation drawers, custom layouts.
- **Primary design system**: always use `androidx.tv.material3.*` (`androidx.tv:tv-material`) over mobile `androidx.compose.material3.*`. TV Material 3 has built-in D-pad focus handling, focus zoom scaling, and TV-optimized typography and shapes.
- **Focus zoom animation**: for interactive cards, use `CompactCard`, `ClassicCard`, or `WideCardContainer` with `scale = CardDefaults.scale(focusedScale = 1.1f)` for the standard TV focus animation.
- **Coil image loading**: include `io.coil-kt:coil-compose` to use declarative `AsyncImage(model, contentDescription, ...)` without a manual `ImageLoader`.
- **Explicit imports**: always import TV Material 3 classes explicitly (`import androidx.tv.material3.Surface`) instead of wildcard imports.
- **File naming**: name Composable screen files after the screen (`BrowseScreen.kt`, `PlaybackScreen.kt`, `AuthenticationScreen.kt`) — no generic `Main` prefixes.
- **Overscan and bezels**: apply horizontal padding (`horizontal = 48.dp` or `32.dp`, `vertical = 24.dp`) to root containers, carousels, and top bars to prevent clipping.
- **Reading width**: constrain long-form text columns with `Modifier.widthIn(max = 600.dp)`.
- **Media3 Compose**: include `androidx.media3:media3-ui-compose` when modernizing media playback screens.
- **No legacy `AndroidView` wrappers**: don't embed View-based components via `AndroidView { ... }`. Migrated screens use Compose components or Media3 Compose surfaces (`PlayerSurface`) exclusively.

## D-Pad Focus Handling and Navigation

Compose for TV requires explicit focus management — components don't receive initial focus automatically, and navigation uses 2D spatial coordinates.

### Initial Focus

Assign initial focus to the primary interactive element on every screen using `FocusRequester`:

```kotlin
val focusRequester = remember { FocusRequester() }
val focusManager = LocalFocusManager.current

LaunchedEffect(Unit) {
    focusRequester.requestFocus()
}
```

For screens with dynamic state or pagers (e.g. `OnboardingScreen` using `HorizontalPager`), pass the state key to `LaunchedEffect` (e.g. `LaunchedEffect(pagerState.currentPage)`) so focus re-applies when the page changes.

### Bidirectional Focus Routing and Avoiding Focus Traps

When interactive elements sit on opposite sides of the display, standard 2D spatial navigation can fail to find targets across them, trapping the user. Rely on Compose's 2D spatial focus engine whenever possible; when connecting adjacent UI elements across scrollable containers (`LazyColumn`/`LazyRow`), don't set directional overrides (`up =`, `down =`) targeting individual items inside lazy lists — when an item scrolls off-screen, its `FocusRequester` becomes uninitialized and throws `IllegalStateException` during focus searches.

### Row Focus Recollection (Modifier.focusRestorer)

When navigating vertically between horizontal carousels (`LazyRow`), Compose's default spatial focus engine searches along the X coordinate of the focused item — scroll right in Row 1, press DOWN, and it focuses whatever sits at that X coordinate in Row 2, not necessarily the last item visited there. Attach `Modifier.focusRestorer()` (no arguments) directly to each `LazyRow` so every row remembers and restores its own last-focused card. Don't pass custom fallback `FocusRequester` lambdas in lazy containers — calling `requestFocus` on an unattached or off-screen item during rapid D-pad scrolling throws `IllegalStateException`.

```kotlin
LazyRow(
    modifier = Modifier.focusRestorer(),
    contentPadding = PaddingValues(horizontal = 48.dp),
    horizontalArrangement = Arrangement.spacedBy(16.dp)
) {
    itemsIndexed(videos) { vidIndex, video ->
        CompactCard(
            onClick = { onVideoClick(video) },
            image = {
                AsyncImage(
                    model = video.cardImageUrl,
                    contentDescription = video.title,
                    contentScale = ContentScale.Crop,
                    modifier = Modifier.fillMaxSize()
                )
            },
            title = { Text(video.title) },
            modifier = Modifier
                .then(
                    if (catIndex == 0 && vidIndex == 0) Modifier.focusRequester(firstCardFocusRequester)
                    else Modifier
                )
                .onFocusChanged { if (it.isFocused) { focusedVideo = video; focusedCategoryIndex = catIndex } }
        )
    }
}
```

### Text Input, Back-Key Interception, and IME Focus Chaining

Migrating search bars or login forms (from `SearchSupportFragment`, `GuidedStepSupportFragment`): don't use bare `BasicTextField` containers or empty `Surface(onClick = {})` wrappers — they prevent D-pad CENTER from attaching the virtual keyboard.

1. **Clickable TV surface wrapper with back-key interception**: wrap a standard M3 `TextField` inside a focusable TV `Surface(onClick = { focusRequester.requestFocus() }, ...)`, and attach `Modifier.onPreviewKeyEvent` to intercept `Key.Back`/`Key.Escape` so the user can leave the input field without exiting the screen entirely.
2. **Why interception is mandatory**: pressing Back while editing a text field normally navigates back and exits the screen. Intercepting `Key.Back`/`Key.Escape` on `KeyUp` to clear focus instead lets the user return to D-pad navigation without accidentally leaving the screen.
3. **IME focus chaining**: for multi-field forms, attach `KeyboardActions(onNext = { focusManager.moveFocus(FocusDirection.Down) })` with `ImeAction.Next` on upper fields, and `ImeAction.Done` on the bottom field to route to the submit button.

## Lazy Containers

Use standard `LazyColumn`, `LazyRow`, and `LazyVerticalGrid`. For a custom pivot scroll line via `BringIntoViewSpec`, ensure Compose Foundation 1.7.0+ (`implementation 'androidx.compose.foundation:foundation:1.7.0'` or newer BOM). Annotate composables using `Modifier.focusRestorer` with `@OptIn(ExperimentalFocusRestorerApi::class, ExperimentalComposeUiApi::class)`.

## Media3 Video Playback and Transport Controls

Migrating `VideoSupportFragment`/`PlaybackGlue`: use Compose Media3 `PlayerSurface` (`androidx.media3.ui.compose.PlayerSurface`) combined with a translucent transport controls overlay.

1. **Mandatory transport buttons**: layer a translucent bottom controls bar over `PlayerSurface` with at minimum `PlayPauseButton`, `SeekBackButton`, `SeekForwardButton` from Media3 UI Compose — never leave the overlay empty. Requires `androidx.media3:media3-ui-compose-material3:1.6.0` alongside `androidx.media3:media3-ui-compose`.
2. **D-pad directional seeking**: attach `Modifier.onPreviewKeyEvent` and intercept `Key.DirectionLeft`/`Key.DirectionRight` to seek ±10 seconds. Never use legacy Android View keycodes.
3. **No legacy wrappers**: don't wrap `PlayerView`/`StyledPlayerView` in `AndroidView { ... }` — use `PlayerSurface` with `ExoPlayer` directly.

## Phased Migration Strategy

To migrate cleanly without breaking compilation or introducing circular dependencies, execute in five phases:

**Phase 1 — Foundation and design system**: create `TvTheme.kt` wrapping `TvMaterialTheme`; build atomic reusable components (`MovieCard`, `SectionHeader`, `LoadingIndicator`, `ErrorState`).

**Phase 2 — Leaf and standalone screens**: migrate screens with no outbound navigation first (error, onboarding, settings). Replace `BaseLeanbackPreferenceFragmentCompat`/`LeanbackSettingsFragment` with Compose `ListItem` + `Switch` bound directly to `SharedPreferences`. Assign initial D-pad focus on every screen. Replace legacy `Fragment` classes with `ComponentActivity` using Compose declaratively. Clean up legacy Leanback theme/style references (e.g. `@style/PreferenceThemeOverlay.v14.Leanback`) that break once leanback dependencies are removed.

**Phase 3 — Core browsing and discovery screens**: migrate `VerticalGridScreen` (`LazyVerticalGrid`), `SearchScreen` (`BasicTextField` with live filtering), and `BrowseScreen` (`LazyColumn` of `LazyRow`s). Remove `ArrayObjectAdapter`, `ListRowPresenter`, `CardPresenter`, `HeaderItem`.

**Phase 4 — Details and media playback**: migrate `VideoDetailsScreen` and `GuidedStepScreen`; migrate `PlaybackScreen` using `PlayerSurface` plus the transport-controls overlay.

**Phase 5 — Final unification and cleanup**: remove all remaining legacy `.java` activities/fragments/presenters/XML layouts; ensure every activity extends `ComponentActivity`/`FragmentActivity` calling `setContent { ... }`; remove legacy Leanback themes and `lb_`-prefixed style references entirely.

## Component and Class Mapping Guide

| Legacy Leanback / View Class | Modern Compose Equivalent |
|---|---|
| `BrowseSupportFragment` / `MainFragment` | `BrowseScreen` (`LazyColumn` of categorized `LazyRow`s + Hero Banner) |
| `DetailsSupportFragment` | `VideoDetailsScreen` (poster, text column, action buttons, related `LazyRow`) |
| `VideoSupportFragment` / `PlaybackGlue` | `PlaybackScreen` (Media3 `ExoPlayer` + Compose `PlayerSurface`) |
| `GuidedStepSupportFragment` | `GuidedStepScreen` (split-screen: 40% guidance pane, 60% actions pane) |
| `SearchSupportFragment` | `SearchScreen` (`BasicTextField` + live filtering + `LazyVerticalGrid`) |
| `VerticalGridSupportFragment` | `VerticalGridScreen` (`LazyVerticalGrid(columns = GridCells.Fixed(5))`) |
| `ArrayObjectAdapter` / `Presenter` | Declarative `@Composable` functions observing immutable `State<List<T>>` |
| `CursorMapper` / `LoaderManager` / `CursorLoader` | Kotlin Coroutines / `withContext(Dispatchers.IO)` in a Repository object |
| `OnboardingSupportFragment` | `OnboardingScreen` (`HorizontalPager` + D-pad navigation buttons) |
| `LeanbackSettingsFragment` / `PreferenceFragment` | `SettingsScreen` (`FocusRequester` on first `ListItem` + trailing `Switch` bound to `SharedPreferences`) |
