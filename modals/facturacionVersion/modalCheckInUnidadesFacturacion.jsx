import {Dimensions,View,Text,TouchableOpacity,StyleSheet, Alert, ActivityIndicator}    from 'react-native'
import { OCRIcon1 }                                                                                     from '../../view/iconosSvg';
import { useFacturacionContext }                                                                        from '../../context/facturacionContext';
import { useMainContex }                                                                                from '../../context/mainContext';
import { QueryDataOCR } from '../../api/apiConsults';
import { EmptyInterfaz } from '../../components/allVersions/emptyInterfaz';
import { useState } from 'react';
import { LoadingInterfaz } from '../../view/loadingInterfaz';



const {height,width} =Dimensions.get('window')

export function ModalCheckInUnidadesFacturacion(){
    
    const {setModalCheckInUnits,idElementRevise,setIdElementRevise}=useFacturacionContext();
    const {ocrInfoInterfaz,currentUser,DNS,userToken}=useMainContex();
    const [statusResponse,setSatusResponse]=useState(false);
    const [reviseState,setReviseState]=useState(false);

    const ApiQueryOcr= new QueryDataOCR(DNS,'/api/ml/ocr/checkIn',userToken);

    async function loadInformation(){
        try {
            const response= await ApiQueryOcr.checkInOcr({ocrId:ocrInfoInterfaz.ocr_id,documentId:currentUser.user_document_id});
            if(response.data.statusCodeApi===1){
                setSatusResponse(false);
                setReviseState(true);
                setIdElementRevise(ocrInfoInterfaz.ocr_id);
                Alert.alert('¡Elemento revisado!','El elemento fue revisado con exito');
            }
            if(response.data.statusCodeApi===0){
                setSatusResponse(false);
                Alert.alert('¡Hubo un problema!',response.data.statusMessageApi);

            }            
            if(response.data.statusCodeApi===-1){
                setSatusResponse(false);
                Alert.alert('¡Error de inseción!',response.data.statusMessageApi);

            }            
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Huvo un problema a la hora de intentar cargar la información, inténtelo más tarde');
        }
    }
    
    const hanlerReviseButtom=()=>{
        setSatusResponse(true);
        loadInformation();
    }
    return(
        <View style={StyleModalEdit.root}>
        <View style={StyleModalEdit.boxMesagge}>
            <View style={StyleModalEdit.titleContainer}>
                <View style={StyleModalEdit.iconContainer}>
                    <OCRIcon1 data={{color:currentColorMain,fill:currentColorMain3,size:65}}/>
                </View>
                <View style={StyleModalEdit.column}>
                    <View style={StyleModalEdit.row}>
                        <View style={StyleModalEdit.tittleContainer}>
                            <Text style={StyleModalEdit.title}>REG. POR</Text>
                        </View>
                        <View style={StyleModalEdit.contentContainer}>
                            <Text style={StyleModalEdit.content}>{ocrInfoInterfaz.register_by_id.slice(0,10)}</Text>
                        </View>
                    </View>
                    <View style={StyleModalEdit.row}>
                        <View style={StyleModalEdit.tittleContainer}>
                            <Text style={StyleModalEdit.title}>REV. POR</Text>
                        </View>
                        <View style={StyleModalEdit.contentContainer}>
                            <Text style={StyleModalEdit.content}>{ocrInfoInterfaz.check_in_by===null?'Sin Rev.':ocrInfoInterfaz.check_in_by.slice(0,10)}</Text>
                        </View>
                    </View>
                    <View style={StyleModalEdit.row}>
                        <View style={StyleModalEdit.tittleContainer}>
                            <Text style={StyleModalEdit.title}>CATEG. REG</Text>
                        </View>
                        <View style={StyleModalEdit.contentContainer}>
                            <Text style={StyleModalEdit.content}>{ocrInfoInterfaz.ctg_id===1?'1°':'2da'}</Text>
                        </View>
                    </View>
                    
                </View>
                <View style={StyleModalEdit.column}>
                    <View style={StyleModalEdit.row}>
                        <View style={StyleModalEdit.tittleContainer}>
                            <Text style={StyleModalEdit.title}>FECHA REG.</Text>
                        </View>
                        <View style={StyleModalEdit.contentContainer}>
                            <Text style={StyleModalEdit.content}>{ocrInfoInterfaz.dete_creation.slice(0,10)}</Text>
                        </View>
                    </View>
                    <View style={StyleModalEdit.row}>
                        <View style={StyleModalEdit.tittleContainer}>
                            <Text style={StyleModalEdit.title}>FECHA REV.</Text>
                        </View>
                        <View style={StyleModalEdit.contentContainer}>
                            <Text style={StyleModalEdit.content}>{ocrInfoInterfaz.check_in_date===null?'Sin Rev.':ocrInfoInterfaz.check_in_date.slice(0,10)}</Text>
                        </View>
                    </View>
                    <View style={StyleModalEdit.row}>
                        <View style={StyleModalEdit.tittleContainer}>
                            <Text style={StyleModalEdit.title}>HORA REV.</Text>
                        </View>
                        <View style={StyleModalEdit.contentContainer}>
                            <Text style={StyleModalEdit.content}>{ocrInfoInterfaz.check_in_date===null?'Sin Rev.':ocrInfoInterfaz.check_in_date.slice(11,19)}</Text>
                        </View>

                    </View>
                    
                </View>
            </View>
            <View style={StyleModalEdit.containerField}>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={ocrInfoInterfaz.ctg_id===1?StyleModalEdit.fontStyle:[StyleModalEdit.fontStyle,{color:currentColorMain2}]}>HORA-I</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={ocrInfoInterfaz.ctg_id===1?[StyleModalEdit.fontStyle,{fontWeight:'normal'}]:[StyleModalEdit.fontStyle,{fontWeight:'normal',color:currentColorMain2}]}>{ocrInfoInterfaz.ctg_id===2?'XX:XX:XX':ocrInfoInterfaz.start_operation}</Text>
                </View>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={ocrInfoInterfaz.ctg_id===1?StyleModalEdit.fontStyle:[StyleModalEdit.fontStyle,{color:currentColorMain2}]}>HORA-F</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={ocrInfoInterfaz.ctg_id===1?[StyleModalEdit.fontStyle,{fontWeight:'normal'}]:[StyleModalEdit.fontStyle,{fontWeight:'normal',color:currentColorMain2}]}>{ocrInfoInterfaz.ctg_id===2?'XX:XX:XX':ocrInfoInterfaz.finish_operation}</Text>
                </View>
            </View>
            <View style={StyleModalEdit.containerField}>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={StyleModalEdit.fontStyle}>OP</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{ocrInfoInterfaz.op}</Text>
                </View>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={StyleModalEdit.fontStyle}>REFERENCIA</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{ocrInfoInterfaz.ref}</Text>
                </View>
            </View>
            <View style={StyleModalEdit.containerField}>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={StyleModalEdit.fontStyle}>MODULO</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{ocrInfoInterfaz.mdl_id}</Text>
                </View>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={StyleModalEdit.fontStyle}>ANORM</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{ocrInfoInterfaz.anomaly_label===null?'Sin novedad':ocrInfoInterfaz.anomaly_label.slice(0,15)}</Text>
                </View>
            </View>
            <View style={StyleModalEdit.containerField}>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={StyleModalEdit.fontStyle}>COLOR</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{ocrInfoInterfaz.color_label}</Text>
                </View>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={StyleModalEdit.fontStyle}>EAN</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{ocrInfoInterfaz.ean_id}</Text>
                </View>
            </View>
            <View style={StyleModalEdit.containerField}>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={StyleModalEdit.fontStyle}>TALLA</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{ocrInfoInterfaz.talla_id}</Text>
                </View>
                <View style={StyleModalEdit.titleFieldContainer}>
                    <Text style={StyleModalEdit.fontStyle}>UNIDADES</Text>
                </View>
                <View style={StyleModalEdit.contentFieldContainer}>
                    <Text style={[StyleModalEdit.fontStyle,{fontWeight:'normal'}]}>{ocrInfoInterfaz.units_cant}</Text>
                </View>
            </View>
            <View style={StyleModalEdit.containerInput}>  
                {
                    statusResponse?<ActivityIndicator size="large"/>:ocrInfoInterfaz.check_in_by===null && !reviseState?
                    <>
                    <TouchableOpacity 
                    style={StyleModalEdit.buttonEdit}
                    onPress={()=>{}}>
                        <Text style={{fontSize:width*0.03,fontWeight:'bold',color:"#FFF"}}>ANOTACIONES</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                    style={StyleModalEdit.buttonEdit}
                    onPress={hanlerReviseButtom}>
                        <Text style={{fontSize:width*0.03,fontWeight:'bold',color:'#FFF'}}>REVISAR</Text>
                    </TouchableOpacity>
                    </>:  
                    <View style={StyleModalEdit.fieldEdit}>
                            <Text style={{fontSize:width*0.03,fontWeight:'bold',color:'#FFF'}}>REVISADO</Text>
                    </View>
                }
            </View>
            

            <View style={StyleModalEdit.actionContainer}>

                <TouchableOpacity 
                style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]}
                onPress={()=>{setModalCheckInUnits(false)}}>
                    <Text style={{fontSize:width*0.03,fontWeight:'bold',color:currentColorMain}}>CERRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
</View>
    )
}
const currentColorMain='#44329C';
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
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
        height:'65%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center',
    },
    titleContainer:{
        width:'94%',
        margin:'5%',
        height:'20%',
        justifyContent:'center',
        borderRadius:height*0.01,
        alignItems:'center',
        backgroundColor:currentColorMain1,
        flexDirection:'row'

    },
    containerInput:{
        height:'15%',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'aqua',
        marginTop:'3%'
    },
   
    actionContainer:{
        width:'100%',
        height:'15%',
        // backgroundColor:'aqua',
        // alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        // marginTop:'5%'
    },
    buttons:{
        width:'94%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
        // marginRight:height*0.005
    },
    containerField:{
        marginTop:height*0.0025,
        flexDirection:'row',
        height:'7.5%',
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
        
    },
    iconContainer:{
        justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'aqua',
        height:'100%',
        width:'15%'
    },
    column:{
        width:'38%',
        height:'100%',
    },

    row:{
        width:'100%',
        height:'33%',
        flexDirection:'row'
    },
    tittleContainer:{
        width:'45%',
        height:'100%',
        justifyContent:'center',
        // marginLeft:'10%'
        // alignItems:'center',
        // backgroundColor:'aqua'
    },
    contentContainer:{
        width:'55%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:height*0.015,
        fontWeight:'bold',
        color:currentColorMain
    },
    content:{
        fontSize:height*0.015,
        // fontWeight:'bold',
        color:currentColorMain3

    },
    buttonEdit:{
        backgroundColor:currentColorMain,
        width:'47%',
        height:'50%',
        margin:'0.5%',
        justifyContent:'center',
        alignItems:'center'
    },
    fieldEdit:{
        backgroundColor:currentColorMain1,
        width:'94%',
        height:'50%',
        margin:'0.5%',
        justifyContent:'center',
        alignItems:'center'
    }

})