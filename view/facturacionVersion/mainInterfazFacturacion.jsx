import { OPcomponent }                                                  from '../../components/opComponent.jsx'
import { OcrComponent }                                                 from '../../components/plantaVersion/ocrComponentPlanta.jsx'
import { OcrComponentButtonFacturacion }                                           from '../../components/invitadoVersion/ocrComponentButton.jsx'
import { useMainContex }                                                from '../../context/mainContext.jsx';
import { useFacturacionContext }                                        from '../../context/facturacionContext.jsx';
import { QueryDataUsers }                                               from '../../api/apiConsults.js';
import { EmptyInterfaz }                                                from '../../components/allVersions/emptyInterfaz.jsx';
import { LayersIcon, MenuIcon, RefreshIcon, SearchIcon}                 from '../iconosSvg.jsx';
import { StyleSheet, Text, FlatList,View, Modal, Alert}                 from 'react-native';
import { TextInput, Dimensions, TouchableOpacity,ActivityIndicator }    from 'react-native';
import { useEffect, useState }                                          from 'react'; 
import { LoadingComponent } from '../../components/loadingComponent.jsx';

const {width,height}=Dimensions.get('screen');

export function MainInterfazFacturacion({navigation}){
    
    const {DNS,currentUser,userToken,loadingSigIn,setLoadingSigIn}= useMainContex();

    const {setAsideState,asideState,setModalModulosList,setModulosList} =useFacturacionContext();

    const [opList,setOpList]=useState([]);
    const [ocrList,setOcrList]=useState([]);
    const [loading,setLoading]=useState(true);

    // const ApiQueryUser=new QueryDataUsers(DNS,'/api/ml/user/sesion/',userToken);
    const ApiQueryUser=new QueryDataUsers(DNS,'/api/ml/user/sesion/get/',userToken);

    useEffect(()=>{
        loadInformation(currentUser.user_document_id);
    },[]);
    async function loadInformation(){
        try {
            const response=await ApiQueryUser.getSesion('none');

            if(response.data.statusCodeApi===1){
                setLoading(false);
                setOpList(response.data.data.opList);
                setOcrList(response.data.data.ocrList.slice(0,3));
                setModulosList(response.data.data.moduloList);
            }
            else if(response.data.statusCodeApi===0){
                setLoading(false);
                Alert.alert('Error de consulta',response.data.statusMessageApi);
            }
            else if(response.data.statusCodeApi===-1){
                setLoading(false);
                Alert.alert('Error de servidor',response.data.statusMessageApi);
                
            }
            // console.log(response.data.data)

        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Hubo un problema a la hora de intentar cargar los datos')
        }
    }

    return(
        <View style={{height,width}}>
            <View style={StyleMainWindow.headerBack}></View>
            <View style={StyleMainWindow.backRoots}></View>

            <View style={StyleMainWindow.Backcontainer}>
                <View style={StyleMainWindow.header}>
                    <View style={StyleMainWindow.filterContainer}>
                        <View style={StyleMainWindow.inputContainer}>
                            <View style={StyleMainWindow.enterFilter}>
                                <View style={StyleMainWindow.span}>
                                    <SearchIcon/>
                                </View>
                                <TextInput style={StyleMainWindow.input} placeholder='Filtrar OP' onChangeText={()=>{}} keyboardType={'numeric'}/>
                            </View>
                        </View>
                    </View>
                    <View style={StyleMainWindow.fieldContainer}>
                        <View  style={{width:'13%',height:'100%'}}></View>
                        <View style={{justifyContent:'center',alignItems:'center',width:'18%',height:'100%'}}><Text style={StyleMainWindow.textField}>OP</Text></View>
                        <View style={{justifyContent:'center',alignItems:'center',width:'13%',height:'100%'}}><Text style={StyleMainWindow.textField}>PLANE...</Text></View>
                        <View style={{justifyContent:'center',alignItems:'center',width:'15%',height:'100%'}}><Text style={StyleMainWindow.textField}>EJECUT...</Text></View>
                        <View style={{justifyContent:'center',alignItems:'center',width:'15%',height:'100%'}}><Text style={StyleMainWindow.textField}>SIN EJEC...</Text></View>
                        <View style={{justifyContent:'center',alignItems:'center',width:'24%',height:'100%'}}><Text style={StyleMainWindow.textField}>REFERENCIA...</Text></View>
                    </View> 
                </View>
                <View style={StyleMainWindow.root1}>
                    <View style={StyleMainWindow.frame1}>
                        {loading?
                        <LoadingComponent/>:
                        opList.length===0?
                        <EmptyInterfaz data={"Una vez se empiece a generar registros prodrá visualizar la información de las OP's aquí"}/>:
                        <FlatList renderItem={item=>
                        <OPcomponent data={item} />} data={opList}/>}

                    </View>
                    <TouchableOpacity style={StyleMainWindow.buttonOCR} onPress={()=>{setModalModulosList(true)}}>
                        
                        <LayersIcon size={height*0.04} color={currentColorMain}/>
                    </TouchableOpacity>
                </View>
                <View style={StyleMainWindow.root2}>
                    <View style={StyleMainWindow.frame2}>

                        {loading?<LoadingComponent/>:
                        ocrList.length===0?
                        <EmptyInterfaz data={"Una vez se empiece a generar registros prodrá visualizar la información de las OCR's aquí"}/>:
                        ocrList.map(element=><OcrComponent data={element} key={element.ocr_id}/>)}
                        {ocrList.length===0?<></>:<OcrComponentButtonFacturacion/>}

                    </View>
                </View>
            </View>
            <View style={StyleMainWindow.buttonMenu}>
                <TouchableOpacity onPress={()=>{setAsideState(!asideState)}}>
                    <MenuIcon data={currentColorMain}/>
                </TouchableOpacity>
            </View> 
        </View>
    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro

const StyleMainWindow=StyleSheet.create({
    headerBack:{
        width:'100%',
        height:'10%',
        backgroundColor:currentColorMain
    },
    backRoots:{
        height:'90%',
        width:'100%',
        backgroundColor:currentColorMain2
    },
    Backcontainer:{
        position:'absolute',
        width,
        height,
        // justifyContent:'space-evenly'
    },
    header:{
        // position:'absolute',
        // zIndex:10,
        height:'13%',
        width:'95%',
        backgroundColor:'#FFF',
        marginTop:'5%',
        borderRadius:height*0.01,
        alignSelf:'center'
    },
    root1:{
        // position:'absolute',
        // zIndex:10,
        height:'56%',
        width:'95%',
        marginTop:'3%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        alignSelf:'center',
        justifyContent:'center'
    },
    root2:{
        // position:'absolute',
        // zIndex:10,
        height:'16%',
        width:'95%',
        marginTop:'3%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        alignSelf:'center',
        justifyContent:'center'
    },
    buttonOCR:{
        position:'absolute',
        zIndex:20,
        height:height*0.05,
        width:height*0.05,
        right:0,
        bottom:0,
        marginRight:'5%',
        marginBottom:'5%',
        borderRadius:height*0.04,
        backgroundColor:'#FFF',
        elevation:height*0.006,
        justifyContent:'center',
        alignItems:'center'
    },
    frame1:{
        borderWidth:width*0.002,
        borderColor:currentColorMain2,
        height:'95%',
        width:'95%',
        borderRadius:height*0.01,
        alignSelf:'center',
    },
    frame2:{
        flexDirection:'row',
        borderWidth:width*0.002,
        borderColor:currentColorMain2,
        height:'85%',
        width:'95%',
        paddingLeft:'1%',
        borderRadius:height*0.01,
        justifyContent:'flex-start',
        alignSelf:'center',
        alignItems:'center'
    },
    filterContainer:{
        width:'100%',
        height:'60%',
        // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    fieldContainer:{
        width:'100%',
        height:'40%',
        // backgroundColor:'aqua',
        flexDirection:'row',
        borderTopWidth:height*0.002,
        borderTopColor:currentColorMain2
    },
    empty1:{
        height:'100%',
        width:'13%',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    fieldContent:{
        height:'100%',
        width:'17%',
        justifyContent:'center',
        alignItems:'center'
    },
    textField:{
        color:'#515151',
        fontWeight:'bold',
        fontSize:height*0.013
    },
    inputContainer:{
        height:'100%',
        width:'70%',
    },
    enterFilter:{
        height:'100%',
        width:'100%',
        // backgroundColor:'aqua',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    input:{
        height:'50%',
        width:'100%',
        borderWidth:height*0.0015,
        borderColor:currentColorMain1,
        borderRadius:height*0.05,
        paddingLeft:'15%',
        fontSize:height*0.02,
        textAlign:'center'
    },
    span:{
        position:'absolute',
        left:'3%',
        borderColor:currentColorMain1,
        borderRadius:height*0.005,
        width:'10%',
        height:'40%',
        alignItems:'center',
        justifyContent:'center'
    },
    fieldSelectFilter:{
        // backgroundColor:'aqua',
        width:'100%',
        height:'40%',
        alignItems:'center',
    },
    buttonMenu:{
        position:'absolute',
        zIndex:20,
        height:height*0.07,
        width:height*0.07,
        backgroundColor:'#FFF',
        top:'5%',
        left:'1%',
        borderRadius:height*0.005,
        elevation:height*0.05,
        justifyContent:'center',
        alignItems:'center'
    },
    // filterFieldContainer:{
    //     width
    // }
    aside:{
        position:'absolute',
        zIndex:40,
        height:height,
        width:width*0.4,
        backgroundColor:currentColorMain
    },
    courtain:{
        position:'absolute',
        backgroundColor:'black',
        width:width,
        left:-width,
        height:height,
        zIndex:30,
        opacity:0.4

    }
    ,headerAside:{
        // backgroundColor:'aqua',
        width:'100%',
        height:'20%',
        justifyContent:'flex-end'
    },
    buttonMenu2:{
        position:'absolute',
        zIndex:40,
        elevation:height* 0.01,
        width:height*0.07,
        height:height*0.07,
        borderRadius:height*0.01,
        backgroundColor:currentColorMain,
        left:'75%',
        top:'5%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:height*0.001,
        borderColor:'#FFF'
    },
    img:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        flex:1,
        resizeMode:'contain',
        // opacity:0.5

    },
    bodyAside:{
        width:'100%',
        height:'80%',
        paddingTop:'10%'
    },
    fieldOptionContainer:{
        width:'100%',
        height:'10%',
        // borderTopWidth:height*0.002,
        flexDirection:'row',
        justifyContent:'center'
    },
    iconOptionContainer:{
        height:'100%',
        width:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    contentOptionContainer:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignItems:'flex-start'
        // backgroundColor:'aqua'
    },
    contentOptions:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:height*0.02
    },
    filterFieldContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'30%'
    }
});

