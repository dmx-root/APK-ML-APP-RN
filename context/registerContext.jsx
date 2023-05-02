import { createContext, useContext, useState } from "react";

const RegisterContext=createContext();

export function useRegisterContext(){
    return useContext(RegisterContext);
}


export function RegisterContextProvider({children}){
    const [tallaState,setTallaState]=useState('');
    const [codigoState,setcodigoState]=useState('');
    const [cant, setcant]=useState(0);
    const [cantidad, setCantidad]=useState([0,0,0,0,0,0,0,0]);
    const [codigoToTalla, setCodigoToTalla]=useState([{talla:'4XL/44',codigo:'',cantidad:0},{talla:'3XL/42',codigo:'',cantidad:0},{talla:'2XL/40',codigo:'',cantidad:0},{talla:'XL/38',codigo:'',cantidad:0},{talla:'L/36', codigo:'',cantidad:0},{talla:'M/34', codigo:'',cantidad:0},{talla:'S/32',codigo:'',cantidad:0},{talla:'XS/30',codigo:'',cantidad:0}])
    
    const data={
        tallaState,setTallaState,
        codigoState,setcodigoState,
        cant,setcant,
        cantidad, setCantidad,
        codigoToTalla, setCodigoToTalla
    }
    return(
        <RegisterContext.Provider value={data}>
            {children}
        </RegisterContext.Provider>
    )
}