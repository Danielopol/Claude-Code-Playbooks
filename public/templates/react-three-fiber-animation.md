# React Three Fiber Animation

Animate objects in React Three Fiber (R3F) — `useFrame`, GLTF animations with `useAnimations`, spring physics with `@react-spring/three`, morph targets, skeletal animation, procedural motion, and physics-based movement.

## Quick Start

```tsx
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function RotatingBox() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <RotatingBox />
    </Canvas>
  )
}
```

## useFrame — The Core Animation Hook

Runs every frame. The `state` object carries `clock`, `camera`, `scene`, `gl`, `mouse`/`pointer`, `viewport`, `size`, `raycaster`, `get`/`set`, and `invalidate` (for `frameloop="demand"`):

```tsx
useFrame((state, delta) => {
  const t = state.clock.getElapsedTime()
  meshRef.current.position.y = Math.sin(t) * 2
})
```

**Render priority** — lower numbers run first; default is 0. Use negative for pre-render, positive for post-render: `useFrame(() => {...}, -1)`.

**Conditional animation** — gate the update inside the callback rather than conditionally calling the hook:

```tsx
useFrame((state, delta) => {
  if (!isAnimating) return
  meshRef.current.rotation.y += delta
})
```

## GLTF Animations with useAnimations

The recommended way to play animations from GLTF/GLB files.

```tsx
import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'

function AnimatedModel() {
  const group = useRef()
  const { scene, animations } = useGLTF('/models/character.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[0]]?.play()
  }, [actions, names])

  return <primitive ref={group} object={scene} />
}
```

### Animation Control

```tsx
const action = actions['Walk']
action.play()
action.stop()
action.reset()
action.paused = true

action.timeScale = 1.5   // 1.5x speed
action.timeScale = -1    // reverse

action.loop = THREE.LoopOnce
action.loop = THREE.LoopRepeat
action.loop = THREE.LoopPingPong
action.repetitions = 3
action.clampWhenFinished = true

action.weight = 1        // for blending
```

### Crossfade Between Animations

```tsx
useEffect(() => {
  Object.values(actions).forEach(action => action?.fadeOut(0.5))
  actions[currentAnim]?.reset().fadeIn(0.5).play()
}, [currentAnim, actions])
```

### Animation Events

```tsx
useEffect(() => {
  const onFinished = (e) => console.log('Animation finished:', e.action.getClip().name)
  const onLoop = (e) => console.log('Animation looped:', e.action.getClip().name)
  mixer.addEventListener('finished', onFinished)
  mixer.addEventListener('loop', onLoop)
  return () => {
    mixer.removeEventListener('finished', onFinished)
    mixer.removeEventListener('loop', onLoop)
  }
}, [mixer])
```

### Animation Blending (Idle/Walk/Run by Speed)

```tsx
useEffect(() => {
  actions['Idle']?.play()
  actions['Walk']?.play()
  actions['Run']?.play()
}, [actions])

useFrame(() => {
  if (speed < 0.1) {
    actions['Idle']?.setEffectiveWeight(1)
    actions['Walk']?.setEffectiveWeight(0)
    actions['Run']?.setEffectiveWeight(0)
  } else if (speed < 5) {
    const t = speed / 5
    actions['Idle']?.setEffectiveWeight(1 - t)
    actions['Walk']?.setEffectiveWeight(t)
    actions['Run']?.setEffectiveWeight(0)
  } else {
    const t = Math.min((speed - 5) / 5, 1)
    actions['Idle']?.setEffectiveWeight(0)
    actions['Walk']?.setEffectiveWeight(1 - t)
    actions['Run']?.setEffectiveWeight(t)
  }
})
```

## Spring Animation (@react-spring/three)

Physics-based spring animations that integrate with R3F.

```bash
npm install @react-spring/three
```

### Basic Spring

```tsx
import { useSpring, animated } from '@react-spring/three'

function AnimatedBox() {
  const [active, setActive] = useState(false)
  const { scale, color } = useSpring({
    scale: active ? 1.5 : 1,
    color: active ? '#ff6b6b' : '#4ecdc4',
    config: { mass: 1, tension: 280, friction: 60 }
  })

  return (
    <animated.mesh scale={scale} onClick={() => setActive(!active)}>
      <boxGeometry />
      <animated.meshStandardMaterial color={color} />
    </animated.mesh>
  )
}
```

### Config Presets

```tsx
import { config } from '@react-spring/three'
// Presets: config.default, config.gentle, config.wobbly, config.stiff, config.slow, config.molasses

// Or fully custom:
{ mass: 1, tension: 170, friction: 26, clamp: false, precision: 0.01, velocity: 0 }
```

### Multiple Springs

```tsx
import { useSprings, animated } from '@react-spring/three'

function AnimatedBoxes({ count = 5 }) {
  const [springs, api] = useSprings(count, (i) => ({
    position: [i * 2 - count, 0, 0],
    scale: 1,
    config: { mass: 1, tension: 280, friction: 60 }
  }))

  const handleClick = (index) => {
    api.start((i) => (i === index ? { scale: 1.5 } : { scale: 1 }))
  }

  return springs.map((spring, i) => (
    <animated.mesh key={i} position={spring.position} scale={spring.scale} onClick={() => handleClick(i)}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </animated.mesh>
  ))
}
```

### Gesture Integration

```tsx
import { useSpring, animated } from '@react-spring/three'
import { useDrag } from '@use-gesture/react'

function DraggableBox() {
  const [spring, api] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 }
  }))

  const bind = useDrag(({ movement: [mx, my], down }) => {
    api.start({ position: down ? [mx / 100, -my / 100, 0] : [0, 0, 0] })
  })

  return (
    <animated.mesh {...bind()} position={spring.position}>
      <boxGeometry />
      <meshStandardMaterial color="hotpink" />
    </animated.mesh>
  )
}
```

### Chained Animations

```tsx
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/three'

function ChainedAnimation() {
  const scaleRef = useSpringRef()
  const rotationRef = useSpringRef()

  const { scale } = useSpring({
    ref: scaleRef, from: { scale: 0 }, to: { scale: 1 },
    config: { tension: 200, friction: 20 }
  })
  const { rotation } = useSpring({
    ref: rotationRef, from: { rotation: [0, 0, 0] }, to: { rotation: [0, Math.PI * 2, 0] },
    config: { tension: 100, friction: 30 }
  })

  // Scale first (0-0.5 of the chain), then rotation (0.5-1)
  useChain([scaleRef, rotationRef], [0, 0.5])

  return (
    <animated.mesh scale={scale} rotation={rotation}>
      <boxGeometry />
      <meshStandardMaterial color="cyan" />
    </animated.mesh>
  )
}
```

## Performance Tips

1. **Isolate animated components** — split animated meshes into their own components so a parent's re-render doesn't cascade into every child; only the animated mesh should re-render.
2. **Use refs over state** — mutate `mesh.current.rotation`/`position` directly inside `useFrame` instead of `setState`, which would trigger a full React re-render every frame.
3. **Throttle expensive calculations** — accumulate `delta` and only run costly logic every N milliseconds, while still updating cheap properties every frame:

```tsx
function ThrottledAnimation() {
  const meshRef = useRef()
  const accumulated = useRef(0)

  useFrame((state, delta) => {
    accumulated.current += delta
    if (accumulated.current > 0.1) {
      // expensive calculation here, throttled to every 100ms
      accumulated.current = 0
    }
    meshRef.current.rotation.y += delta // cheap, runs every frame
  })
}
```

4. **Pause offscreen animations** — check visibility/frustum before running expensive per-frame updates on something the camera can't see.
5. **Share animation clips** — reuse the same loaded clip across multiple instances instead of re-loading or re-parsing per instance.

## When NOT to Use This

General Three.js animation outside React (use vanilla Three.js patterns), CSS/DOM animation for non-3D UI elements, or 2D canvas animation unrelated to a WebGL scene.
