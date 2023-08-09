import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreejsTest() {

    const mountRef = useRef(null);

    useEffect(() => {

        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor( 0xffffff, 0);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x194D33 });
        const cube = new THREE.Mesh(geometry, material);

        scene.add(cube);
        camera.position.z = 2;

        const animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }

        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener("resize", onWindowResize, false);

        animate();

        return () => mountRef.current.removeChild(renderer.domElement);
    }, []);

    return (
        <div className="theejs_render" ref={mountRef}>

        </div>
    );
}