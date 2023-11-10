import { StyleSheet,Image,Text,View,Dimensions, TouchableOpacity, } from 'react-native';
import { BarIcon, CheckBoxEmpty, CheckBoxFill }                                                  from '../../view/iconosSvg'
import { useMainContex }                                            from '../../context/mainContext';

const {height}=Dimensions.get('window');

const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain4='#717171';  //color de letra resaltado

export function OPcomponentAdmin({data}){

    const {setOpInfoInterfaz,SetModalSpecificationOP} =useMainContex();
    
    const handlerTouch=()=>{
        SetModalSpecificationOP(true);
        setOpInfoInterfaz(data.item);
        console.log('presiono')
    }

    return(
        <TouchableOpacity style={StyleOp.Opcontainer} onPress={handlerTouch}>
            <View style={StyleOp.OpRowcontainer}>
                <View style={StyleOp.OpRowcontainerInfo}>
                    <View style={StyleOp.OpIconContainer}>
                        <Image  style={StyleOp.img} source={require('../../media_public/img/base-de-datos.png')}/>
                    </View>
                    <View style={StyleOp.OpNumber}>
                        <Text style={StyleOp.content}>{data.item.op}</Text>
                    </View>
                    <View style={StyleOp.OpCantidad}>
                        <Text style={StyleOp.content}>{data.item.cant_planned}</Text>
                    </View>
                    <View style={StyleOp.OpPositiveActions}>
                        <BarIcon data={'green'}/>
                        <Text style={StyleOp.content}>{data.item.cant_completed}</Text>
                    </View>
                    <View style={StyleOp.OpNegativeActions}>
                        <BarIcon data={'red'}/>
                        <Text style={StyleOp.content}>{data.item.cant_planned-data.item.cant_completed}</Text>
                    </View>
                    <View style={StyleOp.OpNumberOcr}>
                        <Text style={[StyleOp.content,{color:'#BBB'}]}>{data.item.ref}</Text>
                    </View>
                </View>
                <View style={StyleOp.OpRowContainerDetails}>
                    <View   style={StyleOp.statusProccesFields}>
                        <View  style={StyleOp.rowFields}>
                            <View  style={StyleOp.fieldTittleContainer}>
                                <Text style={StyleOp.tittle}>PROCE INI.</Text>
                            </View>
                            <View  style={StyleOp.fieldTextContainer}>
                                <Text style={StyleOp.text}>{data.item.op_dete_open_task===null?'No asignado':data.item.op_dete_open_task.slice(0,10)+' - '+data.item.op_dete_open_task.slice(11,19)}</Text>
                            </View>
                            <View  style={StyleOp.fieldTittleContainer}>
                                <Text style={StyleOp.tittle}>PROCE FIN.</Text>
                            </View>
                            <View  style={StyleOp.fieldTextContainer}>
                                <Text  style={StyleOp.text}>{data.item.op_dete_close_task===null?'No asignado':data.item.op_dete_close_task.slice(0,10)+' - '+data.item.op_dete_close_task.slice(11,19)}</Text>
                            </View>
                        </View>
                        <View  style={StyleOp.rowFields}>
                            <View  style={StyleOp.fieldTittleContainer}>
                                <Text style={StyleOp.tittle}>PLAN INI.</Text>
                            </View>
                            <View  style={StyleOp.fieldTextContainer}>
                                <Text style={StyleOp.text}>{data.item.op_dete_open_planned===null?'No asignado':data.item.op_dete_open_planned.slice(0,10)+' - '+data.item.op_dete_open_planned.slice(11,19)}</Text>
                            </View>
                            <View  style={StyleOp.fieldTittleContainer}>
                                <Text style={StyleOp.tittle}>PLAN FIN</Text>
                            </View>
                            <View  style={StyleOp.fieldTextContainer}>
                                <Text style={StyleOp.text}>{data.item.op_dete_close_planned===null?'No asignado':data.item.op_dete_close_planned.slice(0,10)+' - '+data.item.op_dete_close_planned.slice(11,19)}</Text>
                            </View>
                        </View>
                    </View>
                    <View   style={StyleOp.statusProccesContainer}>
                        <View style={StyleOp.statusField}>
                            <Text style={{color:'#AAA',fontWeight:'bold',fontSize:height*0.013}}>COMPLET.</Text>
                        </View>
                        <View style={StyleOp.iconStatusContainer}>
                            {data.item.op_dete_close_task===null?<CheckBoxEmpty data={{color:'#BBB', size:20}}/>:<CheckBoxFill data={{color:'#777',size:20}}/>}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const StyleOp=StyleSheet.create({
    Opcontainer:{
        height:height*0.1,
        margin:'1%',
        marginBottom:0,
        flexDirection:'row',
        borderColor:currentColorMain2,
        backgroundColor:'#F7F7F7',
        borderBottomWidth:height*0.003,
        borderRadius:height*0.005
    },
    OpRowcontainer:{
        height:'100%',
        width:'100%',
        // backgroundColor:'aqua'
    },
    OpRowcontainerInfo:{
        borderColor:'#EEE',
        backgroundColor:'#F7F7F7',
        borderBottomWidth:height*0.003,
        width:'100%',
        height:'65%',
        flexDirection:'row',

    },
    OpRowContainerDetails:{
        height:'35%',
        width:'100%',
        flexDirection:'row'
    },
    statusProccesFields:{
        height:'100%',
        width:'78%',
        marginLeft:'2%'

    },
    statusProccesContainer:{

        // backgroundColor:'aqua',
        flexDirection:'row',
        height:'100%',
        width:'20%'
    },
    iconStatusContainer:{
        height:'100%',
        width:'40%',
        justifyContent:'center',
        alignItems:'center',

    },
    rowFields:{
        width:'100%',
        height:'50%',
        flexDirection:'row'
    },
    fieldTittleContainer:{
        width:'20%',
        height:'100%',
        justifyContent:'center',
        // alignItems:'center',
    },
    fieldTextContainer:{
        width:'30%',
        height:'100%',
        justifyContent:'center',
        // alignItems:'center'
    },
    statusField:{
        width:'60%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#BBB',
        fontSize:height*0.012
    },
    tittle:{
        color:'#BBB',
        fontSize:height*0.012,
        fontWeight:'bold'
    },
    listaOCR:{
        width:'98%',
        height:height*0.15,
        flexGrow:0,
        backgroundColor:currentColorMain2,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    img:{
        height:height*0.045,
        width:height*0.045,
        alignSelf:'center'
    },
    OpIconContainer:{
        height:'100%',
        width:'15%',
        justifyContent:'center'
    },
    OpNumber:{
        height:'100%',
        width:'18%',
        justifyContent:'center'
    },
    OpCantidad:{
        width:'14%',
        height:'100%',
        justifyContent:'center'
    },
    OpPositiveActions:{
        width:'15%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center'
    },
    OpNegativeActions:{
        width:'15%',
        height:'100%',
        // flex:1,
        alignItems:'center',
        flexDirection:'row',
        // backgroundColor:'aqua'
    },
    OpNumberOcr:{
        width:'22%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    content:{
        fontSize:height*0.017,
        fontWeight:'bold',
        color:currentColorMain4,
        // color:'#999'
    },
    createIconContainer:{
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
    }

});
