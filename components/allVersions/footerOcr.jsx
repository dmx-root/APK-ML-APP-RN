import { StyleSheet, Text, View, Dimensions, TouchableOpacity}  from 'react-native';
import { usePlantaContext } from '../../context/plantaContext';
import { useMainContex } from '../../context/mainContext';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

export function FooterOcr(){    
    // const {ocrInfoInterfaz}=usePlantaContext();
    const {ocrInfoInterfaz}=useMainContex();
    return(
        <View style={StyleInfoViewOCR.root2}>
        <View style={StyleInfoViewOCR.informationContainer}>
            <View style={StyleInfoViewOCR.rowInformation}>
                <View style={StyleInfoViewOCR.titleInformationContainer}>
                    <Text style={StyleInfoViewOCR.contentInformationTitle}>DESDE</Text>
                </View>
                <View style={StyleInfoViewOCR.titleInformationContainer}>
                    <Text style={StyleInfoViewOCR.contentInformati}>{ocrInfoInterfaz.start_operation}</Text>
                </View>
            </View>
            <View style={StyleInfoViewOCR.rowInformation}>
                <View style={StyleInfoViewOCR.titleInformationContainer}>
                    <Text style={StyleInfoViewOCR.contentInformationTitle}>REG. TOTALES</Text>
                </View>
                <View style={StyleInfoViewOCR.titleInformationContainer}>
                    <Text style={StyleInfoViewOCR.contentInformati}>{ocrInfoInterfaz.units_cant}</Text>
                </View>
            </View>
        </View>
        <View style={StyleInfoViewOCR.informationContainer}>
            <View style={StyleInfoViewOCR.rowInformation}>
                <View style={[StyleInfoViewOCR.titleInformationContainer,{width:'30%'}]}>
                    <Text style={StyleInfoViewOCR.contentInformationTitle}>HASTA</Text>
                </View>
                <View style={[StyleInfoViewOCR.titleInformationContainer,{width:'70%'}]}>
                    <Text style={StyleInfoViewOCR.contentInformati}>{ocrInfoInterfaz.finish_operation}</Text>
                </View>
            </View>
            <View style={StyleInfoViewOCR.rowInformation}>
                <View style={[StyleInfoViewOCR.titleInformationContainer,{width:'30%'}]}>
                    <Text style={StyleInfoViewOCR.contentInformationTitle}>MOTIVO</Text>
                </View>
                <View style={[StyleInfoViewOCR.titleInformationContainer,{width:'70%'}]}>
                    <Text style={StyleInfoViewOCR.contentInformati}>{ocrInfoInterfaz.anm_cod?ocrInfoInterfaz.anomaly_label:'Sin novedad'}</Text>
                </View>
            </View>
        </View>
    </View>
    )
}

const StyleInfoViewOCR=StyleSheet.create({
    root2:{
        borderRadius:height*0.005,
        backgroundColor:currentColorMain1,
        width:'95%',
        height:'15%',
        alignSelf:'center',
        marginTop:'3%',
        flexDirection:'row'
    },
    informationContainer:{
        width:'50%',
        height:'100%',
    },
    rowInformation:{
        flexDirection:'row',
        height:'50%',
        width:'100%'
    },
    titleInformationContainer:{
        width:'50%',
        height:'100%',
        justifyContent:'center',
        paddingLeft:'4%'
    },
    contentInformati:{
        paddingLeft:'10%',
        fontSize:height*0.015,
        color:currentColorMain3
    },
    contentInformationTitle:{
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:width*0.023
    }
});