import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

export default function RedBullModel(props) {
    const modelRef = useRef();
    const { scene } = useLoader(GLTFLoader, '/redbull/rb.gltf');
    const texture1 = useLoader(TextureLoader, '/redbull/images.jpg');

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01; 
        }
    });

    return <primitive ref={modelRef} object={scene} {...props} />
}
