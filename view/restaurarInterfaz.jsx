import { StyleSheet, Text, View, Modal, Alert}      from 'react-native';
import { Image,Dimensions,TouchableOpacity}         from 'react-native';
import { User2,Lock }                               from './iconosSvg';
import { ModalInput }                               from '../components/modalInput';
import { useMainContex }                            from '../context/mainContext';
import { useState }                                 from 'react';
import { QueryDataUsers }                           from '../api/apiConsults';
import { ModalInputDate }                           from '../components/modalInputDate';

const { width, height } = Dimensions.get('window');

export function RestaurarInterfaz({navigation}){
    const ObjectQueryUser=new QueryDataUsers('http://172.16.2.93:8000/api/users');
    const {setSignUpModal,signUpModal,newUser,setNewUser,modalStateDate,setModalStateDate}=useMainContex();
    const [titleState,setTitleState]=useState('');
    function handlerModalInput(title){
        setSignUpModal(true);
        setTitleState(title);
    }
    const handlerRedirect=()=>{
        navigation.navigate('Login');
        newUser.userCedula='',
        newUser.userFechaExp='',
        newUser.userNewPassword='',
        setNewUser(newUser);
    }
    const loadInformation=async ()=>{
        try {
            const newUpdatedUser={
                cc:newUser.userCedula,
                date:newUser.userFechaExp,
                password:newUser.userNewPassword
            };
            console.log(newUpdatedUser)
            const response=await ObjectQueryUser.updateDataPassword(newUpdatedUser);
            // console.log(response.data)
            response.data.restoreState?Alert.alert('La contraseña ha sido cambiada','Asegúrese de no perder su contraseña',[
                {text: 'OK', onPress:handlerRedirect, style: 'cancel'},
            ]):Alert.alert('La información no es correcta','Asegúrese de ingresar bien la información');
            
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Ocurrió un error a la hora de enviar los datos, intentelo más tarde');
        }
    }
    const handlerSubmit=()=>{
        if(newUser.userCedula&&newUser.userFechaExp&&newUser.userNewPassword&&newUser.userPasswordConfirmed){
            if(newUser.userNewPassword===newUser.userPasswordConfirmed){
                loadInformation();
            }
            else{
                Alert.alert('Error de contraseñas','Las contraseñas no coinciden')
            }
        }
        else{
            Alert.alert('Campos vacios','Asegurese de llenar todos los campos')
        }
    }
    return(
        <View style={{height,width}}>
            <View style={signOutStyle.backGroundApp}>
                <View style={signOutStyle.frame1}></View>
                <View style={signOutStyle.frame2}></View>
            </View>
            <View style={signOutStyle.overBackground}>
                    <View style={signOutStyle.titleContainer}>
                        <Image source={require('../media_public/img/tranparentLogo.png')} style={signOutStyle.img}/>
                    </View>
                <View style={signOutStyle.formContainer}>
                    <View style={signOutStyle.fieldsContainer}>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <User2/>
                            </View>
                            <Text style={signOutStyle.label}>C.C.</Text>
                            <TouchableOpacity onPress={()=>handlerModalInput('userCedula')}>
                                <View style={signOutStyle.input}>
                                    <Text style={signOutStyle.TextFieldInput}>{newUser.userCedula}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <User2/>
                            </View>
                            <Text style={signOutStyle.label}>Fecha de expedicion. C.C.</Text>
                            <TouchableOpacity onPress={()=>setModalStateDate(true)}>
                                <View style={signOutStyle.input}>
                                    <Text style={signOutStyle.TextFieldInput}>{newUser.userFechaExp}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <Lock/>
                            </View>
                            <Text style={signOutStyle.label}>Nueva contraseña</Text>
                            <TouchableOpacity onPress={()=>handlerModalInput('userNewPassword')}>
                                <View style={signOutStyle.input}>
                                    <Text style={signOutStyle.TextFieldInput}>{newUser.userNewPassword?'* * * * * * * *':''}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <Lock/>
                            </View>
                            <Text style={signOutStyle.label}>Confirmar contraseña</Text>
                            <TouchableOpacity onPress={()=>handlerModalInput('userPasswordConfirmed')}>
                                <View style={signOutStyle.input}>
                                    <Text style={signOutStyle.TextFieldInput}>{newUser.userPasswordConfirmed?'* * * * * * * *':''}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={signOutStyle.actionContainer}>
                        <View style={signOutStyle.buttonContainer}>
                            <TouchableOpacity style={signOutStyle.loginButton} onPress={handlerSubmit}>
                                <Text style={signOutStyle.ingresar}>RESTAURAR</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.buttonContainer}>
                            <TouchableOpacity style={signOutStyle.signupButton} onPress={()=>{navigation.navigate('Login')}}>
                                <Text style={signOutStyle.registrarse}>+REGRESAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <Modal
            animationType="fade"
            transparent={true}
            visible={signUpModal}>
                <ModalInput title={{title:titleState,interfaz:2}}/>
            </Modal>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalStateDate}>
                <ModalInputDate/>
            </Modal>
        </View>
    )
}
const currentColorDefault='#44329C'
const currentColorMain='#44329C';
const currentColorMain2='#e8e8e8'
const currentColorMain3='#717171'

const signOutStyle=StyleSheet.create({
    backGroundApp:{
        position:'relative',
        zIndex:10,
        height:'100%',
        width:'100%',
        flexDirection:'row',
    },
    frame1:{
        backgroundColor:'#FFF',
        height:'50%',
        width:'50%'
    },
    frame2:{
        backgroundColor:currentColorDefault,
        height:'50%',
        width:'50%'
    },
    overBackground:{
        position:'absolute',
        zIndex:20,
        height,
        width
    },
    titleContainer:{
        height:parseInt(height*0.22),
        width:'100%',
        backgroundColor:currentColorDefault,
        borderBottomLeftRadius:height*0.1
    },
    formContainer:{
        height:parseInt(height*0.78),
        width:'100%',
        fontFamily:'sans-serif',
        backgroundColor:'#FFF',
        borderTopRightRadius:height*0.1,
        paddingLeft:0,
        paddingTop:height*0.01,
    },
    img:{
        // position:'relative',
        // zIndex:50,
        flex:1,
        resizeMode:'contain',
        alignSelf:'center',
        height:height*0.55,
        width:width*0.55,
    },
    span:{
        height:'25%',
        width:'100%',
        justifyContent:'center',
        paddingLeft:'10%',
        marginBottom:'2%'
    },
    hola:{
        width:'70%',
        height:'60%',
        justifyContent:'flex-end'
    },
    ingresar:{
        width:'70%',
        height:'30%',
        justifyContent:'center'
    },
    fieldsContainer:{
        width:'100%',
        height:'70%',
        justifyContent:'center',
        marginTop:'5%',
        // backgroundColor:'aqua'
    },
    inputContainer:{
        height:'23%',
        width:'100%',
        // backgroundColor:'aqua',
        // alignItems:'center',
        justifyContent:'center'
    },
    input:{
        backgroundColor:'#FFF',
        alignSelf:'center',
        width:'80%',
        height:'70%',
        justifyContent:'center',
        borderBottomWidth:height*0.002,
        borderColor:currentColorMain2,
        borderRadius:height*0.01,
        fontSize:height*0.03,
        paddingLeft:'3%',
        color:currentColorMain3
    },
    label:{
        marginLeft:'10%',
        color:'#ccc',
        fontWeight:'bold',
        fontSize:height*0.02
    },
    actionContainer:{
        // backgroundColor:'aqua',
        width:'100%',
        height:'20%',
        marginTop:'0%'
    },
    buttonContainer:{
        height:'50%',
        width:'80%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    loginButton:{
        backgroundColor:currentColorMain,
        width:'100%',
        height:'80%',
        borderRadius:height*0.005,
        justifyContent:'center',
        alignItems:'center'
    },
    signupButton:{
        backgroundColor:'#FFF',
        width:'100%',
        height:'80%',
        borderColor:currentColorMain,
        borderWidth:height*0.003,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:height*0.005,
    },
    ingresar:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:height*0.02
    },
    registrarse:{
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:height*0.02
    },
    lock:{
        position:'absolute',
        zIndex:10,
        left:'85%',
        bottom:'30%',
        opacity:0.7
    },
    TextFieldInput:{
        color:currentColorMain3,
        justifyContent:'center',
        alignSelf:'center',
        fontSize:height*0.025,
        marginBottom:0,
    }

});
