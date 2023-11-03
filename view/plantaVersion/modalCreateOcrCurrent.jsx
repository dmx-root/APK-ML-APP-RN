import {View, Text, Dimensions,StyleSheet, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { CheckIcon, CloseIcon }                              from '../iconosSvg.jsx';
import { usePlantaContext } from '../../context/plantaContext.jsx';

const {height,width}=Dimensions.get('window');

export function ModalCreateOcrCurrent({handlerOnPressCheck,handlerOnPressClose}){
    
    const {currentOcr,currentOp,setModalValidationOcr} = usePlantaContext();
    return(
        <TouchableWithoutFeedback  onPress={()=>{setModalValidationOcr(false)}}>
            <View style={StyleAlertModal.root}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleAlertModal.boxMesagge}>
                        <View style={StyleAlertModal.textContent}>
                            <View style={StyleAlertModal.titleContent}>
                                <Text style={[StyleAlertModal.text,{fontSize:height*0.025}]}>¿Desea continuar con la misma información?</Text>
                            </View>
                            <View style={StyleAlertModal.fieldContent}>
                                <View style={StyleAlertModal.field}>
                                    <Text style={[StyleAlertModal.text,{fontWeight:'bold'}]}>OP:</Text>
                                </View>
                                <View style={StyleAlertModal.field}>
                                    <Text style={StyleAlertModal.text}>{currentOp.op}</Text>
                                </View>
                            </View>
                            <View style={StyleAlertModal.fieldContent}>
                                <View style={StyleAlertModal.field}>
                                    <Text style={[StyleAlertModal.text,{fontWeight:'bold'}]}>TALLA:</Text>
                                </View>
                                <View style={StyleAlertModal.field}>
                                    <Text style={StyleAlertModal.text}>{currentOcr.tallaId}</Text>
                                </View>
                            </View>
                            <View style={StyleAlertModal.fieldContent}>
                                <View style={StyleAlertModal.field}>
                                    <Text style={[StyleAlertModal.text,{fontWeight:'bold'}]}>MODULO:</Text>
                                </View>
                                <View style={StyleAlertModal.field}>
                                    <Text style={StyleAlertModal.text}>{currentOcr.moduloId}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={StyleAlertModal.actionContainer}>
                            <TouchableOpacity
                            onPress={handlerOnPressClose}
                            style={[StyleAlertModal.buttons,{backgroundColor:currentColorMain1}]} 
                            >
                                {/* <CloseIcon/> */}
                                <Text style={StyleAlertModal.textButton}>{'< NUEVA'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            onPress={handlerOnPressCheck}
                            style={[StyleAlertModal.buttons,{backgroundColor:currentColorMain1}]}
                            >
                                {/* <CheckIcon/> */}
                                <Text style={StyleAlertModal.textButton}>{'OK >'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}
const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain4='#717171';  //color de letra resaltado

const StyleAlertModal=StyleSheet.create({
    root:{
        position:'absolute',
        width,
        height,
        backgroundColor:'#00000090',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesagge:{
        width:'95%',
        height:'35%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
    },
    
    actionContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'aqua',
        height:'28%'
    },
    buttons:{
        width:'40%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:height*0.01
    },
    text:{
        fontSize:height*0.02,
        marginBottom:height*0.01,
        // fontWeight:'bold',
        color:currentColorMain4

    },
    titleContent:{
        height:'35%',
        justifyContent:'center',
        alignItems:'center'
    },
    fieldContent:{
        flexDirection:'row'
    },
    field:{
        width:'22%'
    },
    textContent:{
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:height*0.02
    }

});