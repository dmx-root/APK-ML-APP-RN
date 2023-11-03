import { createContext, useContext, useState }  from "react";
import TimeAgo                                  from 'javascript-time-ago';
import es                                       from 'javascript-time-ago/locale/es';

TimeAgo.addDefaultLocale(es);
const timeAgo = new TimeAgo('es-ES');

const MainContext=createContext();

export const useMainContex=()=>{
    return useContext(MainContext)
}

export function MainContextProvider({children}){
    const DNS="http://172.16.2.93:8080";
    const [newUser,setNewUser]=useState({
        userDocumentId:null,
        userPassword:null,
        userConfirmPassword:null,
        userProfile:null
    });
    const [loginUser,setloginUser]=useState({
        userDocumentId:null,
        userPassword:null
    });
    
    const [currentUser,setCurrentUser]=useState({});
    const [modalInput,setModalInput]=useState(false);
    const [userToken,setUserToken]=useState('');
    const [mainView,setMainView]=useState(0);
    const [loadingSigIn,setLoadingSigIn]=useState(false);

    //Puentes de información 
    const [opInfoInterfaz,setOpInfoInterfaz]=useState({});
    const [opSpeInfoInterfaz,setOpSpeInfoInterfaz]=useState({});
    const [ocrInfoInterfaz,setOcrInfoInterfaz]=useState({});

    const [modalOcrInfo,setModalOcrInfo]=useState(false);
    const [modalSpecificationOP,SetModalSpecificationOP]=useState(false);
    const [modalOcrList,setModalOcrList]=useState(false);


    const data={
        timeAgo,
        DNS,
        //puentes de información
        opInfoInterfaz,setOpInfoInterfaz,
        opSpeInfoInterfaz,setOpSpeInfoInterfaz,
        ocrInfoInterfaz,setOcrInfoInterfaz,

        modalOcrInfo,setModalOcrInfo,
        modalSpecificationOP,SetModalSpecificationOP,
        modalOcrList,setModalOcrList,

        newUser,setNewUser,
        modalInput,setModalInput,
        loginUser,setloginUser,
        currentUser,setCurrentUser,
        userToken,setUserToken,
        mainView,setMainView,
        loadingSigIn,setLoadingSigIn
    }
    return(
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}