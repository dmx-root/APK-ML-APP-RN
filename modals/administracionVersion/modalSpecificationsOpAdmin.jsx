import { QueryDataOp }                                                              from '../../api/apiConsults'
import { useMainContex }                                                            from '../../context/mainContext';
import { SpecificationsComponent }                                                  from '../../components/plantaVersion/specificationsComponent.jsx';
import {  Image, Alert,FlatList,TouchableWithoutFeedback }                          from 'react-native';
import { StyleSheet, Text, View, Dimensions,}                                       from 'react-native';
import { useEffect, useState }                                                      from 'react';
import { LoadingComponent }                                                         from '../components/loadingComponent';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function ModalSpecificationsOp(){

    const {opInfoInterfaz,SetModalSpecificationOP}=useMainContex();
    
    const {DNS,mainView} = useMainContex();
    const [speOp,setSpeOp]=useState([]);
    const [loading,setLoading ]=useState(true);

    useEffect(()=>{
        loadInformationAll();

    },[]);
    
    async function loadInformationAll(){
        const ApiQueryOp=new QueryDataOp(DNS,'/api/ml/op/all/specifications/');
        try {
            const response=await ApiQueryOp.getAllSpecificationOp(opInfoInterfaz.op);
            setSpeOp(response.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor','Hubo un error a la hora de cargar la información, intentelo más tarde');
        }
    }
 
    return(
        <TouchableWithoutFeedback onPress={()=>{SetModalSpecificationOP(false)}}>
            <View style={StyleInfoViewOP.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOP.window}>
                        <View style={StyleInfoViewOP.header}>
                            <View style={StyleInfoViewOP.iconContainer}>
                                <Image  style={StyleInfoViewOP.img} source={require('../media_public/img/base-de-datos.png')}/>
                            </View>
                            <View style={StyleInfoViewOP.rowField}>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'37%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>OP:</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'63%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opInfoInterfaz.op}</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'37%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>REF...</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'63%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opInfoInterfaz.ref.length>15?opInfoInterfaz.ref.slice(0,15)+'...':opInfoInterfaz.ref}</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'37%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>CANT...</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'63%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>- - - - - - - - -</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={StyleInfoViewOP.rowField}>
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'60%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>PLANEADO</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'40%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opInfoInterfaz.cant_planned}</Text>
                                    </View>
                                </View>
                               
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'60%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>EJECUTADO</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'40%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opInfoInterfaz.cant_completed}</Text>
                                    </View>
                                </View>
                                
                                <View style={StyleInfoViewOP.rowContente}>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'60%'}]}>
                                        <Text style={StyleInfoViewOP.labelTitle}>RESTANTE</Text>
                                    </View>
                                    <View style={[StyleInfoViewOP.fieldContainer,{width:'40%'}]}>
                                        <Text style={StyleInfoViewOP.fieldontent}>{opInfoInterfaz.cant_planned-opInfoInterfaz.cant_completed}</Text>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                        <View style={StyleInfoViewOP.root}>
                            {loading?
                            <LoadingComponent message={'Cargando lista de detalle de OP...'}/>:
                            <FlatList style={StyleInfoViewOP.flatList} renderItem={item=>
                            <SpecificationsComponent data={item}/>} data={speOp} key={element=>element.tll_label}/>}
                            
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
        height:height*0.6,
        width:width*0.80,
        backgroundColor:'#FFF',
        // backgroundColor:currentColorMain1,
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        height:'20%',
        width:'95%',
        backgroundColor:currentColorMain1,
        // backgroundColor:'#FFF',
        borderRadius:height*0.005,
        alignSelf:'center',
        flexDirection:'row'
    },
    root:{
        borderRadius:height*0.005,
        backgroundColor:'#FAFAFA',
        width:'95%',
        height:'73%',
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
        justifyContent:'center'
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
        fontWeight:'bold',
        fontSize:width*0.025
    },
    fieldontent:{
        color:currentColorMain3,
        fontSize:height*0.015
    },
    img:{
        height:height*0.055,
        width:height*0.055,
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