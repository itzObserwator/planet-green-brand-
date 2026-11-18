"use client";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import { palette } from "@/lib/brand-tokens";
function Island({ reduced }: { reduced: boolean }) {
  return (
    <Float
      speed={reduced ? 0 : 0.8}
      rotationIntensity={0.08}
      floatIntensity={0.25}
    >
      <group position={[0, -0.3, 0]}>
        <mesh
          position={[0, -0.4, 0]}
          scale={[1.4, 0.9, 1.2]}
          rotation={[0, 0.3, 0.2]}
        >
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color={palette[4].hex} roughness={1} />
        </mesh>
        <mesh scale={[1.4, 0.2, 1.2]}>
          <sphereGeometry args={[1, 32, 20]} />
          <meshStandardMaterial color={palette[1].hex} roughness={0.95} />
        </mesh>
        <mesh position={[0, 0.85, 0]} rotation={[0, 0, -0.08]}>
          <cylinderGeometry args={[0.018, 0.035, 1.6, 8]} />
          <meshStandardMaterial color={palette[1].hex} />
        </mesh>
        {Array.from({ length: 6 }, (_, i) => (
          <mesh
            key={i}
            position={[i % 2 ? 0.25 : -0.25, 0.5 + i * 0.2, 0]}
            rotation={[0.35, i * 0.65, i % 2 ? -0.65 : 0.65]}
            scale={[0.48, 0.16, 0.22]}
          >
            <sphereGeometry args={[1, 24, 16]} />
            <meshStandardMaterial
              color={i % 2 ? palette[2].hex : palette[1].hex}
              roughness={0.45}
            />
          </mesh>
        ))}
        <mesh rotation={[1.2, 0.2, 0.3]}>
          <torusGeometry args={[2, 0.008, 8, 100]} />
          <meshStandardMaterial
            color={palette[2].hex}
            transparent
            opacity={0.6}
          />
        </mesh>
        <mesh position={[1.7, 0.7, 0.3]}>
          <sphereGeometry args={[0.25, 32, 24]} />
          <meshPhysicalMaterial
            color={palette[3].hex}
            transmission={0.9}
            thickness={0.5}
            roughness={0.07}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>
    </Float>
  );
}
export default function OrganicHeroScene() {
  const reduced = useReducedMotion();
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1, 5.8], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? "demand" : "always"}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[3, 5, 4]} intensity={3} />
      <Island reduced={!!reduced} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!reduced}
        autoRotateSpeed={0.25}
        minPolarAngle={0.5}
        maxPolarAngle={2}
      />
    </Canvas>
  );
}
