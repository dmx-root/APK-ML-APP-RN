import {createContext, useContext, useState} from 'react';

const InvitadoContext=createContext();

export const useInvitadoContext=()=>{
    return useContext(InvitadoContext);
}

export function InvitadoContextProvider({children}){
    //VARIABLES DE ESTADO PARA CONTROLAR LOS MODALS
    const [asideState,setAsideState] =useState(false);
    const [modalOcrInfo,setModalOcrInfo]=useState(false);

    //VARIABLES PARA ESTABLECER LA INFORMACION ENTRE LOS DIFERENTES MODALS
    const [opInfoInterfaz,setOpInfoInterfaz]=useState({});
    const [opSpeInfoInterfaz,setOpSpeInfoInterfaz]=useState({});
    const [ocrInfoInterfaz,setOcrInfoInterfaz]=useState({});

    const data={
        asideState,setAsideState,
        opInfoInterfaz,setOpInfoInterfaz,
        opSpeInfoInterfaz,setOpSpeInfoInterfaz,
        ocrInfoInterfaz,setOcrInfoInterfaz,
        modalOcrInfo,setModalOcrInfo
    }

    return(
        <InvitadoContext.Provider value={data}>
            {children}
        </InvitadoContext.Provider>
    )
}