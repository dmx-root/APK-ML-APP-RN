import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback}  from 'react-native';
import { Alert,ActivityIndicator, FlatList}                             from 'react-native';
import { useMainContex }                                                from '../context/mainContext';
import { useEffect, useState }                                          from 'react';
import { IncentivosComponent }                                          from './incentivoComponent';
import { QueryDataOperarios }                                           from '../api/apiConsults';

const {width,height}=Dimensions.get('window');

export function IncentivosList(){

    const uriOPERARIOS='http://172.16.2.93:8000/api/operarios';
    const ObjectQueryOperarios=new QueryDataOperarios(uriOPERARIOS);

    const {setModalIncentivosState,incentivosByOcr}=useMainContex();
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState([]);

    useEffect(()=>{
        loadInformation(incentivosByOcr);
    },[]);

    const loadInformation = async (belongTo)=>{
        try {
            const response=await ObjectQueryOperarios.getData(belongTo);
            handlerInformation(response.data[0]);
            setLoading(false);
        } catch (error) {
            console.log(error);
            Alert.alert('Error de servidor', 'Hubo un problema a la hora de cargar los datos, intentelo más tarde');
        }
    }

    const handlerInformation=async (object)=>{
        let newData=[]
        Object.keys(object).forEach(element=>{
            if(object[element]!==null&&element!=='id'&&element!=='belong_to'){
                newData=[...newData,object[element]];
            }
        });
        setData(newData);
    }
    
    if(loading){
        return(
        <View style={StyleIncentivos.windowContainer}>
            <View style={StyleIncentivos.window}>
                <ActivityIndicator size="large" />
            </View>
        </View>
        )
    }
    
    return(
        <TouchableWithoutFeedback onPress={()=>{setModalIncentivosState(false)}}>
            <View style={StyleIncentivos.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleIncentivos.window}>
                        <View style={StyleIncentivos.frame}>
                        
                            {data.length!==0?<FlatList renderItem={item=><IncentivosComponent data={item} key={item.index} />} data={data}/>:
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{color:'#CCC',fontSize:height*0.02,textAlign:'center'}}>No se agregaron usuarios.</Text>
                            </View>
                            }

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}

const StyleIncentivos=StyleSheet.create({
    windowContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:0,
        height,
        width,
        backgroundColor:'#00000040'
    },
    window:{
        height:height*0.4,
        width:width*0.65,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    frame:{
        height:'95%',
        width:'90%',
        borderWidth:height*0.001,
        borderColor:'#DDD'
    },
    button:{
        position:'absolute',
        height:'7%',
        width:'10%',
        borderRadius:height*0.05,
        backgroundColor:'#FFF',
        right:0,
        top:0,
        margin:'3%',
        elevation:height*0.005,
        justifyContent:'center',
        alignItems:'center'
    }
})