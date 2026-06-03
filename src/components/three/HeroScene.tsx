import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

const matte = { color: '#111111', metalness: 0.15, roughness: 0.45 }

function HeroShapes() {
  const group = useRef<THREE.Group>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.current.x * 0.18,
      0.04,
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouse.current.y * 0.08,
      0.04,
    )
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.04
  })

  return (
    <group
      ref={group}
      onPointerMove={(e) => {
        mouse.current.x = (e.pointer.x ?? 0) * 0.6
        mouse.current.y = (e.pointer.y ?? 0) * 0.3
      }}
    >
      {/* Central glass slab */}
      <mesh position={[0, 0.1, 0]} rotation={[0, 0.08, 0]}>
        <boxGeometry args={[0.55, 1.35, 0.06]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.35}
          chromaticAberration={0.08}
          anisotropy={0.25}
          distortion={0.12}
          distortionScale={0.15}
          temporalDistortion={0.08}
          color="#f8f6f3"
          transmission={0.94}
        />
      </mesh>

      {/* Large torus — left */}
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.35}>
        <mesh position={[-1.35, 0.05, 0.2]} rotation={[1.2, 0.4, 0.6]}>
          <torusGeometry args={[0.42, 0.14, 32, 64]} />
          <meshStandardMaterial {...matte} />
        </mesh>
      </Float>

      {/* Cube — top right */}
      <Float speed={1.5} rotationIntensity={0.25} floatIntensity={0.4}>
        <mesh position={[1.1, 0.55, -0.15]} rotation={[0.5, 0.8, 0.3]}>
          <boxGeometry args={[0.32, 0.32, 0.32]} />
          <meshStandardMaterial {...matte} />
        </mesh>
      </Float>

      {/* Tetrahedron — bottom left */}
      <Float speed={1.8} floatIntensity={0.5}>
        <mesh position={[-0.95, -0.45, 0.35]} rotation={[0.2, 0.5, 0]}>
          <tetrahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.2} roughness={0.5} />
        </mesh>
      </Float>

      {/* Icosahedron — bottom right */}
      <Float speed={2} floatIntensity={0.45}>
        <mesh position={[1.05, -0.35, 0.25]} rotation={[0.6, 0.2, 0.4]}>
          <icosahedronGeometry args={[0.22, 0]} />
          <meshStandardMaterial color="#3a3a3a" metalness={0.3} roughness={0.4} />
        </mesh>
      </Float>

      {/* Small accent shapes */}
      <mesh position={[0.7, 0.75, 0.1]}>
        <octahedronGeometry args={[0.1]} />
        <meshStandardMaterial color="#111111" wireframe />
      </mesh>
    </group>
  )
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.1} />
      <directionalLight position={[-4, 2, -2]} intensity={0.35} />
      <pointLight position={[0, 2, 3]} intensity={0.3} />
      <Environment preset="studio" />
      <HeroShapes />
    </>
  )
}

export function HeroScene() {
  return (
    <div className="pointer-events-auto absolute inset-0 h-full w-full" aria-hidden>
      <Canvas
        camera={{ position: [0, 0.15, 3.8], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
