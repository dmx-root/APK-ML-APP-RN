import { MainViewContainer }            from '../view/mainViewContainer.jsx'
import { RegisterInterfaz }             from '../view/plantaVersion/registerInterfaz.jsx'
import { PlantaContextProvider }        from '../context/plantaContext.jsx';
import { ProfileInterface }             from '../view/ProfileInterface.jsx'
import { createStackNavigator }         from '@react-navigation/stack';
import { useFocusEffect }               from '@react-navigation/native';

// console.log(RegisterInterfaz)
const PlantaNavigator=createStackNavigator();
export function AppVersionPlanta({navigation}){
    useFocusEffect(() => {
        navigation.setOptions({ headerShown: false });
      });
    return(
        <PlantaContextProvider>
            <PlantaNavigator.Navigator>
                <PlantaNavigator.Screen name="MainViewContainer"     component={MainViewContainer}      options={{headerShown:false}}/> 
                <PlantaNavigator.Screen name="RegisterInterfaz"      component={RegisterInterfaz}       options={{headerShown:false}}/>
                <PlantaNavigator.Screen name="ProfileInterface"      component={ProfileInterface}       options={{headerShown:false}}/>
            </PlantaNavigator.Navigator>
        </PlantaContextProvider>
    );
}