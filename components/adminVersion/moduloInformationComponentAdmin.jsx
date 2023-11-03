import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {ModuloIconList}                                         from '../../view/iconosSvg.jsx';
import { useAdminContext }                                      from '../../context/adminContext.jsx';

const {width,height}=Dimensions.get('window');

const currentColorMain='#888';   //azul oscuro
const currentColorMain4='#e1e1e1';  //color de letra resaltado

export function ModuloInformationComponentAdmin({data}){
    // console.log(data)
    const {setModalModulosOcrList,setModalModuloInformation} = useAdminContext();
    return(
        <TouchableOpacity style={StyleInfoViewOcr.header1} onPress={()=>{setModalModuloInformation(true)}}>
            <View style={StyleInfoViewOcr.iconContainer}>
                <ModuloIconList/>
            </View>
            <View style={StyleInfoViewOcr.rowField}>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>MODULO</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.mdl_label}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>No. OPERARIO</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>{data.item.number_employees}</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>EFICIENCIA</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>UNIDADES</Text>
                    </View>
                </View>
                <View style={StyleInfoViewOcr.rowContente}>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.labelTitle}>OP ACTUAL</Text>
                    </View>
                    <View style={StyleInfoViewOcr.fieldContainer}>
                        <Text style={StyleInfoViewOcr.fieldontent}>MOB3548</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const StyleInfoViewOcr=StyleSheet.create({

    header1:{
        height:height*0.125,
        width:'98%',
        backgroundColor:'#DDD',
        borderRadius:height*0.004,
        alignSelf:'center',
        flexDirection:'row',
        marginTop:'0.25%',
        marginBottom:'0.25%',
        borderBottomWidth:height*0.002,
        borderBottomColor:'#C1C1C1'
    },
    rowField:{
        width:'82%',
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
        height:'25%',
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