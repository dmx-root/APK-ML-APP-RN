import {View, Text, Dimensions,StyleSheet, TouchableOpacity} from 'react-native';
import { CheckIcon, CloseIcon }                              from '../view/iconosSvg';
import { useMainContex }                                     from '../context/mainContext';
import { useRegisterContext }                                from '../context/registerContext';

const {height,width}=Dimensions.get('window');

export function ModalAlertClear({content,title}){
    const {setmodalAlertClearData}=useMainContex();
    const {codigoToTalla, setCodigoToTalla,setcant}=useRegisterContext();
    const handlerClearData=()=>{
        setmodalAlertClearData(false);        
        codigoToTalla.forEach(element=>{
            element.cantidad=0,
            element.codigo='',
            setcant(0);
        });
        setCodigoToTalla(codigoToTalla);
    }
    return(
        <View style={StyleAlertModal.root}>
            <View style={StyleAlertModal.boxMesagge}>
                <View style={StyleAlertModal.textContent}>
                    <Text style={StyleAlertModal.text}>{title}</Text>
                    <Text style={StyleAlertModal.text}>{content}</Text>
                </View>
                <View style={StyleAlertModal.actionContainer}>
                    <TouchableOpacity
                    onPress={()=>setmodalAlertClearData(false)}
                     style={[StyleAlertModal.buttons,{backgroundColor:currentColorMain1}]} 
                     >
                        <CloseIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={handlerClearData}
                    style={[StyleAlertModal.buttons,{backgroundColor:currentColorMain1}]}
                    >
                        <CheckIcon/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export function ModalAlert({content,title,handlerOnPressCheck,handlerOnPressClose}){
    return(
        <View style={StyleAlertModal.root}>
            <View style={StyleAlertModal.boxMesagge}>
                <View style={StyleAlertModal.textContent}>
                    <Text style={StyleAlertModal.text}>{title}</Text>
                    <Text style={StyleAlertModal.text}>{content}</Text>
                </View>
                <View style={StyleAlertModal.actionContainer}>
                    <TouchableOpacity
                    onPress={handlerOnPressClose}
                     style={[StyleAlertModal.buttons,{backgroundColor:currentColorMain1}]} 
                     >
                        <CloseIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={handlerOnPressCheck}
                    style={[StyleAlertModal.buttons,{backgroundColor:currentColorMain1}]}
                    >
                        <CheckIcon/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

const StyleAlertModal=StyleSheet.create({
    root:{
        position:'absolute',
        width,
        height,
        backgroundColor:'#00000069',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesagge:{
        width:'95%',
        height:'20%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
    },
    textContent:{
        height:'50%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'2%'
    },
    actionContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    buttons:{
        width:'40%',
        height:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:height*0.005
    },
    text:{
        fontSize:height*0.02,
        marginBottom:height*0.01,
        // fontWeight:'bold',
        color:currentColorMain4

    }

});