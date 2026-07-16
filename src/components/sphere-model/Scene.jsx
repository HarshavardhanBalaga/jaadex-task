import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls } from "@react-three/drei";
import SphereModel from "./SphereModel";

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 35,
      }}
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Ambient fill */}
      <ambientLight intensity={0.45} />

      {/* Main light */}
      <directionalLight position={[5, 4, 6]} intensity={2} />

      {/* Rim light */}
      <directionalLight position={[-5, -3, -5]} intensity={0.8} />

      {/* Metallic reflections */}
      <Environment preset="city" />

      <PresentationControls
        global
    cursor
    speed={1.2}
    zoom={1}
    polar={[-0.3, 0.3]}
    azimuth={[-0.6, 0.6]}

      >
        <group position={[0.8, 0, 0]}>
          <SphereModel />
        </group>
      </PresentationControls>
    </Canvas>
  );
}
