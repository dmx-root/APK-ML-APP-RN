import {Dimensions,View,TextInput,Text,TouchableOpacity,StyleSheet} from 'react-native'
import { useMainContex }                                            from '../context/mainContext';
import { CheckIcon, CloseIcon }                                     from '../view/iconosSvg';
import { useEffect, useState }                                                 from 'react';
import { useRegisterContext } from '../context/registerContext';

const {height,width} =Dimensions.get('window')

export function ModalEdit(){
    useEffect(()=>{
    setValueState(objectProduct.cantidad)
    },[])
    const {setModalEditState}=useMainContex();
    const[valueState,setValueState]=useState('')
    const {codigoToTalla, setCodigoToTalla,tallaState,cant, setcant}= useRegisterContext();
    const objectProduct=codigoToTalla.find((element)=>element.talla===tallaState);
    const index=codigoToTalla.findIndex((element)=>element.talla===tallaState);
    const handlerSend=()=>{
        codigoToTalla[index].cantidad=valueState;
        setCodigoToTalla(codigoToTalla);
        setModalEditState(false);
        let total=0;
        codigoToTalla.forEach((element)=>{
          total=total+parseInt(element.cantidad);
        });
        setcant(total);
    }
    return(
        <View style={StyleModalEdit.root}>
            <View style={StyleModalEdit.boxMesagge}>
                <View style={StyleModalEdit.titleContainer}>
                    <Text style={{fontSize:height*0.02,fontWeight:'bold',color:currentColorMain4}}>EDITAR CANTIDAD DE PRODUCTOS</Text>
                </View>
                <View style={StyleModalEdit.contentContainer}>                   
                    <View style={StyleModalEdit.fieldContainer}>
                        <View style={StyleModalEdit.subtitlesContainer}>
                            <Text style={StyleModalEdit.subtitle}>TALLA</Text>
                        </View>
                        <View style={{justifyContent:'center',flex:1}}>
                            <Text>{objectProduct.talla}</Text>
                        </View>
                    </View>
                    <View style={StyleModalEdit.fieldContainer}>
                        <View style={StyleModalEdit.subtitlesContainer}>
                            <Text style={StyleModalEdit.subtitle}>CODIGO</Text>
                        </View>
                        <View style={{justifyContent:'center',flex:1}}>
                            <Text>{objectProduct.codigo}</Text>
                        </View>
                    </View>
                    <View style={StyleModalEdit.fieldContainer}>
                        <View style={StyleModalEdit.subtitlesContainer}>
                            <Text style={StyleModalEdit.subtitle}>CANTIDAD</Text>
                        </View>
                        <View style={{justifyContent:'center',flex:1}}>
                            <TextInput 
                            autoFocus={true} value={valueState}
                             onChangeText={(text)=>{setValueState(text)}}
                             keyboardType='numeric'
                            ></TextInput>
                        </View>
                    </View>
                </View>
                <View style={StyleModalEdit.actionContainer}>
                    <TouchableOpacity style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]} onPress={()=>setModalEditState(false)}>
                        <CloseIcon/>
                        {/* <Text style={{fontSize:height*0.015, fontWeight:'bold',color:currentColorMain}}>Cancelar</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]} onPress={handlerSend}>
                        {/* <Text style={{fontSize:height*0.015, fontWeight:'bold',color:'#FFF'}}>Modificar</Text> */}
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