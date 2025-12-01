'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, Center } from '@react-three/drei';
import { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';

function GearsModel() {
  const { scene } = useGLTF('/gears.glb');
  const rotRef = useRef<THREE.Group>(null); // Ref per la rotazione

  useLayoutEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;
        mesh.material = new THREE.MeshStandardMaterial({
          color: "#666666",
          metalness: 0.8,
          roughness: 0.2,
        });
      }
    });
  }, [scene]);

  // ROTAZIONE SUL CENTRO ESATTO
  useFrame((state, delta) => {
    if (rotRef.current) {
      rotRef.current.rotation.y += delta * 0.1; // Ruota il contenitore che è già centrato
    }
  });

  return (
    // IL GRUPPO ESTERNO RUOTA
    <group ref={rotRef} position={[0, -1, -2]}> 
      {/* IL CENTER ALLINEA IL MODELLO A 0,0,0 DENTRO IL GRUPPO */}
      <Center>
        <primitive 
          object={scene} 
          scale={0.2} 
          rotation={[0.4, 0, 0]} // Inclinazione statica del modello
        />
      </Center>
    </group>
  );
}

export default function MechanismContact() {
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/10 via-zinc-950/90 to-zinc-950"></div>
      <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 15, 10]} angle={0.4} penumbra={1} intensity={1000} color="#ffffff" />
        <spotLight position={[-10, -10, -10]} angle={0.4} penumbra={1} intensity={500} color="#a5b4fc" />
        <Environment preset="warehouse" />
        <GearsModel />
      </Canvas>
    </div>
  );
}