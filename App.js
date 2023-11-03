import { MainContextProvider }    from './context/mainContext.jsx';
import { NavigationContainer }    from '@react-navigation/native';
import {AppRoot} from './AppRoot.js'

export default function App() {

  return (
      <MainContextProvider>
        <NavigationContainer>
            <AppRoot/>
        </NavigationContainer>
      </MainContextProvider>
  );
}
