import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";

function Profile() {
  const ref = useRef();
  const texture = useTexture("/Portfolio-pic.jpg");

  useFrame(() => {
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref}>
      <circleGeometry args={[1.5, 64]} />
      <meshStandardMaterial
        map={texture}
        emissive="#a855f7"
        emissiveIntensity={0.5}
        transparent={true}
      />
    </mesh>
  );
}

export default function ThreeDObject() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 5]} />
      <Profile />
    </Canvas>
  );
}