import { View, TouchableOpacity,StyleSheet,Dimensions,Text }    from "react-native";
import { usePlantaContext }                                     from "../../context/plantaContext";
import { useEffect, useState }                                  from "react";
import { useMainContex }                                        from "../../context/mainContext";

const {width,height}=Dimensions.get('window')

export function InfoComponent({tallaLabel}){

    // const {ocrInfoInterfaz}=usePlantaContext();
    const {ocrInfoInterfaz}=useMainContex();
    const [cant,setCant]=useState('');
    const [ean,setEan]=useState('');

    useEffect(()=>{
        ocrInfoInterfaz.talla_id===tallaLabel?setCant(ocrInfoInterfaz.units_cant):setCant(0);
        ocrInfoInterfaz.talla_id===tallaLabel?setEan(ocrInfoInterfaz.ean_id):setCant('');
        console.log(ocrInfoInterfaz);
    },[]);
    
    return(
        <View style={StyleRegisterComponent.row}>
            <View style={StyleRegisterComponent.fieldContainer}>
                <Text style={StyleRegisterComponent.text}>{tallaLabel}</Text>
            </View>
            <View style={StyleRegisterComponent.fieldContainer}>
                <Text style={StyleRegisterComponent.text}>{ean===''?'--- --- ---':ean}</Text>
            </View>
            <View style={StyleRegisterComponent.fieldContainer}>
                <Text style={StyleRegisterComponent.text}>{cant===''?'--- --- ---':cant}</Text>
            </View>
        </View>

    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro

const StyleRegisterComponent=StyleSheet.create({

    table1:{
        height:'67%',
        width:'95%',
        backgroundColor:currentColorMain1,
        borderWidth:width*0.002,
        borderColor:'#c1c1c1',
        borderRadius:height*0.005,
        alignSelf:'center',
        margin:width*0.025,
    },
    row:{
        flexDirection:'row',
        width:'100%',
        height:'10.3%',
        marginTop:'0.5%'

    },
    fieldContainer:{
        width:'32.5%',
        marginLeft:'0.5%',
        backgroundColor:'white',
        justifyContent:'center'
    },
    buttonContainer:{
        width:'12%',
        marginLeft:'1%',
        // borderRadius:'20%'
        // backgroundColor:'white'
    },
    button:{
        backgroundColor:currentColorMain,
        height:'100%',
        width:'100%',
        borderRadius:width*0.01,
        justifyContent:'center',
    },
    labelButton:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:width*0.025,
        alignSelf:'center'
    },
    text:{
        fontSize:height*0.015,
        alignSelf:'center',
        color:'#717171',
        fontWeight:'bold'
    }

});