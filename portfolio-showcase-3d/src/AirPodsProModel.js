import React, { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

export default function AirPodsProModel(props) {
    const { scene } = useLoader(GLTFLoader, '/airpods/airpodsPro.gltf');
    const normalMap = useLoader(TextureLoader, '/airpods/pdidnEtOUoZnpdM000.jpg');

    const modelRef = useRef();

    return <primitive object={scene} {...props} />
}
