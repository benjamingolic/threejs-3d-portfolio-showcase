import { useState, useEffect } from 'react';
import { Text, Html, PresentationControls, Float, Environment, useGLTF, ContactShadows } from '@react-three/drei';
import Mac from './MacModel';

export default function App() {
    const phone = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf')

    const [isMobile, setIsMobile] = useState(false); // State to track if the device is mobile or desktop

    // Effect to detect screen size changes
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check and add resize listener
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>
    
    <color attach="background"  args={['#121E30']} />
        
        {isMobile ? (
            <>
                <Environment preset='night' />
                <Float rotationIntensity={0.4}>
                    <primitive object={phone.scene} position-x={0} position-y={-1.2} rotation={[-0.2, -0.6, -0.03]}>
                        <Html transform wrapperClass='phoneScreen' scale={1.89} distanceFactor={1.17} position={[0.24, 1.13, -2.1]}>
                            <iframe src="https://www.golic.at" />
                        </Html>
                    </primitive>
                </Float>
            </>
            ) : (
                <PresentationControls 
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]}
                azimuth={[ - 1, 0.75]}
                config={{ mass: 2, tension: 400}}
                snap={{mass: 4, tension: 400}} 
            >
                <Float rotationIntensity={0.4}>
                    <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#CDD7FD'} rotation={[0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                    {/*
                    <primitive object={computer.scene} position-y={-1.2}>
                        <Html transform wrapperClass='htmlScreen' distanceFactor={1.17} position={[0, 1.56, -1.4]} rotation-x={-0.256}>
                            <iframe src="https://www.golic.at" />
                        </Html>
                    </primitive>
                   */}
                    <Mac position-y={-1.2} />
                        <Text font="./Manrope-Bold.woff" fontSize={0.6} position={[1.75, 0.50, 0.75]} rotation-y={-1.25} maxWidth={2}>
                            BENJAMIN GOLIĆ
                        </Text>
                </Float>
            </PresentationControls>
        )}
        
    <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4}/>
    </>
}