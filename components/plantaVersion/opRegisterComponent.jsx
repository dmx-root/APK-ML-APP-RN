import { usePlantaContext } from '../../context/plantaContext.jsx';
import {DatabaseIcon,BarIcon} from '../../view/iconosSvg.jsx';
import {View,Text,StyleSheet,Dimensions} from 'react-native';

const {height,width}=Dimensions.get('window');

export function OpRegisterComponent(){
    const{currentOp}=usePlantaContext();
    return(
        <View style={StyleRegisterWindow.OpContainer}>
            <View style={StyleRegisterWindow.iconContainer}>
                <DatabaseIcon data={currentColorMain}/>
                <Text style={StyleRegisterWindow.textInformation}>OP</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={StyleRegisterWindow.textContent}>OP:</Text>
                <Text style={{marginLeft:'15%',color:currentColorMain3,fontSize:width*0.025}}>{currentOp.op}</Text>
            </View>
            <View style={StyleRegisterWindow.cantidadContainer}>
                <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:width*0.025}}>Meta:</Text>
                <Text style={StyleRegisterWindow.cantidadInfo}>{currentOp.cantPlanned}</Text>
            </View>
            <View style={StyleRegisterWindow.actionAnalitycs}>
                <View style={{width:'20%'}}>
                    <BarIcon data={'green'}/>
                </View>
                <View style={{width:'30%'}}>
                    <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:width*0.025}}>{currentOp.cantCompleted}</Text>
                </View>
                <View style={{width:'20%'}}>
                    <BarIcon data={'red'}/>
                </View>
                <View style={{width:'30%'}}>
                    <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:width*0.025}}>{currentOp.cantPlanned-currentOp.cantCompleted}</Text>
                </View>
                <View></View>
                <View></View>
            </View>
        </View>
    )
}
const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio

const StyleRegisterWindow=StyleSheet.create({
    OpContainer:{
        height:width*0.22,
        width:width*0.25,
        backgroundColor:currentColorMain1,
        borderRadius:height*0.01,
        marginLeft:'2%',
        borderColor:currentColorMain2,
        padding:'1.5%'
    },
    iconContainer:{
        flexDirection:'row',
        width:'100%',
        height:'35%',
    },
    textContent:{
        alignSelf:'center',
        color:currentColorMain3,
        fontSize:width*0.03,
        fontWeight:'bold',

    },
   
    textInformation:{
        color:currentColorMain,
        fontWeight:'bold',
        paddingLeft:'10%',
        fontSize:width*0.03
    },
    actionAnalitycs:{
        height:'30%',
        width:'95%',
        // marginTop:'18%',
        // backgroundColor:'#FFF',
        flexDirection:'row',
        alignItems:'center',
    },
    cantidadContainer:{
        width:'100%',
        height:'20%',
        flexDirection:'row'
    },
    cantidadInfo:{
        marginLeft:'30%',
        color:currentColorMain3,
        fontSize:width*0.03,
        
    }

});