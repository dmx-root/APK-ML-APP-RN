import { StyleSheet, Text, View, TextInput,Modal } from 'react-native';
import {  Dimensions, TouchableOpacity, Keyboard } from 'react-native';
import { BarIcon, DatabaseIcon, ModuloIcon}        from './iconosSvg.jsx'
import { useMainContex }                           from '../context/mainContext.jsx';
import { ModalEdit }                               from '../components/modalEditTalla.jsx';
import { RegisterTable1 }                          from '../components/registerTable1.jsx';
import { RegisterContextProvider }                 from '../context/registerContext.jsx'
import { ModalRegister }                           from '../components/modalRegister.jsx';
import { RegisterTable2 }                          from '../components/registerTable2.jsx';
import { ModalAlertClear,ModalAlert}               from '../components/modalAlert.jsx';
import { ModalParada }                             from '../components/modalParada.jsx';

const {width,height}=Dimensions.get('window')

export function MainRegisterInterfaz({navigation}){
    const { setCreateOCRState,
        modalEditState,
        modalRegisterState,
        modalAlertClearData,
        modalAlertSendData,
        setmodalAlertSendData,
        modalParadaInmediate,
        setmodalAlertClearData}=useMainContex();
    const handlerOnPressCloseModal=()=>{
        setmodalAlertSendData(false)
    }
    const handlerOnPressSendModal=()=>{

    }
    return(
        <RegisterContextProvider>
            <View style={StyleRegisterWindow.app}>
                <View style={StyleRegisterWindow.headder}>
                    <Text style={{color:'#FFF',marginTop:'5%',alignSelf:'center',fontSize:height*0.035}}>REGISTROS DE PRODUCCIÓN</Text>
                </View>
                <View style={StyleRegisterWindow.backGround}></View>
                <View style={StyleRegisterWindow.actionContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('MainRoot');setCreateOCRState(false)}} style={StyleRegisterWindow.actionButtn1}>
                            <Text style={StyleRegisterWindow.textactionButton1}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={StyleRegisterWindow.actionButtn2} onPress={()=>{setmodalAlertSendData(true)}}>
                            <Text style={StyleRegisterWindow.textactionButton2}>Enviar...</Text>
                    </TouchableOpacity>
                </View>
                <View style={StyleRegisterWindow.root1}>
                    <View style={StyleRegisterWindow.OpContainer}>
                        <View style={StyleRegisterWindow.iconContainer}>
                            <DatabaseIcon data={currentColorMain}/>
                            <Text style={StyleRegisterWindow.textInformation}>OP</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={StyleRegisterWindow.textContent}>No. OP:</Text>
                            <Text style={{marginLeft:'18%',color:currentColorMain3,fontSize:height*0.015 }}>xxx</Text>
                        </View>
                        <View style={StyleRegisterWindow.cantidadContainer}>
                            <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:height*0.015}}>Meta:</Text>
                            <Text style={StyleRegisterWindow.cantidadInfo}>10000</Text>
                        </View>
                        <View style={StyleRegisterWindow.actionAnalitycs}>
                            <View>
                                <BarIcon data={'green'}/>
                            </View>
                            <View>
                                <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:height*0.015}}> 56%  </Text>
                            </View>
                            <View>
                                <BarIcon data={'red'}/>
                            </View>
                            <View>
                                <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:height*0.015}}> 44%  </Text>
                            </View>
                            <View></View>
                            <View></View>
                        </View>
                    </View>
                    <View style={StyleRegisterWindow.moduloContainer}>
                        <View style={StyleRegisterWindow.iconContainer}>
                            <ModuloIcon/>
                            <Text style={StyleRegisterWindow.textInformation}>Modulo</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={StyleRegisterWindow.textContent}>No. Mod:</Text>
                            <Text style={{marginLeft:'10%',color:currentColorMain3,fontSize:height*0.015 }}>xxx</Text>
                        </View>
                        <View style={StyleRegisterWindow.cantidadContainer}>
                            <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:height*0.015}}>Meta:</Text>
                            <Text style={StyleRegisterWindow.cantidadInfo}>140</Text>
                        </View>
                        <View style={StyleRegisterWindow.actionAnalitycs}>
                            <View>
                                <BarIcon data={'green'}/>
                            </View>
                            <View>
                                <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:height*0.015}}> 56%  </Text>
                            </View>
                            <View>
                                <BarIcon data={'red'}/>
                            </View>
                            <View>
                                <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:height*0.015}}> 44%  </Text>
                            </View>
                            <View></View>
                            <View></View>
                        </View>
                    </View>
                    <View style={StyleRegisterWindow.informationContainer}>
                        <View style={StyleRegisterWindow.informationFiel}>
                            <Text style={StyleRegisterWindow.titleFieldInformation}>Fecha:</Text>
                            <Text style={StyleRegisterWindow.fieldInformation}>XX/XX/XX</Text>
                        </View>
                        <View style={StyleRegisterWindow.informationFiel}>
                            <Text style={StyleRegisterWindow.titleFieldInformation}>Operaria:</Text>
                            <Text style={StyleRegisterWindow.fieldInformation}>XXX-XXX</Text>
                        </View>
                        <View style={StyleRegisterWindow.informationFiel}>
                            <Text style={StyleRegisterWindow.titleFieldInformation}>Referencia:</Text>
                            <Text style={StyleRegisterWindow.fieldInformation}>XXX-XXX</Text>
                        </View>
                    </View>
                </View>
                <View style={StyleRegisterWindow.root2}>
                    <RegisterTable1/>
                    <RegisterTable2/>
                </View>
                <Modal
                animationType='fade'
                visible={modalEditState}
                transparent={true}>
                    <ModalEdit/>
                </Modal>
                <Modal
                animationType='fade'
                visible={modalRegisterState}
                transparent={true}>
                    <ModalRegister/>
                </Modal>
                <Modal
                animationType='fade'
                visible={modalAlertClearData}
                transparent={true}>
                    <ModalAlert
                        title={'¿Está seguro de ejecuatar esta acción?'}
                        content={'Tenga en cuenta que se perderán todos los datos.'}
                        />
                </Modal>
                <Modal
                animationType='fade'
                visible={modalAlertSendData}
                transparent={true}>
                    <ModalAlert
                        title={'¿Está seguro de ejecuatar esta acción?'}
                        content={'Los datos serán Enviados.'}
                        handlerOnPressCheck={handlerOnPressSendModal}
                        handlerOnPressClose={handlerOnPressCloseModal}/>
                </Modal>
                <Modal
                animationType='fade'
                visible={modalParadaInmediate}
                transparent={true}>
                    <ModalParada
                        title={'Ingrese un motivo por el cual se'}
                        content={'detendrá el proceso'}/>
        
                </Modal>
            </View>
        </RegisterContextProvider>
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
        height:'20%',
        width:'100%',
        backgroundColor:currentColorMain,

    },
    backGround:{
        height:'70%',
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
        top:'10%',
        borderRadius:height*0.01,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    root2:{
        position:'absolute',
        height:'60%',
        width:'93%',
        backgroundColor:'#FFF',
        top:'28%',
        borderRadius:height*0.01,
        alignSelf:'center'
    },
    table1:{
        height:'67%',
        width:'95%',
        backgroundColor:currentColorMain1,
        borderWidth:width*0.002,
        borderColor:'#c1c1c1',
        borderRadius:height*0.005,
        alignSelf:'center',
        margin:width*0.025,
        flexDirection:'row'
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
        fontSize:height*0.02,
        fontWeight:'bold',
        color:currentColorMain
    },
    textactionButton2:{
        alignSelf:'center',
        fontSize:height*0.02,
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
        height:'80%',
        width:'25%',
        backgroundColor:currentColorMain1,
        borderRadius:height*0.01,
        marginLeft:'3%',
        // borderWidth:height*0.0015,
        borderColor:currentColorMain2,
        padding:'1.5%'
    },
    moduloContainer:{
        height:'80%',
        width:'25%',
        // borderWidth:height*0.0015,
        borderRadius:height*0.01,
        backgroundColor:currentColorMain1,
        // backgroundColor:currentColorMain1,
        borderColor:currentColorMain2,
        marginLeft:'3%',
        padding:'1.5%'
    },
    informationContainer:{
        width:'38%',
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
        fontSize:height*0.02
    },
    textContent:{
        alignSelf:'center',
        color:currentColorMain3,
        fontSize:height*0.015,
        fontWeight:'bold',

    },
    informationFiel:{
        flexDirection:'row',
        height:'30%',
        marginTop:'2%',
        // backgroundColor:'aqua',
        alignItems:'center',
        paddingLeft:'5%'
    },
    titleFieldInformation:{
        color:'#717171',
        fontWeight:'bold',
        fontSize:height*0.018,
        width:'55%',
    },
    fieldInformation:{
        width:'40%',
        fontSize:height*0.01,
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
        fontSize:height*0.013,
        
    }

});