import {useFrame, useThree} from '@react-three/fiber';
import {useRef, useMemo} from 'react';
import * as THREE from 'three';
import {useTheme} from '../../context/ThemeContext';

export function HeroVisual() {
  const {theme} = useTheme();
  const isDark = theme === 'dark';

  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const coreWireRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const {pointer} = useThree();

  // Curated, lightweight particle field
  const particlesCount = 240;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const radius = 2.0 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      pos[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth mouse parallax with gentle return-to-center damping
      const targetRotX = pointer.y * 0.22;
      const targetRotY = pointer.x * 0.32;
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        targetRotX,
        3.5,
        delta
      );
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetRotY + time * 0.07,
        3.5,
        delta
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.14;
      coreRef.current.rotation.x = Math.sin(time * 0.35) * 0.09;
      // Gentle floating animation
      coreRef.current.position.y = Math.sin(time * 0.75) * 0.06;
    }

    if (coreWireRef.current && coreRef.current) {
      coreWireRef.current.rotation.y = coreRef.current.rotation.y;
      coreWireRef.current.rotation.x = coreRef.current.rotation.x;
      coreWireRef.current.position.y = coreRef.current.position.y;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = time * 0.18;
      innerRingRef.current.rotation.x = Math.PI / 3.8 + Math.sin(time * 0.25) * 0.12;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.y = -time * 0.15;
      outerRingRef.current.rotation.z = Math.PI / 2.8 + Math.cos(time * 0.2) * 0.1;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y = -time * 0.025;
    }
  });

  return (
    <group ref={groupRef} scale={[1.18, 1.18, 1.18]}>
      {/* Central Geometric Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.92, 1]} />
        <meshStandardMaterial
          color={isDark ? '#6366f1' : '#4f46e5'}
          emissive={isDark ? '#312e81' : '#1e1b4b'}
          emissiveIntensity={isDark ? 0.45 : 0.25}
          roughness={isDark ? 0.25 : 0.35}
          metalness={isDark ? 0.85 : 0.7}
          flatShading={true}
        />
      </mesh>

      {/* Architectural Wireframe Lattice */}
      <mesh ref={coreWireRef} scale={[1.015, 1.015, 1.015]}>
        <icosahedronGeometry args={[0.92, 1]} />
        <meshBasicMaterial
          color={isDark ? '#c7d2fe' : '#818cf8'}
          wireframe={true}
          transparent={true}
          opacity={isDark ? 0.35 : 0.45}
        />
      </mesh>

      {/* Inner Concentric Orbital Ring */}
      <mesh ref={innerRingRef}>
        <torusGeometry args={[1.48, 0.018, 16, 80]} />
        <meshStandardMaterial
          color={isDark ? '#818cf8' : '#6366f1'}
          emissive={isDark ? '#4338ca' : '#3730a3'}
          emissiveIntensity={isDark ? 0.45 : 0.2}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Outer Concentric Orbital Ring */}
      <mesh ref={outerRingRef}>
        <torusGeometry args={[1.92, 0.014, 16, 96]} />
        <meshStandardMaterial
          color={isDark ? '#38bdf8' : '#0284c7'}
          emissive={isDark ? '#0284c7' : '#0369a1'}
          emissiveIntensity={isDark ? 0.4 : 0.2}
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* Satellite Orbital Nodes */}
      <mesh position={[1.48, 0, 0]}>
        <sphereGeometry args={[0.055, 16, 16]} />
        <meshStandardMaterial
          color={isDark ? '#c7d2fe' : '#6366f1'}
          emissive={isDark ? '#6366f1' : '#4f46e5'}
          emissiveIntensity={isDark ? 0.9 : 0.5}
        />
      </mesh>
      <mesh position={[-1.92, 0, 0]}>
        <sphereGeometry args={[0.048, 16, 16]} />
        <meshStandardMaterial
          color={isDark ? '#38bdf8' : '#0ea5e9'}
          emissive={isDark ? '#0284c7' : '#0284c7'}
          emissiveIntensity={isDark ? 0.9 : 0.5}
        />
      </mesh>

      {/* Ambient Particle Nebula */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={isDark ? 0.035 : 0.03}
          color={isDark ? '#a5b4fc' : '#6366f1'}
          transparent
          opacity={isDark ? 0.7 : 0.5}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
