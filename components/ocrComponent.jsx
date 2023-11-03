import { StyleSheet,Text,View, Dimensions, TouchableOpacity}    from 'react-native';
import { OCRIcon}                                     from '../view/iconosSvg'

import { useEffect, useState }                                  from 'react';
import { usePlantaContext } from '../context/plantaContext';
import { useMainContex } from '../context/mainContext';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio

export function OcrComponent({data}){

    const {modalOcrInfo,setModalOcrInfo,}=usePlantaContext();
    const { setOcrInfoInterfaz }=useMainContex();
    
    const handlerTouch=()=>{
        setModalOcrInfo(true)
        setOcrInfoInterfaz(data);
        console.log(data)
    }
   
    return(
    <TouchableOpacity style={StyleOcr.ocrContainer1} onPress={handlerTouch}>
        <View style={StyleOcr.headerOcr}>
            <View style={StyleOcr.iconContainer}>
                <OCRIcon data={{color:currentColorMain,size:width*0.06}} />
            </View>
            <View style={{width:'70%'}}>
                <View style={StyleOcr.informationContainer}>
                    <Text style={StyleOcr.contentInformation}>{data.date_creation}</Text>
                </View>
                
                <View style={StyleOcr.moduloOcrContainer}>
                    <Text style={StyleOcr.titleHeader}>Modulo:</Text>
                    <Text style={StyleOcr.contentHeader}>{data.mdl_id}</Text>
                </View>
            </View>
        </View>  
        <View style={StyleOcr.tittleOcrContainer}>
                    <Text style={StyleOcr.titleInformation}>OCR:</Text>
                    <Text style={StyleOcr.contentHeader}>{data.ocr_id}</Text>
        </View>
        <View style={StyleOcr.informationContainer}>
            <Text style={StyleOcr.titleInformation}>No.OP:</Text>
            <Text style={StyleOcr.contentInformation}>{data.spe_op_id}</Text>
        </View>
        <View style={StyleOcr.informationContainer}>
            <Text style={StyleOcr.titleInformation}>Hora-I:</Text>
            <Text style={StyleOcr.contentInformation}>{data.start_operation}</Text>
        </View>
        <View style={StyleOcr.informationContainer}>
            <Text style={StyleOcr.titleInformation}>Hora-F:</Text>
            <Text style={StyleOcr.contentInformation}>{data.finish_operation}</Text>
        </View>
    </TouchableOpacity>
    )
}

const StyleOcr=StyleSheet.create({
    ocrContainer1:{
        height:width*0.2,
        width:width*0.2,
        backgroundColor:currentColorMain1,
        borderRadius:height*0.005,
        paddingLeft:'0.8%',
        borderRightWidth:height*0.002,
        borderBottomWidth:height*0.002,
        borderColor:currentColorMain2,
        marginLeft:width*0.016
    },
    ocrContainer2:{
        height:width*0.2,
        width:width*0.2,
        backgroundColor:'#F9EBEA',
        borderRadius:height*0.005,
        paddingLeft:'0.8%',
        borderRightWidth:height*0.002,
        borderBottomWidth:height*0.002,
        borderColor:currentColorMain2,
        marginLeft:width*0.016
    },
    iconContainer:{
        width:'30%',
        height:'100%',
        justifyContent:'center'
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
        fontSize:width*0.022
    },
    contentInformation:{
        color:currentColorMain3,
        fontSize:width*0.022
    },
    titleHeader:{
        width:'70%',
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:width*0.022
    },
    contentHeader:{
        color:currentColorMain3,
        fontSize:width*0.022
    }

});