import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

export default function AirPodsProModel(props) {
    // Dynamically set the base URL using import.meta.env.BASE_URL
    const basePath = import.meta.env.BASE_URL || '/';

    const { scene } = useLoader(GLTFLoader, `${basePath}airpods/airpodsPro.gltf`);
    const normalMap = useLoader(TextureLoader, `${basePath}airpods/pdidnEtOUoZnpdM000.jpg`);

    const modelRef = useRef();

    return <primitive object={scene} {...props} />
}
