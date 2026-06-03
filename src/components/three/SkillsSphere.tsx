import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Billboard, Text } from "@react-three/drei";
import * as THREE from "three";
import { SKILLS } from "../../portfolio-data";

function fibonacciSphere(n: number, r: number) {
  const pts: [number, number, number][] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push([Math.cos(theta) * radius * r, y * r, Math.sin(theta) * radius * r]);
  }
  return pts;
}

function Sphere() {
  const group = useRef<THREE.Group>(null!);
  const points = useMemo(() => fibonacciSphere(SKILLS.length, 2.4), []);
  useFrame((s) => {
    if (!group.current) return;
    group.current.rotation.y = s.clock.getElapsedTime() * 0.18 + s.pointer.x * 0.4;
    group.current.rotation.x = -s.pointer.y * 0.25;
  });
  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[2.35, 64, 64]} />
        <meshBasicMaterial color="#111111" wireframe transparent opacity={0.06} />
      </mesh>
      {SKILLS.map((sk, i) => (
        <Billboard key={sk.name} position={points[i]}>
          <Text
            fontSize={0.22}
            color="#111111"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.004}
            outlineColor="#fdfcfa"
          >
            {sk.name}
          </Text>
        </Billboard>
      ))}
    </group>
  );
}

export function SkillSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.8} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
    </Canvas>
  );
}
