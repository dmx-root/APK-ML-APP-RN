import { StyleSheet,Image ,Text, FlatList,View, TextInput, Dimensions, TouchableOpacity, Keyboard } from 'react-native';
import {BarIcon,PlusRect, RowDown,RowUpp} from '../view/iconosSvg'
import { useState } from 'react';
import {OCRConponent} from '../components/OCR.jsx'
const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

export function OPcomponent(){
    const [desp,despState]=useState(false)
    const [OCRSList,setOCRSList]=useState([{id:1},{id:2},{id:3},{id:4}]);
    return(
        <View>
        <TouchableOpacity style={StyleOp.Opcontainer}>
            <View style={StyleOp.OpIconContainer}>
                <Image  style={StyleOp.img} source={require('../media_public/img/base-de-datos.png')}/>
            </View>
            <View style={StyleOp.OpNumber}>
                <Text style={StyleOp.content}>2310</Text>
            </View>
            <View style={StyleOp.OpCantidad}>
                <Text style={StyleOp.content}>10000</Text>
            </View>
            <View style={StyleOp.OpPositiveActions}>
                <BarIcon data={'green'}/>
                <Text style={StyleOp.content}>45%</Text>
            </View>
            <View style={StyleOp.OpNegativeActions}>
                <BarIcon data={'red'}/>
                <Text style={StyleOp.content}>1300</Text>
            </View>
            <View style={StyleOp.OpNumberOcr}>
                <Text style={StyleOp.content}> 45</Text>
            </View>
            <TouchableOpacity onPress={()=>{despState(!desp)}} style={StyleOp.OpCreateOcr}>
                {
                    desp?<RowUpp/>:<RowDown/>
                }
            </TouchableOpacity>
            <View style={StyleOp.Opbutton}></View>
        </TouchableOpacity>
        {
        desp?<View style={StyleOp.listaOCR}>
            {/* <OCRConponent/>
            <OCRConponent/>
            <OCRConponent/> */}
            {/* <FlatList data={datos} renderItem={element=><OCRConponent/>} scrollEnabled={true} keyExtractor={(item) => item.id} key={element=>element.id}/> */}
            {
                OCRSList.map(element=>(
                    <OCRConponent key={element.id}/>
                ))
            }
        </View>:<View></View>
        }
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
        width:'15%',
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
        flex:1,
        alignItems:'center',
        flexDirection:'row'
    },
    OpNumberOcr:{
        width:'10%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
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
        color:currentColorMain4
    }

});

const datos = [
    { id: 'a', title: 'Elemento 01' },
    { id: 'b', title: 'Elemento 02' },
    { id: 'c', title: 'Elemento 03' },
    { id: 'd', title: 'Elemento 04' },
    // { id: 'e', title: 'Elemento 05' },
    // { id: 'f', title: 'Elemento 06' },
    // { id: 'g', title: 'Elemento 07' },
    // { id: 'h', title: 'Elemento 08' },
    // { id: 'i', title: 'Elemento 09' },
    // { id: 'j', title: 'Elemento 10' },
  ];