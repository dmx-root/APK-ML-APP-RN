import { StyleSheet, Text, View, Dimensions }   from 'react-native';
import { TouchableWithoutFeedback}              from 'react-native';
import { HeaderOcrSeg }                         from '../components/headerOcrSeg';
import { usePlantaContext }                     from '../context/plantaContext';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro

export function ModalOcrInfoSeg(){
    
    const { setModalComponentSeg }=usePlantaContext();

    return(
        <TouchableWithoutFeedback  onPress={()=>{ setModalComponentSeg(false)}}>
            <View style={StyleInfoViewOCR.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOCR.window}>
                        <HeaderOcrSeg/>
                        <View style={StyleInfoViewOCR.root1}>
                            <View style={StyleInfoViewOCR.table}>
                                <View style={StyleInfoViewOCR.row}>
                                    <View style={StyleInfoViewOCR.fieldContainerLabel}>
                                        <Text style={StyleInfoViewOCR.tableLabel}>TALLA</Text>
                                    </View>
                                    <View style={StyleInfoViewOCR.fieldContainerLabel}>
                                        <Text style={StyleInfoViewOCR.tableLabel}>EAN</Text>
                                    </View>
                                    <View style={StyleInfoViewOCR.fieldContainerLabel}>
                                        <Text style={StyleInfoViewOCR.tableLabel}>CANTIDAD</Text>
                                    </View>
                                </View>
                                 <View style={StyleInfoViewOCR.rowContent}>
                                    <View style={StyleInfoViewOCR.fieldContainerContent}>
                                        <Text style={StyleInfoViewOCR.textContent}>{}</Text>
                                    </View>
                                    <View style={StyleInfoViewOCR.fieldContainerContent}>
                                        <Text style={StyleInfoViewOCR.textContent}>{}</Text>
                                    </View>
                                    <View style={StyleInfoViewOCR.fieldContainerContent}>
                                        <Text style={StyleInfoViewOCR.textContent}>{}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}

const StyleInfoViewOCR=StyleSheet.create({
    windowContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:0,
        height,
        width,
        backgroundColor:'#00000060'
    },
    window:{
        height:height*0.25,
        width:width*0.80,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
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
    row:{
        flexDirection:'row',
        width:'100%',
        height:'40%',
        marginTop:'0.5%',  
    },
    fieldContainerLabel:{
        width:'32.5%',
        marginLeft:'0.5%',
        backgroundColor:currentColorMain,
        justifyContent:'center'
    },
    tableLabel:{
        color:'#FFF',
        alignSelf:'center',
        fontSize:width*0.025,
        fontWeight:'bold'
    },
    
    root1:{
        borderRadius:height*0.005,
        backgroundColor:currentColorMain1,
        width:'95%',
        height:'30%',
        alignSelf:'center',
        marginTop:'3%',
        justifyContent:'center',
        alignItems:'center'
    },
    table:{
        width:'95%',
        height:'95%',
        justifyContent:'center'
        // flexDirection:'row',

    },
    table1:{
        height:'67%',
        width:'95%',
        backgroundColor:currentColorMain1,
        borderWidth:width*0.002,
        borderColor:'#c1c1c1',
        borderRadius:height*0.005,
        alignSelf:'center',
        margin:width*0.025,
    },
    rowContent:{
        flexDirection:'row',
        width:'100%',
        height:'40%',
        marginTop:'0.5%'

    },
    fieldContainerContent:{
        width:'32.5%',
        marginLeft:'0.5%',
        backgroundColor:'white',
        justifyContent:'center'
    },
    buttonContainerContent:{
        width:'12%',
        marginLeft:'1%',
        // borderRadius:'20%'
        // backgroundColor:'white'
    },
    buttonContent:{
        backgroundColor:currentColorMain,
        height:'100%',
        width:'100%',
        borderRadius:width*0.01,
        justifyContent:'center',
    },
    labelButtonContent:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:width*0.025,
        alignSelf:'center'
    },
    textContent:{
        fontSize:height*0.015,
        alignSelf:'center',
        color:'#717171',
        fontWeight:'bold'
    }
});