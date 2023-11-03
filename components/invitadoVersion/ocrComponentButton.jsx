import { StyleSheet,Text,View, Dimensions, TouchableOpacity} from 'react-native';
import { PlusCirc } from '../../view/iconosSvg'
import { useEffect, useState } from 'react';

const {width,height}=Dimensions.get('window');

const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio

export function OcrComponentButton(props){
    
    return(
    <TouchableOpacity style={StyleOcr.ocrContainer1} onPress={()=>{}}>
        <PlusCirc/>
        <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:height*0.015}}>Ver más...</Text>
    </TouchableOpacity>
    )
}

const StyleOcr=StyleSheet.create({
    ocrContainer1:{
        height:width*0.2,
        width:width*0.2,
        backgroundColor:currentColorMain1,
        marginRight:'1%',
        marginLeft:'0.5%',
        borderRadius:height*0.005,
        paddingLeft:'1.5%',
        borderRightWidth:height*0.002,
        borderBottomWidth:height*0.002,
        borderColor:currentColorMain2,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:width*0.016
    }
});