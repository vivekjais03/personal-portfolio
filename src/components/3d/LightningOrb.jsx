import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const LightningOrb = () => {
  const orbRef = useRef();
  const lightningRef = useRef();

  useFrame((state, delta) => {
    if (orbRef.current) {
      // Floating motion
      orbRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
      orbRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.3;

      // Rotation
      orbRef.current.rotation.x += delta * 0.2;
      orbRef.current.rotation.y += delta * 0.3;
    }

    if (lightningRef.current) {
      lightningRef.current.rotation.z += delta * 2;
    }
  });

  return (
    <group ref={orbRef} position={[3, 0, -2]}>
      {/* Main orb */}
      <Sphere args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.8}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Inner glow */}
      <Sphere args={[0.4, 32, 32]}>
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Lightning effect */}
      <group ref={lightningRef}>
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[0, 0, 0]}>
            <ringGeometry args={[0.6 + i * 0.1, 0.7 + i * 0.1, 16]} />
            <meshBasicMaterial
              color="#00ff88"
              transparent
              opacity={0.1 - i * 0.01}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </group>

      {/* Spark particles */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 0.8;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial
              color="#00ff88"
              transparent
              opacity={0.6}
            />
          </mesh>
        );
      })}
    </group>
  );
};

export default LightningOrb;
