import { useInvitadoContext }                   from '../context/invitadoContext.jsx';
import { AsideInvitado }                        from './asideInvitado.jsx';
import { MainInterfazInvitado }                 from '../view/mainInterfazInvitado.jsx';
import {ModalSpecificationsOp}                  from './modalSpecificationsOp.jsx';
import {ModalOcrInfo}                           from '../modals/plantaVersion/modalOcrInfo.jsx';
import { Modal }                                from 'react-native';
import { useMainContex }                        from '../context/mainContext.jsx';
import { ModalOcrList }                         from './modalOcrList.jsx';



export function MainViewContainerInvitado({navigation}){
    
    const {asideState,setAsideState}=useInvitadoContext();
    const { modalOcrInfo, modalSpecificationOP, modalOcrList }=useMainContex();
    
    return(
        <>
            <MainInterfazInvitado navigation={navigation}/>
             <Modal
              animationType="fade"
              transparent={true}
              visible={asideState}>
                <AsideInvitado navigation={navigation}/>
            </Modal>
             <Modal
              animationType="fade"
              transparent={true}
              visible={modalOcrInfo}>
                <ModalOcrInfo/>
            </Modal>
             <Modal
              animationType="fade"
              transparent={true}
              visible={modalSpecificationOP}>
                <ModalSpecificationsOp/>
            </Modal>
             <Modal
              animationType="fade"
              transparent={true}
              visible={modalOcrList}>
                <ModalOcrList/>
            </Modal>
        </>
    )
}