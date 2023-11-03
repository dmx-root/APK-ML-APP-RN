import {Text,View,ActivityIndicator,Dimensions} from 'react-native';
import { LoadingComponent } from '../components/loadingComponent';

const {height}=Dimensions.get('window');

export function LoadingView(){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <LoadingComponent message={'Cargando aplicacón...'}/>
        </View>
    )
}