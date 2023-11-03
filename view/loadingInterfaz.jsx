import { View,Text,ActivityIndicator,StyleSheet,Dimensions } from "react-native";

const{height,width} =Dimensions.get('window');
export function LoadingInterfaz({message}){
    return (
    <View style={StyleInterfazOCR.viewContainer}>
        <View style={[StyleInterfazOCR.window,{height:'20%'}]}>
            <View>
                <Text style={{fontSize:height*0.02,color:'#AAA',marginBottom:'2%'}}>{message}</Text>
            </View>
            <ActivityIndicator size="large"/>
        </View>
    </View>)
}
const StyleInterfazOCR=StyleSheet.create({
    viewContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:50,
        height,
        width,
        backgroundColor:'#00000080'
    },
    window:{
        height:height*0.50,
        width:width*0.70,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
});