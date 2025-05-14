import { Canvas } from "@react-three/fiber";
import { useFBX, Resize } from "@react-three/drei";

import Character from "./Character";

export default function Experience() {
  const model = useFBX("/character.fbx");

  return (
    <Canvas>
      <Resize scale={11} position={[0, -8, 0]}>
        <Character model={model} />
      </Resize>

      <ambientLight intensity={0.2} color={"white"} />
      <directionalLight position={[2, 2, 1]} intensity={3} color={"#e94560"} />
      <directionalLight position={[-2, 2, 1]} intensity={2.5} color={"white"} />
    </Canvas>
  );
}
