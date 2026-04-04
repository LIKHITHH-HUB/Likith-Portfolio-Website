import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

// Animated sphere component
function MovingSphere() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.position.x = Math.sin(clock.elapsedTime) * 3;
    meshRef.current.position.y = Math.cos(clock.elapsedTime) * 2;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#8e44ad" />
    </mesh>
  );
}

export default function ParticleBackground() {
  return null;
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.8} />
        <MovingSphere />
      </Canvas>
    </div>

}