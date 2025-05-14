import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

export default function Character({ model }: { model: any }) {
  const { ref, actions } = useAnimations(model.animations);

  useEffect(() => {
    actions["mixamo.com"]?.play();
  }, []);

  return <primitive object={model} ref={ref} />;
}
