import { StyleSheet, Text, View}                                from 'react-native';
import { Image,Dimensions,TouchableOpacity, Modal, Alert}       from 'react-native';
import { useEffect, useState }                                  from 'react';
import { ModalInput }                                           from '../components/modalInput.jsx';
import { useMainContex }                                        from '../context/mainContext.jsx';
import {QueryDataUsers}                                         from '../api/apiConsults.js';
import { FormComponent }                                        from '../components/formComponent.jsx';
import AsyncStorage                                             from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export function Login(){
    const { DNS,modalInput, loginUser, setCurrentUser,setUserToken,setMainView}=useMainContex();
            
    const [modalLabel,setModalLabel]=useState('');
    const [loading, setLoading]=useState(false);
    
    const handlerAccessSesion=(response)=>{
        setCurrentUser(response.data.data[0]);
        setUserToken(response.token);
        setMainView(response.data.data[0].profile_id);
        setLoading(false);
    }
    async function getDataUser(data){
        const ApiQueryUsers=new QueryDataUsers(DNS,'/api/ml/auth/login/',data.userTokenId);
        
        try {
            const response1=await ApiQueryUsers.getData(data);
            console.log(response1.data)
            if(response1.data.statusCodeApi===1){
                    Alert.alert('¿DESEA GUARDAR LOS DATOS?','Esto le permite tener la sesión iniciada',
                    [
                    {text: 'OK', onPress:()=>{
                        // loadAsyncStoreInformation({token:response1.data.token});
                        handlerAccessSesion(response1);
                        setLoading(true);
                        }, style: 'cancel'},

                    {text: 'CANCEL', onPress: () =>{
                        handlerAccessSesion(response1);
                        setLoading(true);
                    }, style: 'cancel'},
                ]);
            }
            if(response1.data.statusCodeApi===0) Alert.alert('Datos erroneos',response1.data.statusMessageApi);
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Error al tratar de ingresar')
        }
    }
    async function loadAsyncStoreInformation(data){
        await AsyncStorage.setItem('user-token-id',data.token);
    }
    const handlerSubmitInformation=()=>{
        
        if(loginUser.userDocumentId&&loginUser.userPassword){
            getDataUser({
                ...loginUser,
                userTokenId:'none'
            });
        }
        else{
            Alert.alert('Datos Erroneos','Asegúsere de llenar todos los campos');
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
                    <View style={signOutStyle.span}>
                        <View style={signOutStyle.hola}>
                            <Text style={{fontSize:height*0.1,color:currentColorMain3,fontWeight:'bold'}}>Hola</Text>
                        </View>
                        <View style={signOutStyle.ingresar}>
                            <Text style={{fontSize:height*0.03,color:'#bbb',fontWeight:'bold'}}>Ingresa a nuestra app</Text>
                        </View>
                    </View>
                    <FormComponent setModalLabel={setModalLabel} loading={loading}/>
                    <View style={signOutStyle.actionContainer}>
                        <View style={signOutStyle.buttonContainer}>
                            <TouchableOpacity style={signOutStyle.loginButton} onPress={handlerSubmitInformation}>
                                <Text style={signOutStyle.ingresar}>INGRESAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <>
                <Modal
                animationType="fade"
                transparent={true}
                visible={modalInput}>
                    <ModalInput title={modalLabel} interfaz={1}/>
                </Modal>
            
            </>
        </View>
    )
}
const currentColorDefault='#44329C';
const currentColorMain='#44329C';
const currentColorMain3='#717171';

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
        paddingLeft:'10%'
    },
    hola:{
        width:'70%',
        height:'60%',
        justifyContent:'flex-end'
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
   
    ingresar:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:height*0.02
    }

});
