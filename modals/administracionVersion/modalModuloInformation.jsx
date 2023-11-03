import { ModuloComponentAdmin }                                     from '../../components/adminVersion/moduloComponentAdmin';
import { useAdminContext }                                          from '../../context/adminContext';
import { FlatList,TouchableWithoutFeedback}                         from 'react-native';
import { StyleSheet, View, Dimensions,Text}                             from 'react-native';
import { QueryDataModulo }                                          from '../../api/apiConsults'
import { useMainContex } from '../../context/mainContext';
import { ModuloInformationComponentAdmin } from '../../components/adminVersion/moduloInformationComponentAdmin';
import { ModuloIconList3 } from '../../view/iconosSvg';
import { EmptyInterfaz } from '../../components/allVersions/emptyInterfaz';

const {width,height}=Dimensions.get('window');
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function ModalModuloInformationAdmin(){

    const {modulosList,setModalModuloInformation}=useAdminContext();
    
    return(
        <TouchableWithoutFeedback onPress={()=>{setModalModuloInformation(false)}}>
            <View style={StyleInfoViewOP.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOP.window}>
                        <View style={StyleInfoViewOP.header}>
                            <View style={StyleInfoViewOP.columnIcon}>
                                <ModuloIconList3 color={'#999'} size={height*0.06}/>
                            </View>
                            
                            <View style={StyleInfoViewOP.column}>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>OP</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>TALLA</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>No. OPERA</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                
                            </View>
                            <View style={StyleInfoViewOP.column}>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>REFERENCIA</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>REVISOR/A</Text>
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
                        <View style={StyleInfoViewOP.titleContainer}>
                            <Text style={{fontSize:width*0.033,fontWeight:'bold',color:currentColorMain4}}>ANALITYCS</Text>
                        </View>
                        <View style={StyleInfoViewOP.analitycs}>
                            <View style={StyleInfoViewOP.column1}>
                                <View style={StyleInfoViewOP.row1}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>HORA-I</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row1}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>COMPROMISO</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>100%</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row1}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>No. OPERA</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row1}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>No. OPERA</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                
                            </View>
                            <View style={StyleInfoViewOP.column1}>
                                <View style={StyleInfoViewOP.row1}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>HORA-F</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row1}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>REVISOR/A</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row1}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>Tittle</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                <View style={StyleInfoViewOP.row1}>
                                    <View style={StyleInfoViewOP.tittleContainer}>
                                        <Text style={StyleInfoViewOP.title}>Tittle</Text>
                                    </View>
                                    <View style={StyleInfoViewOP.contentContainer}>
                                        <Text style={StyleInfoViewOP.content}>Content</Text>
                                    </View>
                                </View>
                                
                            </View>
                        </View>         
                        <View style={StyleInfoViewOP.titleContainer}>
                            <Text style={{fontSize:width*0.033,fontWeight:'bold',color:currentColorMain4}}>LISTA DE OPERARIOS</Text>
                        </View>
                        
                        <View style={StyleInfoViewOP.employeers}>
                            <View style={StyleInfoViewOP.frame}>
                                <EmptyInterfaz data={'Sin Operarios'}/>
                            </View>
                            <View style={StyleInfoViewOP.frame}>
                                <EmptyInterfaz data={'Sin Operarios'}/>
                            </View>
                            
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
        height:height*0.85,
        width:width*0.85,
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
        height:'100%',
        width:'49%',
        borderRadius:height*0.005,
        borderWidth:height*0.0015,
        borderColor:currentColorMain4,
        marginRight:'2%'
    },
    analitycs:{
        borderRadius:height*0.005,
        backgroundColor:'#00000010',
        flexDirection:'row',
        width:'95%',
        height:'18%',
        alignSelf:'center',
        marginTop:'3%',
        alignItems:'center',
        // borderWidth:height*0.0015,
        // borderColor:currentColorMain4,
        overflow:'hidden'
    },
    employeers:{
        borderRadius:height*0.005,
        // backgroundColor:'#EEE',
        width:'95%',
        height:'50%',
        alignSelf:'center',
        marginTop:'3%',
        alignItems:'center',
        overflow:'hidden',
        flexDirection:'row'
    },
    titleContainer:{
        marginTop:'3%',
        width:'100%',
        height:'3%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    flatList:{
        height:'100%',
        width:'100%'
    },
    column:{
        width:'38%',
        height:'100%',
    },
    column1:{
        width:'50%',
        height:'100%',
    },
    columnIcon:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    row:{
        width:'100%',
        height:'33%',
        flexDirection:'row'
    },
    row1:{
        width:'100%',
        height:'25%',
        flexDirection:'row'
    },
    tittleContainer:{
        width:'65%',
        height:'100%',
        justifyContent:'center',
        // alignItems:'center',
        // backgroundColor:'aqua'
    },
    contentContainer:{
        width:'35%',
        height:'100%',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    title:{
        fontSize:height*0.015,
        fontWeight:'bold',
        color:'#888',
        marginLeft:'10%'
    },
    content:{
        fontSize:height*0.015,
        // fontWeight:'bold',
        color:'#999'

    }
})
