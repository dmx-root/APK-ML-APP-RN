import { createStackNavigator }   from '@react-navigation/stack';
import {MainViewContainerAdmin} from '../view/adminVersion/mainViewContainerAdmin'
import { useFocusEffect } from '@react-navigation/native';
import {AdminContextProvider} from '../context/adminContext'
import {ProfileInterfaceAdmin} from '../view/adminVersion/ProfileInterfaceaAdmin'

const AdminNavigator = createStackNavigator();

export function AppVersionAdmin({navigation}){
    useFocusEffect(() => {
        navigation.setOptions({ headerShown: false });
      });
      
    return(
    <>
    <AdminContextProvider>
        <AdminNavigator.Navigator>
            <AdminNavigator.Screen name="MainViewContainer"             component={MainViewContainerAdmin}              options={{headerShown:false}}/>
            <AdminNavigator.Screen name="ProfileInterface"              component={ProfileInterfaceAdmin}                    options={{headerShown:false}}/>
            {/* <AdminNavigator.Screen name="RegisterInterfaz"              component={RegisterInterfaz}       options={{headerShown:false}}/> */}
        </AdminNavigator.Navigator>
    </AdminContextProvider>
    </>
    );
}