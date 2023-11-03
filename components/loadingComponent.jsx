import {Text,View,ActivityIndicator,Dimensions} from 'react-native';

const {height}=Dimensions.get('window');

export function LoadingComponent({message}){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:height*0.02,color:'#888',marginBottom:'4%'}}>{message}</Text>
            <ActivityIndicator size="large" />
        </View>
    )
}