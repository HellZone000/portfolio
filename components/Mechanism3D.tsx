'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Torus, Cylinder, Float, Environment } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

function GearSystem({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotazione costante lenta
      groupRef.current.rotation.z += delta * 0.02; 
      
      // Reazione allo scroll
      const scrollRotationX = scrollY * 0.0005;
      const scrollRotationY = scrollY * 0.0002;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, 0.5 + scrollRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, scrollRotationY, 0.05);
    }
  });

  // MATERIALE "DARK METAL" (Lucido e scuro)
  const material = new THREE.MeshStandardMaterial({
    color: "#1a1a1a", 
    metalness: 1,     
    roughness: 0.1, // Molto liscio per riflettere la luce
  });

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: "#333", 
    metalness: 0.8,
    roughness: 0.2,
  });

  return (
    <group ref={groupRef} rotation={[0.5, 0, 0]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Torus args={[3.2, 0.15, 64, 100]} material={material} />
      </Float>
      
      <group rotation={[0.5, 0, 0]}>
         <Torus args={[2.4, 0.1, 48, 80]} material={accentMaterial} />
         <Cylinder args={[0.1, 0.1, 5, 8]} rotation={[0, 0, 1.57]} material={material} />
      </group>

      <Cylinder args={[0.8, 0.8, 2, 32]} rotation={[0, 0, 1.57]} material={material} />
      <Torus args={[0.9, 0.05, 32, 64]} rotation={[0, 1.57, 0]} material={accentMaterial} />
    </group>
  );
}

export default function Mechanism3D() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-zinc-950">
      
      <Canvas camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={0.2} />
        
        {/* LUCI DRAMMATICHE */}
        <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={500} color="#ffffff" />
        <pointLight position={[10, -5, 5]} intensity={200} color="#4f46e5" />
        
        {/* RIFLESSI REALISTICI (Questo fa la differenza "figa") */}
        <Environment preset="city" />
        
        <GearSystem scrollY={scrollY} />
      </Canvas>
      
      {/* Vignettatura scura ai bordi per eleganza */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_100%)] opacity-50 pointer-events-none"></div>
    </div>
  );
}