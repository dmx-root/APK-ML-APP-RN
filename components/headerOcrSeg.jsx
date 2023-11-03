import { StyleSheet, Text, View, Dimensions, TouchableOpacity}  from 'react-native';
import { usePlantaContext } from '../context/plantaContext';
import { useMainContex } from '../context/mainContext';


const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

export function HeaderOcrSeg(){
    const {ocrInfoInterfaz}=useMainContex();
    // const {ocrInfoInterfaz}=usePlantaContext();
    return(
        <View style={StyleInfoViewOCR.header}>
            <View style={StyleInfoViewOCR.rowField}> 
                
                <View style={StyleInfoViewOCR.rowContente}>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.labelTitle}>MODULO</Text>
                    </View>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.fieldontent}>{}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOCR.rowContente}>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.labelTitle}>REFERENCIA</Text>
                    </View>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.fieldontent}>{}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOCR.rowContente}>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.labelTitle}>COLOR</Text>
                    </View>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.fieldontent}>{}</Text>
                    </View>
                </View>
            </View>
            <View style={StyleInfoViewOCR.rowField}>
                <View style={StyleInfoViewOCR.rowContente}>
                    <View style={[StyleInfoViewOCR.fieldContainer,{width:'50%'}]}>
                        <Text style={StyleInfoViewOCR.labelTitle}>HORA</Text>
                    </View>
                    <View style={[StyleInfoViewOCR.fieldContainer,{width:'50%'}]}>
                        <Text style={StyleInfoViewOCR.fieldontent}>{}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOCR.rowContente}>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.labelTitle}>REG. POR</Text>
                    </View>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.fieldontent}>{}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOCR.rowContente}>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.labelTitle}>OP:</Text>
                    </View>
                    <View style={StyleInfoViewOCR.fieldContainer}>
                        <Text style={StyleInfoViewOCR.fieldontent}>{}</Text>
                    </View>
                </View>
                
            </View>
        </View>
    )
}
const StyleInfoViewOCR=StyleSheet.create({
    header:{
        height:'50%',
        width:'95%',
        backgroundColor:currentColorMain1,
        borderRadius:height*0.005,
        alignSelf:'center',
        flexDirection:'row'
    },
    rowField:{
        width:'50%',
        height:'100%',
    },
    rowContente:{
        width:'100%',
        height:'32%',
        flexDirection:'row',
    },
    fieldContainer:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'8%'
    },
    labelTitle:{
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:width*0.025
    },
    fieldontent:{
        color:currentColorMain3,
        fontSize:height*0.015
    }
});