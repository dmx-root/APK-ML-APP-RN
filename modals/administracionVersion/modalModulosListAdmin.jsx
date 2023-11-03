import { ModuloComponentAdmin }                                     from '../../components/adminVersion/moduloComponentAdmin';
import { useAdminContext }                                          from '../../context/adminContext';
import { FlatList,TouchableWithoutFeedback}                         from 'react-native';
import { StyleSheet, View, Dimensions,}                             from 'react-native';
import { QueryDataModulo }                                          from '../../api/apiConsults'
import { useMainContex } from '../../context/mainContext';

const {width,height}=Dimensions.get('window');
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function ModalModulosListAdmin(){

    const {modulosList,setModalModulosList}=useAdminContext();
    

    return(
        <TouchableWithoutFeedback onPress={()=>{setModalModulosList(false)}}>
            <View style={StyleInfoViewOP.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOP.window}>
                        <View style={StyleInfoViewOP.root}>
                            <FlatList style={StyleInfoViewOP.flatList} renderItem={item=>
                            <ModuloComponentAdmin data={item}/>} data={modulosList} key={element=>element.mdl_id}/>
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
        height:height*0.7,
        width:width*0.80,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        height:'13%',
        width:'95%',
        borderRadius:height*0.005,
        alignSelf:'center',
        flexDirection:'row'
    },
    root:{
        borderRadius:height*0.005,
        backgroundColor:'#FAFAFA',
        width:'95%',
        height:'93%',
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
    }
})
