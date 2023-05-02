import { MainInterfaz }             from './mainInterfaz.jsx'
import { InfoOCRInterfaz }          from './infoOCRInterfaz.jsx'
import { CreateORCInterfaz }        from './createORCInterfaz.jsx'
import { useMainContex }            from '../context/mainContext.jsx'
import { Alert, Modal }             from 'react-native';

export function MainRoot({navigation}){
    const { createOCRState,infoOCRState }=useMainContex();
    return(
        <>
            <MainInterfaz/>
            <Modal
                animationType="fade"
                transparent={true}
                visible={createOCRState}
            >
                <CreateORCInterfaz navigation={navigation}/>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={infoOCRState}
            >
                <InfoOCRInterfaz/>
            </Modal>
        </>
    )
}