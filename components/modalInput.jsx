import {View, Dimensions, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { useMainContex }                               from '../context/mainContext';
import { CheckIcon, CloseIcon } from '../view/iconosSvg';
import { useEffect, useState } from 'react';

const {height,width}= Dimensions.get('window')

export function ModalInput({title}){
    const { signUpModal,setSignUpModal}=useMainContex();
    const [keyboardType,setKeyBoardType]=useState('');
    const [segurityType,setSegurityType]=useState(false);
    useEffect(()=>{
        if(title.title==='CONTRASEÑA'||title.title==='CONFIRMAR CONTRASEÑA'){
            setSegurityType(true);
        }
        else if(title.title==='CEDULA'||title.title==='NUMERO DE CEDULA'){
            setKeyBoardType('numeric');
        }
        else{
            setSegurityType(false);
            setKeyBoardType('');      
        }
    },[]);

    return(
        <View style={StyleModalInput.root}>
            <View style={StyleModalInput.boxMesage}>
                <View style={StyleModalInput.titleBox}>
                    <Text style={StyleModalInput.tittle}>{title.title}</Text>
                </View>
                <View style={StyleModalInput.inputBox}>
                    <TextInput style={StyleModalInput.input}
                     onBlur={()=>setSignUpModal(false)}
                     secureTextEntry={segurityType}
                     keyboardType={keyboardType}
                     />
                </View>
                <View style={StyleModalInput.actionContainer}>
                    <TouchableOpacity style={[StyleModalInput.buttons]} onPress={()=>setSignUpModal(false)}>
                        <CloseIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[StyleModalInput.buttons]}>
                        <CheckIcon/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

const StyleModalInput=StyleSheet.create({
    root:{
        height,
        width,
        backgroundColor:'#00000045',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesage:{
        width:'90%',
        height:'20%',
        borderRadius:height*0.005,
        backgroundColor:'#FFF',

    },
    titleBox:{
        height:'20%',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    inputBox:{
        height:'40%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderWidth:height*0.002,
        height:'65%',
        borderColor:'#e1e1e1',
        borderRadius:height*0.005,
        width:'80%',
        fontSize:height*0.025,
        color:'#919191',
        paddingLeft:'5%'
    },
    tittle:{
        color:'#a1a1a1',
        fontWeight:'bold',
        fontSize:height*0.02
    },
    actionContainer:{
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    buttons:{
        width:'40%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:height*0.005,
        borderWidth:height*0.002,
        borderColor:currentColorMain1,
        // backgroundColor:currentColorMain1
    },

});