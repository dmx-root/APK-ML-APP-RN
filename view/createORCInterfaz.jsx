import { StyleSheet,Text,View, TextInput }  from 'react-native';
import {  Dimensions, TouchableOpacity }    from 'react-native';
import { useMainContex }                    from '../context/mainContext';
import { useState }                         from 'react';

const {width,height}=Dimensions.get('window');

export function CreateORCInterfaz({navigation}){
    const {createOCRState,setCreateOCRState, OCRData, setOCRData}=useMainContex();
    const [op,setOP]=useState('');
    const [lote,setLote]=useState('');
    const [referencia,setReferencia]=useState('');
    const [refColor,setRefColor]=useState('');
    const [modulo,setModulo]=useState('');
    const [NoOperarios,setNoOperarios]=useState('');
    const handlerSubmitOCR=()=>{
        navigation.navigate('MainRegisterInterfaz')
        OCRData.op=op;
        OCRData.lote=lote;
        OCRData.refeColor=refColor;
        OCRData.referencia=referencia;
        OCRData.modulo=modulo;
        OCRData.NumeroOperarios=NoOperarios;
        OCRData.desde=new Date().toLocaleTimeString();
        OCRData.fecha=new Date().toLocaleDateString();
        setOCRData(OCRData);
    }
    return(
        <View style={StyleInterfazOCR.viewContainer}>
            <View style={StyleInterfazOCR.window}>
                <View style={StyleInterfazOCR.frame}>
                    <View style={StyleInterfazOCR.fieldContainer}>
                        <View style={StyleInterfazOCR.fieldLabelContainer}>
                            <Text style={StyleInterfazOCR.content}>OP</Text>
                        </View>
                        <View style={StyleInterfazOCR.fieldinputContainer}>
                            <TextInput style={StyleInterfazOCR.input} onChangeText={(text)=>{setOP(text)}}/>
                        </View>
                    </View>
                    <View style={StyleInterfazOCR.fieldContainer}>
                        <View style={StyleInterfazOCR.fieldLabelContainer}>
                            <Text style={StyleInterfazOCR.content}>LOTE</Text>
                        </View>
                        <View style={StyleInterfazOCR.fieldinputContainer}>
                            <TextInput style={StyleInterfazOCR.input} onChangeText={(text)=>{setLote(text)}}/>
                        </View>
                    </View>  
                    <View style={StyleInterfazOCR.fieldContainer}>
                        <View style={StyleInterfazOCR.fieldLabelContainer}>
                            <Text style={StyleInterfazOCR.content}>REFERENCIA</Text>
                        </View>
                        <View style={StyleInterfazOCR.fieldinputContainer}>
                            <TextInput style={StyleInterfazOCR.input}  onChangeText={(text)=>{setReferencia(text)}}/>
                        </View>
                    </View>
                    <View style={StyleInterfazOCR.fieldContainer}>
                        <View style={StyleInterfazOCR.fieldLabelContainer}>
                            <Text style={StyleInterfazOCR.content}>REF COLOR</Text>
                        </View>
                        <View style={StyleInterfazOCR.fieldinputContainer}>
                            <TextInput style={StyleInterfazOCR.input}  onChangeText={(text)=>{setRefColor(text)}}/>
                        </View>
                    </View>
                    <View style={StyleInterfazOCR.fieldContainer}>
                        <View style={StyleInterfazOCR.fieldLabelContainer}>
                            <Text style={StyleInterfazOCR.content}>MODULO</Text>
                        </View>
                        <View style={StyleInterfazOCR.fieldinputContainer}>
                            <TextInput style={StyleInterfazOCR.input}  onChangeText={(text)=>{setModulo(text)}}/>
                        </View>
                    </View>
                    <View style={StyleInterfazOCR.fieldContainer}>
                        <View style={StyleInterfazOCR.fieldLabelContainer}>
                            <Text style={StyleInterfazOCR.content}>No. OPERARIOS</Text>
                        </View>
                        <View style={StyleInterfazOCR.fieldinputContainer}>
                            <TextInput style={StyleInterfazOCR.input}  onChangeText={(text)=>{setNoOperarios(text)}}/>
                        </View>
                    </View>
                </View>
                    <View style={StyleInterfazOCR.actionContainer}>
                        <TouchableOpacity style={StyleInterfazOCR.actionButton1} onPress={()=>{setCreateOCRState(!createOCRState)}}>
                            <Text style={{color:currentColorMain,fontWeight:'bold'}}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleInterfazOCR.actionButton2} onPress={handlerSubmitOCR}>
                            <Text style={{color:'#FFF',fontWeight:'bold'}}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro

const StyleInterfazOCR=StyleSheet.create({
    viewContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:50,
        height,
        width,
        backgroundColor:'#00000080'
    },
    window:{
        height:height*0.55,
        width:width*0.80,
        backgroundColor:'#FFF',
        // backgroundColor:currentColorMain1,
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    frame:{
        backgroundColor:currentColorMain1,
        width:'90%',
        height:'70%',
        paddingTop:'2%',
        borderRadius:height*0.005
    },
    fieldContainer:{
        height:'16%',
        width:'100%',
        flexDirection:'row',
    },
    fieldLabelContainer:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:'5%'
    },
    fieldinputContainer:{
        width:'70%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionContainer:{
        height:'25%',
        width:'100%',
        alignItems:'center',
        paddingTop:'5%'
    },
    input:{
        // backgroundColor:'aqua',
        width:'85%',
        height:'80%',
        borderRadius:height*0.003,
        // borderWidth:height*0.001,
        // borderColor:currentColorMain2
        backgroundColor:'#FFF'
    },
    actionButton1:{
        width:'90%',
        height:'45%',
        backgroundColor:currentColorMain1,
        justifyContent:'center',
        alignItems:'center'
    },
    actionButton2:{
        marginTop:'1%',
        width:'90%',
        height:'45%',
        backgroundColor:currentColorMain,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        fontWeight:'bold',
        color:currentColorMain
    },
    closeButton:{
        margin:'1%',
        position:'absolute',
        top:0,
        right:0,
        borderRadius:height*0.05,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF',
        width:height*0.025,
        height:height*0.025,
        elevation:height*0.005
    },
    contentClose:{
        // fontWeight:'bold',
        color:'#aaa',
        fontSize:height*0.02
    }

})