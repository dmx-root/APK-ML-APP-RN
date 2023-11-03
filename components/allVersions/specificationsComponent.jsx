import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {DatabaseIcon} from '../../view/iconosSvg.jsx';
import { useMainContex } from '../../context/mainContext.jsx';


const {width,height}=Dimensions.get('window');

const currentColorMain='#888';   //azul oscuroo

export function SpecificationsComponent({data}){

    // const {modalOcrList,setModalOcrList,opSpeInfoInterfaz,setOpSpeInfoInterfaz}=usePlantaContext();
    const { opSpeInfoInterfaz,setOpSpeInfoInterfaz,setModalOcrList}= useMainContex()
    const handlerTouch=()=>{
        setModalOcrList(true);
        setOpSpeInfoInterfaz(data.item);
    }
    return (
        <TouchableOpacity style={StyleInfoViewOcr.header} onPress={handlerTouch}>
            <View style={StyleInfoViewOcr.iconContainer}>
                {/* <OCRIcon data={{color:currentColorMain,size:width*0.08,}}/> */}
                <DatabaseIcon data={'#c1c1c1'}/>
            </View>
            <View style={StyleInfoViewOcr.iconCheckContainer}>
                {/* <CheckBoxEmpty data={{color:'#BBB',size:height*0.025}}/> */}
            </View>
            <View style={StyleInfoViewOcr.rowField}>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>COLOR:</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.color_label.length>7?data.item.color_label.slice(0,6)+'...':data.item.color_label}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>TALLA:</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.tll_label}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>PLANEADO:</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.cant_spe_planned}</Text>
                    </View>
                </View>
            </View>
            <View style={StyleInfoViewOcr.rowField}>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>MODULO:</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>---</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>EJECUTADA</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.cant_spe_completed}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainerTitle}>
                        <Text style={StyleInfoViewOcr.labelTitle}>RESTANTE:</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.cant_spe_planned-data.item.cant_spe_completed}</Text>
                    </View>
                </View>
            </View>
    </TouchableOpacity>
    )
}
const StyleInfoViewOcr=StyleSheet.create({

    header:{
        height:height*0.11,
        width:'98%',
        backgroundColor:'#EEE',
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
        width:'45%',
        justifyContent:'center',
        alignContent:'center',
        paddingLeft:'8%'
    },
    fieldContainerTitle:{
        height:'100%',
        width:'55%',
        justifyContent:'center',
        alignContent:'center',
        // backgroundColor:'aqua',
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