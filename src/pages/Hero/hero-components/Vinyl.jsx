import { useEffect, useRef, memo } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/Addons.js";

const Vinyl = () => {
    const mountRef = useRef(null),
          modelRef = useRef(null),
          rendererRef = useRef(null);

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
                "/portfolio/gltf/vinyl.gltf",
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

        return (
            <div ref={mountRef} />
        )
}

export default memo(Vinyl);