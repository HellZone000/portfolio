'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center } from '@react-three/drei';
import { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';

function EngineModel() {
  const { scene } = useGLTF('/engine.glb'); 
  const ref = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#333333", 
          metalness: 0.9,
          roughness: 0.1,
        });
      }
    });
  }, [scene]);

  // ROTAZIONE SU SE STESSO (PANORAMICA)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1; // Velocità costante
    }
  });

  return (
    <Center>
      <primitive 
        ref={ref} 
        object={scene} 
        scale={0.01} // SCALA RICHIESTA ESATTA
        rotation={[0.3, 0, 0]} 
      />
    </Center>
  );
}

export default function MechanismCommissions() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-zinc-950">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-zinc-950/80 to-zinc-950"></div>
       <Canvas camera={{ position: [0, 0, 15], fov: 35 }}>
        <ambientLight intensity={2} />
        <spotLight position={[10, 10, 10]} angle={0.5} intensity={800} color="#ffffff" />
        <spotLight position={[-10, -5, -5]} intensity={500} color="#4f46e5" />
        <Environment preset="city" />
        <EngineModel />
      </Canvas>
    </div>
  );
}