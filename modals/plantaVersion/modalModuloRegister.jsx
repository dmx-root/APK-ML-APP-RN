import { Picker }                                                                           from '@react-native-picker/picker';
import {View, Dimensions, Text,StyleSheet, TouchableOpacity,TouchableWithoutFeedback, Alert}       from 'react-native'
import { useState }                                                                         from 'react';
import { usePlantaContext }                                                                 from '../../context/plantaContext';
import {QueryDataModulo} from '../../api/apiConsults'
import { useMainContex } from '../../context/mainContext';
import { LoadingComponent } from '../../components/loadingComponent';

const {height,width}= Dimensions.get('window')

export function ModalModuloRegister(){

    const {DNS} = useMainContex();
    const {modulosList,setRegisterModulo,setEmployeeList,setModalRegisterEmployees}= usePlantaContext();
    const [newModulo,setNewModulo]=useState('');
    const [loading, setLoading]=useState(false);
    const ApiQueryModulo=new QueryDataModulo(DNS,'/api/ml/modulo/employee/get/');

    const handlerSubmit=()=>{
        if(newModulo){
            setLoading(true);
            loadInformation()
        }
        else{
            Alert.alert('Campos vacíos','Asegúrese de seleccionar el módulo');
        }
    }
    
    async function loadInformation(){
        try {

            const response=await ApiQueryModulo.getEmployeesByModulo(newModulo);
            if(response.data.statusCodeApi===0){
                Alert.alert('Error de consulta',response.data.statusMessageApi);
            }else if(response.data.statusCodeApi===-1){

                Alert.alert('Error de procedimento',response.data.statusMessageApi);
            }else if(response.data.statusCodeApi===1){
                setRegisterModulo(false);
                setModalRegisterEmployees(true);
                setEmployeeList(response.data.data);
            }
            setLoading(false);
            
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Hubo un Problema a la hora de intentar cargar los datos, inténtelo más tarde');
        }
    }
    if(loading){
        return(
        
        <TouchableWithoutFeedback onPress={()=>{}}>
            <View style={StyleInterfazOCR.viewContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInterfazOCR.window}>
                        <LoadingComponent message={'Cargando información...'}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
        )
    }
  
    return(
        
        <TouchableWithoutFeedback onPress={()=>{}}>
        <View style={StyleInterfazOCR.viewContainer}>
            <TouchableWithoutFeedback onPress={()=>{}}>
                <View style={StyleInterfazOCR.window}>
                    <View style={StyleInterfazOCR.frame}>  
                        <View style={StyleInterfazOCR.fieldContainer}>
                            <View style={StyleInterfazOCR.fieldLabelContainer}>
                                <Text style={StyleInterfazOCR.content}>SELEC. MÓDULO</Text>
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
                            <TouchableOpacity style={StyleInterfazOCR.actionButton1} onPress={()=>setRegisterModulo(false)}>
                                <Text style={{color:currentColorMain,fontWeight:'bold',fontSize:width*0.025}} >Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleInterfazOCR.actionButton2} onPress={handlerSubmit}>
                                <Text style={{color:'#FFF',fontWeight:'bold',fontSize:width*0.025}}>Registrar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </TouchableWithoutFeedback>
    )
}

const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain='#44329C';   //azul oscuro
const currentColorMain2='#e8e8e8';  //gris muy claro
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
        height:height*0.30,
        width:width*0.70,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    frame:{
        backgroundColor:currentColorMain1,
        width:'90%',
        height:'40%',
        paddingTop:'2%',
        borderRadius:height*0.005,
        justifyContent:'space-evenly'
    },
    titleContaioner:{
        width:'90%',
        height:'12%',
        // backgroundColor:'aqua',
        marginBottom:'5%',
        justifyContent:'center',
        alignItems:'center'
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
        width:'40%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:'5%'
    },
    fieldinputContainer:{
        width:'60%',
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
        height:'45%',
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
        fontSize:width*0.025
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
// const StyleModalInput=StyleSheet.create({
//     root:{
//         height,
//         width,
//         backgroundColor:'#00000045',
//         position:'absolute',
//         justifyContent:'center',
//         alignItems:'center'
//     },
//     boxMesage:{
//         width:'90%',
//         height:'30%',
//         borderRadius:height*0.005,
//         backgroundColor:'#FFF',
//         justifyContent:'center',
//         alignItems:'center'

//     },
//     titleBox:{
//         height:'20%',
//         width:'100%',
//         alignItems:'center',
//         justifyContent:'flex-end'
//     },
//     inputBox:{
//         height:'50%',
//         width:'80%',
//         justifyContent:'center',
//         alignItems:'center',
//         borderWidth:height*0.002,
//         borderColor:'#e1e1e1',
//         // backgroundColor:'#e1e1e1',
//         flexDirection:'row',
//         margin:'5%'
//     },
//     inputFieldContainer:{
//         width:'20%',
//         backgroundColor:'#e1e1e1',
//         justifyContent:'center',
//         alignItems:'center',
//         height:'40%',
//         borderWidth:height*0.002,
//         borderColor:'#e1e1e1',
//     },
//     inputSelectContainer:{
//         borderWidth:height*0.002,
//         borderColor:'#e1e1e1',
//         justifyContent:'center',
//         alignItems:'center',
//         width:'60%',
//         height:'40%'
//     },
    
//     tittle:{
//         color:'#a1a1a1',
//         fontWeight:'bold',
//         fontSize:height*0.02
//     },
//     actionContainer:{
//         width:'100%',
//         height:'20%',
//         alignItems:'center',
//         justifyContent:'center',
//         flexDirection:'row'
//     },
//     buttons:{
//         width:'40%',
//         height:'80%',
//         justifyContent:'center',
//         alignItems:'center',
//         margin:'0.5%'
//         // backgroundColor:currentColorMain1
//     },
//     input:{
//         width:'85%',
//         height:'80%',
//         borderRadius:height*0.003,
//         backgroundColor:'#FFF',
//         fontSize:width*0.03,
//         alignSelf:'center', 
//         color:currentColorMain3,
//         alignItems:'center',
//         justifyContent:'center',
//         textAlign:'center'
//     },

// });