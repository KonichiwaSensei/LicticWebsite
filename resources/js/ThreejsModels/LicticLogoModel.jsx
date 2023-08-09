import React, { useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";

export default function LicticLogoModel() {

    const Model = ({ mouseOffset }) => {
        const gltf = useLoader(GLTFLoader, "/images/LicticLogoTest.glb");
        const modelRef = useRef();

        useFrame(() => {
            if (modelRef.current) {
                modelRef.current.rotation.x = mouseOffset.y * 0.1;
                modelRef.current.rotation.y = mouseOffset.x * 0.1;
            }
        });

        return (
            <group ref={modelRef}>
                <primitive object={gltf.scene} scale={20} />
            </group>
        );
    };

    const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const offsetX = (clientX - rect.left - centerX) * 0.005;
        const offsetY = (clientY - rect.top - centerY) * 0.005;
        setMouseOffset({ x: offsetX, y: offsetY });
    };

    // const handleMouseLeave = (event) => {
    //     setMouseOffset({ x: 0, y: 0 });
    // };

    return (
        <div
            className="theejs_render"
            onMouseMove={handleMouseMove}
            // onMouseLeave={handleMouseLeave}
        >
            <Canvas
                // style={{ width: "200px", height: "200px" }}
            >
                {/* <OrbitControls/> */}
                <Environment files="/images/abandoned_tiled_room_1k.hdr" />
                {/* <ambientLight intensity={1}/> */}
                {/* <pointLight position={[0, 1, 0]} intensity={100}/> */}
                <Model mouseOffset={mouseOffset} />
            </Canvas>
        </div>
    );
}
