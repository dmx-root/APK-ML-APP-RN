import {View, Dimensions, Text, TextInput, StyleSheet, TouchableOpacity}    from 'react-native'
import { useMainContex }                                                    from '../context/mainContext';
import { CheckIcon, CloseIcon }                                             from '../view/iconosSvg';
import { useEffect, useState }                                              from 'react';

const {height,width}= Dimensions.get('window')

export function ModalInput({title,interfaz}){

    const {loginUser,setloginUser,setModalInput}=useMainContex();

    const [keyboardType,setKeyBoardType]=useState('default');
    const [textInput,setTextInput]=useState('');
    const [segurityType,setSegurityType]=useState(false);

    const modalLabel={
        userDocumentId:'CEDULA',
        userCargo:'PERFIL',
        userPassword:'CONTRASEÑA'
    }

    useEffect(()=>{
        if(title==='userPassword'||title==='userConfirmPassword'){
            setSegurityType(true);
        }
        else if(title==='userDocumentId'){
            setKeyBoardType('numeric');
        }
        else{
            setSegurityType(false);
            setKeyBoardType('default');      
        }
    },[]);

    useEffect(()=>{
        if(interfaz===1){
            loginUser[title]=textInput
            setloginUser(loginUser);
            // console.log(loginUser)
        }
        else if(interfaz===2){

        }
    },[textInput]);
    return(
        <View style={StyleModalInput.root}>
            <View style={StyleModalInput.boxMesage}>
                <View style={StyleModalInput.titleBox}>
                    <Text style={StyleModalInput.tittle}>{modalLabel[title]}</Text>
                </View>
                <View style={StyleModalInput.inputBox}>
                    <TextInput style={StyleModalInput.input}
                     onBlur={()=>setSignUpModal(false)}
                     secureTextEntry={segurityType}
                     keyboardType={keyboardType}
                     autoFocus={true}
                     value={textInput}
                     onChangeText={(e)=>{setTextInput(e)}}
                     />
                </View>
                <View style={StyleModalInput.actionContainer}>
                    <TouchableOpacity style={[StyleModalInput.buttons]} onPress={()=>setModalInput(false)}>
                        <CloseIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[StyleModalInput.buttons]} onPress={()=>setModalInput(false)}>
                        <CheckIcon/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const currentColorMain1='#C7CCEC';  //Azul claro

const StyleModalInput=StyleSheet.create({
    root:{
        height,
        width,
        backgroundColor:'#00000045',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesage:{
        width:'90%',
        height:'20%',
        borderRadius:height*0.005,
        backgroundColor:'#FFF',

    },
    titleBox:{
        height:'20%',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    inputBox:{
        height:'40%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        borderWidth:height*0.002,
        height:'65%',
        borderColor:'#e1e1e1',
        borderRadius:height*0.005,
        width:'80%',
        alignSelf:'center',
        fontSize:height*0.025,
        color:'#919191',
        paddingLeft:'5%'
    },
    tittle:{
        color:'#a1a1a1',
        fontWeight:'bold',
        fontSize:height*0.02
    },
    actionContainer:{
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    buttons:{
        width:'40%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:height*0.005,
        borderWidth:height*0.002,
        borderColor:currentColorMain1,
        // backgroundColor:currentColorMain1
    },

});