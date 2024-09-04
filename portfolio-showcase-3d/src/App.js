import { Float, Environment, useGLTF, OrbitControls } from '@react-three/drei';

export default function App() {

    //const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>
    <Environment preset='city' />

    <color attach="background"  args={['#121E30']} />

    <OrbitControls makeDefault />

    <Float distance={1} position={[0, 0, 0]}>
        <primitive object={computer.scene} position-y={-1.2} />
    </Float>
    
    </>
}