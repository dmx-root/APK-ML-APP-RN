import { StyleSheet, Text, View, Dimensions, TouchableOpacity}  from 'react-native';
import { Alert,ActivityIndicator, TouchableWithoutFeedback}     from 'react-native';
import { usePlantaContext } from '../../context/plantaContext';
import { InfoComponent } from '../../components/plantaVersion/infoComponent';
import { useEffect, useState } from 'react';
import { HeaderOcr } from '../../components/headerOcr';
import { FooterOcr } from '../../components/allVersions/footerOcr';
import { useMainContex } from '../../context/mainContext';

const {width,height}=Dimensions.get('window');

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain3='#44329ca5';//Azul claro intermedio
const currentColorMain4='#717171';  //color de letra resaltado

export function ModalOcrInfo(){
    
    const {ocrInfoInterfaz,setModalOcrInfo}=useMainContex();
    const [talla,setTalla] =useState([]);
    
    useEffect(()=>{
        const tallaMOP=['XS','S','M','L','XL','2XL','3Xl','4XL'];
        const tallaMOB=['30','32','34','36','38','40','42','44'];
        ocrInfoInterfaz.op.slice(0,3)==='MOP'?setTalla(tallaMOP):setTalla(tallaMOB);
    },[]);

    return(
        <TouchableWithoutFeedback  onPress={()=>{setModalOcrInfo(false)}}>
            <View style={StyleInfoViewOCR.windowContainer}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleInfoViewOCR.window}>
                        <HeaderOcr/>
                        <View style={StyleInfoViewOCR.root1}>
                            <View style={StyleInfoViewOCR.table}>
                                <View style={StyleInfoViewOCR.row}>
                                    <View style={StyleInfoViewOCR.fieldContainerLabel}>
                                        <Text style={StyleInfoViewOCR.tableLabel}>TALLA</Text>
                                    </View>
                                    <View style={StyleInfoViewOCR.fieldContainerLabel}>
                                        <Text style={StyleInfoViewOCR.tableLabel}>EAN</Text>
                                    </View>
                                    <View style={StyleInfoViewOCR.fieldContainerLabel}>
                                        <Text style={StyleInfoViewOCR.tableLabel}>CANTIDAD</Text>
                                    </View>
                                </View>
                                {talla.map(element=><InfoComponent tallaLabel={element} key={element}/>)}
                            </View>
                        </View>
                        <FooterOcr/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}

const StyleInfoViewOCR=StyleSheet.create({
    windowContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        zIndex:0,
        height,
        width,
        backgroundColor:'#00000050'
    },
    window:{
        height:height*0.6,
        width:width*0.80,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        justifyContent:'center',
        alignItems:'center'
    },
 
    rowField:{
        width:'50%',
        height:'100%',
    },
    rowContente:{
        width:'100%',
        height:'32%',
        flexDirection:'row',
    },
    row:{
        flexDirection:'row',
        width:'100%',
        height:'9%',
        marginTop:'0.5%',  
    },
    fieldContainerLabel:{
        width:'32.5%',
        marginLeft:'0.5%',
        backgroundColor:currentColorMain,
        justifyContent:'center'
    },
    tableLabel:{
        color:'#FFF',
        alignSelf:'center',
        fontSize:width*0.025,
        fontWeight:'bold'
    },
    
    root1:{
        borderRadius:height*0.005,
        backgroundColor:currentColorMain1,
        width:'95%',
        height:'55%',
        alignSelf:'center',
        marginTop:'3%',
        justifyContent:'center',
        alignItems:'center'
    },
    table:{
        width:'95%',
        height:'95%',
        // flexDirection:'row',

    }
});