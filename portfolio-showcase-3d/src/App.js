import { useState, useEffect } from 'react';
import { Text, PresentationControls, Float, Environment, ContactShadows } from '@react-three/drei';
import Mac from './MacModel';
import Phone from './iPhoneModel';
import AirPodsPro from './AirPodsProModel';
import RedBull from './RedBullModel';

export default function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>

        <color attach="background" args={['#121E30']} />

        <Environment preset='city' />

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[- 1, 0.75]}
            config={{ mass: 2, tension: 400 }}
            snap={{ mass: 4, tension: 400 }}
        >

            <Float rotationIntensity={0.5}>
                <AirPodsPro
                    position={isMobile ? [2, 1, -1] : [-2.5, -0.5, -2]}
                    rotation={[0, 0.2, 0]}
                />
            </Float>

            <Float rotationIntensity={0.5}>
                <RedBull
                    position={isMobile ? [-0.5, 0, -0.6] : [2.5, -0.5, 1]}
                    rotation={[0, -0.5, 0]}
                />
            </Float>

            <Float rotationIntensity={0.4}>
                <rectAreaLight width={2.5} height={1.65} intensity={65} color={'#CDD7FD'} rotation={[0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                {isMobile ? (
                    <>
                        <Phone position-y={-1.3} rotation-x={-0.15} />
                    </>
                ) : (
                    <>
                        <Mac position-y={-1.2} />
                        <Text font="./Manrope-Bold.woff" fontSize={0.5} position={[1.75, 0.50, 0.75]} rotation-y={-1.25} maxWidth={2}>
                            BENJAMIN GOLIĆ
                        </Text>
                    </>
                )}

            </Float>
        </PresentationControls>
        <ContactShadows position-y={-1.4} opacity={0.4} scale={10} blur={2.4} />
    </>
}