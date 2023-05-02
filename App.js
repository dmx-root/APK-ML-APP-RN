import { View }                   from 'react-native';
import { SignUp }                 from './view/signUpInterfaz.jsx';
import { Login }                  from './view/loginInterfaz.jsx';
import { MainRegisterInterfaz }   from './view/mainRegisterInterfaz.jsx';
import { MainInterfaz }           from './view/mainInterfaz.jsx';
import { CreateORCInterfaz }      from './view/createORCInterfaz.jsx';
import { InfoOCRInterfaz }        from './view/infoOCRInterfaz.jsx'
import { Aside }                  from './components/aside.jsx';
import { MainContextProvider }    from './context/mainContext.jsx'
import { MainRoot }               from './view/mainRoot.jsx'
import { NavigationContainer }    from '@react-navigation/native';
import { createStackNavigator }   from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
      <MainContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login"                component={Login}                options={{headerShown:false}}/>
            <Stack.Screen name="SignUp"               component={SignUp}               options={{headerShown:false}}/>
            <Stack.Screen name="MainRegisterInterfaz" component={MainRegisterInterfaz} options={{headerShown:false}}/>
            <Stack.Screen name="MainRoot"             component={MainRoot}             options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </MainContextProvider>
  );
}

