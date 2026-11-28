# Blender Agent Skills: Drive Blender From Claude Code

Use this when someone wants Claude to model, texture, rig, animate, light, render or export in Blender: game props and characters, product shots, environments, weather and time-of-day looks, batch conversions, or Blender add-ons. Trigger phrases: "in Blender", "make a game-ready...", "rig this character", "export to Unity/Unreal/Roblox", "render a turntable".

Source: https://github.com/EL4CTEO/blender-skills (MIT). The original is 28 tested skills with bundled Python scripts (QA checks, review shots, exporters, a headless runner). **This template carries the routing and the rules; the scripts come from installing the skills** (see the playbook page). If they aren't installed, write `bpy` code directly using the rules below, and say that the bundled checks weren't available.

Requires **Blender 5.2 LTS or newer** (the skills are verified on 5.3). A Blender MCP server is optional: with one, Claude works in the user's open Blender; without one, it runs Blender in the background (headless).

## Route the task

| Task | Specialist skill |
| --- | --- |
| Units, collections, naming, linking, asset libraries | `blender-scene-setup` |
| Hard-surface modeling, bevels, booleans, normals | `blender-hardsurface-modeling` |
| Sculpting, multires, remesh | `blender-sculpting` |
| Retopology, UV unwrap, texel density | `blender-retopology-uv` |
| PBR materials, color spaces, texture sets | `blender-pbr-materials` |
| Wear, grime, decals, trim sheets | `blender-texturing` |
| Baking high-to-low maps (normal, AO, curvature) | `blender-texture-baking` |
| Geometry Nodes, procedural modeling | `blender-geometry-nodes` |
| Body rigging, Rigify, weight painting | `blender-character-rigging` |
| Face rig, shape keys, ARKit 52, visemes | `blender-facial-shapekeys` |
| Keyframes, actions, NLA, mocap retargeting, loops, root motion | `blender-animation` |
| Garments and layered clothing without poke-through | `blender-clothing` |
| Hair, fur, hair cards | `blender-hair-grooming` |
| Poly budgets, LODs, draw calls | `blender-game-optimization` |
| Export to Roblox, Unity, Unreal, Godot, web, USD | `blender-export-pipelines` |
| Cycles, EEVEE, batch rendering | `blender-rendering` |
| Lighting, HDRI, cameras, turntables | `blender-lighting-lookdev` |
| Toon, cel and anime shading, outlines | `blender-stylized-npr` |
| Terrain, biome scatter, modular kits | `blender-environment-kits` |
| Video editing (VSE), camera tracking | `blender-video-editing` |
| Time of day, night, fog, mood lighting | `blender-time-of-day` |
| Rain, snow, wet surfaces, puddles, lightning | `blender-weather-fx` |
| Cloth, rigid bodies, fluids | `blender-simulation` |
| Writing add-ons and extensions | `blender-addon-development` |
| Batch and headless pipelines, file conversion | `blender-pipeline-automation` |
| Checking any mesh or asset before delivery (always) | `blender-asset-qa` |
| End-to-end recipes (game prop, character, Roblox asset, product shot) | `blender-workflow-recipes` |

## How to run Blender

- **Live (with a Blender MCP server):** work in small steps and print only what you need. Each MCP call runs in a fresh namespace, so re-import any helper module in every call.
- **Headless (any shell):** `blender -b in.blend --factory-startup --python-exit-code 1 -P script.py -- args`. With the skills installed, `blender-core/scripts/run_in_blender.py --blend in.blend <script.py> -- --save out.blend` prints only the script's JSON result.
- **Windows with Git Bash:** MSYS rewrites paths that start with `//`. Prefix commands with `MSYS_NO_PATHCONV=1`, or use PowerShell.
- **First call in a session:** report the Blender version, render engines, GPU, enabled add-ons, units, color management and scene counts, so you know what you're working with.

## Rules

- **Live sessions are the user's work.** Never reset to factory settings, never delete data you didn't create, and save a backup copy (`save_as_mainfile(filepath=..., copy=True)`) before any destructive or batch edit.
- **Use the data API over operators.** Prefer `bpy.data`, `bmesh`, mesh attributes and `foreach_get`/`foreach_set` with numpy. Operators depend on context and selection, and many need a 3D View that background mode doesn't have. If an operator is unavoidable, wrap it in `bpy.context.temp_override(...)` and check that it returned `{'FINISHED'}`.
- **Edit mode isolation:** `ob.data` isn't updated while in Edit Mode. Use `bmesh.from_edit_mesh` and `bmesh.update_edit_mesh`, or switch to Object Mode before reading.
- **Find nodes by `type`, never by name** (names are localised). Sockets by English name or identifier are fine.
- **Enums:** read valid values from `bl_rna` enum items. Dynamic enums (render engine, view transform) under-report, so assign inside `try/except TypeError`.
- **Evaluated data:** use `ob.evaluated_get(depsgraph)`, then `.to_mesh()`, then always `.to_mesh_clear()`. Call `view_layer.update()` before reading `matrix_world` after a change.
- **Freed data:** applying or removing a modifier, object or datablock frees it. Collect names first and never reuse the old Python reference.
- **Never trust default names** like "Cube.001". Keep references, rename explicitly, and look objects up by name.
- **Scale:** 1 unit = 1 metre. Apply rotation and scale before bevels, distance-based modifiers, rigging, physics, baking and export.
- **Paths:** `bpy.path.abspath("//textures/x.png")` resolves relative to the .blend. Save explicitly.
- **Big meshes:** no per-vertex operators. Use numpy with `foreach_get`.
- **Blender 5.x broke many old tutorials** (and model memory): actions now use channelbags instead of `action.fcurves`; the compositor uses `scene.compositing_node_group`; `material.use_nodes` is deprecated; Geometry Nodes modifier inputs moved to `mod.properties.inputs`; `BLENDER_EEVEE_NEXT` is now `BLENDER_EEVEE`; bone layers became bone collections; `bl_info` add-ons became extensions with `blender_manifest.toml`; `bgl` is gone (call `gpu.init()` first in background mode). When code fails with an AttributeError or KeyError, suspect a 5.x API change before anything else.

## Verify before saying "done"

1. **Numbers, not adjectives.** Report triangles, objects, materials, real-world dimensions and the output files written.
2. **QA any geometry you created or edited** (the review gate below).
3. **Look at it.** Live: view it from several angles in material and wireframe shading. Headless: render contact sheets (one colour per object makes detached parts obvious, plus a wireframe pass).
4. **Re-read your own output.** Confirm exported files exist and aren't empty.

## Review gate: asset QA

Never assume a mesh is correct. Check every asset with numbers, fix every error, and either fix each warning or report why it's accepted. With the skills installed: `blender-asset-qa/scripts/qa_check.py -- --objects Body Head Hat --profile game` (profiles: `game`, `render` (lenient), `print` (watertight required), `roblox` (20k tris per mesh, watertight, no n-gons, at most 4 bone influences)).

| Finding | Fix |
| --- | --- |
| Z-fighting (two surfaces facing the same way within about 1 mm) | Delete the hidden duplicate, offset 2 to 5 mm along the normal, or merge |
| Faces glued back to back | Delete the hidden faces |
| Floating or detached parts | Snap into contact, bridge, or join and merge (unless floating is intended) |
| Inside-out or inconsistent normals | Recalculate normals outward; look for non-manifold seams if it persists |
| Non-manifold or stray edges | Dissolve extra faces, delete loose geometry |
| Open holes | Fill or cap (required for print, Roblox and clean bakes) |
| Degenerate faces, duplicate vertices | Dissolve degenerate geometry, merge by distance (about 0.0001), recheck UV seams |
| N-gons | Triangulate or quad locally; n-gons are fine only on flat hard-surface faces that never deform |
| Unapplied or negative scale | Apply rotation and scale (negative scale flips normals on export) |
| Missing or overlapping UVs | Unwrap properly (retopology and UV skill) |
| More than 4 bone influences | Clean the skin weights |
| Asset floats or sinks | Move the origin to the bottom and set z = 0 for props |
| Normal, roughness, metal or AO map tagged sRGB | Set the image to Non-Color; base color and emission stay sRGB |
| Missing texture files or empty material slots | Relink or pack textures, assign a material, remove unused slots |

Also judge by eye what scripts can't: silhouette and proportions against references and real-world size; smoothing artifacts on hard edges; intersections that look wrong even though parts touch; hidden interior geometry wasting triangles; deformation at extreme poses (elbow 140°, knee 150°, raised shoulder); whether each part got the intended material.

## Workflow

1. Confirm the target (game engine and platform, render, or print), the style, and the budget (triangle count, texture size).
2. Report the environment, then route to the specialist area above.
3. Work in small verified steps. Save a backup before anything destructive.
4. Run the QA gate and look at the result.
5. Export or render with the right preset for the target, and confirm the files.
6. Report the numbers and anything you couldn't verify.
