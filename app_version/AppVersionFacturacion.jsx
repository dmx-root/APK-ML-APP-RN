import { createStackNavigator }             from '@react-navigation/stack';
import { FacturacionContextProvider }       from '../context/facturacionContext';
import {MainViewContainerFacturacion}       from '../view/facturacionVersion/mainViewContainer';
import { useFocusEffect }                   from '@react-navigation/native';

const FacturacionNavigater=createStackNavigator();

export function AppVersionFacturacion({navigation}){
    useFocusEffect(() => {
        navigation.setOptions({ headerShown: false });
      });    
    return(
        <FacturacionContextProvider>
            <FacturacionNavigater.Navigator>
                <FacturacionNavigater.Screen name='MainviewContainer' component={MainViewContainerFacturacion} options={{headerShown:false}}/>
            </FacturacionNavigater.Navigator>
        </FacturacionContextProvider>
        
    );
}