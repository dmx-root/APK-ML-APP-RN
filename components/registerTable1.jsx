import { View, TouchableOpacity,StyleSheet,Dimensions,Text } from "react-native"
import { useMainContex } from "../context/mainContext";
import { useState } from "react";
import { useRegisterContext } from "../context/registerContext";

const {width,height}=Dimensions.get('window')

export function RegisterTable1(){
    
    const {setModalEditState}=useMainContex();
    const {setTallaState, setcodigoState,codigoToTalla,cantidad, setCantidad}=useRegisterContext();
    const handlerButtonEdit=(talla)=>{
        setTallaState(talla);
        setModalEditState(true);
    }
    return(
    <View style={StyleRegisterWindow.table1}>
        <View style={StyleRegisterWindow.talla}>
            <View style={StyleRegisterWindow.textContainerTitle}>
                <Text style={StyleRegisterWindow.textTable1Title}>TALLA</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1Talla}>XS/30</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1Talla}>S/32</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1Talla}>M/34</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1Talla}>L/36</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1Talla}>XL38</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1Talla}>2XL/40</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1Talla}>3XL/42</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1Talla}>4XL/44</Text>
            </View>
        </View>
        <View style={StyleRegisterWindow.codigo}>
            <View style={StyleRegisterWindow.textContainerTitle}>
                <Text style={StyleRegisterWindow.textTable1Title}>CODIGO</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[7].codigo===''?'---- ---- ----':codigoToTalla[7].codigo}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[6].codigo===''?'---- ---- ----':codigoToTalla[6].codigo}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[5].codigo===''?'---- ---- ----':codigoToTalla[5].codigo}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[4].codigo===''?'---- ---- ----':codigoToTalla[4].codigo}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[3].codigo===''?'---- ---- ----':codigoToTalla[3].codigo}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[2].codigo===''?'---- ---- ----':codigoToTalla[2].codigo}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[1].codigo===''?'---- ---- ----':codigoToTalla[1].codigo}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[0].codigo===''?'---- ---- ----':codigoToTalla[7].codigo}</Text>
            </View>
        </View>
        <View style={StyleRegisterWindow.cantidad}>
            <View style={StyleRegisterWindow.textContainerTitle}>
                <Text style={StyleRegisterWindow.textTable1Title}>CANTIDAD</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[7].cantidad===0?'---- ----- ----':codigoToTalla[7].cantidad}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[6].cantidad===0?'---- ----- ----':codigoToTalla[6].cantidad}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[5].cantidad===0?'---- ----- ----':codigoToTalla[5].cantidad}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[4].cantidad===0?'---- ----- ----':codigoToTalla[4].cantidad}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[3].cantidad===0?'---- ----- ----':codigoToTalla[3].cantidad}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[2].cantidad===0?'---- ----- ----':codigoToTalla[2].cantidad}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[1].cantidad===0?'---- ----- ----':codigoToTalla[1].cantidad}</Text>
            </View>
            <View style={StyleRegisterWindow.textContainer}>
                <Text style={StyleRegisterWindow.textTable1}>{codigoToTalla[0].cantidad===0?'---- ----- ----':codigoToTalla[0].cantidad}</Text>
            </View>
        </View>
        <View style={StyleRegisterWindow.buttons}>
            <View style={StyleRegisterWindow.buttonsContainer}>
                <TouchableOpacity style={StyleRegisterWindow.buttonsTallaEdit}
                 onPress={()=>handlerButtonEdit('XS/30')}>
                    <Text style={StyleRegisterWindow.textEditButton}>Editar</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleRegisterWindow.buttonsContainer}>
                <TouchableOpacity style={StyleRegisterWindow.buttonsTallaEdit}
                 onPress={()=>handlerButtonEdit('S/32')}>
                    <Text style={StyleRegisterWindow.textEditButton}>Editar</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleRegisterWindow.buttonsContainer}>
                <TouchableOpacity style={StyleRegisterWindow.buttonsTallaEdit}
                 onPress={()=>handlerButtonEdit('M/34')}>
                    <Text style={StyleRegisterWindow.textEditButton}>Editar</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleRegisterWindow.buttonsContainer}>
                <TouchableOpacity style={StyleRegisterWindow.buttonsTallaEdit}
                 onPress={()=>handlerButtonEdit('L/36')}>
                    <Text style={StyleRegisterWindow.textEditButton}>Editar</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleRegisterWindow.buttonsContainer}>
                <TouchableOpacity style={StyleRegisterWindow.buttonsTallaEdit}
                 onPress={()=>handlerButtonEdit('XL/38')}>
                    <Text style={StyleRegisterWindow.textEditButton}>Editar</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleRegisterWindow.buttonsContainer}>
                <TouchableOpacity style={StyleRegisterWindow.buttonsTallaEdit}
                 onPress={()=>handlerButtonEdit('2XL/40')}>
                    <Text style={StyleRegisterWindow.textEditButton}>Editar</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleRegisterWindow.buttonsContainer}>
                <TouchableOpacity style={StyleRegisterWindow.buttonsTallaEdit}
                 onPress={()=>handlerButtonEdit('3XL/42')}>
                    <Text style={StyleRegisterWindow.textEditButton}>Editar</Text>
                </TouchableOpacity>
            </View>
            <View style={StyleRegisterWindow.buttonsContainer}>
                <TouchableOpacity style={StyleRegisterWindow.buttonsTallaEdit}
                 onPress={()=>handlerButtonEdit('4XL/44')}>
                    <Text style={StyleRegisterWindow.textEditButton}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}


const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro

const StyleRegisterWindow=StyleSheet.create({

    table1:{
        height:'67%',
        width:'95%',
        backgroundColor:currentColorMain1,
        borderWidth:width*0.002,
        borderColor:'#c1c1c1',
        borderRadius:height*0.005,
        alignSelf:'center',
        margin:width*0.025,
        flexDirection:'row'
    },
    talla:{
        width:'27%',
        height:'95%',
        // backgroundColor:'#FFF',
        marginLeft:'1%',
        marginTop:'1.6%'
    },
    codigo:{
        width:'27%',
        height:'95%',
        // backgroundColor:'#FFF',
        marginLeft:'1%',
        marginTop:'1.6%'
    },
    cantidad:{
        width:'27%',
        height:'95%',
        // backgroundColor:'#FFF',
        marginLeft:'1%',
        marginTop:'1.6%'
    },
    buttons:{
        width:'14%',
        height:'95%',
        marginLeft:'1%',
        marginTop:'1.6%',
        paddingTop:'6%',

    },
    textTable1Title:{
        color:'#FFF',
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:height*0.015
    },
    textContainerTitle:{
        backgroundColor:currentColorMain,
        height:'8%',
        justifyContent:'center',
        marginBottom:'1%',
        

    },
    textContainer:{
        height:height*0.04,
        marginBottom:'2.5%',
        backgroundColor:'#FFF',
        width:'100%',
        justifyContent:'center',
        paddingRight:'10%',

    },
    buttonsContainer:{
        height:height*0.0415,
        marginBottom:'2.5%',
        width:'100%',
        justifyContent:'center',
    },
    buttonsTallaEdit:{
        backgroundColor:currentColorMain,
        width:'100%',
        height:'90%',
        justifyContent:'center',
        borderRadius:height*0.005
    },
    textTable1Talla:{
        alignSelf:'flex-start',
        color:'#919191',
        fontSize:height*0.015,
        fontWeight:'bold',
        paddingLeft:'35%'
    },
    textEditButton:{
        fontSize:height*0.015,
        alignSelf:'center',
        fontWeight:'bold',
        color:'#FFF'
    },
    textTable1:{
        alignSelf:'flex-end',
        color:'#919191',
        fontSize:height*0.012,
        fontWeight:'bold',
        paddingLeft:'25%',
    },

});