import {Dimensions,View,TextInput,Text,TouchableOpacity,StyleSheet, Touchable} from 'react-native'
import { useMainContex } from '../context/mainContext';
import { CheckIcon, CloseIcon } from '../view/iconosSvg';
import { useEffect, useRef, useState } from 'react';
import { useRegisterContext } from '../context/registerContext';

const {height,width} =Dimensions.get('window')

export function ModalRegister(){
    const {setModalRegisterState}=useMainContex();
    const {cant,setcant,cantidad, setCantidad,codigoToTalla, setCodigoToTalla} = useRegisterContext();
    const [valueCode, setValueCode]=useState('');
    const [valueAnt,setValueAnt]=useState('');
    const input=useRef(null);

    const codigos=[{talla:'2XL/40',codigo:'7705531152947'},//simula la base de datos que se cargara para hacer las consultas de registro
    {talla:'XL/38',codigo:'7705531152930'},
    {talla:'L/36', codigo:'7705531152923'},
    {talla:'M/34', codigo:'7705531152916'}];


    useEffect(()=>{
        input.current.focus();
    },[]);

    const handlerSubmit=()=>{
        // setcant(cant+1);
        let total=1;
        codigoToTalla.forEach(element=>{
            total=total+element.cantidad;

        })
        setcant(total);
        const foundValue=codigos.find((element)=>element.codigo==valueCode);
        const index=codigoToTalla.findIndex(element=>element.talla===foundValue.talla);
        codigoToTalla[index].codigo=valueCode;
        codigoToTalla[index].cantidad=codigoToTalla[index].cantidad+1;
        setCodigoToTalla(codigoToTalla);
        input.current.focus();
        setValueAnt(valueCode);
        setValueCode('')
    }
    return(
        <View style={StyleModalEdit.root}>
            <View style={StyleModalEdit.boxMesagge}>
                <View style={StyleModalEdit.titleContainer}>
                    <Text style={{fontSize:height*0.02,fontWeight:'bold',color:currentColorMain4}}>REGISTRO DE PRODUCTO</Text>
                </View>
                <View style={StyleModalEdit.contentContainer}>                   
                    <View style={StyleModalEdit.fieldContainer}>
                        <View style={StyleModalEdit.subtitlesContainer}>
                            <Text style={StyleModalEdit.subtitle}>ULTIMA TALLA ING</Text>
                        </View>
                        <View style={{justifyContent:'center',flex:1}}>
                            <Text style={{marginLeft:height*0.02}}>XS/32</Text>
                        </View>
                    </View>
                    <View style={StyleModalEdit.fieldContainer}>
                        <View style={StyleModalEdit.subtitlesContainer}>
                            <Text style={StyleModalEdit.subtitle}>ULTIMO CODIGO ING</Text>
                        </View>
                        <View style={{justifyContent:'center',flex:1}}>
                            <Text style={{marginLeft:height*0.02}}>{valueAnt===''?'--- --- --- --- --- --- --- --- ---':valueAnt}</Text>
                        </View>
                    </View>
                    <View style={StyleModalEdit.fieldContainer}>
                        <View style={StyleModalEdit.subtitlesContainer}>
                            <Text style={StyleModalEdit.subtitle}>REGISTRO ACTUAL</Text>
                        </View>
                        <View style={{justifyContent:'center',flex:1}}>
                            <TextInput
                            onChangeText={(text)=>{setValueCode(text);}} 
                            // onChange={handlerSubmit}
                            value={valueCode}
                            ref={input}
                            onBlur={handlerSubmit}></TextInput>
                            <TouchableOpacity></TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={StyleModalEdit.actionContainer}>
                    <TouchableOpacity
                     style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]} 
                     onPress={()=>setModalRegisterState(false)}>
                        <CloseIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]}
                    onPress={()=>input.current.focus()}>
                        <CheckIcon/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain4='#717171';  //color de letra resaltado

const StyleModalEdit=StyleSheet.create({
    root:{
        position:'absolute',
        width,
        height,
        backgroundColor:'#00000069',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesagge:{
        width:'95%',
        height:'25%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
    },
    titleContainer:{
        width:'100%',
        height:'30%',
        justifyContent:'center',
        alignItems:'center'

    },
    contentContainer:{
        width:'100%',
        height:'40%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:currentColorMain1
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
        height:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:height*0.005
    },
    fieldContainer:{
        width:'31%',
        height:'80%',
        // backgroundColor:currentColorMain1,
        margin:height*0.001,
        borderWidth:height*0.002,
        borderColor:currentColorMain2

    },
    subtitlesContainer:{
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:currentColorMain2,
        borderBottomWidth:height*0.002
        
    },
    subtitle:{
        color:currentColorMain4,
        fontWeight:'bold',
        fontSize:height*0.015
    }
})