import { useFacturacionContext }        from "../../context/facturacionContext";
import { useMainContex }                from "../../context/mainContext";
import { ModalModulosList }             from "../../modals/facturacionVersion/modalModulosList";
import { ModalModulosOcrList }          from "../../modals/facturacionVersion/modalModuloOcrList";
import { ModalOcrInfo }                 from "../../modals/plantaVersion/modalOcrInfo";
import { ModalSpecificationsOp }        from "../modalSpecificationsOp";
import { ModalOcrList }                 from "../modalOcrList";
import { MainInterfazFacturacion }      from "./mainInterfazFacturacion";
import { Modal }                        from "react-native";

export function MainViewContainerFacturacion({navigation}){
    
    const {asideState,modalModulosList,modalModulosOcrList }=useFacturacionContext();
    const { modalOcrInfo, modalSpecificationOP, modalOcrList }=useMainContex();
    
    return(
        <>
        
            <MainInterfazFacturacion/>
            <Modal
              animationType="fade"
              transparent={true}
              visible={asideState}>
                {/* <AsideInvitado navigation={navigation}/> */}
                <></>
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
             <Modal
              animationType="fade"
              transparent={true}
              visible={modalModulosList}>
                <ModalModulosList/>
            </Modal>
             <Modal
              animationType="fade"
              transparent={true}
              visible={modalModulosOcrList}>
                <ModalModulosOcrList/>
            </Modal>
        </>
    )
}