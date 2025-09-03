import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';
import * as THREE from 'three';

const RotatingCube = () => {
  const meshRef = useRef();

  // Tech stack logos/text for each face
  const techStack = [
    'React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'
  ];

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main cube */}
      <Box args={[2, 2, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Box>

      {/* Tech logos on each face */}
      {techStack.map((tech, index) => {
        const positions = [
          [0, 0, 1.01],   // Front
          [0, 0, -1.01],  // Back
          [1.01, 0, 0],   // Right
          [-1.01, 0, 0],  // Left
          [0, 1.01, 0],   // Top
          [0, -1.01, 0],  // Bottom
        ];

        const rotations = [
          [0, 0, 0],      // Front
          [0, Math.PI, 0], // Back
          [0, Math.PI/2, 0], // Right
          [0, -Math.PI/2, 0], // Left
          [-Math.PI/2, 0, 0], // Top
          [Math.PI/2, 0, 0], // Bottom
        ];

        return (
          <Text
            key={index}
            position={positions[index]}
            rotation={rotations[index]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter-bold.woff"
          >
            {tech}
          </Text>
        );
      })}

      {/* Glowing edges */}
      <Box args={[2.05, 2.05, 2.05]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#00ff88"
          transparent
          opacity={0.1}
          wireframe
        />
      </Box>
    </group>
  );
};

export default RotatingCube;
