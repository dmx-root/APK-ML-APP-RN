import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {OCRIcon } from '../../view/iconosSvg.jsx';
import { usePlantaContext } from '../../context/plantaContext.jsx';
// import { usePlantaContext } from '../context/plantaContext.jsx';
// import { useMainContex } from '../context/mainContext.jsx';

const {width,height}=Dimensions.get('window');

const currentColorMain='#888';   //azul oscuro
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function OcrSegComponent({data,modulo}){

    const {setModalComponentSeg}=usePlantaContext();
    
    const handlerTouch=()=>{
        setModalComponentSeg(true);
    }

    return(
        <TouchableOpacity style={StyleInfoViewOcr.header1} onPress={handlerTouch}>
            <View style={StyleInfoViewOcr.iconContainer}>
                <OCRIcon data={{color:currentColorMain,size:width*0.07}}/>
            </View>
            <View style={StyleInfoViewOcr.iconCheckContainer}>
                {/* <CheckBoxEmpty data={{color:'#BBB',size:height*0.025}}/> */}
            </View>
            <View style={StyleInfoViewOcr.rowField}>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>CANT:</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainerData}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.unitsCant}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>COLOR</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainerData}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.colorLabel}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>TALLA</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainerData}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.tallaId}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>MODULO</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainerData}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{modulo}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const StyleInfoViewOcr=StyleSheet.create({
    header1:{
        height:'33%',
        width:'98%',
        backgroundColor:'#eee',
        borderRadius:height*0.004,
        alignSelf:'center',
        flexDirection:'row',
        marginTop:'0.5%',
        marginBottom:'0.5%',
        borderBottomWidth:height*0.002,
        borderBottomColor:'#C1C1C1'
    },
    rowField:{
        width:'75%',
        height:'100%',
        // flexDirection:'row'
        // backgroundColor:'aqua'
    },
    iconContainer:{
        height:'100%',
        width:'25%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:currentColorMain1
    },
    iconCheckContainer:{
        position:'absolute',
        right:'0%',
        marginRight:'0.4%',
        marginTop:'1.2%'

    },
    rowContente:{
        width:'100%',
        height:'24%',
        flexDirection:'row',
    },
    fieldContainerTitle:{
        height:'100%',
        width:'45%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'8%'
    },
    fieldContainerData:{
        height:'100%',
        width:'55%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'8%'
    },
    labelTitle:{
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:width*0.024
    },
    fieldontent:{
        color:'#999',
        fontSize:height*0.015
    },
    icon:{
        height:'60%'
    }
})