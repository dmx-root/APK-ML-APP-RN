import { StyleSheet,Text,View, TextInput,ActivityIndicator, TouchableWithoutFeedback, Alert }      from 'react-native';
import { Picker }                                                                           from '@react-native-picker/picker'
import {  Dimensions, TouchableOpacity }                                                    from 'react-native';
import { useEffect, useState }                                                              from 'react';
import   AsyncStorage                                                                       from '@react-native-async-storage/async-storage';
import {usePlantaContext}                                                                   from '../../context/plantaContext';
import {QueryDataOp}                                                                        from '../../api/apiConsults.js'
import { useMainContex }                                                                    from '../../context/mainContext';
import { LoadingInterfaz } from '../../view/loadingInterfaz';

const {width,height}=Dimensions.get('window');

export function ModalCreateOcr({navigation}){
    const {setModalCreateOcrState,currentOcr,
        setCurrentOcr,setCurrentOp,setDetalletOpList,modulosList}= usePlantaContext();

    const {DNS,userToken,currentUser} =useMainContex();
    const [newOp,setNewOp]=useState('');
    const [newTypeOp,setNewTypeOp]=useState('');
    const [newModulo,setNewModulo]=useState('');
    const [loadig,setLoading]=useState(false);

    const ApiQueryOp=new QueryDataOp(DNS,'/api/ml/op/openop/',userToken);
    
    useEffect(()=>{
        const setedOcr={
            ocrId:null,
            colorId:null,
            colorLabel:null,
            tallaId:null,
            tallaLabel:null,
            moduloId:null,
            ean:null,
            cantidadUnidades:0,
            startTime:null,
            finishTime:null,
            dete:null,
            motivoParada:null
        }
        setCurrentOcr(setedOcr);
    },[]);

    async function loadInformationOp(data){
        try {
            const response=await ApiQueryOp.openOp(data);
            // console.log(response.data)
            setDetalletOpList(response.data.data);

            currentOcr.moduloId=newModulo;
            currentOcr.startTime=new Date().toLocaleTimeString();
            currentOcr.dete=new Date().toDateString();

            setCurrentOcr(currentOcr);

            const newOp={ 
                op:response.data.data[0].op,
                reference:response.data.data[0].ref,
                cantOcr:response.data.data[0].cant_ocr,
                cantPlanned:response.data.data[0].cant_planned_op,
                cantCompleted:response.data.data[0].cant_completed_op,
            };

            setCurrentOp(newOp);
            setModalCreateOcrState(false);
            setLoading(false);
            navigation.navigate('RegisterInterfaz');
            
        } catch (error) {
            console.log(error);
            setModalCreateOcrState(false);
            Alert.alert('Error de servidor','Hubo un problema a la hora de intentar cargar los datos, intentelo más tarde.')
        }
    };

    const handlerSubmit=()=>{
        if(newOp&&newTypeOp&&newModulo){
            setLoading(true);
            const opId=newTypeOp.toUpperCase()+newOp;
            loadInformationOp({op:opId,openById:currentUser.user_document_id});
            
            const newCurrentOp={ 
                op:opId,
                reference:null,
                cantOcr:null,
                cantPlanned:null,
                cantCompleted:null,
            };
            setCurrentOp(newCurrentOp);
        }
        else{
            Alert.alert('Campos vacios','Asegúrese de llenar todos los campos');
        }
    }
    if(loadig){
        return(
        <LoadingInterfaz message={'Cargando información...'}/>
        )
    }
    return(
    <TouchableWithoutFeedback onPress={()=>{setModalCreateOcrState(false)}}>
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
                                {/* <TextInput keyboardType='numeric' style={StyleInterfazOCR.input} onChangeText={(text)=>{setNewModulo(text)} } placeholder='#' /> */}
                                <Picker style={StyleInterfazOCR.input} selectedValue={newModulo} onValueChange={(itemValue, itemIndex) =>{setNewModulo(itemValue)}}>
                                    <Picker.Item label="..."    value="" />
                                    {modulosList.map(element=><Picker.Item style={{alignSelf:'center',color:currentColorMain4,fontSize:width*0.03}} label={element.mdl_label}    value={element.mdl_id} key={element.mdl_id} />)}
                                </Picker>
                            </View>
                            {/* <View style={StyleInterfazOCR.fieldinputContainer}>
                                <TouchableOpacity style={StyleInterfazOCR.input}  onPress={()=>{}}>
                                    <Text style={{justifyContent:'center', alignItems:'center',fontSize:width*0.03,color:'#777'}}>{}</Text>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                    </View>
                        <View style={StyleInterfazOCR.actionContainer}>
                            <TouchableOpacity style={StyleInterfazOCR.actionButton1} onPress={()=>{setModalCreateOcrState(false)}}>
                                <Text style={{color:currentColorMain,fontWeight:'bold',fontSize:width*0.023}}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleInterfazOCR.actionButton2} onPress={handlerSubmit}>
                                <Text style={{color:'#FFF',fontWeight:'bold',fontSize:width*0.023}}>Registrar</Text>
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
        width:width*0.70,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    frame:{
        backgroundColor:currentColorMain1,
        width:'90%',
        height:'58%',
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
        height:'35%',
        width:'100%',
        alignItems:'center',
        paddingTop:'5%'
    },
    input:{
        width:'85%',
        height:'80%',
        borderRadius:height*0.003,
        backgroundColor:'#FFF',
        fontSize:width*0.025,
        alignSelf:'center', 
        color:currentColorMain3,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
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