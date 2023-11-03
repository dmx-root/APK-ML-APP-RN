import { StyleSheet,Image,Text,View,Dimensions, TouchableOpacity, } from 'react-native';
import {BarIcon, OCRIcon }                                          from '../../view/iconosSvg'
import { useMainContex }                                            from '../../context/mainContext';
// import { usePlantaContext } from '../../context/plantaContext';

const {height}=Dimensions.get('window');

const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain4='#717171';  //color de letra resaltado

export function OPcomponent({data}){
    // const {setOpInfoInterfaz,SetModalSpecificationOP}=usePlantaContext();
    const handlerTouch=()=>{
        // SetModalSpecificationOP(true);
        // setOpInfoInterfaz(data.item);
    }
    return(
        <View>
        <TouchableOpacity style={StyleOp.Opcontainer} onPress={handlerTouch}>
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
                <Text style={[StyleOp.content,{color:'#BBB'}]}>{data.item.ref.lenght>7?data.item.ref.slice(0,7)+'...':data.item.ref}</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

const StyleOp=StyleSheet.create({
    Opcontainer:{
        flexDirection:'row',
        height:height*0.085,
        margin:'1%',
        marginBottom:0,
        maxWidth:'98%',
        borderColor:currentColorMain2,
        backgroundColor:'#F7F7F7',
        borderBottomWidth:height*0.003,
        borderRadius:height*0.005
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
        height:height*0.04,
        width:height*0.04,
        alignSelf:'center'
    },
    OpIconContainer:{
        height:'100%',
        width:'15%',
        justifyContent:'center'
    },
    OpNumber:{
        height:'100%',
        width:'20%',
        justifyContent:'center'
    },
    OpCantidad:{
        width:'15%',
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
        width:'15%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    OpCreateOcr:{
        width:'15%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'

    },
    content:{
        fontSize:height*0.017,
        fontWeight:'bold',
        color:currentColorMain4,
        // color:'#999'
    },
    createIconContainer:{
        // backgroundColor:'aqua',
        width:'15%',
        alignItems:'center',
        justifyContent:'center'
    }

});
