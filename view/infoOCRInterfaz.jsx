import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import { useMainContex } from '../context/mainContext';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

export function InfoOCRInterfaz(){
    const{infoOCRState, setInfoOCRState}=useMainContex();
    return(
        <View style={StyleInfoViewOCR.windowContainer}>
            <View style={StyleInfoViewOCR.window}>
                <View style={StyleInfoViewOCR.header}>
                    <View style={StyleInfoViewOCR.rowField}>
                        <View style={StyleInfoViewOCR.rowContente}>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.labelTitle}>OP:</Text>
                            </View>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.fieldontent}>XXX</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.rowContente}>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.labelTitle}>MODULO</Text>
                            </View>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.fieldontent}>XX</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.rowContente}>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.labelTitle}>REFERENCIA</Text>
                            </View>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.fieldontent}>XXXX</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.rowContente}>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.labelTitle}>COD. COLOR</Text>
                            </View>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.fieldontent}>XXXX</Text>
                            </View>
                        </View>
                    </View>
                    <View style={StyleInfoViewOCR.rowField}>
                        <View style={StyleInfoViewOCR.rowContente}>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.labelTitle}>FECHA:</Text>
                            </View>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.fieldontent}>XX/XX/XX</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.rowContente}>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.labelTitle}>LOTE</Text>
                            </View>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.fieldontent}>--- --- ---</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.rowContente}>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.labelTitle}>No. OPER...</Text>
                            </View>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.fieldontent}>XX</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.rowContente}>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.labelTitle}>TIPO-OP</Text>
                            </View>
                            <View style={StyleInfoViewOCR.fieldContainer}>
                                <Text style={StyleInfoViewOCR.fieldontent}>XXX</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={StyleInfoViewOCR.root1}>
                    <View style={StyleInfoViewOCR.table}>
                        <View style={StyleInfoViewOCR.columTable}>
                            <View style={[StyleInfoViewOCR.rowTable,StyleInfoViewOCR.titleTable]}>
                                <Text style={StyleInfoViewOCR.tableContentTitle}>TALLA</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContentTalla}>XS/30</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContentTalla}>S/32</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContentTalla}>M/34</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContentTalla}>L/36</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContentTalla}>XL/38</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContentTalla}>2XL/40</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContentTalla}>3Xl/42</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContentTalla}>4XL/44</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.columTable}>
                            <View style={[StyleInfoViewOCR.rowTable,StyleInfoViewOCR.titleTable]}>
                                <Text style={StyleInfoViewOCR.tableContentTitle}>CODIGO</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.columTable}>
                            <View style={[StyleInfoViewOCR.rowTable,StyleInfoViewOCR.titleTable]}>
                                <Text style={StyleInfoViewOCR.tableContentTitle}>CANTIDAD</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                            <View style={StyleInfoViewOCR.rowTable}>
                                <Text style={StyleInfoViewOCR.tableContent}>--- --- ---</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={StyleInfoViewOCR.root2}>
                    <View style={StyleInfoViewOCR.informationContainer}>
                        <View style={StyleInfoViewOCR.rowInformation}>
                            <View style={StyleInfoViewOCR.titleInformationContainer}>
                                <Text style={StyleInfoViewOCR.contentInformationTitle}>DESDE</Text>
                            </View>
                            <View style={StyleInfoViewOCR.titleInformationContainer}>
                                <Text style={StyleInfoViewOCR.contentInformati}>XX-XX-XX</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.rowInformation}>
                            <View style={StyleInfoViewOCR.titleInformationContainer}>
                                <Text style={StyleInfoViewOCR.contentInformationTitle}>REG. TOTALES</Text>
                            </View>
                            <View style={StyleInfoViewOCR.titleInformationContainer}>
                                <Text style={StyleInfoViewOCR.contentInformati}>XXX</Text>
                            </View>
                        </View>
                    </View>
                    <View style={StyleInfoViewOCR.informationContainer}>
                        <View style={StyleInfoViewOCR.rowInformation}>
                            <View style={StyleInfoViewOCR.titleInformationContainer}>
                                <Text style={StyleInfoViewOCR.contentInformationTitle}>HASTA</Text>
                            </View>
                            <View style={StyleInfoViewOCR.titleInformationContainer}>
                                <Text style={StyleInfoViewOCR.contentInformati}>XX-XX-XX</Text>
                            </View>
                        </View>
                        <View style={StyleInfoViewOCR.rowInformation}>
                            <View style={StyleInfoViewOCR.titleInformationContainer}>
                                <Text style={StyleInfoViewOCR.contentInformationTitle}>MOTIVO PARADA</Text>
                            </View>
                            <View style={StyleInfoViewOCR.titleInformationContainer}>
                                <Text style={StyleInfoViewOCR.contentInformati}>--- --- ---</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={StyleInfoViewOCR.buttonClose} onPress={()=>{setInfoOCRState(!infoOCRState)}}>
                    <Text style={StyleInfoViewOCR.contentClose}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
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
        backgroundColor:'#00000080'
    },
    window:{
        height:height*0.6,
        width:width*0.80,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center'
    },
    header:{
        height:'20%',
        width:'95%',
        backgroundColor:currentColorMain1,
        borderRadius:height*0.005,
        alignSelf:'center',
        flexDirection:'row'
    },
    rowField:{
        width:'50%',
        height:'100%',
        // flexDirection:'row'
        // backgroundColor:'aqua'
    },
    rowContente:{
        width:'100%',
        height:'25%',
        // backgroundColor:'aqua',
        flexDirection:'row',
    },
    fieldContainer:{
        height:'100%',
        // borderLeftWidth:height*0.002,
        width:'50%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'8%'
    },
    root1:{
        // borderWidth:height*0.002,
        // borderColor:currentColorMain2,
        borderRadius:height*0.005,
        backgroundColor:currentColorMain1,
        width:'95%',
        height:'55%',
        alignSelf:'center',
        marginTop:'3%',
        justifyContent:'center',
        alignItems:'center'
    },
    root2:{
        // borderWidth:height*0.002,
        // borderColor:currentColorMain2,
        borderRadius:height*0.005,
        backgroundColor:currentColorMain1,
        width:'95%',
        height:'15%',
        alignSelf:'center',
        marginTop:'3%',
        flexDirection:'row'
    },
    labelTitle:{
        color:currentColorMain,
        fontWeight:'bold'
    },
    fieldontent:{
        color:currentColorMain3
    },
    table:{
        width:'95%',
        height:'95%',
        flexDirection:'row',

    },
    columTable:{
        height:'100%',
        width:'32%',
        marginLeft:'1%'
    },
    rowTable:{
        // borderTopWidth:height*0.002,
        backgroundColor:'#FFF',
        marginTop:'2%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center'
    },
    titleTable:{
        backgroundColor:currentColorMain,
        justifyContent:'center',
        alignItems:'center',
        color:'#FFF'
    },
    tableContentTitle:{
        color:'#FFF',
        fontWeight:'bold'
    },
    tableContentTalla:{
        alignSelf:'flex-start',
        fontWeight:'bold',
        color:currentColorMain4,
        paddingLeft:'30%'
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
        color:currentColorMain3
    },
    contentInformationTitle:{
        color:currentColorMain,
        fontWeight:'bold'
    },
    buttonClose:{
        margin:'1%',
        position:'absolute',
        top:0,
        right:0,
        borderRadius:height*0.05,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFF',
        width:height*0.025,
        height:height*0.025,
        elevation:height*0.005
    },
    contentClose:{
        // fontWeight:'bold',
        color:'#aaa',
        fontSize:height*0.02
    }

})