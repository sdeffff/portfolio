import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/Addons.js";

import { Link } from "react-router-dom";

const Hero = () => {
    const mountRef = useRef(null);
    const modelRef = useRef(null);
    const rendererRef = useRef(null);

    let audio = new Audio("/audio/sound.mp3");

    const handleClick = () => {
        audio.volume = 0.3;

        audio.play();
    }

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 100);
        
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        rendererRef.current = renderer;

        mountRef.current.appendChild(renderer.domElement);

        const directionalLight = new THREE.DirectionalLight(0x7f8c8d, 0.15);
        directionalLight.position.set(-0.11, 1.6, 0.03);
        scene.add(directionalLight);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const loader = new GLTFLoader();
        const draco = new DRACOLoader();
        draco.setDecoderConfig({ type: 'js' });
        draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        loader.setDRACOLoader(draco);

        loader.load(
            '/gltf/vinyl.gltf',
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
            if (mountRef.current && rendererRef.current) {
                mountRef.current.removeChild(rendererRef.current.domElement);
                rendererRef.current.dispose();
            }
        };
    }, []);

    //optimize 3d model and render of it!

    return (
        <>
        <article 
        className="main-txt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-6 z-[2] font-extralight">
            <h2 
            className="text-[#dcdde1] text-4xl">Hey, my name is 
                <span>
                    <a href="https://github.com/sdeffff" className="name int">
                        Maksym Pavlii
                    </a>
                </span>, and I am 
            
                <span>
                    Front-End Developer
                </span>
            </h2>

            <div className="flex items-center justify-center gap-5">

                <Link to={"projects"} className="link int" onClick={handleClick}>
                    my projects
                </Link>

                <a href="#" className="link int" onClick={handleClick}>
                    about me
                </a>
            </div>
        </article>

         <div id="mem" ref={mountRef} />
        </>
    );
};

export default Hero;

//adjust light on 3d model, try to do it ok


//For portfolio:
//locomotive scroll
//cursor tracker
//text reveal animation
//transitions between pages
//зжать картинки + lazy loading
//npm knip
//use mapbox