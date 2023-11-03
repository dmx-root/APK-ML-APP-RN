import { createStackNavigator }     from '@react-navigation/stack';
import { View, Text }               from 'react-native';
import { InvitadoContextProvider }    from '../context/invitadoContext.jsx';
import { MainViewContainerInvitado }             from '../view/mainViewContainerInvitado.jsx';
import { useFocusEffect } from '@react-navigation/native';


const InvitadoNavigator=createStackNavigator();
export function AppVersionInvitado({navigation}){
    useFocusEffect(() => {
        navigation.setOptions({ headerShown: false });
      });
      
    return(
        <InvitadoContextProvider>
            <InvitadoNavigator.Navigator>
                <InvitadoNavigator.Screen name="MainInterfazContainer" component={MainViewContainerInvitado} options={{headerShown:false}}/>
            </InvitadoNavigator.Navigator>
        </InvitadoContextProvider>
    );
}