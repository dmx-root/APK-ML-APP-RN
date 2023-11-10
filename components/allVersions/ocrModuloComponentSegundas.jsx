import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {CheckBoxEmpty, CheckBoxFill, OCRIcon } from '../../view/iconosSvg.jsx';
import { useMainContex } from '../../context/mainContext.jsx';
import { useFacturacionContext } from '../../context/facturacionContext.jsx';

const {width,height}=Dimensions.get('window');

const currentColorMain='#888';   
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function OcrModuloComponentSegundas({data}){
    
    const {setModalCheckInUnits}= useFacturacionContext();
    const {setOcrInfoInterfaz}=useMainContex();

    const handlerTouchComponent=()=>{
        setModalCheckInUnits(true);
        setOcrInfoInterfaz(data.item);
    }

    return(
        <TouchableOpacity style={StyleInfoViewOcr.header1} onPress={handlerTouchComponent}>
            <View style={StyleInfoViewOcr.iconContainer}>
                <OCRIcon data={{color:'#44329C',size:width*0.08,}}/>
            </View>
            <View style={StyleInfoViewOcr.iconCheckContainer}>
                {data.item.prc_state?<CheckBoxFill data={{color:'#44329C',size:height*0.025}}/>:<CheckBoxEmpty data={{color:'#44329ca5',size:height*0.025}}/>}
            </View>
            <View style={StyleInfoViewOcr.rowField}>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>FECHA:</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.dete_creation.slice(0,10)}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>REG. POR</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.register_by_id.slice(0,7)+'...'}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>REV. POR</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.check_in_by===null?'Sin rev...':data.item.check_in_by.slice(0,7)+'...'}</Text>
                    </View>
                </View>
            </View>
            <View style={StyleInfoViewOcr.rowField}>

                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>MODULO</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.mdl_id}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>UNIDADES</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.units_cant}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>HORA-REV</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.check_in_date===null?'Sin rev...':data.item.check_in_date.slice(0,9)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const StyleInfoViewOcr=StyleSheet.create({

    header1:{
        height:height*0.09,
        width:'98%',
        backgroundColor:'#C7CCEC',
        borderRadius:height*0.004,
        alignSelf:'center',
        flexDirection:'row',
        marginTop:'0.5%',
        marginBottom:'0.5%',
        borderBottomWidth:height*0.002,
        borderBottomColor:'#C1C1C1'
    },
    header2:{
        height:height*0.11,
        width:'98%',
        backgroundColor:'#F9EBEA',
        borderRadius:height*0.004,
        alignSelf:'center',
        flexDirection:'row',
        marginTop:'0.5%',
        marginBottom:'0.5%',
        borderBottomWidth:height*0.002,
        borderBottomColor:'#C1C1C1'
    },
    rowField:{
        width:'41%',
        height:'100%',
        // flexDirection:'row'
        // backgroundColor:'aqua'
    },
    iconContainer:{
        height:'100%',
        width:'16%',
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
        height:'33%',
        flexDirection:'row',
    },
    fieldContainer:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'8%'
    },
    labelTitle:{
        color:'#44329C',
        fontWeight:'bold',
        fontSize:width*0.024
    },
    fieldontent:{
        color:'#44329ca5',
        fontSize:height*0.015
    },
    icon:{
        height:'60%'
    }
})