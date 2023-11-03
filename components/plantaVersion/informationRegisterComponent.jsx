import { useMainContex } from '../../context/mainContext.jsx';
import { usePlantaContext } from '../../context/plantaContext.jsx';
import {View,Text,StyleSheet,Dimensions} from 'react-native';

const {height,width}=Dimensions.get('window');

export function InformationRegisterComponent(){
    const {currentOcr,currentOp}=usePlantaContext();
    const {currentUser}=useMainContex();
    return(
    <View style={StyleRegisterWindow.informationContainer}>
        <View style={StyleRegisterWindow.informationFiel}>
            <Text style={StyleRegisterWindow.titleFieldInformation}>Fecha:</Text>
            <Text style={StyleRegisterWindow.fieldInformation}>{currentOcr.dete?currentOcr.dete.slice(0,9)+'...':''}</Text>
        </View>
        <View style={StyleRegisterWindow.informationFiel}>
            <Text style={StyleRegisterWindow.titleFieldInformation}>Hora-Ini:</Text>
            <Text style={StyleRegisterWindow.fieldInformation}>{currentOcr.startTime?currentOcr.startTime.slice(0,9):''}</Text>
        </View>
        <View style={StyleRegisterWindow.informationFiel}>
            <Text style={StyleRegisterWindow.titleFieldInformation}>Operaria/o:</Text>
            <Text style={StyleRegisterWindow.fieldInformation}>{currentUser.user_name?currentUser.user_name.slice(0,7)+'...':''}</Text>
        </View>
        <View style={StyleRegisterWindow.informationFiel}>
            <Text style={StyleRegisterWindow.titleFieldInformation}>Referencia:</Text>
            <Text style={StyleRegisterWindow.fieldInformation}>{currentOp.reference?currentOp.reference.slice(0,9)+'...':''}</Text>
        </View>
    </View>
    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

const StyleRegisterWindow=StyleSheet.create({
   
    informationContainer:{
        width:'35%',
        height:'80%',
        backgroundColor:'#FFF',
        marginLeft:'3%',

    },
    iconContainer:{
        flexDirection:'row',
        width:'100%',
        height:'35%',
    },
    textInformation:{
        color:currentColorMain,
        fontWeight:'bold',
        paddingLeft:'10%',
        fontSize:width*0.03
    },
    textContent:{
        alignSelf:'center',
        color:currentColorMain3,
        fontSize:width*0.03,
        fontWeight:'bold',

    },
    informationFiel:{
        flexDirection:'row',
        height:'22%',
        marginTop:'2%',
        // backgroundColor:'aqua',
        // justifyContent:'center
        alignItems:'center',
        paddingLeft:'5%'
    },
    titleFieldInformation:{
        color:'#717171',
        fontWeight:'bold',
        fontSize:width*0.025,
        width:'45%',
    },
    fieldInformation:{
        width:'50%',
        // backgroundColor:'aqua',
        fontSize:width*0.023,
        color:'#717171',
        
        marginLeft:'5%'
    },
    actionAnalitycs:{
        height:'30%',
        width:'95%',
        // marginTop:'18%',
        // backgroundColor:'#FFF',
        flexDirection:'row',
        alignItems:'center',
    },
    cantidadContainer:{
        width:'100%',
        height:'20%',
        flexDirection:'row'
    },
    cantidadInfo:{
        marginLeft:'30%',
        color:currentColorMain3,
        fontSize:width*0.03,
        
    }

});