import   AsyncStorage                   from '@react-native-async-storage/async-storage';
import { createStackNavigator }         from '@react-navigation/stack';
import { useEffect, useState }          from 'react';
import { useMainContex }                from './context/mainContext.jsx';
import { AppVersionAdmin }              from './app_version/AppVersionAdmin.jsx';
import { AppVersionFacturacion }        from './app_version/AppVersionFacturacion.jsx';
import { AppVersionPlanta }             from './app_version/AppVersionPlanta.jsx';
import { AppVersionInvitado }           from './app_version/AppVersionInvitado.jsx';
import { Login }                        from './view/loginInterfaz.jsx';
import { LoadingView }                  from './view/LoadingView.jsx';
import { QueryDataUsers }               from './api/apiConsults.js';
import { Alert } from 'react-native';


const Stack=createStackNavigator();

export function AppRoot() {

    const {mainView,setMainView,setUserToken,setCurrentUser,DNS}=useMainContex();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        loadInformation();
    },[]);
  
    const handlerAccessSesion=(response)=>{

        setCurrentUser(response.data.data);
        setUserToken(response.data.token);
        setMainView(response.data.data.profile_id);
        setLoading(false);

    }
    async function getDataUser(data){
        const ApiQueryUsers=new QueryDataUsers(DNS,'/api/ml/auth/login/',data.userTokenId);
        try {
            const response1=await ApiQueryUsers.getData(data);
            if(response1.data.statusResponse===1){
                handlerAccessSesion(response1);
                console.log(response1.data.data);
            }
            if(response1.data.statusResponse===0) Alert.alert('Datos erroneos',response1.data.message);
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Error al tratar de ingresar')
        }
    }
    async function loadInformation(){
        const userTokenId=await AsyncStorage.getItem('user-token-id');
        if(userTokenId){
            setUserToken(userTokenId);
            getDataUser({
                userTokenId:userTokenId,
                userDocumentId:null,
                userPassword:null
            });
        }else{
            setLoading(false);
        }
    
    }

  if(loading){
    return(
        <Stack.Navigator>
            <Stack.Screen name='LoadingView' component={LoadingView} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
  }
  return (
    <Stack.Navigator>
        {mainView === 0 && (
            <Stack.Screen name="Login"                  component={Login}                   options={{headerShown:false}}/>
        )}
        {mainView === 1 && (
            <Stack.Screen name="AppVersionAdmin"        component={AppVersionAdmin}        option={{headerShown:false}}/>
        )}
        {mainView === 2 && (
            <Stack.Screen name="AppVersionPlanta"       component={AppVersionPlanta}        option={{headerShown:false}}/>
        )}
        {mainView === 3 && (
            <Stack.Screen name="AppVersionPlanta"       component={AppVersionPlanta}        option={{headerShown:false}}/>
        )}
        {mainView === 4 && (
            <Stack.Screen name="AppVersionFacturacion"  component={AppVersionFacturacion}   option={{headerShown:false}}/>
        )}
        {mainView === 5 && (
            <Stack.Screen name="AppVersionInvitado"     component={AppVersionInvitado}      option={{headerShown:false}}/>
            
        )}
        
    </Stack.Navigator>
   
  );
}
