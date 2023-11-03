import {Dimensions,View,TextInput,Text,TouchableOpacity,StyleSheet, Alert, TouchableWithoutFeedback}  from 'react-native'
import { useEffect, useRef, useState }                                      from 'react';
import AsyncStorage                                                         from '@react-native-async-storage/async-storage';
import { usePlantaContext } from '../../context/plantaContext';

const {height,width} =Dimensions.get('window')

export function ModalRegister(){

    const {setModalRegister,detalleOpList,currentOcr,setCurrentOcr}=usePlantaContext();
    const input=useRef(null);
    const [valorActualEan,setValorActualEan]=useState('');
    const [valorAnteriorEan, setValorAnteriorEan]=useState('');
    const [valorAnteriorTalla,setValorAnteriorTalla]=useState('');
    const [stateCompleted,setStateCompleted]=useState(false);
    
    const [contadorCantidad,setContadorCantidad]=useState(0);

    useEffect(()=>{
        input.current.focus();
        setContadorCantidad(currentOcr.cantidadUnidades);
        // console.log(currentOcr);
        // console.log(detalleOpList[0])
    },[]);
    const handlerSubmit=()=>{
        input.current.focus();
        if(currentOcr.ean){//si ya hay informacion almacenada en la ocr se establecen los valores de la ocr
            setValorAnteriorEan(currentOcr.ean);
            setValorAnteriorTalla(currentOcr.tallaId);
            setContadorCantidad(currentOcr.cantidadUnidades);
        }
        if(!currentOcr.cantidadUnidades&&!currentOcr.ean){   //
            const detalleFiltrado=detalleOpList.filter(element=>element.ean_id===valorActualEan);
            // console.log()
            console.log(detalleFiltrado)
            if(detalleFiltrado.length!==0){

                currentOcr.colorId=detalleFiltrado[0].color_id;
                currentOcr.tallaId=detalleFiltrado[0].tll_id;
                currentOcr.colorLabel=detalleFiltrado[0].color_label;
                currentOcr.ean=detalleFiltrado[0].ean_id;
                currentOcr.cantidadUnidades=currentOcr.cantidadUnidades+1;

                setCurrentOcr(currentOcr);
                setValorAnteriorEan(detalleFiltrado[0].ean_id);
                setValorAnteriorTalla(detalleFiltrado[0].tll_id);
                setContadorCantidad(contadorCantidad+1);
            }else{
                Alert.alert('¡Error en el código de barras!','El código de barras  que intenta leer no pertenece a la OP seleccionada');
            }
        }else{
            if(valorActualEan===currentOcr.ean){
                currentOcr.cantidadUnidades=currentOcr.cantidadUnidades+1;
                setContadorCantidad(contadorCantidad+1);
                setCurrentOcr(currentOcr);
            }
            else{
                Alert.alert('¡Error en el código de barras!','El código de barras  que intenta leer no pertenece a la OP seleccionada')
            }
        }
        setValorActualEan('');
    }
    const handlerInformation=(text)=>{
        // console.log(text)
        setValorActualEan(text)
        // text.length===currentOcr.ean.length?setStateCompleted(true):setStateCompleted(false);
    }
    
    return(
            <View style={StyleModalEdit.root}>
                    <View style={StyleModalEdit.boxMesagge}>
                        <View style={StyleModalEdit.titleContainer}>
                            <Text style={{fontSize:width*0.032,fontWeight:'bold',color:currentColorMain4}}>REGISTRO DE PRODUCTO</Text>
                        </View>
                        <View style={StyleModalEdit.containerField}>
                            <View style={StyleModalEdit.titleFieldContainer}>
                                <Text style={StyleModalEdit.fontStyle}>COLOR</Text>
                            </View>
                            <View style={StyleModalEdit.contentFieldContainer}>
                                <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{currentOcr.colorLabel?currentOcr.colorLabel:'--- --- ---'}</Text>
                            </View>
                            <View style={StyleModalEdit.titleFieldContainer}>
                                <Text style={StyleModalEdit.fontStyle}>EAN</Text>
                            </View>
                            <View style={StyleModalEdit.contentFieldContainer}>
                                <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{currentOcr.ean?currentOcr.ean:'--- --- ---'}</Text>
                            </View>
                        </View>
                        <View style={StyleModalEdit.containerField}>
                            <View style={StyleModalEdit.titleFieldContainer}>
                                <Text style={StyleModalEdit.fontStyle}>TALLA</Text>
                            </View>
                            <View style={StyleModalEdit.contentFieldContainer}>
                                <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{currentOcr.tallaId?currentOcr.tallaId:'--- --- ---'}</Text>
                            </View>
                            <View style={StyleModalEdit.titleFieldContainer}>
                                <Text style={StyleModalEdit.fontStyle}>UNIDADES</Text>
                            </View>
                            <View style={StyleModalEdit.contentFieldContainer}>
                                <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{currentOcr.cantidadUnidades?contadorCantidad:'--- --- ---'}</Text>
                            </View>
                        </View>
                        <View style={StyleModalEdit.containerInput}>    
                            <View style={StyleModalEdit.titleEanContainer}>
                                <Text style={StyleModalEdit.fontStyle}>REGISTRO EAN</Text>
                            </View>
                            <View style={StyleModalEdit.contentInputContainer}>
                                <TextInput
                                onChangeText={handlerInformation}
                                style={{textAlign:'center',fontSize:height*0.018,color:'#777'}}
                                value={valorActualEan}
                                ref={input}
                                onBlur={handlerSubmit}
                                editable={true}
                                ></TextInput>
                                <TouchableOpacity></TouchableOpacity>
                            </View>
                        </View>
                        <View style={StyleModalEdit.actionContainer}>
                            <TouchableOpacity 
                            style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]}
                            onPress={()=>{setModalRegister(false)}}>
                                <Text style={{fontSize:width*0.03,fontWeight:'bold',color:currentColorMain}}>CERRAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
    )
}
const currentColorMain='#44329C';
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain4='#717171';  //color de letra resaltado

const StyleModalEdit=StyleSheet.create({
    root:{
        position:'absolute',
        width,
        height,
        backgroundColor:'#00000089',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesagge:{
        width:'95%',
        height:'40%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
    },
    titleContainer:{
        width:'100%',
        height:'25%',
        justifyContent:'center',
        alignItems:'center'
    },
    containerInput:{
        height:'25%',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'aqua',
        // marginTop:'3%',
        // justifyContent:'center',
        // backgroundColor:currentColorMain2,
        // borderWidth:height*0.002,
        // borderColor:currentColorMain2
    },
   
    actionContainer:{
        width:'100%',
        height:'20%',
        // backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        // marginTop:'5%'
    },
    buttons:{
        width:'94%',
        height:'60%',
        justifyContent:'center',
        alignItems:'center',
        // marginRight:height*0.005
    },
    containerField:{
        marginTop:height*0.0025,
        flexDirection:'row',
        height:'12%',
        alignItems:'center',
        alignSelf:'center'
    },
    fontStyle:{
        fontSize:width*0.026,
        fontWeight:'bold',
        color:currentColorMain4
    },
    titleFieldContainer:{
        height:'100%',
        width:'20%',
        justifyContent:'center',
        paddingLeft:'2%',
        // backgroundColor:currentColorMain2,
        // marginLeft:'3%',
        borderWidth:height*0.002,
        borderColor:currentColorMain2
        
    },
    contentInputContainer:{
        // marginTop:height*0.0025,
        flexDirection:'row',
        height:'50%',
        width:'47%',
        alignItems:'center',
        // marginLeft:'3%',
        backgroundColor:'#FFF',
        borderWidth:height*0.002,
        borderColor:currentColorMain2,
        // alignSelf:'center',
        justifyContent:'center'
    },
    titleEanContainer:{
        height:'50%',
        // marginTop:'2%',
        backgroundColor:'#FFF',
        width:'47%',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'5%',
        marginLeft:'3%',
        borderWidth:height*0.002,
        borderColor:currentColorMain2
        
    },
    contentFieldContainer:{
        height:'100%',
        width:'27%',
        justifyContent:'center',
        borderWidth:height*0.002,
        alignItems:'center',
        borderColor:currentColorMain2
        
    }

})