import {createContext, useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AdminContext=createContext();

export const useAdminContext=()=>{
    return useContext(AdminContext);
}

export function AdminContextProvider({children}){
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
    const [modalRegisterInfoSegundas,setRegisterInfoSegundas]=useState(false);
    const [modalComponentSeg,setModalComponentSeg]=useState(false);
    const [modalModulosInformation,setModalModulosInformation]=useState(false);
    const [modalModuloInformation,setModalModuloInformation]=useState(false);
    const [asideState,setAsideState]= useState(false);

        //VARIABLES DE ESTADO PARA CONTROLAR LOS MODALS
    const [modalOcrInfo,setModalOcrInfo]=useState(false);

    //VARIABLES PARA ESTABLECER LA INFORMACION ENTRE LOS DIFERENTES MODALS
    const [opInfoInterfaz,setOpInfoInterfaz]=useState({});
    const [opSpeInfoInterfaz,setOpSpeInfoInterfaz]=useState({});
    const [ocrInfoInterfaz,setOcrInfoInterfaz]=useState({});
    const [modulo,setModulo]=useState({});
    const [modalModulosList,setModalModulosList]=useState(false);
    const [modalModulosOcrList,setModalModulosOcrList]=useState(false);

    
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
        asideState,setAsideState,
        currentOcr,setCurrentOcr,
        segList,setsegList,
        currentOp,setCurrentOp,
        informationSegundas,setInformationSegundas,
        detalleOpList,setDetalletOpList,
        eventosImproductivos, setEventosImproductivos,
        statusReques,setStatusReques,
        modulosList,setModulosList,
        asideState,setAsideState,
        opInfoInterfaz,setOpInfoInterfaz,
        opSpeInfoInterfaz,setOpSpeInfoInterfaz,
        ocrInfoInterfaz,setOcrInfoInterfaz,
        modalOcrInfo,setModalOcrInfo,
        modalModulosList,setModalModulosList,
        modulo,setModulo,
        modalModulosOcrList,setModalModulosOcrList,
        modalModulosInformation,setModalModulosInformation,
        modalModuloInformation,setModalModuloInformation,
        AsyncStorageManagement
    }
    return(
        <AdminContext.Provider value={data}>
            {children}
        </AdminContext.Provider>
    )
}

