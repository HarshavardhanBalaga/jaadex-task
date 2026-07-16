import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import sphere from "./sphere.glb";

export default function SphereModel() {
    const groupRef = useRef();

    const { scene } = useGLTF(sphere);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        if (!groupRef.current) return;

        // Very subtle floating
        groupRef.current.position.y = Math.sin(t * 0.6) * 0.08;

        // Very slow rotation
        groupRef.current.rotation.y += 0.0005;

        // Tiny tilt
        groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.03;
    });

    return (
        <group ref={groupRef}>
            <primitive
                object={scene}
                scale={1.1}
            />
        </group>
    );
}

useGLTF.preload(sphere);