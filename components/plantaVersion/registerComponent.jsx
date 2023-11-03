import { useEffect, useState } from "react";
import { View, TouchableOpacity,StyleSheet,Dimensions,Text, Alert, Button } from "react-native";
import { usePlantaContext } from "../../context/plantaContext";

const {width,height}=Dimensions.get('window')

export function RegisterComponent({talla}){
    const [cantidadUnidades,setCantidadUnidades]=useState('');
    const [ean,setEan]=useState('');
    const {currentOcr,modalRegister,modalAlert,modalEditUnits,setModalEditUnits}=usePlantaContext();

    useEffect(()=>{
        if(currentOcr.tallaId===talla){
            setCantidadUnidades(currentOcr.cantidadUnidades);
            setEan(currentOcr.ean);
        }
    },[modalRegister,modalAlert,modalEditUnits]);

    const handlerEditButton=()=>{
        if(!ean) Alert.alert('Error al intentar editar la información','Los campos vacios no se pueden editar.');
        else setModalEditUnits(true);
    }
    return(
        <View style={StyleRegisterComponent.row}>
            <View style={StyleRegisterComponent.fieldContainer}>
                <Text style={StyleRegisterComponent.text}>{talla}</Text>
            </View>
            <View style={StyleRegisterComponent.fieldContainer}>
                <Text style={StyleRegisterComponent.text}>{ean?ean:'--- --- ---'}</Text>
            </View>
            <View style={StyleRegisterComponent.fieldContainer}>
                <Text style={StyleRegisterComponent.text}>{cantidadUnidades?cantidadUnidades:'--- --- ---'}</Text>
            </View>
            <View style={StyleRegisterComponent.buttonContainer}>
                <TouchableOpacity  style={StyleRegisterComponent.button} onPress={handlerEditButton}>
                    <Text style={StyleRegisterComponent.labelButton}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro

const StyleRegisterComponent=StyleSheet.create({

    table1:{
        height:'67%',
        width:'95%',
        backgroundColor:currentColorMain1,
        borderWidth:width*0.002,
        borderColor:'#c1c1c1',
        borderRadius:height*0.005,
        alignSelf:'center',
        margin:width*0.025,
    },
    row:{
        flexDirection:'row',
        width:'100%',
        height:'9.2%',
        marginTop:'0.5%'

    },
    fieldContainer:{
        width:'28%',
        marginLeft:'0.5%',
        backgroundColor:'white',
        justifyContent:'center'
    },
    buttonContainer:{
        width:'12%',
        marginLeft:'1%',
        // borderRadius:'20%'
        // backgroundColor:'white'
    },
    button:{
        backgroundColor:currentColorMain,
        height:'100%',
        width:'100%',
        borderRadius:width*0.01,
        justifyContent:'center',
    },
    labelButton:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:width*0.025,
        alignSelf:'center'
    },
    text:{
        fontSize:height*0.015,
        alignSelf:'center',
        color:'#717171',
        fontWeight:'bold'
    }

});