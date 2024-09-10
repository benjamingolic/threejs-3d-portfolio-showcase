import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

export default function RedBullModel(props) {
    // Dynamically set the base URL using import.meta.env.BASE_URL
    const basePath = import.meta.env.BASE_URL || '/';

    const modelRef = useRef();
    const { scene } = useLoader(GLTFLoader, `${basePath}redbull/rb.gltf`);
    const texture1 = useLoader(TextureLoader, `${basePath}redbull/images.jpg`);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005; 
        }
    });

    return <primitive ref={modelRef} object={scene} {...props} />
}
