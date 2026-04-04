import { Canvas } from "@react-three/fiber";

export default function ParticleBackground() {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}>
      <Canvas>
        <ambientLight />
        <mesh>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial color="purple" />
        </mesh>
      </Canvas>
    </div>
  );
}