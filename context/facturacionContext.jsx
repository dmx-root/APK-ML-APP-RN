import {createContext, useContext,useState} from 'react';

const FacturacionContext=createContext();

export const useFacturacionContext=()=>{
    return useContext(FacturacionContext);
}

export function FacturacionContextProvider({children}){
    //VARIABLES DE ESTADO PARA CONTROLAR LOS MODALS
    const [asideState,setAsideState] =useState(false);
    const [modalOcrInfo,setModalOcrInfo]=useState(false);

    //VARIABLES PARA ESTABLECER LA INFORMACION ENTRE LOS DIFERENTES MODALS
    const [opInfoInterfaz,setOpInfoInterfaz]=useState({});
    const [opSpeInfoInterfaz,setOpSpeInfoInterfaz]=useState({});
    const [ocrInfoInterfaz,setOcrInfoInterfaz]=useState({});
    const [modulosList,setModulosList]=useState({});
    const [modalModulosList,setModalModulosList]=useState(false);
    const [modalModulosOcrList,setModalModulosOcrList]=useState(false);
    const [modalAllOcrList,setModalAllOcrList]=useState(false);

    const data={
        asideState,setAsideState,
        opInfoInterfaz,setOpInfoInterfaz,
        opSpeInfoInterfaz,setOpSpeInfoInterfaz,
        ocrInfoInterfaz,setOcrInfoInterfaz,
        modalOcrInfo,setModalOcrInfo,
        modalModulosList,setModalModulosList,
        modulosList,setModulosList,
        modalModulosOcrList,setModalModulosOcrList,
        modalAllOcrList,setModalAllOcrList
    }

    return(
        <FacturacionContext.Provider value={data}>
            {children}
        </FacturacionContext.Provider>
    )
}