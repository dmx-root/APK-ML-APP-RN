import AsyncStorage                                                                     from '@react-native-async-storage/async-storage';
import { Image, TouchableWithoutFeedback, Alert, ActivityIndicator}                     from 'react-native';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity}                          from 'react-native';
import { useState }                                                                     from 'react';
import { LogOut, RoowLeft, User, PlusSeg,PlusOcr,UserPlus, ModuloIconList2, ReviseIcon }from '../../view/iconosSvg'
import { useMainContex }                                                                from '../../context/mainContext';
import { useAdminContext }                                                              from '../../context/adminContext';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro

export function AsideAdmin({navigation}){
    const {setCurrentUser, setUserToken,setMainView,
        loginUser,setloginUser}=useMainContex();

    const { asideState,setAsideState,setRegisterInfoSegundas,modalModulosList,setModalModulosList,
        setModalRegisterEmployees, setModalCreateOcrState,setModalModulosInformation,
        }=useAdminContext();

    const[loading,setLoading]=useState(false);
    const removeData = async () => {
        try {
          await AsyncStorage.removeItem('user-token-id');
        } catch (error) {
          console.error('Error al eliminar el valor:', error);
        }
      };
    const handlerCloseSesion=()=>{
        setAsideState(false);
        setLoading(true);
        removeData();
        setCurrentUser(null);
        setUserToken(null);
        setMainView(0);
        setloginUser({
            userDocumentId:null,
            userPassword:null
        });
        setLoading(false);
    }
    const handlereSetProfile=()=>{
        setAsideState(false);
        navigation.navigate('ProfileInterface');
    }
    const handlerTouchButtonExit=()=>{
        setAsideState(false);
        Alert.alert('¿Salir de la cuenta?','',[
            {text: 'OK', onPress:handlerCloseSesion, style: 'cancel'},
            {text: 'CANCEL'},
            ]);
    }
    const handlerSetSegProducts=()=>{
        setAsideState(false);
        setRegisterInfoSegundas(true);
    }
    if(loading){
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:height*0.02,color:'#888',marginBottom:'4%'}}>Cargando vista principal...</Text>
            <ActivityIndicator size="large" />
        </View>
        )
    }
    return(
        <TouchableWithoutFeedback onPress={()=>{setAsideState(false)}}>
            <View style={StyleAside.courtain}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleAside.aside}>
                        <View style={StyleAside.headerAside}>
                            <Image source={require('../../media_public/img/tranparentLogo.png')} style={StyleAside.img}/>
                        </View>
                        <View style={StyleAside.bodyAside}>
                            <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={()=>{setModalCreateOcrState(true);setAsideState(false)}}>
                                <View style={StyleAside.iconOptionContainer}>
                                    <PlusOcr/>
                                </View>
                                <View style={StyleAside.contentOptionContainer}>
                                    <Text style={StyleAside.contentOptions}>NUEVA OCR</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={()=>{setModalModulosList(true);setAsideState(false)}}>
                                <View style={StyleAside.iconOptionContainer}>
                                    <ReviseIcon color={'#FFF'} size={35}/>
                                </View>
                                <View style={StyleAside.contentOptionContainer}>
                                    <Text style={StyleAside.contentOptions}>REV OCR</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={()=>{setModalRegisterEmployees(true);setAsideState(false)}}>
                                <View style={StyleAside.iconOptionContainer}>
                                    <UserPlus/>
                                </View>
                                <View style={StyleAside.contentOptionContainer}>
                                    <Text style={StyleAside.contentOptions}>OPERARIOS</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={()=>{setRegisterInfoSegundas(true);setAsideState(false)}}>
                                <View style={StyleAside.iconOptionContainer}>
                                    <PlusSeg/>
                                </View>
                                <View style={StyleAside.contentOptionContainer}>
                                    <Text style={StyleAside.contentOptions}>SEGUNDAS</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={()=>{setModalModulosInformation(true);setAsideState(false)}}>
                                <View style={StyleAside.iconOptionContainer}>
                                    <ModuloIconList2 size={35} color={'#FFF'}/>
                                </View>
                                <View style={StyleAside.contentOptionContainer}>
                                    <Text style={StyleAside.contentOptions}>MODULOS</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={handlereSetProfile}>
                                <View style={StyleAside.iconOptionContainer}>
                                    <User/>
                                </View>
                                <View style={StyleAside.contentOptionContainer}>
                                    <Text style={StyleAside.contentOptions}>PERFIL</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={handlerTouchButtonExit}>
                                <View style={StyleAside.iconOptionContainer}>
                                    <LogOut/>
                                </View>
                                <View style={StyleAside.contentOptionContainer}>
                                    <Text style={StyleAside.contentOptions}>SALIR</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={StyleAside.buttonMenu2} onPress={()=>{setAsideState(false)}}>
                            <RoowLeft data={'#FFF'}/>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}

const StyleAside=StyleSheet.create({
    aside:{
        height:height,
        width:width*0.4,
        zIndex:40,
        backgroundColor:currentColorMain
    },
    courtain:{
        position:'absolute',
        backgroundColor:'black',
        width:width,
        height:height,
        zIndex:30,
        backgroundColor:'#00000040'
    }
    ,headerAside:{
        // backgroundColor:'aqua',
        width:'100%',
        height:'20%',
        justifyContent:'flex-end'
    },
    buttonMenu2:{
        position:'absolute',
        zIndex:40,
        elevation:height* 0.01,
        width:height*0.07,
        height:height*0.07,
        borderRadius:height*0.01,
        backgroundColor:currentColorMain,
        left:'75%',
        top:'5%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:height*0.003,
        borderColor:'#FFF'
    },
    img:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        flex:1,
        resizeMode:'contain',
        // opacity:0.5

    },
    bodyAside:{
        width:'100%',
        height:'80%',
        paddingTop:'10%'
    },
    fieldOptionContainer:{
        width:'100%',
        height:'10%',
        // borderTopWidth:height*0.002,
        flexDirection:'row',
        justifyContent:'center'
    },
    iconOptionContainer:{
        height:'100%',
        width:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    contentOptionContainer:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignItems:'flex-start'
        // backgroundColor:'aqua'
    },
    contentOptions:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:height*0.02
    }
});
