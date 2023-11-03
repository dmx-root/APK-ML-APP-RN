import {View, Text, Dimensions,StyleSheet, TouchableOpacity} from 'react-native';
import { CheckIcon, CloseIcon }                              from '../view/iconosSvg';
import { LoadingInterfaz } from '../view/loadingInterfaz';

const {height,width}=Dimensions.get('window');

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


const currentColorMain1='#C7CCEC';  //Azul claro
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