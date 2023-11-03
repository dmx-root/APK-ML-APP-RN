import { createStackNavigator }             from '@react-navigation/stack';
import { FacturacionContextProvider }       from '../context/facturacionContext';
import {MainViewContainerFacturacion}       from '../view/facturacionVersion/mainViewContainer';
import { useFocusEffect }                   from '@react-navigation/native';
import { ProfileInterface } from '../view/allVersions/ProfileInterfacea';

const FacturacionNavigater=createStackNavigator();

export function AppVersionFacturacion({navigation}){
    useFocusEffect(() => {
        navigation.setOptions({ headerShown: false });
      });    
    return(
        <FacturacionContextProvider>
            <FacturacionNavigater.Navigator>
                <FacturacionNavigater.Screen name='MainViewContainer' component={MainViewContainerFacturacion}  options={{headerShown:false}}/>
                <FacturacionNavigater.Screen name="ProfileInterface"  component={ProfileInterface}              options={{headerShown:false}}/>
            </FacturacionNavigater.Navigator>
        </FacturacionContextProvider>
        
    );
}