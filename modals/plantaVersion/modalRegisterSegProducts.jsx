import {Dimensions,View,TextInput,Text,TouchableOpacity,StyleSheet, TouchableWithoutFeedback, Alert}    from 'react-native'
import { useState, useRef, useEffect }                                                                  from 'react';
import { usePlantaContext }                                                                             from '../../context/plantaContext';
import {EmptyInterfaz}                                                                                  from '../../components/allVersions/emptyInterfaz';
import { OcrSegComponent }                                                                              from '../../components/plantaVersion/ocrSegComponent';
import { useMainContex }                                                                                from '../../context/mainContext';
import { QueryDataOCR }                                                                                 from '../../api/apiConsults';

const {height,width} =Dimensions.get('window')

export function ModalRegisterSegProductsPlanta(){
   
    const {setRegisterSegundas,segList,informationSegundas}=usePlantaContext();
    const {currentUser,DNS,userToken} =useMainContex();
    
    const [valueCode,setValueCode,]=useState();
    const [information,setInformation]=useState({});
    const [ocrList,setOcrList]=useState([]);
    const [ocrListA,setOcrListA]=useState([]);
    const [ocrListB,setOcrListB]=useState([]);
    
    const ApiQueryOcr=new QueryDataOCR(DNS,'/api/ml/ocr/register/segundas',userToken);

    const [currentValue,setCurrentValue]=useState({
        currentColor:'--- --- ---',
        currentTalla:'--- --- ---',
        currentEAN:'--- --- ---'
    });

    const input=useRef(null);
    
    useEffect(()=>{

        input.current.focus();
        setInformation(informationSegundas);

    },[]);

    useEffect(()=>{
        ocrList.length>3?setOcrListB(ocrList.slice(3,6)):setOcrListA(ocrList.slice(0,3));
    },[ocrList.length]);

    async function loadInformation(data){
        try {
            const response=await ApiQueryOcr.registerSegundasOcr(data);
            if(response.data.statusCodeApi===1){
                Alert.alert('¡Elementos enviados!','Elementos enviados con exito');
                setRegisterSegundas(false)
            }
            else if(response.data.statusCodeApi===0){
                Alert.alert('Error de proceso',response.data.statusMessageApi);
            }
            else if(response.data.statusCodeApi===-1){
                Alert.alert('Error de inserción',response.data.statusMessageApi);
            }
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Hubo un error a la hora de intentar cargar la información, intentelo más tarde');
        }
    }

    const handlerRegister=()=>{

        input.current.focus();

        setValueCode('');
        const filterValue=segList.find((element)=>element.ean_id===valueCode);
        if(filterValue){

            const newValue={
                currentColor:filterValue.color_label,
                currentTalla:filterValue.tll_id,
                currentEAN:filterValue.ean_id 
            }

            setCurrentValue(newValue);

            const newOcr={
                registerById:currentUser.user_document_id,
                moduloId:informationSegundas.modulo,
                unitsCant:1,
                tallaId:filterValue.tll_id,
                colorId:filterValue.color_id,
                colorLabel:filterValue.color_label,
                opId:filterValue.op,
                ean:filterValue.ean_id,
            };
            
            const valueFinded=ocrList.filter(element=>element.ean===valueCode);
            if(valueFinded.length===0){

                setOcrList([...ocrList,newOcr]);
                
            }
            else{
                const alterList=ocrList.map(element=>{
                    if(element.ean===valueCode){
                        element.unitsCant=element.unitsCant+1;
                    }
                    return element;
                });
            }
            
        }else{
            Alert.alert('¡Error en el código de barras!','El código de barras ingresado no pertenece a la OP seleccionada');
        }
    }
   
    const handlerSubmit=()=>{
        if(ocrList.length!==0){ 
            const bodyData=ocrList.map(element=>{
                const newBodyData={
                    registerById:element.registerById,
                    moduloId:element.moduloId,
                    unitsCant:element.unitsCant,
                    tallaId:element.tallaId,
                    colorId:element.colorId,
                    opId:element.opId
                }
                return newBodyData
            });

            loadInformation(bodyData);

        }else{
            Alert.alert('Elementos vacios','Asegurese de ingresar la información necesaria ')
        }
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{setRegisterSegundas(false)}}>
            <View style={StyleModalEdit.root}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleModalEdit.boxMesagge}>
                        <View style={StyleModalEdit.header}>
                            <View style={StyleModalEdit.titleContainer}>
                                <Text style={{fontSize:width*0.035,fontWeight:'bold',color:currentColorMain4}}>REGISTRO DE SEGUNDAS</Text>
                            </View>
                            <View style={StyleModalEdit.haderFieldsContainer}>
                                <View style={{height:'100%',justifyContent:'center',width:'50%'}}>
                                    <View style={{flexDirection:'row',height:'35%',alignItems:'center'}}>
                                        <View style={{width:'50%'}}>
                                            <Text style={{fontSize:width*0.028,fontWeight:'bold',color:currentColorMain4}}>OP:</Text>
                                        </View>
                                        <View style={{width:'50%'}}>
                                            <Text style={{fontSize:width*0.028,fontWeight:'bold',color:'#AAA'}}>{information.op}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row',height:'35%',alignItems:'center'}}>
                                        <View style={{width:'50%'}}>
                                            <Text style={{fontSize:width*0.028,fontWeight:'bold',color:currentColorMain4}}>REFERENCIA:</Text>
                                        </View>
                                        <View style={{width:'50%'}}>
                                            <Text style={{fontSize:width*0.028,fontWeight:'bold',color:'#AAA'}}>{information.referencia}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:'100%',justifyContent:'center',width:'50%'}}>
                                    <View style={{flexDirection:'row',height:'35%',alignItems:'center'}}>
                                        <View style={{width:'50%'}}>
                                            <Text style={{fontSize:width*0.028,fontWeight:'bold',color:currentColorMain4}}>FECHA:</Text>
                                        </View>
                                        <View style={{width:'50%'}}>
                                            <Text style={{fontSize:width*0.028,fontWeight:'bold',color:'#AAA'}}>12/45/12</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row',height:'35%',alignItems:'center'}}>
                                        <View style={{width:'50%'}}>
                                            <Text style={{fontSize:width*0.028,fontWeight:'bold',color:currentColorMain4}}>OPERARIO/A:</Text>
                                        </View>
                                        <View style={{width:'50%'}}>
                                            <Text style={{fontSize:width*0.028,fontWeight:'bold',color:'#AAA'}}>{currentUser.user_name.slice(0,10)+'...'}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={StyleModalEdit.fame}>
                            <View style={StyleModalEdit.frameColumna}>
                                {ocrListA.length===0?<EmptyInterfaz/>:ocrListA.map(element=><OcrSegComponent key={element.ean} data={element} modulo={informationSegundas.modulo}/>)}
                                {/* <EmptyInterfaz/> */}
                                {/* <OcrSegComponent/>
                                <OcrSegComponent/>
                            <OcrSegComponent/> */}
                            </View>
                            <View style={StyleModalEdit.frameColumna}>
                                {ocrListB.length===0?<EmptyInterfaz/>:ocrListB.map(element=><OcrSegComponent key={element.ean} data={element} modulo={informationSegundas.modulo}/>)}
                                {/* <EmptyInterfaz/> */}
                            </View>
                        </View>
                        <View style={StyleModalEdit.contentContainer}>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>COLOR</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1}}>
                                    <Text style={{alignSelf:'center'}}>{currentValue.currentColor}</Text>
                                </View>
                            </View>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>TALLA</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1}}>
                                    <Text style={{alignSelf:'center'}}>{currentValue.currentTalla}</Text>
                                </View>
                            </View>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>EAN</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1,alignSelf:'center'}}>
                                    <Text style={{alignSelf:'center'}}>{currentValue.currentEAN}</Text>
                                </View>
                            </View>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>NUEVO REGISTRO</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1,alignSelf:'center'}}>
                                    <TextInput
                                    onChangeText={(text)=>{setValueCode(text)}} 
                                    value={valueCode}
                                    ref={input}
                                    onBlur={handlerRegister}
                                    ></TextInput>
                                    <TouchableOpacity></TouchableOpacity>
                                </View>
                            </View>
                            
                        </View>
                        <View style={StyleModalEdit.actionContainer}>
                            <TouchableOpacity
                            style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]} 
                            onPress={()=>{setRegisterSegundas(false)}}
                            >
                                <Text style={{color:currentColorMain,fontWeight:'bold',fontSize:width*0.03}}>CANCELAR</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain}]}
                            onPress={handlerSubmit}
                            >
                                <Text style={{color:'#FFF',fontWeight:'bold',fontSize:width*0.03}}>ENVIAR</Text>
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
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain4='#717171';  //color de letra resaltado

const StyleModalEdit=StyleSheet.create({
    root:{
        position:'absolute',
        width,
        height,
        backgroundColor:'#00000099',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesagge:{
        width:'95%',
        height:'75%',
        top:'-5%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
    },
    header:{
        width:'100%',
        height:'25%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    titleContainer:{
        height:'40%',
        justifyContent:'center'
    },
    haderFieldsContainer:{
        flexDirection:'row',
        height:'60%',
        alignItems:'center',
        // backgroundColor:'aqua',
        width:'92%'
    },
    contentContainer:{
        width:'100%',
        height:'15%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    fame:{
        width:'94%',
        height:'45%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    frameColumna:{
        height:'100%',
        width:'48%',
        borderWidth:height*0.001,
        borderColor:'#CCC',
        justifyContent:'flex-start',
        padding:'0.5%'
    },
    actionContainer:{
        width:'100%',
        height:'11%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    buttons:{
        width:'45%',
        height:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:height*0.005
    },
    fieldContainer:{
        width:'23%',
        height:'80%',
        margin:height*0.001,
        borderWidth:height*0.002,
        borderColor:currentColorMain2

    },
    fieldContainerButton:{
        width:'23%',
        height:'42%',
        alignSelf:'flex-end',
        marginBottom:'1.5%',
        margin:height*0.001,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:currentColorMain1,
        borderRadius:height*0.005,


    },
    subtitlesContainer:{
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:currentColorMain2,
        borderBottomWidth:height*0.002
        
    },
    subtitle:{
        color:currentColorMain4,
        fontWeight:'bold',
        fontSize:width*0.02
    }
})