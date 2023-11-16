import { StyleSheet,Text,View, TextInput,ActivityIndicator, TouchableWithoutFeedback, Alert }      from 'react-native';
import { Picker }                                                                           from '@react-native-picker/picker'
import {  Dimensions, TouchableOpacity }                                                    from 'react-native';
import { useEffect, useState }                                                              from 'react';
import {usePlantaContext}                                                                   from '../../context/plantaContext';
import { useMainContex }                                                                    from '../../context/mainContext';

import { LoadingInterfaz } from '../../view/loadingInterfaz';
import { QueryDataOp } from '../../api/apiConsults';

const {width,height}=Dimensions.get('window');

export function ModalRegisterSegInformation({navigation}){

    const {modalRegisterInfoSegundas,setRegisterInfoSegundas,modulosList,setRegisterSegundas,
        setsegList,setInformationSegundas}= usePlantaContext();
    
    const {DNS,userToken,currentUser} =useMainContex();
    const [newOp,setNewOp]=useState('');
    const [newTypeOp,setNewTypeOp]=useState('');
    const [newModulo,setNewModulo]=useState('');
    const [loadig,setLoading]=useState(false);

    const ApiQueryOp= new QueryDataOp(DNS,'/api/ml/op/complete/',userToken);

    async function loadOpInformation(op){
        try {
            const response=await ApiQueryOp.getOpCompleted(op);
            
            if(response.data.statusCodeApi===1){
                setLoading(false);
                setRegisterInfoSegundas(false);
                setRegisterSegundas(true);
                setsegList(response.data.data);
            }
            else if(response.data.statusCodeApi===0){
                setLoading(false);
                Alert.alert('Error de consulta',response.data.statusMessageApi);
            }
            else if (response.data.statusCodeApi===-1){
                setLoading(false);
                Alert.alert('Error de procedimiento',response.data.statusMessageApi);
            }
            
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Hubo un error a la hora de tratar de cargar la información');
        }
    }
    const handlerSubmitInformation=()=>{
        if(newTypeOp&&newOp&&newModulo){
            setNewModulo('');
            setNewOp('');
            setNewTypeOp('');
            setLoading(true);
            const informationSegundas={
                op:newTypeOp.toUpperCase()+newOp,
                modulo:newModulo
            }
            setInformationSegundas(informationSegundas);
            loadOpInformation(informationSegundas.op);
            
        }
        else{
            Alert.alert('Campos vacios','Asegurese de llenar todos los campos');
        }
    }

    if(loadig){
        return(
        <LoadingInterfaz message={'Cargando información...'}/>
        )
    }
    return(
    <TouchableWithoutFeedback onPress={()=>{setRegisterInfoSegundas(false)}}>
        <View style={StyleInterfazOCR.viewContainer}>
            <TouchableWithoutFeedback onPress={()=>{}}>
                <View style={StyleInterfazOCR.window}>
                    <View style={StyleInterfazOCR.frame}>
                        <View style={StyleInterfazOCR.fieldContainer}>
                            <View style={StyleInterfazOCR.fieldLabelContainer}>
                                <Text style={StyleInterfazOCR.content}>OP</Text>
                            </View>
                            <View style={StyleInterfazOCR.fieldinputContainer}>
                                <TextInput keyboardType='numeric' style={StyleInterfazOCR.input} onChangeText={(text)=>{setNewOp(text)} } placeholder='* * * *'/>
                            </View>
                        </View>  
                        <View style={StyleInterfazOCR.fieldContainer}>
                            <View style={StyleInterfazOCR.fieldLabelContainer}>
                                <Text style={StyleInterfazOCR.content}>TIPO DE OP</Text>
                            </View>
                            <View style={StyleInterfazOCR.fieldinputContainer}>
                                <Picker style={StyleInterfazOCR.input} selectedValue={newTypeOp} t onValueChange={(itemValue, itemIndex) =>{setNewTypeOp(itemValue)}}>
                                    <Picker.Item label="..."    value="" />
                                    <Picker.Item style={{alignSelf:'center',color:currentColorMain4,fontSize:width*0.03}} label="PANTY"        value="MOP" />
                                    <Picker.Item style={{alignSelf:'center',color:currentColorMain4,fontSize:width*0.03}} label="BRASIER"        value="MOB" />
                                </Picker>
                            </View>
                        </View>  
                        <View style={StyleInterfazOCR.fieldContainer}>
                            <View style={StyleInterfazOCR.fieldLabelContainer}>
                                <Text style={StyleInterfazOCR.content}>MODULO</Text>
                            </View>
                            <View style={StyleInterfazOCR.fieldinputContainer}>
                                <Picker style={StyleInterfazOCR.input} selectedValue={newModulo} onValueChange={(itemValue, itemIndex) =>{setNewModulo(itemValue)}}>
                                    <Picker.Item label="..."    value="" />
                                    {modulosList.map(element=><Picker.Item style={{alignSelf:'center',color:currentColorMain4,fontSize:width*0.03}} label={element.mdl_label}    value={element.mdl_id} key={element.mdl_id} />)}
                                </Picker>
                            </View>
                        </View>
                    </View>
                        <View style={StyleInterfazOCR.actionContainer}>
                            <TouchableOpacity style={StyleInterfazOCR.actionButton1} onPress={()=>{}}>
                                <Text style={{color:currentColorMain,fontWeight:'bold',fontSize:width*0.03}}>{'<'} Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleInterfazOCR.actionButton2} onPress={handlerSubmitInformation}>
                                <Text style={{color:'#FFF',fontWeight:'bold',fontSize:width*0.03}}>Ingresar {'>'}</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </TouchableWithoutFeedback>
    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain3='#717171';
const currentColorMain4='#717171';  //color de letra resaltado

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
        height:height*0.40,
        width:width*0.75,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    frame:{
        backgroundColor:currentColorMain1,
        width:'90%',
        height:'65%',
        paddingTop:'2%',
        borderRadius:height*0.005,
        justifyContent:'space-evenly'
    },
    fieldContainer:{
        height:'26%',
        width:'100%',
        flexDirection:'row',
    },
    fieldOP:{
        height:'16%',
        width:'100%',
        flexDirection:'row',
    },
    fieldContainerOP:{
        height:'100%',
        width:'60%',
        flexDirection:'row'
    },

    fieldLabelContainer:{
        width:'35%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:'5%'
    },
    fieldinputContainer:{
        width:'65%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    fieldLabelContainerOP:{
        width:'47%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:'5%'
    },
    fieldinputContainerOP:{
        width:'53%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },

    actionContainer:{
        height:'25%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:'5%',
        flexDirection:'row'
    },
    input:{
        width:'85%',
        height:'80%',
        borderRadius:height*0.003,
        backgroundColor:'#FFF',
        fontSize:width*0.03,
        alignSelf:'center', 
        color:currentColorMain3,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
    actionButton1:{
        width:'45%',
        height:'70%',
        backgroundColor:currentColorMain1,
        justifyContent:'center',
        alignItems:'center'
    },
    actionButton2:{
        marginLeft:'1%',
        width:'45%',
        height:'70%',
        backgroundColor:currentColorMain,
        justifyContent:'center',
        alignItems:'center'
    },
    content:{
        fontWeight:'bold',
        color:currentColorMain,
        fontSize:width*0.023
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
        color:'#aaa',
        fontSize:height*0.02
    }

});