import {createContext, useContext, useReducer, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PlantaContext=createContext();

export const usePlantaContext=()=>{
    return useContext(PlantaContext);
}

export function  PlantaContextProvider({children}){

    //VARIABLES DE ESTADO PARA CONTROLAR LOS MODALS
    const [modalCreateOcrState,setModalCreateOcrState]=useState(false);
    const [modalRegisterEmployees,setModalRegisterEmployees]=useState(false);
    const [modalRegister,setModalRegister]=useState(false);
    const [modalAlert,setModalAlert]=useState(false);
    const [modalAlertCancel,setModalAlertCancel]=useState(false);
    const [modalAlertSend,setModalAlertSend]=useState(false);
    const [modalEditUnits,setModalEditUnits]=useState(false);
    const [modalLoading,setModalLoading]=useState(false);
    const [modalValidationOcr,setModalValidationOcr]=useState(false);
    const [modalBluetoothDivices,setModalBluetoothDivices]=useState(false);
    const [modalRegisterSegundas,setRegisterSegundas]=useState(false);
    const [modalRegisterModulo,setRegisterModulo]=useState(false);
    const [modalRegisterInfoSegundas,setRegisterInfoSegundas]=useState(false);
    const [modalComponentSeg,setModalComponentSeg]=useState(false);
    const [asideState,setAsideState]= useState(false);
    
    const [statusReques,setStatusReques]=useState(false)

    //VARIABLES QUE ESTABLECEN EL ESTADO DE LA INFORMACION ENTRE LAS DIFERENTES VISTAS
    const [currentOcr,setCurrentOcr]=useState({
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
    const [segList,setsegList]=useState([]);
    const [informationSegundas,setInformationSegundas]=useState(
        {
            op:null,
            modulo:null
        }
    )
    const [currentOp,setCurrentOp]=useState({
        op:null,
        reference:null,
        cantOcr:0,
        cantPlanned:0,
        cantCompleted:0,
        cantCompleted:0
    });
    const []=useState({

    })
    const [detalleOpList,setDetalletOpList]=useState([]);
    const [eventosImproductivos, setEventosImproductivos]=useState([]);
    const [modulosList,setModulosList]=useState([]);
    const [employeeList,setEmployeeList]=useState([]);

    //use reducer
    class AsyncStorageManagement{
        constructor(itemOcr,itemOp){
            this.itemOcr=itemOcr;
            this.itemOp=itemOp;
        }
        async saveOcr(dataOcr,dataOp){
            try {
                const parseDataOcr=JSON.stringify(dataOcr);
                const parseDataOp=JSON.stringify(dataOp);
                await AsyncStorage.setItem(this.itemOcr,parseDataOcr);
                await AsyncStorage.setItem(this.itemOp,parseDataOp);
            } catch (error) {
                console.log(error);
            }
        }
        async removeData(){
            try {
                await AsyncStorage.removeItem(this.itemOcr);
                await AsyncStorage.removeItem(this.itemOp);
            } catch (error) {
                console.log(error);
            }
        }
        async getData(){
            try {
                const currentOcr=await AsyncStorage.getItem(this.itemOcr);
                const currentOp=await AsyncStorage.getItem(this.itemOp);
                const currentOcrParse=JSON.parse(currentOcr);
                const currentOpParse=JSON.parse(currentOp);
                return [currentOcrParse,currentOpParse];
            } catch (error) {
                console.log(error);
            }
        }
        
    }

    
    data={
        modalCreateOcrState,setModalCreateOcrState,
        modalRegisterEmployees,setModalRegisterEmployees,
        modalRegister,setModalRegister,
        modalEditUnits,setModalEditUnits,
        modalAlert,setModalAlert,
        modalAlertCancel,setModalAlertCancel,
        modalAlertSend,setModalAlertSend,
        modalLoading,setModalLoading,
        modalValidationOcr,setModalValidationOcr,
        modalBluetoothDivices,setModalBluetoothDivices,
        modalRegisterSegundas,setRegisterSegundas,
        modalRegisterInfoSegundas,setRegisterInfoSegundas,
        modalComponentSeg,setModalComponentSeg,
        modalRegisterModulo,setRegisterModulo,
        asideState,setAsideState,
        currentOcr,setCurrentOcr,
        segList,setsegList,
        currentOp,setCurrentOp,
        informationSegundas,setInformationSegundas,
        detalleOpList,setDetalletOpList,
        eventosImproductivos, setEventosImproductivos,
        statusReques,setStatusReques,
        modulosList,setModulosList,
        employeeList,setEmployeeList,
        AsyncStorageManagement
    }

    return(
        <PlantaContext.Provider value={data}>
             {children}
        </PlantaContext.Provider>
    )
}