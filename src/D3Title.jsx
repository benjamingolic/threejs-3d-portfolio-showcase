import React, { useRef } from 'react';
import { Text3D } from '@react-three/drei';

export default function D3Title({ size, text, position, rotation }) {

    return (
        <Text3D
            font="/fonts/Manrope.typeface.json"
            size={size}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={4}
            position={position} 
            rotation={rotation}
        >
            {text}
            <meshStandardMaterial attach="material" color="#CECECE" />
        </Text3D>
    );
}
