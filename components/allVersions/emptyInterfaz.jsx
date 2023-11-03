import { View, Text,Dimensions,StyleSheet } from "react-native";

const {height}=Dimensions.get('window');

export function EmptyInterfaz({data}){
    return(
    <View style={StyleEmptyComponent.componentContainer}>
        <View>
            <Text style={StyleEmptyComponent.title}>No hay inforamación</Text>
        </View>
        <View style={StyleEmptyComponent.informationContainer}>
            <Text style={StyleEmptyComponent.information}>{data}</Text>
        </View>
    </View>)
}

const StyleEmptyComponent=StyleSheet.create({
    componentContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#FAFAFA',
        borderRadius:height*0.01
    },
    titleContainer:{
        width:'100%'
    },
    informationContainer:{
        width:'100%',
        marginTop:'2%',
        alignItems:'center'
    },
    title:{
        fontSize:height*0.022,
        fontWeight:'bold',
        color:'#DDD'
    },
    information:{
        fontSize:height*0.015,
        color:'#BBB'
    }
})