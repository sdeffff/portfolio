import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeJs = () => {
    const mountRef = useRef(null);
    const modelRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 100);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        console.log(renderer.capabilities.getMaxAnisotropy());

        rendererRef.current = renderer;

        mountRef.current.appendChild(renderer.domElement);

        const directionalLight = new THREE.DirectionalLight(0x7f8c8d, 0.15);
        directionalLight.position.set(-0.11, 1.6, 0.03);
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
        scene.add(ambientLight);

        const loader = new GLTFLoader();
        loader.load(
            '/untitled.glb',
            (gltf) => {
                const model = gltf.scene;
                model.anisotropy = 16;
                modelRef.current = model;

                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material.transparent = true;
                        child.material.opacity = 1;
                    }
                });

                scene.add(model);
                model.position.set(0, 0, 0);
                model.scale.set(1, 1, 1);
                model.rotation.x = 0.22;

                const animate = () => {
                    requestAnimationFrame(animate);

                    model.rotation.y += 0.0065;

                    renderer.render(scene, camera);
                };

                animate();
            },
            undefined,
            (error) => {
                console.error("An error occurred loading the model: ", error);
            }
        );

        camera.position.set(-0.003, 4, 1.53);
        camera.lookAt(0, 0, 0);

        const handleResize = () => {
            if (rendererRef.current) {
                const width = window.innerWidth;
                const height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                rendererRef.current.setSize(width, height);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    //optimize 3d model and render of it!

    return (
        <>
        <div id="noise"></div>

        <article>
            <h2>Hey, my name is <span><a href="https://github.com/sdeffff" id="name">Maksym Pavlii</a></span>, and I am <span>Front-End Developer</span></h2>

            <div>
                <a href="#" id="link">
                    my projects
                </a>

                <a href="#" id="link">
                    about me
                </a>
            </div>
        </article>

         <div id="mem" ref={mountRef} />
        </>
    );
};

export default ThreeJs;

//adjust light on 3d model, try to do it ok


//For portfolio:
//locomotive scroll
//cursor tracker
//text reveal animation
//transitions between pages
//зжать картинки + lazy loading
//npm knip
//use mapbox