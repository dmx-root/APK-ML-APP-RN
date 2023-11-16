import { RegisterComponent }                                    from '../../components/plantaVersion/registerComponent.jsx'
import { RegisterTable2 }                                       from '../../components/plantaVersion/registerTable2.jsx';
import { usePlantaContext }                                     from '../../context/plantaContext';
import { useMainContex }                                        from '../../context/mainContext';
import { ModalRegisterEmployees }                               from '../../components/plantaVersion/modalRegisterEmployees';
import { ModalAlert }                                           from '../../components/modalAlert';
import { OpRegisterComponent }                                  from '../../components/plantaVersion/opRegisterComponent.jsx';
import { ModuloRegisterComponent }                              from '../../components/plantaVersion/moduloRegisterComponent.jsx';
import { InformationRegisterComponent }                         from '../../components/plantaVersion/informationRegisterComponent.jsx';
import { QueryDataOCR }                                         from '../../api/apiConsults.js';
import { ModalEditUnits }                                       from './modalEditUnits';
import { ModalRegister }                                        from './modalRegister';
import { StyleSheet, Text, View, Modal,Alert }                  from 'react-native';
import { Dimensions, TouchableOpacity, ActivityIndicator}       from 'react-native';
import { useEffect, useState }                                  from 'react';

const {width,height}=Dimensions.get('window')

export function RegisterInterfaz({navigation}){
    const {currentOcr,currentOp,setCurrentOp,modalRegisterEmployees,modalRegister,modalAlert,
        setModalAlert,setCurrentOcr,modalAlertCancel,setModalAlertCancel,modalEditUnits,setModalRegister,
        setModalLoading,modalAlertSend, setModalAlertSend, AsyncStorageManagement,statusReques,setStatusReques}=usePlantaContext();

    const {currentUser,DNS,userToken} = useMainContex();
    const [talla,setTalla] =useState([]);
    const [loading,setLoading]=useState(false)

    const AsyncStoreObj=new AsyncStorageManagement('newCurrentOcr','newCurrentOp');

    useEffect(()=>{
        const tallaMOP=['XS','S','M','L','XL','2XL','3Xl','4XL','6XL'];
        const tallaMOB=['28','30','32','34','36','38','40','42','44'];
        currentOp.op.slice(0,3)==='MOP'?setTalla(tallaMOP):setTalla(tallaMOB);
        setModalRegister(true);
    },[]);

    async function loadInformation(data){
        const ApiQueryOcr=new QueryDataOCR(DNS,'/api/ml/ocr/register/',userToken);
        try {
            const response=await ApiQueryOcr.registerOcr(data);
            if(response.data.statusCodeApi===1){
                setLoading(false);
                navigation.navigate('MainViewContainer');  
            }
            else if(response.data.statusCodeApi===0){
                Alert.alert('Error en el proceso',response.data.statusMessageApi);
            }
            else if(response.data.statusCodeApi===-1){
                Alert.alert('Error de inserción',response.data.statusMessageApi);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            Alert.alert('Error en el servidor','Hubo un problema a la hora de intentar enviar los datos. Intentelo más tarde');
        }
    }
    async function loadInformationAsyncStorage(){
        try {
            const newCurrentOcr={
                ocrId:null,
                colorId:currentOcr.colorId,
                colorLabel:currentOcr.colorLabel,
                tallaId:currentOcr.tallaId,
                tallaLabel:currentOcr.tallaLabel,
                moduloId:currentOcr.moduloId,
                ean:currentOcr.ean,
                cantidadUnidades:0,
                startTime:null,
                finishTime:null,
                dete:currentOcr.dete,
                motivoParada:null
            }
            await AsyncStoreObj.saveOcr(newCurrentOcr,currentOp);
        } catch (error) {
            console.log(error);
            Alert.alert('Error en el amacenamiento','No se pudo guardar correctamente la información en el almacenamiento local');
        }
    }
    async function removeInformationAsyncStorage(){
        try {
            await AsyncStoreObj.removeData();
        } catch (error) {
            console.log(error);
            Alert.alert('Error de almacenamiento','Hubo un error a la hora de eliminar la información local');
        }
    }
    const handlerCheckClearModal=()=>{
        setModalAlert(false)
        currentOcr.cantidadUnidades=0;
        setCurrentOcr(currentOcr);
    }
    const handlerCloseClearModal=()=>{
        setModalAlert(false);
    }
    const handlerCheckCancelModal=()=>{
        setModalAlertCancel(false);
        setCurrentOcr({
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
        });
        setCurrentOp({
            op:null,
            reference:null,
            cantOcr:0,
            cantPlanned:0,
            cantCompleted:0,
            cantCompleted:0
        });
        removeInformationAsyncStorage();
        navigation.navigate('MainViewContainer');  
    }
    const handlerCloseCancelModal=()=>{
        setModalAlertCancel(false);
    }
    const handlerSendInformation=()=>{
        setLoading(true);
        setModalAlertSend(false);
        
        const data={
            startTime:currentOcr.startTime,
            finishTime:new Date().toLocaleTimeString(),
            registerById:currentUser.user_document_id,
            moduloId:currentOcr.moduloId,
            unitsCant:currentOcr.cantidadUnidades,
            colorId:currentOcr.colorId,
            tallaId:currentOcr.tallaId,
            opId:currentOp.op,
            anomalyCode:currentOcr.motivoParada,
            categoryId:1
        }
        // console.log(data)
        loadInformation(data);
        loadInformationAsyncStorage();
        setStatusReques(!statusReques);
        
    }
    const handlerValidateSendInfo=()=>{
        if(currentOcr.cantidadUnidades!==0){
            setModalAlertSend(true)
        }
        else{
            Alert.alert('Error al tratar de enviar la información','No hay información para enviar')
        }
    }
    if(loading){
        return(
            <View style={StyleRegisterWindow.app}>
                <View style={StyleRegisterWindow.headder}>
                </View>
                <View style={StyleRegisterWindow.backGround}></View>
                <View style={StyleRegisterWindow.actionContainer}>
                    <TouchableOpacity onPress={()=>{}} style={StyleRegisterWindow.actionButtn1}>
                            <Text style={StyleRegisterWindow.textactionButton1}>CANCELAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{}} style={StyleRegisterWindow.actionButtn2}>
                            <Text style={StyleRegisterWindow.textactionButton2}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={StyleRegisterWindow.root1}>
                    <OpRegisterComponent/>
                    <ModuloRegisterComponent/>
                    <InformationRegisterComponent/>
                </View>
                <View style={StyleRegisterWindow.root2}>
                    <View style={StyleRegisterWindow.table1}>
                        <View style={StyleRegisterWindow.row}>
                            <View style={StyleRegisterWindow.fieldContainer}>
                                <Text style={StyleRegisterWindow.tableLabel}>TALLA</Text>
                            </View>
                            <View style={StyleRegisterWindow.fieldContainer}>
                                <Text style={StyleRegisterWindow.tableLabel}>EAN</Text>
                            </View>
                            <View style={StyleRegisterWindow.fieldContainer}>
                                <Text style={StyleRegisterWindow.tableLabel}>CANTIDAD</Text>
                            </View>
                            <View style={StyleRegisterWindow.buttonContainer}>
                                
                            </View>
                        </View>
                       {talla.map(element=><RegisterComponent talla={element} key={element}/>)}

                    </View>
                    <RegisterTable2/>
                </View>
                <>
                
                <View style={StyleRegisterWindow.rootActivity}>
                    <View style={StyleRegisterWindow.boxMesaggeActivity}>
                        <View>
                            <Text style={{fontSize:height*0.02,color:'#AAA',marginBottom:'2%'}}>Enviando la información...</Text>
                        </View>
                        <ActivityIndicator size='large'/>
                    </View>
                </View>
                
                </>
            </View>
        )
    }
 
    return(
        
            <View style={StyleRegisterWindow.app}>
                <View style={StyleRegisterWindow.headder}>
                </View>
                <View style={StyleRegisterWindow.backGround}></View>
                <View style={StyleRegisterWindow.actionContainer}>
                    <TouchableOpacity onPress={()=>{setModalAlertCancel(true)}} style={StyleRegisterWindow.actionButtn1}>
                            <Text style={StyleRegisterWindow.textactionButton1}>CANCELAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={handlerValidateSendInfo} style={StyleRegisterWindow.actionButtn2}>
                            <Text style={StyleRegisterWindow.textactionButton2}>ENVIAR</Text>
                    </TouchableOpacity>
                </View>
                <View style={StyleRegisterWindow.root1}>
                    <OpRegisterComponent/>
                    <ModuloRegisterComponent/>
                    <InformationRegisterComponent/>
                </View>
                <View style={StyleRegisterWindow.root2}>
                    <View style={StyleRegisterWindow.table1}>
                        <View style={StyleRegisterWindow.row}>
                            <View style={StyleRegisterWindow.fieldContainer}>
                                <Text style={StyleRegisterWindow.tableLabel}>TALLA</Text>
                            </View>
                            <View style={StyleRegisterWindow.fieldContainer}>
                                <Text style={StyleRegisterWindow.tableLabel}>EAN</Text>
                            </View>
                            <View style={StyleRegisterWindow.fieldContainer}>
                                <Text style={StyleRegisterWindow.tableLabel}>CANTIDAD</Text>
                            </View>
                            <View style={StyleRegisterWindow.buttonContainer}>
                                
                            </View>
                        </View>
                       {talla.map(element=><RegisterComponent talla={element} key={element}/>)}

                    </View>
                    <RegisterTable2/>
                </View>
                <>
                <Modal
                animationType='fade'
                visible={modalRegisterEmployees}
                transparent={true}>
                    <ModalRegisterEmployees/>
                </Modal>
                
                <Modal
                animationType='fade'
                visible={modalRegister}
                transparent={true}>
                    <ModalRegister/>
                </Modal>
                
                <Modal
                animationType='fade'
                visible={modalAlert}
                transparent={true}>
                    <ModalAlert
                        title={'¿Está seguro de ejecutar esta acción?'}
                        content={'Tenga en cuenta que se perderá toda la información.'}
                        handlerOnPressCheck={handlerCheckClearModal}
                        handlerOnPressClose={handlerCloseClearModal}
                        />
                </Modal>
                <Modal
                animationType='fade'
                visible={modalAlertCancel}
                transparent={true}>
                    <ModalAlert
                        title={'¿Está seguro de ejecutar esta acción?'}
                        content={'Tenga en cuenta que se perderá la información'}
                        handlerOnPressCheck={handlerCheckCancelModal}
                        handlerOnPressClose={handlerCloseCancelModal}
                        />
                </Modal>
                <Modal
                animationType='fade'
                visible={modalEditUnits}
                transparent={true}>
                    <ModalEditUnits/>
                </Modal>
                <Modal
                animationType='fade'
                visible={modalAlertSend}
                transparent={true}>
                    <ModalAlert 
                    title={'¿Está seguro de ejecutar esta acción?'}
                    content={'La información será enviada'}
                    handlerOnPressCheck={handlerSendInformation}
                    handlerOnPressClose={()=>setModalAlertSend(false)}
                    />
                </Modal>
                
                </>
            </View>
       
    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

const StyleRegisterWindow=StyleSheet.create({
    app:{
        backgroundColor:currentColorMain2,
        width,
        height
    },
    headder:{
        height:'15%',
        width:'100%',
        backgroundColor:currentColorMain,

    },
    root:{
        position:'absolute',
        width,
        height,
        backgroundColor:'#00000069',
        justifyContent:'center',
        alignItems:'center'
    },
    rootActivity:{
        position:'absolute',
        width,
        height,
        backgroundColor:'#00000059',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesaggeActivity:{
        width:'70%',
        height:'20%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesagge:{
        width:'95%',
        height:'20%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    backGround:{
        height:'73%',
        width:'100%',
    },
    actionContainer:{
        height:'10%',
        width:'100%',
        backgroundColor:'#FFF',
        flexDirection:'row',
        justifyContent:'center'
    },
    root1:{
        position:'absolute',
        height:'16%',
        width:'93%',
        backgroundColor:'#FFF',
        top:'5%',
        borderRadius:height*0.01,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    root2:{
        position:'absolute',
        height:'62%',
        width:'93%',
        backgroundColor:'#FFF',
        top:'23%',
        borderRadius:height*0.01,
        alignSelf:'center'
    },
    table1:{
        height:'68%',
        width:'95%',
        backgroundColor:currentColorMain1,
        borderWidth:width*0.002,
        borderColor:'#c1c1c1',
        borderRadius:height*0.005,
        alignSelf:'center',
        margin:width*0.025,
        justifyContent:'center'
        // flexDirection:'row'
    },
    row:{
        flexDirection:'row',
        width:'100%',
        height:'8%',
        marginTop:'0.5%'

    },
    fieldContainer:{
        width:'28%',
        marginLeft:'0.5%',
        backgroundColor:currentColorMain,
        justifyContent:'center'
    },
    tableLabel:{
        color:'#FFF',
        alignSelf:'center',
        fontSize:width*0.025,
        fontWeight:'bold'
    },
    buttonContainer:{
        width:'12%',
        marginLeft:'1%',
        // borderRadius:'20%'
        // backgroundColor:'white'
    },
    table2:{
        backgroundColor:currentColorMain1,
        height:'25%',
        width:'95%',
        alignSelf:'center',
        borderRadius:height*0.005,
        borderWidth:width*0.002,
        borderColor:'#c1c1c1',
    },
    actionButtn1:{
        height:'50%',
        width:'45%',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:currentColorMain1,
        marginLeft:'1%'
    },
    actionButtn2:{
        height:'50%',
        width:'45%',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:currentColorMain,
        marginLeft:'1%'
    },
    textactionButton1:{
        alignSelf:'center',
        fontSize:width*0.03,
        fontWeight:'bold',
        color:currentColorMain
    },
    textactionButton2:{
        alignSelf:'center',
        fontSize:width*0.03,
        fontWeight:'bold',
        color:'#FFF'
    },
    talla:{
        width:'27%',
        height:'95%',
        // backgroundColor:'#FFF',
        marginLeft:'1%',
        marginTop:'1.6%'
    },
    codigo:{
        width:'27%',
        height:'95%',
        // backgroundColor:'#FFF',
        marginLeft:'1%',
        marginTop:'1.6%'
    },
    cantidad:{
        width:'27%',
        height:'95%',
        // backgroundColor:'#FFF',
        marginLeft:'1%',
        marginTop:'1.6%'
    },
    buttons:{
        width:'14%',
        height:'95%',
        marginLeft:'1%',
        marginTop:'1.6%',
        paddingTop:'6%',

    },
    textTable1Title:{
        color:'#FFF',
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:height*0.015
    },
    textContainerTitle:{
        backgroundColor:currentColorMain,
        height:'8%',
        justifyContent:'center',
        marginBottom:'1%',
        

    },
    textContainer:{
        height:height*0.04,
        marginBottom:'2.5%',
        backgroundColor:'#FFF',
        width:'100%',
        justifyContent:'center',
        paddingRight:'10%',

    },
    buttonsContainer:{
        height:height*0.0415,
        marginBottom:'2.5%',
        width:'100%',
        justifyContent:'center',
    },
    buttonsTallaEdit:{
        backgroundColor:currentColorMain,
        width:'100%',
        height:'90%',
        justifyContent:'center',
        borderRadius:height*0.005
    },
    textTable1Talla:{
        alignSelf:'flex-start',
        color:'#919191',
        fontSize:height*0.015,
        fontWeight:'bold',
        paddingLeft:'35%'
    },
    textEditButton:{
        fontSize:height*0.015,
        alignSelf:'center',
        fontWeight:'bold',
        color:'#FFF'
    },
    textTable1:{
        alignSelf:'flex-end',
        color:'#919191',
        fontSize:height*0.012,
        fontWeight:'bold',
        paddingLeft:'35%',
    },
    titleRegistroActual:{
        width:'98%',
        height:'28%',
        // backgroundColor:'#FFF',
        alignSelf:'center',
        marginTop:'1%',
        flexDirection:'row',

    },
    titleRegistrosTotales:{
        width:'98%',
        height:'28%',
        // backgroundColor:'#FFF',
        alignSelf:'center',
        flexDirection:'row',
        marginTop:'1%'
    },
    titleAnormalidad:{
        width:'98%',
        height:'28%',
        flexDirection:'row',
        // backgroundColor:'#FFF',
        alignSelf:'center',
        marginTop:'1%',
    },
    titleTable2:{
        backgroundColor:'#FFF',
        height:'100%',
        width:'45%',
        justifyContent:'center'

    },
    titleField:{
        backgroundColor:'#FFF',
        height:'100%',
        width:'28%',

        marginLeft:'1%',
        justifyContent:'center'
    },
    titleFieldTotal:{
        backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'54%',
        marginLeft:'1%'
    },
    buttonEdit:{
        backgroundColor:currentColorMain,
        height:'100%',
        width:'25%',
        justifyContent:'center',
        marginLeft:'1%',
        borderRadius:height*0.005
    },
    buttonEditText:{
        color:'#FFF',
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:height*0.015,

    },
    inputContainer:{
        backgroundColor:'#FFF',
        height:'100%',
        width:'25%',
        marginLeft:'1%',
    },
    titleTextField:{
        alignSelf:'flex-start',
        color:'#919191',
        fontWeight:'bold',
        paddingLeft:'20%',
        fontSize:height*0.015
    },
    input:{
        width:'100%',
        height:'100%',
        fontSize:height*0.015,
        
    },
    OpContainer:{
        height:width*0.25,
        width:width*0.25,
        backgroundColor:currentColorMain1,
        borderRadius:height*0.01,
        marginLeft:'3%',
        // borderWidth:height*0.0015,
        borderColor:currentColorMain2,
        padding:'1.5%'
    },
    moduloContainer:{
        height:width*0.25,
        width:width*0.25,
        // borderWidth:height*0.0015,
        borderRadius:height*0.01,
        backgroundColor:currentColorMain1,
        // backgroundColor:currentColorMain1,
        borderColor:currentColorMain2,
        marginLeft:'3%',
        padding:'1.5%'
    },
    informationContainer:{
        width:'35%',
        height:'80%',
        backgroundColor:'#FFF',
        marginLeft:'3%',

    },
    iconContainer:{
        flexDirection:'row',
        width:'100%',
        height:'35%',
    },
    textInformation:{
        color:currentColorMain,
        fontWeight:'bold',
        paddingLeft:'10%',
        fontSize:width*0.03
    },
    textContent:{
        alignSelf:'center',
        color:currentColorMain3,
        fontSize:width*0.03,
        fontWeight:'bold',

    },
    informationFiel:{
        flexDirection:'row',
        height:'22%',
        marginTop:'2%',
        // backgroundColor:'aqua',
        // justifyContent:'center
        alignItems:'center',
        paddingLeft:'5%'
    },
    titleFieldInformation:{
        color:'#717171',
        fontWeight:'bold',
        fontSize:width*0.025,
        width:'45%',
    },
    fieldInformation:{
        width:'50%',
        // backgroundColor:'aqua',
        fontSize:width*0.023,
        color:'#717171',
        
        marginLeft:'5%'
    },
    actionAnalitycs:{
        height:'30%',
        width:'95%',
        // marginTop:'18%',
        // backgroundColor:'#FFF',
        flexDirection:'row',
        alignItems:'center',
    },
    cantidadContainer:{
        width:'100%',
        height:'20%',
        flexDirection:'row'
    },
    cantidadInfo:{
        marginLeft:'30%',
        color:currentColorMain3,
        fontSize:width*0.03,
        
    }

});