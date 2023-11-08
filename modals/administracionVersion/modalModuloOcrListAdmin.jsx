import { ModuloComponentAdmin }                                     from '../../components/adminVersion/moduloComponentAdmin';
import { useAdminContext }                                          from '../../context/adminContext';
import { FlatList,TouchableWithoutFeedback}                         from 'react-native';
import { StyleSheet, View, Dimensions,Text}                             from 'react-native';
import { QueryDataModulo }                                          from '../../api/apiConsults'
import { useMainContex } from '../../context/mainContext';
import { ModuloInformationComponentAdmin } from '../../components/adminVersion/moduloInformationComponentAdmin';
import { ModuloIconList2 } from '../../view/iconosSvg';

const {width,height}=Dimensions.get('window');
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function ModalAllOcrList(){

    // const {modulosList,setModalModulosInformation}=useAdminContext();
    
    return(
        <TouchableWithoutFeedback onPress={()=>{setModalModulosInformation(false)}}>
            <View style={StyleInfoViewOP.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOP.window}>
                        <View style={StyleInfoViewOP.header}>
                            
                            <View style={StyleInfoViewOP.column}>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>OPERANDO</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>FALT. INSU</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>DAÑOS MEC.</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                
                            </View>
                            <View style={StyleInfoViewOP.column}>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>INACTIVOS</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>Tittle</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>Tittle</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                        <View style={StyleInfoViewOP.root}>
                            
                            {/* <FlatList style={StyleInfoViewOP.flatList} renderItem={item=>
                            <ModuloInformationComponentAdmin data={item}/>} data={modulosList} key={element=>element.mdl_id}/> */}
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
        height:'15%',
        width:'95%',
        borderRadius:height*0.009,
        alignSelf:'center',
        flexDirection:'row',
        backgroundColor:'#EEE'
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
        height:'80%',
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
    // columnIcon:{
    //     width:'20%',
    //     height:'100%',
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    row:{
        width:'100%',
        height:'33%',
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

    }
})
