import { usePlantaContext } from '../../context/plantaContext.jsx';
import {ModuloIcon,BarIcon} from '../../view/iconosSvg.jsx';
import {View,Text,StyleSheet,Dimensions} from 'react-native';

const {height,width}=Dimensions.get('window');

export function ModuloRegisterComponent(){
    const {currentOcr}=usePlantaContext();
    return(
        <View style={StyleRegisterWindow.moduloContainer}>
            <View style={StyleRegisterWindow.iconContainer}>
                <ModuloIcon/>
                <Text style={StyleRegisterWindow.textInformation}>Modulo</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={StyleRegisterWindow.textContent}>No. Mod:</Text>
                <Text style={{marginLeft:'10%',color:currentColorMain3,fontSize:width*0.03}}>{currentOcr.moduloId}</Text>
            </View>
            <View style={StyleRegisterWindow.cantidadContainer}>
                <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:width*0.03}}>Meta:</Text>
                <Text style={StyleRegisterWindow.cantidadInfo}>{}</Text>
            </View>
            <View style={StyleRegisterWindow.actionAnalitycs}>
                <View style={{width:'20%'}}>
                    <BarIcon data={'green'}/>
                </View>
                <View style={{width:'30%'}}>
                    <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:width*0.025}}>xx</Text>
                </View>
                <View style={{width:'20%'}}>
                    <BarIcon data={'red'}/>
                </View>
                <View style={{width:'30%'}}>
                    <Text style={{color:currentColorMain3,fontWeight:'bold',fontSize:width*0.025}}>xx</Text>
                </View>
            </View>
        </View>
    )
}
const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain3='#44329ca5';//Azul claro intermedio

const StyleRegisterWindow=StyleSheet.create({
   
    moduloContainer:{
        height:width*0.22,
        width:width*0.25,
        // borderWidth:height*0.0015,
        borderRadius:height*0.01,
        backgroundColor:currentColorMain1,
        // backgroundColor:currentColorMain1,
        borderColor:currentColorMain2,
        marginLeft:'2%',
        padding:'1.5%'
    },
    iconContainer:{
        flexDirection:'row',
        width:'100%',
        height:'35%',
    },
    textInformation:{
        color:currentColorMain,
        fontWeight:'bold',
        paddingLeft:'10%',
        fontSize:width*0.03
    },
    textContent:{
        alignSelf:'center',
        color:currentColorMain3,
        fontSize:width*0.03,
        fontWeight:'bold',

    },
    informationFiel:{
        flexDirection:'row',
        height:'22%',
        marginTop:'2%',
        // backgroundColor:'aqua',
        // justifyContent:'center
        alignItems:'center',
        paddingLeft:'5%'
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