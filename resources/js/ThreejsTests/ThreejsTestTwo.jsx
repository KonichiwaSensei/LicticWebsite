import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreejsTestTwo() {

    const mountRef = useRef(null);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();
        // scene.background = null;

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        camera.position.z = 1;

        // Ambient Light
        const hlight = new THREE.AmbientLight(0x404040, 100)
        scene.add(hlight)

        // Directional Light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
        directionalLight.position.set(0, 1, 0);
        directionalLight.castShadow = false;
        scene.add(directionalLight);

        // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight);
        // scene.add(directionalLightHelper);

        // Point Light
        const pointLight = new THREE.PointLight(0x000000, 100)
        pointLight.position.set(0, 0, 0)
        scene.add(pointLight)

        // const pointLightHelper = new THREE.PointLightHelper(pointLight)
        // scene.add(pointLightHelper)

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true,  });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff, 0);
        mountRef.current.appendChild(renderer.domElement);

        // Loader
        let loader = new GLTFLoader();
        loader.load('/images/LicticFace.glb', function (gltf) {
            const logo = gltf.scene
            logo.scale.set(2, 2, 2)
            scene.add(gltf.scene);
            renderer.render(scene, camera);
        }, undefined, function (error) {
            console.error(error);
        });

        
        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener("resize", onWindowResize, false);

        return () => mountRef.current.removeChild(renderer.domElement);

    }, []);

    return (
        <div className="theejs_render" ref={mountRef}>

        </div>
    );
}