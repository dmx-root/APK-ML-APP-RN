import {  Image, Alert, ActivityIndicator,FlatList,Modal, TouchableWithoutFeedback} from 'react-native';
import { StyleSheet, Text, View, Dimensions,}                                       from 'react-native';
import { useEffect, useState }                                                      from 'react';
import { usePlantaContext }                                                         from '../../context/plantaContext';
import { useMainContex }                                                            from '../../context/mainContext';
import { QueryDataOCR }                                                             from '../../api/apiConsults.js';
import { DatabaseIcon }                                                             from '../../view/iconosSvg.jsx';
import { OcrSpeComponent }                                                          from '../../components/ocrSpeComponent.jsx';
import { LoadingComponent }                                                         from '../../components/loadingComponent';
import { EmptyInterfaz }                                                            from '../../components/allVersions/emptyInterfaz';
import { OcrModuloComponent }                                                       from '../../components/facturacionVersion/ocrModuloComponent.jsx';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function ModalOcrListPlanta(){

    const {DNS, setModalOcrList, opSpeInfoInterfaz } = useMainContex();
    const [ocrList,setOcrList]=useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
        loadInformation();
        
    },[]);

    async function loadInformation(){
        const ApiQueryOcr=new QueryDataOCR(DNS,'/api/ml/ocr/getByOp/');
        try {
           const response= await ApiQueryOcr.getOcrBySpeOp({op:opSpeInfoInterfaz.op_id,color:opSpeInfoInterfaz.color_id,talla:opSpeInfoInterfaz.tll_id});
           setOcrList(response.data.data);
        //    console.log(response.data.data);
            setLoading(false);

        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Hubo un error a la hora de cargar la información, intentelo más tarde');
        }
    }
 
    return(
        <TouchableWithoutFeedback onPress={()=>{setModalOcrList(false)}}>
            <View style={StyleInfoViewOP.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOP.window}>
                        <View style={StyleInfoViewOP.header}>
                            <View style={StyleInfoViewOP.iconContainer}>
                                <DatabaseIcon data={currentColorMain}/>
                            </View>
                            <View style={[StyleInfoViewOP.rowField,{width:'45%'}]}>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainerTitle,{width:'40%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>DET. OP:</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'60%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opSpeInfoInterfaz.op_id}</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainerTitle,{width:'40%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>COLOR:</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'60%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opSpeInfoInterfaz.color_label.length>12?opSpeInfoInterfaz.color_label.slice(0,12)+'...':opSpeInfoInterfaz.color_label}</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainerTitle,{width:'40%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>TALLA</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'60%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opSpeInfoInterfaz.tll_label}</Text>
                                    </View>
                                </View>
                                
                            </View>
                            <View style={[StyleInfoViewOP.rowField,{width:'35%'}]}>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={StyleInfoViewOP.fieldContainerTitle}>
                                        <Text style={StyleInfoViewOP.labelTitle}>PLANEADO</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.fieldContainer}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opSpeInfoInterfaz.cant_spe_planned}</Text>
                                    </View>
                                </View>                               
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={StyleInfoViewOP.fieldContainerTitle}>
                                        <Text style={StyleInfoViewOP.labelTitle}>EJECUTADO</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.fieldContainer}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opSpeInfoInterfaz.cant_spe_completed}</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={StyleInfoViewOP.fieldContainerTitle}>
                                        <Text style={StyleInfoViewOP.labelTitle}>SIN EJEC.</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.fieldContainer}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opSpeInfoInterfaz.cant_spe_planned-opSpeInfoInterfaz.cant_spe_completed}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={StyleInfoViewOP.root}>
                            {loading?
                            <LoadingComponent message={'Cargando lista de OCR..'}/>:
                            ocrList.length===0?
                            <EmptyInterfaz data={'No se ha ingresado información al detalle de la OP'}/>:
                            <FlatList style={StyleInfoViewOP.flatList} renderItem={item=>
                            <OcrSpeComponent data={item}/>} 
                            data={ocrList} key={element=>element.ocr_list}/>}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}
const StyleInfoViewOP=StyleSheet.create({
    windowContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:10,
        height,
        width,
        backgroundColor:'#00000050'
    },
    window:{
        height:height*0.8,
        width:width*0.80,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        height:'15%',
        width:'95%',
        backgroundColor:currentColorMain1,
        // backgroundColor:'#FFF',
        borderRadius:height*0.005,
        alignSelf:'center',
        flexDirection:'row'
    },
    root:{
        borderRadius:height*0.005,
        backgroundColor:'#F5F5F5',
        
        width:'95%',
        height:'80%',
        alignSelf:'center',
        marginTop:'3%',
        // justifyContent:'center',
        alignItems:'center',
        borderWidth:height*0.0015,
        borderColor:currentColorMain4,
        overflow:'hidden'
    },
    flatList:{
        height:'100%',
        width:'100%'
    },
    rowField:{
        width:'41%',
        height:'100%',
        // flexDirection:'row'
        // backgroundColor:'aqua'
    },
    iconContainer:{
        width:'18%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    rowContente:{
        width:'100%',
        height:'31%',
        // backgroundColor:'aqua',
        flexDirection:'row',
    },
    fieldContainer:{
        height:'100%',
        // borderLeftWidth:height*0.002,
        width:'40%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'8%'
    },
    fieldContainerTitle:{
        height:'100%',
        // borderLeftWidth:height*0.002,
        width:'60%',
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
        fontWeight:'bold',
        fontSize:width*0.025
    },
    fieldontent:{
        color:currentColorMain3,
        fontSize:height*0.015
    },
    img:{
        height:height*0.045,
        width:height*0.045,
        alignSelf:'center'
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