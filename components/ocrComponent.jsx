import { StyleSheet,Text,View, Dimensions, TouchableOpacity} from 'react-native';
import { OcrIcon } from '../view/iconosSvg'
import { useMainContex } from '../context/mainContext';
const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

export function OcrComponent(){
    const {infoOCRState, setInfoOCRState}=useMainContex();
    return(
    <TouchableOpacity style={StyleOcr.ocrContainer} onPress={()=>{setInfoOCRState(!infoOCRState)}}>
        <View style={StyleOcr.headerOcr}>
            <View style={StyleOcr.iconContainer}>
                <OcrIcon/>
            </View>
            <View style={{width:'70%'}}>
                <View style={StyleOcr.tittleOcrContainer}>
                    <Text style={StyleOcr.titleHeader}>OCR:</Text>
                    <Text style={StyleOcr.contentHeader}>x</Text>
                </View>
                <View style={StyleOcr.moduloOcrContainer}>
                    <Text style={StyleOcr.titleHeader}>Modulo:</Text>
                    <Text style={StyleOcr.contentHeader}>xx</Text>
                </View>
            </View>
        </View>

        <View style={StyleOcr.informationContainer}>
            <Text style={StyleOcr.titleInformation}>Fecha:</Text>
            <Text style={StyleOcr.contentInformation}>xx/xx/xx</Text>
        </View>
        <View style={StyleOcr.informationContainer}>
            <Text style={StyleOcr.titleInformation}>No.OP:</Text>
            <Text style={StyleOcr.contentInformation}>xxx</Text>
        </View>
        <View style={StyleOcr.informationContainer}>
            <Text style={StyleOcr.titleInformation}>Hora-I:</Text>
            <Text style={StyleOcr.contentInformation}>xx-xx-xx</Text>
        </View>
        <View style={StyleOcr.informationContainer}>
            <Text style={StyleOcr.titleInformation}>Hora-F:</Text>
            <Text style={StyleOcr.contentInformation}>xx-xx-xx</Text>
        </View>
    </TouchableOpacity>
    )
}

const StyleOcr=StyleSheet.create({
    ocrContainer:{
        height:height*0.13,
        width:height*0.13,
        backgroundColor:currentColorMain1,
        marginRight:'1%',
        marginLeft:'0.5%',
        borderRadius:height*0.005,
        paddingLeft:'1.5%',
        borderRightWidth:height*0.002,
        borderBottomWidth:height*0.002,
        borderColor:currentColorMain2
    },
    iconContainer:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        // alignItems:'center'
        // backgroundColor:'aqua'
    },
    headerOcr:{
        flexDirection:'row',
        height:'30%', 
        marginBottom:'2%'       
    },
    tittleOcrContainer:{
        flexDirection:'row',

    },
    moduloOcrContainer:{
        flexDirection:'row',  
    },
    informationContainer:{
        flexDirection:'row', 
    },
    titleInformation:{
        color:currentColorMain,
        fontWeight:'bold',
        width:'45%',
    },
    contentInformation:{
        color:currentColorMain3,
    },
    titleHeader:{
        width:'70%',
        color:currentColorMain,
        fontWeight:'bold'
    },
    contentHeader:{
        color:currentColorMain3
    }

});