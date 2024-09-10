import { useState, useEffect } from 'react';
import { Text, PresentationControls, Float, Environment, ContactShadows, Text3D } from '@react-three/drei';
import Mac from './MacModel.jsx';
import Phone from './iPhoneModel.jsx';
import AirPodsPro from './AirPodsProModel.jsx';
import RedBull from './RedBullModel.jsx';
import D3Title from './D3Title.jsx';

export default function App() {
    const [isMobile, setIsMobile] = useState(false);
    const [isNotebook, setIsNotebook] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            setIsNotebook(width > 768 && width <= 1680);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>
        <color attach="background" args={['#121E30']} />

        <Environment preset="city" />

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
                    position={isMobile ? [-0.25, -2, -0.6] : [-1.85, -0.5, 0]}
                    rotation={[-0.6, 0.2, 0]}
                    scale={0.5}
                />
            </Float>

            <Float rotationIntensity={0.5}>
                <RedBull
                    position={isMobile ? [2.25, 0, -1] : [-1.6, -0.65, -2]}
                    rotation={isMobile ? [-0.3, 0, -0.2] : [-0.2, 0, 0]}
                    scale={0.6}
                />
            </Float>

            {/*[2, -0.5, 1.5]*/}

            <Float rotationIntensity={0.4}>
                <rectAreaLight width={2.5} height={1.65} intensity={5} color={'#CDD7FD'} rotation={[0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                {isMobile ? (
                    <>
                        {/*}
                        <Text color="#CECECE" fontSize={0.2} letterSpacing={0.02} maxWidth={1} textAlign="center" position={[0.45, 1.2, -1.]} rotation={[-0.25, -0.2, 0]}>
                            BENJAMIN
                            GOLIĆ
                        </Text>
                        
                        <Phone position-y={-2} position-x={0.35} rotation-x={-0.35} rotation-y={-0.25} />
                        */}

                        <Phone position-y={-1.5} position-x={0.35} rotation-x={-0.35} rotation-y={-0.25} />
                    </>
                ) : (
                    <>
                        <Mac position-y={-1.2} position-x={0.5} />

                        <D3Title
                            size={isNotebook ? 0.35 : 0.45}
                            text="BENJAMIN"
                            position={[2, 0.50, -0.75]}
                            rotation={[0, -1.5, 0]}
                        />
                        <D3Title
                            size={isNotebook ? 0.35 : 0.45}
                            text="GOLIĆ"
                            position={[2, -0.20, -0.75]}
                            rotation={[0, -1.5, 0]}
                        />

                    </>
                )}

            </Float>
        </PresentationControls>
        <ContactShadows position-y={-1.4} opacity={0.4} scale={10} blur={2.4} />
    </>
}