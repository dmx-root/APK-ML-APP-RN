import { createContext, useContext, useState } from "react";


const MainContext=createContext();

export const useMainContex=()=>{
    return useContext(MainContext)
}

export function MainContextProvider({children}){
    const [valueL1A,setValueL1A]=useState("opcion1");
    const [valueL1B,setValueL1B]=useState("opcion1");
    const [valueL2,setValueL2]=useState("opcion1");
    const [createOCRState, setCreateOCRState]=useState(false);
    const [infoOCRState, setInfoOCRState]=useState(false);
    const [signUpModal,setSignUpModal]=useState(false);
    const [asideState,setAsideState]=useState(false);
    const [modalEditState,setModalEditState]=useState(false);
    const [modalRegisterState,setModalRegisterState]=useState(false);
    const [modalAlertClearData,setmodalAlertClearData]=useState(false);
    const [modalAlertSendData,setmodalAlertSendData]=useState(false);
    const [modalParadaInmediate,setModalParadaInmediate]=useState(false);
    const [OCRData, setOCRData]=useState({
        op:'',
        lote:'',
        referencia:'',
        refColor:'',
        modulo:'',
        NumeroOperarios:'',
        nombreOperario:'',
        fecha:'',
        desde:'',
        hasta:'',
        totalRegistros:0,
        motivoParada:'',
        estructuraRegistros:{}
    });

    const data={
        valueL1A,setValueL1A,
        valueL1B,setValueL1B,
        valueL2,setValueL2,
        createOCRState,setCreateOCRState,
        infoOCRState,setInfoOCRState,
        signUpModal,setSignUpModal,
        asideState,setAsideState,
        modalEditState,setModalEditState,
        modalRegisterState,setModalRegisterState,
        modalAlertClearData,setmodalAlertClearData,
        OCRData, setOCRData,
        modalAlertSendData,setmodalAlertSendData,
        modalParadaInmediate,setModalParadaInmediate
    }
    return(
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}