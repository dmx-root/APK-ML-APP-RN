import { usePlantaContext }           from '../context/plantaContext.jsx';
import { Aside }                      from '../components/plantaVersion/aside.jsx';
import { MainInterfaz }               from './mainInterfaz.jsx';
import { ModalCreateOcr }             from '../modals/plantaVersion/modalCreateOcr.jsx';
import { ModalSpecificationsOp }      from './modalSpecificationsOp.jsx';
import { ModalOcrInfo }               from '../modals/plantaVersion/modalOcrInfo.jsx';
import { Alert, Modal }               from 'react-native';
import { ModalCreateOcrCurrent }      from './plantaVersion/modalCreateOcrCurrent.jsx';
import { useMainContex }              from '../context/mainContext.jsx';
import { ModalRegisterSegProducts }   from '../components/plantaVersion/modalRegisterSegProducts.jsx';
import { ModalRegisterSegInformation }from './plantaVersion/modalRegisterSegInformation.jsx';
import { ModalOcrInfoSeg }            from './modalOcrInfoSeg.jsx';
import { ModalOcrListPlanta }         from './plantaVersion/modalOcrListPlanta.jsx';
import { ModalRegisterEmployeesPlanta } from '../modals/plantaVersion/modalRegisterEmployeesPlanta.jsx';

export function MainViewContainer({navigation}){
    
    const {modalCreateOcrState, asideState}=usePlantaContext();

    const {modalValidationOcr,setModalValidationOcr,setModalCreateOcrState,
            setCurrentOcr,currentOcr,setCurrentOp, AsyncStorageManagement,modalRegisterSegundas,
            modalRegisterInfoSegundas,modalComponentSeg}=usePlantaContext();

    const {modalOcrInfo, modalSpecificationOP,modalOcrList}=useMainContex();

    const AsyncStoreObj=new AsyncStorageManagement('newCurrentOcr','newCurrentOp');
    async function loadInformationAsyncStorage(){
      try {
        await AsyncStoreObj.removeData();
      } catch (error) {
        console.log(error);
        Alert.alert('Error de almacenamiento','Hubo un problema a la hora de intentar almacenar la información local');
      }
    }

    const handlerCheckOcrModal=()=>{
      setModalValidationOcr(false);
      currentOcr.startTime=new Date().toLocaleTimeString();
      setCurrentOcr(currentOcr);
      navigation.navigate('RegisterInterfaz');
    }
    
    const handlerCloseOcrModal=()=>{
      setModalValidationOcr(false);
      setModalCreateOcrState(true);
      setCurrentOcr({
        ocrId:null,
        colorId:null,
        colorLabel:null,
        tallaId:null,
        tallaLabel:null,
        moduloId:null,
        ean:null,
        cantidadUnidades:0,
        startTime:null,
        finishTime:null,
        dete:null,
        motivoParada:null
      });
      setCurrentOp({
          op:null,
          reference:null,
          cantOcr:0,
          cantPlanned:0,
          cantCompleted:0,
          cantCompleted:0
      });
      loadInformationAsyncStorage();
      
    }
    
    return(
        <>
            <MainInterfaz navigation={navigation}/>
            <Modal
              animationType="fade"
              transparent={true}
              visible={asideState}>
                <Aside navigation={navigation}/>
            </Modal>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalCreateOcrState}>
                <ModalCreateOcr navigation={navigation}/>
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
                <ModalOcrListPlanta/>
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
              visible={modalRegisterSegundas}>
                <ModalRegisterSegProducts/>
            </Modal> 
            
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalRegisterInfoSegundas}>
               <ModalRegisterSegInformation/>
            </Modal> 
            
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalValidationOcr}>
                <ModalCreateOcrCurrent
                handlerOnPressCheck={handlerCheckOcrModal} 
                handlerOnPressClose={handlerCloseOcrModal}/>
            </Modal>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalComponentSeg}>
                <ModalOcrInfoSeg/>
            </Modal>
            {/* <Modal
              animationType="fade"
              transparent={true}
              visible={true}>
                <ModalRegisterEmployeesPlanta/>
            </Modal> */}
        </>
    )
}