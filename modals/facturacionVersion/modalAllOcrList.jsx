import { useEffect, useState }                                              from 'react';
import { Alert, FlatList,TouchableWithoutFeedback}                          from 'react-native';
import { StyleSheet, View, Dimensions,Text}                                 from 'react-native';
import { QueryDataOCR }                                                     from '../../api/apiConsults'
import { useMainContex }                                                    from '../../context/mainContext';
import { OCRIcon1 }                                                         from '../../view/iconosSvg';
import { LoadingComponent }                                                 from '../../components/loadingComponent';
import { EmptyInterfaz }                                                    from '../../components/allVersions/emptyInterfaz';
import { OcrModuloComponent }                                               from '../../components/facturacionVersion/ocrModuloComponent';
import { useFacturacionContext }                                            from '../../context/facturacionContext';
import { OcrModuloComponentSegundas }                                       from '../../components/allVersions/ocrModuloComponentSegundas';
import { Picker } from '@react-native-picker/picker';

const {width,height}=Dimensions.get('window');
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function ModalAllOcrList(){

    const {mainView,setMainView,userToken,setCurrentUser,DNS}=useMainContex();
    const {setModalAllOcrList,idElementRevise,setIdElementRevise}=useFacturacionContext();

    const [ocrList,setOcrList]=useState([]);
    const [ocrListFilter,setOcrListFilter]=useState([]);
    const [loading, setLoading]=useState(true);

    const [ocrRev,setOcrRev]=useState(0);
    const [ocrNoRev,setOcrNoRev]=useState(0);
    const [ocrAnom,setOcrAnom]=useState(0);
    const [filterValue,setFilterValue]=useState(0);

    useEffect(()=>{
        loadInformation();
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
    useEffect(()=>{

        const filterArray=ocrList.filter(element=>element.ctg_id===filterValue);
        setOcrListFilter(filterArray);

    },[filterValue]);

    async function loadInformation(){
        const ApiQueryOcr= new QueryDataOCR(DNS,'/api/ml/ocr/getAll/',userToken);
        try {
            const response = await ApiQueryOcr.getAllOcr(0);
            if(response.data.statusCodeApi===1){

                const resultRev=response.data.data.filter(element=>element.prc_state===1).length;
                const resultNoRev=response.data.data.filter(element=>element.prc_state===null).length;
                const resultAnom=response.data.data.filter(element=>element.anm_cod!==null).length;

                setOcrList(response.data.data);
                setOcrListFilter(response.data.data);
                setOcrRev(resultRev);
                setOcrNoRev(resultNoRev);
                setOcrAnom(resultAnom);
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
            console.log(error);
            Alert.alert('Error de servidor', 'Hubo un problema a la hora de intentar cargar los datos, inténtelo más tarde');
        }
    }
    
    return(
        <TouchableWithoutFeedback onPress={()=>{setModalAllOcrList(false)}}>
            
            <View style={StyleInfoViewOP.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOP.window}>
                        <View style={StyleInfoViewOP.header}>
                            <View style={StyleInfoViewOP.iconContainer}>
                                <OCRIcon1 data={{color:'#999',size:width*0.11,fill:'#CCC'}}/>
                            </View>
                            <View  style={StyleInfoViewOP.columnContainer}>
                                <View style={StyleInfoViewOP.column}>
                                    <View style={StyleInfoViewOP.row}>
                                        <View style={StyleInfoViewOP.tittleContainer}>
                                            <Text style={StyleInfoViewOP.title}>OCR DE HOY</Text>
                                        </View>
                                        <View style={StyleInfoViewOP.contentContainer}>
                                            <Text style={StyleInfoViewOP.content}>x-x-x</Text>
                                        </View>
                                    </View>
                                    <View style={StyleInfoViewOP.row}>
                                        <View style={StyleInfoViewOP.tittleContainer}>
                                            <Text style={StyleInfoViewOP.title}>OCR REV.</Text>
                                        </View>
                                        <View style={StyleInfoViewOP.contentContainer}>
                                            <Text style={StyleInfoViewOP.content}>{ocrRev}</Text>
                                        </View>
                                    </View>
                                    
                                </View>
                                <View style={StyleInfoViewOP.column}>
                                    <View style={StyleInfoViewOP.row}>
                                        <View style={StyleInfoViewOP.tittleContainer}>
                                            <Text style={StyleInfoViewOP.title}>OCR SIN REV.</Text>
                                        </View>
                                        <View style={StyleInfoViewOP.contentContainer}>
                                            <Text style={StyleInfoViewOP.content}>{ocrNoRev}</Text>
                                        </View>
                                    </View>
                                    <View style={StyleInfoViewOP.row}>
                                        <View style={StyleInfoViewOP.tittleContainer}>
                                            <Text style={StyleInfoViewOP.title}>OCR ANORM</Text>
                                        </View>
                                        <View style={StyleInfoViewOP.contentContainer}>
                                            <Text style={StyleInfoViewOP.content}>{ocrAnom}</Text>
                                        </View>
                                    </View>    
                                </View>
                            </View>
                            
                        </View>
                        <View style={StyleInfoViewOP.root}>
                            <View style={StyleInfoViewOP.filterContainer}>
                                <View style={StyleInfoViewOP.filterContainerTittle}>
                                   <Text
                                   style={{
                                    fontSize:height*0.018,
                                    fontWeight:'bold',
                                    color:'#777'
                                   }}
                                   >FILTRAR</Text> 
                                </View>
                                <View style={StyleInfoViewOP.filterContainerPicker}>
                                    <Picker style={StyleInfoViewOP.input} selectedValue={filterValue} onValueChange={(itemValue, itemIndex) =>{setFilterValue(itemValue)}}>
                                        <Picker.Item style={{alignSelf:'center',color:'#777',fontSize:width*0.03}} label='TODAS LAS OCR'                     value={0}/>
                                        <Picker.Item style={{alignSelf:'center',color:'#777',fontSize:width*0.03}} label='REGISTROS DE PRIMERA CALIDAD'      value={1}/>
                                        <Picker.Item style={{alignSelf:'center',color:'#777',fontSize:width*0.03}} label='REGISTROS DE SEGUNDA CALIDAD'      value={2}/>
                                    </Picker>
                                </View>
                            </View>

                            {loading?
                            <LoadingComponent message={'Cargando lista de OCR'}/>:
                            ocrListFilter.length===0?
                            <EmptyInterfaz data={'No se han ingresado elemeentos en el módulo'}/>:
                            <FlatList style={StyleInfoViewOP.flatList} renderItem={item=>item.item.ctg_id===1?
                            <OcrModuloComponent data={item}/>:
                            <OcrModuloComponentSegundas data={item}/>} data={ocrList} key={element=>element.mdl_id}/>
                            }

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
        zIndex:0,
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
        height:'12%',
        width:'95%',
        borderRadius:height*0.009,
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:'#EEE'
    },
    columnContainer:{
        flexDirection:'row',
        height:'100%',
        width:'80%',
        // backgroundColor:'aqua'
    },
    iconContainer:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    frame:{
        height:'80%',
        width:'100%',
        borderRadius:height*0.005,
    },
    root:{
        borderRadius:height*0.005,
        backgroundColor:'#FAFAFA',
        width:'95%',
        height:'83%',
        alignSelf:'center',
        marginTop:'3%',
        alignItems:'center',
        borderWidth:height*0.0015,
        borderColor:currentColorMain4,
        overflow:'hidden'
    },
    flatList:{
        height:'100%',
        width:'100%'
    },
    column:{
        width:'48%',
        height:'100%',
    },

    row:{
        width:'100%',
        height:'50%',
        flexDirection:'row'
    },
    tittleContainer:{
        width:'65%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    contentContainer:{
        width:'35%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:height*0.015,
        fontWeight:'bold',
        color:'#888'
    },
    content:{
        fontSize:height*0.015,
        // fontWeight:'bold',
        color:'#999'

    },
    filterContainer:{
        width:'100%',
        height:'9%',
        backgroundColor:currentColorMain4,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
        
    },
    filterContainerTittle:{
        height:'80%',
        width:'35%',
        // borderWidth:height*0.0015,
        // borderColor:'#FFF',
        // backgroundColor:'#FFF',
        justifyContent:'center',
        alignItems:'center',
    },
    filterContainerPicker:{
        height:'100%',
        width:'65%',
        justifyContent:'center',
        alignItems:'center',
        margin:'2%'
    },
    input:{
        width:'100%',
        height:'70%',
        borderRadius:height*0.003,
        backgroundColor:'#FFF',
        fontSize:width*0.03,
        alignSelf:'center', 
        color:'#777',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
    },
})
