import { Alert,FlatList,TouchableWithoutFeedback}                                   from 'react-native';
import { StyleSheet, Text, View, Dimensions,}                                       from 'react-native';
import { useEffect, useState }                                                      from 'react';
import { useFacturacionContext }                                                    from '../../context/facturacionContext';
import { ModuloIconList }                                                           from '../../view/iconosSvg';
import { OcrModuloComponent }                                                       from '../../components/facturacionVersion/ocrModuloComponent';
import { useMainContex }                                                            from '../../context/mainContext';
import { EmptyInterfaz }                                                            from '../../components/allVersions/emptyInterfaz';
import { LoadingComponent }                                                         from '../../components/loadingComponent';
import {QueryDataModulo}                                                            from '../../api/apiConsults';
import { OcrModuloComponentSegundas }                                               from '../../components/allVersions/ocrModuloComponentSegundas';

const {width,height}=Dimensions.get('window');

const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function ModalModulosOcrList(){

    const {setModalModulosOcrList,idElementRevise,setIdElementRevise}=useFacturacionContext();
    const {userToken,DNS,moduloInfoInterfaz,}= useMainContex();

    const [ocrList,setOcrList]= useState([]);
    const [loading,setLoading]=useState(true);
    
    const ApiQueryModulo= new QueryDataModulo(DNS,'/api/ml/modulo/get/',userToken);

    useEffect(()=>{
        loadInformation(moduloInfoInterfaz.moduloId);
    },[]);

    useEffect(()=>{
        if(idElementRevise){
            const alterArray=ocrList.map(element=>{
                if(element.ocr_id==idElementRevise){
                    element.prc_state=1;
                    return element
                }
                return element
            });
            setOcrList(alterArray);
        }
    },[idElementRevise]);
    
    async function loadInformation(moduloId){
        try {
            
            const response=await ApiQueryModulo.getOcrByModulo(moduloId);
            if(response.data.statusCodeApi===1){
                setOcrList(response.data.data.ocrList);
                setLoading(false);
            }
            else if(response.data.statusCodeApi===0){
                setLoading(false);
                Alert.alert('Error de consulta',response.data.statusMessageApi);
            }
            else if(response.data.statusCodeApi===-1){
                setLoading(false);
                Alert.alert('Error de servidor',response.data.statusMessageApi);
            }

        } catch (error) {
            console.log(error),
            Alert.alert('Error de servidor','Hubo un problema a la hora de intentar cargar la información, inténtelo más tarde');
        }
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{setModalModulosOcrList(false)}}>
            <View style={StyleInfoViewOP.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOP.window}>
                        <View style={StyleInfoViewOP.header}>
                            <View style={StyleInfoViewOP.iconContainer}>
                                <ModuloIconList/>
                            </View>
                            <View style={StyleInfoViewOP.information}>
                                <View style={StyleInfoViewOP.rowTittle}>
                                    <Text style={StyleInfoViewOP.tittle}>No. MODULO</Text>
                                    <Text style={StyleInfoViewOP.tittle}>No. OPERARIOS</Text>
                                    <Text style={StyleInfoViewOP.tittle}>OP ACTUAL</Text>
                                    <Text style={StyleInfoViewOP.tittle}>TALLA ACTUAL</Text>
                                </View>
                                <View style={StyleInfoViewOP.rowContent}>
                                    <Text style={StyleInfoViewOP.content}>MODULO-1</Text>
                                    <Text style={StyleInfoViewOP.content}>5</Text>
                                    <Text style={StyleInfoViewOP.content}>MOP3548</Text>
                                    <Text style={StyleInfoViewOP.content}>XL</Text>
                                </View>
                            </View>
                        </View>
                        <View style={StyleInfoViewOP.root}>

                            {loading?
                            <LoadingComponent message={'Cargando lista de OCR'}/>:
                            ocrList.length===0?
                            <EmptyInterfaz data={'No se han ingresado elemeentos en el módulo'}/>:
                            <FlatList style={StyleInfoViewOP.flatList} renderItem={item=>
                            item.item.ctg_id===1?
                            <OcrModuloComponent data={item}/>:
                            <OcrModuloComponentSegundas data={item}/>} data={ocrList} key={element=>element.mdl_id}/>}

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
        zIndex:5,
        height,
        width,
        backgroundColor:'#00000050'
    },
    window:{
        height:height*0.8,
        width:width*0.8,
        backgroundColor:'#FFF',
        // backgroundColor:currentColorMain1,
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        height:'17%',
        width:'95%',
        // backgroundColor:currentColorMain1,

        backgroundColor:'#EEE',
        padding:'1%',
        borderRadius:height*0.01,
        alignSelf:'center',
        flexDirection:'row'
    },
    root:{
        borderRadius:height*0.005,
        backgroundColor:'#FAFAFA',
        width:'95%',
        height:'78%',
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
    iconContainer:{
        width:'25%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    information:{
        flexDirection:'row',
        // backgroundColor:'aqua',
        width:'75%',
        height:'100%',

    },
    rowTittle:{
        width:'50%',
        height:'100%'
    },
    rowContent:{
        width:'50%',
        height:'100%'
    },
    tittle:{
        height:'25%',
        width:'100%',
        fontWeight:'bold',
        fontSize:height*0.015,
        color:'#777'
        
    },
    content:{
        height:'25%',
        width:'100%',
        // fontWeight:'bold',
        fontSize:height*0.015,
        color:'#999'
    }
   
})