import { Modal }                        from "react-native";
import { useFacturacionContext }        from "../../context/facturacionContext";
import { useMainContex }                from "../../context/mainContext";
import { ModalModulosList }             from "../../modals/facturacionVersion/modalModulosList";
import { ModalModulosOcrList }          from "../../modals/facturacionVersion/modalModuloOcrList";
import { ModalOcrInfo }                 from "../../modals/plantaVersion/modalOcrInfo";
import { ModalSpecificationsOp }        from "../modalSpecificationsOp";
import { ModalOcrList }                 from "../modalOcrList";
import { MainInterfazFacturacion }      from "./mainInterfazFacturacion";
import { AsideFacturacion }             from "../../modals/facturacionVersion/asideFacturacion";
import { ModalAllOcrList }              from "../../modals/facturacionVersion/modalAllOcrList";
import { ModalCheckInUnidadesFacturacion } from "../../modals/facturacionVersion/modalCheckInUnidadesFacturacion";

export function MainViewContainerFacturacion({navigation}){
    
    const {asideState,modalModulosList,modalModulosOcrList,modalAllOcrList,modalCheckInUnits }=useFacturacionContext();
    const { modalOcrInfo, modalSpecificationOP, modalOcrList }=useMainContex();
    
    return(
        <>
        
            <MainInterfazFacturacion/>
            <Modal
              animationType="fade"
              transparent={true}
              visible={asideState}>
                <AsideFacturacion navigation={navigation}/>
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
             <Modal
              animationType="fade"
              transparent={true}
              visible={modalAllOcrList}>
                <ModalAllOcrList/>
            </Modal>
             <Modal
              animationType="fade"
              transparent={true}
              visible={modalCheckInUnits}>
                <ModalCheckInUnidadesFacturacion/>
            </Modal>

        </>
    )
}