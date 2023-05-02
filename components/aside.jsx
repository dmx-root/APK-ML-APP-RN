import { StyleSheet, Text, FlatList,View, TextInput, Dimensions, TouchableOpacity, Image} from 'react-native';
import { DatabaseIcon, LogOut, MenuIcon, PlusCirc, PlusRect, SearchIcon, User }           from '../view/iconosSvg.jsx'
import { useState }                                                                       from 'react';
import { useMainContex }                                                                  from '../context/mainContext.jsx';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro

export function Aside(){
    const {setAsideState,createOCRState,setCreateOCRState,}= useMainContex();
    const handlerCreateOCR=()=>{
        setCreateOCRState(true);
        setAsideState(false);
    }
    const handlerRegistros=()=>{
        setAsideState(false);
    }
    const handlerProfile=()=>{
        setAsideState(false);
    }
    const handlerLogUot=()=>{
        setAsideState(false);
    }
    return(
            <View style={StyleAside.courtain}>
                <View style={StyleAside.aside}>
                    <View style={StyleAside.headerAside}>
                        <Image source={require('../media_public/img/tranparentLogo.png')} style={StyleAside.img}/>
                    </View>
                    <View style={StyleAside.bodyAside}>
                        <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={handlerCreateOCR}>
                            <View style={StyleAside.iconOptionContainer}>
                                <PlusCirc/>
                            </View>
                            <View style={StyleAside.contentOptionContainer}>
                                <Text style={StyleAside.contentOptions}>CREAR OCR</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={handlerRegistros}>
                            <View style={StyleAside.iconOptionContainer}>
                                <DatabaseIcon data={'#FFF'}/>
                            </View>
                            <View style={StyleAside.contentOptionContainer}>
                                <Text style={StyleAside.contentOptions}>REGISTROS</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={handlerProfile}>
                            <View style={StyleAside.iconOptionContainer}>
                                <User/>
                            </View>
                            <View style={StyleAside.contentOptionContainer}>
                                <Text style={StyleAside.contentOptions}>USUARIO</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleAside.fieldOptionContainer} onPress={handlerLogUot}>
                            <View style={StyleAside.iconOptionContainer}>
                                <LogOut/>
                            </View>
                            <View style={StyleAside.contentOptionContainer}>
                                <Text style={StyleAside.contentOptions}>SALIR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={StyleAside.buttonMenu2} onPress={()=>setAsideState(false)}>
                        <MenuIcon data={'#FFF'}/>
                    </TouchableOpacity>
                </View>
            </View>
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
        borderWidth:height*0.001,
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
