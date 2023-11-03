import {Dimensions,View,TextInput,Text,TouchableOpacity,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { CloseIcon,CheckIcon}                                     from '../iconosSvg.jsx'
import { usePlantaContext } from '../../context/plantaContext.jsx';
import { useEffect, useState } from 'react';

const {height,width} =Dimensions.get('window')

export function ModalEditUnits(){
    const{setModalEditUnits,currentOcr,setCurrentOcr} = usePlantaContext();
    const [newUnitsCant,setNewUnitsCant] =useState(0);
    useEffect(()=>{
        setNewUnitsCant(currentOcr.cantidadUnidades);
    },[]);

    const handlerCloseButton=()=>{
        setModalEditUnits(false);
    }
    const handlerSubmitInformation=()=>{
        currentOcr.cantidadUnidades=newUnitsCant;
        setCurrentOcr(currentOcr);
        setModalEditUnits(false);
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{}}>
            <View style={StyleModalEdit.root}>
                <TouchableWithoutFeedback onPress={()=>{}}>
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
                                    <Text style={{textAlign:'center',fontSize:height*0.018}}>{currentOcr.tallaLabel}</Text>
                                </View>
                            </View>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>CODIGO</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1}}>
                                    <Text style={{textAlign:'center',fontSize:height*0.018}}>{currentOcr.ean}</Text>
                                </View>
                            </View>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>CANTIDAD</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1}}>
                                    <TextInput 
                                    autoFocus={true} 
                                    onChangeText={(text)=>{setNewUnitsCant(parseInt(text))}}
                                    // value={currentOcr.cantidadUnidades.toString()}
                                    keyboardType='numeric'
                                    style={{textAlign:'center',fontSize:height*0.018}}
                                    ></TextInput>
                                </View>
                            </View>
                        </View>
                        <View style={StyleModalEdit.actionContainer}>
                            <TouchableOpacity style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]} onPress={handlerCloseButton}>
                                <CloseIcon/>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]} onPress={handlerSubmitInformation}>
                                <CheckIcon/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
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
