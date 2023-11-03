import { useMainContex }                      from '../../context/mainContext';
import { useAdminContext }                    from '../../context/adminContext';
import { ModalModulosListAdmin }              from '../../modals/administracionVersion/modalModulosListAdmin';
import { ModalModulosOcrListAdmin }           from '../../modals/administracionVersion/modalModuloOcrListAdmin';
import { ModalRegisterSegInformationAdmin }   from '../../modals/administracionVersion/modalRegisterSegInformationAdmin';
import { ModalRegisterSegProductsAdmin }      from '../../modals/administracionVersion/modalRegisterSegProductsAdmin';
import { ModalRegisterEmployeesAdmin }        from '../../modals/administracionVersion/modalRegisterEmployeesAdmin';
import { ModalCreateOcrAdmin }                from '../../modals/administracionVersion/modalCreateOcrAdmin';
import { ModalModulosInformationListAdmin }   from '../../modals/administracionVersion/modalModulosInformationListAdmin';
import { AsideAdmin }                         from '../../modals/administracionVersion/asideAdmin';
import {MainInterfazAdmin}                    from './mainInterfazAdmin';
import { Modal }                              from 'react-native';
import { ModalModuloInformationAdmin } from '../../modals/administracionVersion/modalModuloInformation';

export function MainViewContainerAdmin({navigation}){

  const {modalCreateOcrState, asideState,modalValidationOcr,setModalValidationOcr,
    setCurrentOcr,currentOcr,setCurrentOp, AsyncStorageManagement,modalRegisterSegundas,
    modalRegisterInfoSegundas,modalComponentSeg,modalModulosList,modalModulosOcrList,
    modalRegisterEmployees,modalModulosInformation,modalModuloInformation}=useAdminContext();

  const {modalOcrInfo, modalSpecificationOP,modalOcrList}=useMainContex();

  
    return(
        <>
          <MainInterfazAdmin navigation={navigation}/>
          <Modal
              animationType="fade"
              transparent={true}
              visible={asideState}>
                <AsideAdmin navigation={navigation}/>
          </Modal>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalModulosList}>
                <ModalModulosListAdmin navigation={navigation}/>
          </Modal>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalModulosOcrList}>
                <ModalModulosOcrListAdmin navigation={navigation}/>
          </Modal>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalRegisterInfoSegundas}>
                <ModalRegisterSegInformationAdmin/>
          </Modal>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalRegisterSegundas}>
                <ModalRegisterSegProductsAdmin/>
          </Modal>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalRegisterEmployees}>
                <ModalRegisterEmployeesAdmin/>
          </Modal>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalCreateOcrState}>
                <ModalCreateOcrAdmin/>
          </Modal>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalModulosInformation}>
                <ModalModulosInformationListAdmin/>
          </Modal>
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalModuloInformation}>
                <ModalModuloInformationAdmin/>
          </Modal>
        </>
    )
}