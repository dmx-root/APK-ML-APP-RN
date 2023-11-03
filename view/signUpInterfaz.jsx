import { StyleSheet, Text, View,Modal}                  from 'react-native';
import { Image,Dimensions,TouchableOpacity,Alert}       from 'react-native';
import { Lock, User2,CedulaIcon, UsersIcon }            from './iconosSvg.jsx';
import { useMainContex }                                from '../context/mainContext.jsx';
import { ModalInput }                                   from '../components/modalInput.jsx';
import { useEffect, useState }                          from 'react';
import { CargoList }                                    from '../components/filterListaSelect.jsx';
import {QueryDataUsers}                                 from '../api/apiConsults.js'
import { ModalInputDate } from '../components/modalInputDate.jsx';

const { width, height } = Dimensions.get('window');
const ObjectQuery=new QueryDataUsers('http://172.16.2.93:8000/api/users');

export function SignUp({navigation}){
    const {signUpModal,setSignUpModal,newUser,setNewUser,currentUser,setCurrentUser,modalStateDate,setModalStateDate}=useMainContex();
    const [titleState,setTitleState]=useState('');
    const [errorHandler,setHandlerError]=useState({message:'',code:1004})//1004 campos vacios 
    function handlerModalInput(title){
        setSignUpModal(true);
        setTitleState(title);
    }
    const loadInformation=async (data)=>{
        try {
            const response=await ObjectQuery.submitData(data);
            console.log(response.data)
            if(response.data.code===1001){
                currentUser.userName=response.data.newUser.userName;
                currentUser.userCedula=response.data.newUser.userCedula;
                currentUser.userCargo=response.data.newUser.userCargo;
                currentUser.userTokenPassState=true;
                currentUser.userTokenId=response.data.newUser.userTokenId;
                setCurrentUser(currentUser);
                navigation.navigate('MainRoot');
            }
            else if(response.data.code===1000){
                Alert.alert('Error de autenticación','El usuario ya existe');
            }
            
        } catch (error) {
            const err=new Error('Algo falló al intentar enviar los datos');
            Alert.alert(
                'Error de servidor',
                'Algo falló al intentar enviar los datos');
            console.log(err)
            console.log(error)
        }
    }
    const handlerSubmitInformation=()=>{
        
        if(newUser.userName&&newUser.userCedula&&newUser.userFechaExp&&newUser.userPassword){ 
            if(newUser.userPassword===newUser.userPasswordConfirmed){
                loadInformation(newUser);
                // console.log(newUser)
                setNewUser({userName:'',userCargo:'',userFechaExp:'',userPassword:'',userPasswordConfirmed:''});
            }else{
                setHandlerError({message:'Las contraseñas no coinciden',code:1005}) 
                Alert.alert(
                    'Las contraseñas no coinciden',
                    'Asegurese de que las contraseñas coicidan',);
            }   
        }else{
            setHandlerError({message:'Complete todos los campos',code:1004})
            Alert.alert(
                'Campos vacios',
                'Asegurese de haber completado todos los campos',);
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
                            <Text style={signOutStyle.label}>Nombre de ususario</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('userName')}>
                                <Text style={signOutStyle.fielTextInput}>{newUser.userName}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <CedulaIcon/>
                            </View>
                            <Text style={signOutStyle.label}>Cédula</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('userCedula')}>
                                <Text style={signOutStyle.fielTextInput}>{newUser.userCedula}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <CedulaIcon/>
                            </View>
                            <Text style={signOutStyle.label}>Fecha de exp-documento</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>setModalStateDate(true)}>
                                <Text style={signOutStyle.fielTextInput}>{newUser.userFechaExp}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <UsersIcon/>
                            </View>
                            <Text style={signOutStyle.label}>Cargo</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('userCargo')}>
                                <Text style={signOutStyle.fielTextInput}>{newUser.userCargo}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <Lock/>
                            </View>
                            <Text style={signOutStyle.label}>Clave</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('userPassword')}>
                                <Text style={signOutStyle.fielTextInput}>{newUser.userPassword?'* * * * * * * * * * * *':''}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <Lock/>
                            </View>
                            <Text style={signOutStyle.label}>Confirmar clave</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('userPasswordConfirmed')}>
                                <Text style={signOutStyle.fielTextInput}>{newUser.userPasswordConfirmed?'* * * * * * * * * * * *':''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={signOutStyle.actionContainer}>
                        <View style={signOutStyle.buttonContainer}>
                            <TouchableOpacity style={signOutStyle.loginButton} onPress={handlerSubmitInformation}>
                                <Text style={signOutStyle.ingresar}>REGISTRARSE</Text>
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
const currentColorMain='#44329C';
const currentColorMain2='#e8e8e8'
const currentColorMain3='#717171'
const currentColorDefault='#44329C'

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
        borderBottomLeftRadius:height*0.12
    },
    formContainer:{
        height:parseInt(height*0.78),
        width:'100%',
        fontFamily:'sans-serif',
        backgroundColor:'#FFF',
        borderTopRightRadius:height*0.12,
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
        paddingLeft:'10%'
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
        marginTop:'10%',
        justifyContent:'center'
    },
    inputContainer:{
        height:'20%',
        width:'100%',
        // backgroundColor:'aqua',
        // alignItems:'center',
        justifyContent:'center'
    },
    input:{
        backgroundColor:'#FFF',
        alignSelf:'center',
        width:'80%',
        height:'50%',
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
        height:'10%',
        marginTop:'10%'
    },
    buttonContainer:{
        height:'100%',
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
    fielTextInput:{
        fontSize:height*0.025,
        color:currentColorMain3,
        alignSelf:'center',
        
    }

});
