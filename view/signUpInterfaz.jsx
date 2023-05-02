import { StyleSheet, Text, View, TextInput,Modal}       from 'react-native';
import { Image,Dimensions,TouchableOpacity, Keyboard }  from 'react-native';
import { Lock, User2,CedulaIcon, UsersIcon }                       from './iconosSvg.jsx';
import { useMainContex }                                from '../context/mainContext.jsx';
import { ModalInput }                                   from '../components/modalInput.jsx';
import { useState }                                     from 'react';
import { CargoList } from '../components/filterListaSelect.jsx';

const { width, height } = Dimensions.get('window');

export function SignUp(){
    const {signUpModal,setSignUpModal}=useMainContex()
    const [titleState,setTitleState]=useState('');
    function handlerModalInput(title){
        setSignUpModal(true);
        setTitleState(title);
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
                    <View style={signOutStyle.span}>
                        <View style={signOutStyle.hola}>
                            <Text style={{fontSize:height*0.1,color:currentColorMain3,fontWeight:'bold'}}>Hola</Text>
                        </View>
                        <View style={signOutStyle.ingresar}>
                            <Text style={{fontSize:height*0.03,color:'#bbb',fontWeight:'bold'}}>Ingresa a nuestra app</Text>
                        </View>
                    </View>
                    <View style={signOutStyle.fieldsContainer}>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <User2/>
                            </View>
                            <Text style={signOutStyle.label}>User Name</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('NOMBRE DE USUARIO')}>
                            </TouchableOpacity>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <CedulaIcon/>
                            </View>
                            <Text style={signOutStyle.label}>Cédula</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('CEDULA')}>
                            </TouchableOpacity>
                            {/* <TextInput style={signOutStyle.input}
                              keyboardType='numeric'
                              onFocus={()=>handlerModalInput('CEDULA')}
                              autoFocus={false} /> */}
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <UsersIcon/>
                            </View>
                            <Text style={signOutStyle.label}>Cargo</Text>
                            {/* <TextInput style={signOutStyle.input}
                            onFocus={()=>handlerModalInput('CARGO')}
                            autoFocus={false}/> */}
                            <CargoList/>
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <Lock/>
                            </View>
                            <Text style={signOutStyle.label}>Clave</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('CONTRASEÑA')}>
                            </TouchableOpacity>
                            {/* <TextInput style={signOutStyle.input}
                            onFocus={()=>handlerModalInput('CLAVE')}
                            autoFocus={false}
                            secureTextEntry={true}/> */}
                        </View>
                        <View style={signOutStyle.inputContainer}>
                            <View  style={signOutStyle.lock}>
                                <Lock/>
                            </View>
                            <Text style={signOutStyle.label}>Confirmar clave</Text>
                            <TouchableOpacity style={signOutStyle.input} onPress={()=>handlerModalInput('CONFIRMAR CONTRASEÑA')}>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={signOutStyle.actionContainer}>
                        <View style={signOutStyle.buttonContainer}>
                            <TouchableOpacity style={signOutStyle.loginButton}>
                                <Text style={signOutStyle.ingresar}>REGISTRARSE</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <View style={signOutStyle.buttonContainer}>
                            <TouchableOpacity style={signOutStyle.signupButton}>
                                <Text style={signOutStyle.registrarse}>REGISTRARSE</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </View>
            </View>
            <Modal
            animationType="fade"
            transparent={true}
            visible={signUpModal}>
                <ModalInput title={{title:titleState}}/>
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
        height:'60%',
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
        marginTop:'0%'
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
    }

});
