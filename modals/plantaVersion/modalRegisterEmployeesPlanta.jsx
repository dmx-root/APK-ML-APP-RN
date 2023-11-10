import {Dimensions,View,TextInput,Text,TouchableOpacity,StyleSheet, TouchableWithoutFeedback}   from 'react-native'
import { useState }                                                                             from 'react';
import { usePlantaContext }                                                                     from '../../context/plantaContext';
import {EmployeeComponent}                                                                      from '../../components/plantaVersion/employeeComponent'


const {height,width} =Dimensions.get('window')

export function ModalRegisterEmployeesPlanta(){
    const [valueCode,setValueCode,]=useState();
    const {modalRegisterEmployees,setModalRegisterEmployees}=usePlantaContext();

    return(
        <TouchableWithoutFeedback onPress={()=>{setModalRegisterEmployees(false)}}>
            <View style={StyleModalEdit.root}>
                <TouchableWithoutFeedback onPress={()=>{}}>
                    <View style={StyleModalEdit.boxMesagge}>
                        <View style={StyleModalEdit.titleContainer}>
                            <Text style={{fontSize:width*0.03,fontWeight:'bold',color:currentColorMain4}}>REGISTRO DE OPERARIOS</Text>
                        </View>
                        <View style={StyleModalEdit.fame}>
                            <View style={StyleModalEdit.frameColumna}>
                                
                                {/* {dataColum1.length===0?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:'#AAA',textAlign:'center'}}>Ingresar los operarios pertenecientes al modulo</Text></View>:dataColum1.map(element=><EmployeeComponent data={element} key={element.operario}/>)} */}
                            </View>
                            <View style={StyleModalEdit.frameColumna}>
                                {/* {dataColum2.length===0?<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:'#AAA',textAlign:'center'}}>Ingresar los operarios pertenecientes al modulo</Text></View>:dataColum2.map(element=><UserIncentivoComponent data={element} key={element.operario}/>)} */}
                            </View>
                        </View>
                        <View style={StyleModalEdit.contentContainer}>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>OPERARIO/A</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1}}>
                                    <Text style={{alignSelf:'center'}}>{}</Text>
                                </View>
                            </View>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>ULTIMO CODIGO</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1}}>
                                    <Text style={{alignSelf:'center'}}>{}</Text>
                                </View>
                            </View>
                            <View style={StyleModalEdit.fieldContainer}>
                                <View style={StyleModalEdit.subtitlesContainer}>
                                    <Text style={StyleModalEdit.subtitle}>NUEVO REGISTRO</Text>
                                </View>
                                <View style={{justifyContent:'center',flex:1,alignSelf:'center'}}>
                                    <TextInput
                                    onChangeText={(text)=>{setValueCode(text)}} 
                                    value={valueCode}
                                    // ref={input}
                                    // onBlur={handlerSubmit}
                                    ></TextInput>
                                    <TouchableOpacity></TouchableOpacity>
                                </View>
                            </View>
                            <TouchableOpacity 
                            style={StyleModalEdit.fieldContainerButton}
                            onPress={()=>{}}
                            >
                                <Text style={{color:currentColorMain,fontSize:width*0.03,fontWeight:'bold'}}>REGISTRAR</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={StyleModalEdit.actionContainer}>
                            <TouchableOpacity
                            style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain1}]} 
                            onPress={()=>{setModalRegisterEmployees(false)}}
                            >
                                <Text style={{color:currentColorMain,fontWeight:'bold',fontSize:width*0.03}}>OMITIR ESTE PASO</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                            style={[StyleModalEdit.buttons,{backgroundColor:currentColorMain}]}
                            onPress={()=>{}}
                            >
                                <Text style={{color:'#FFF',fontWeight:'bold',fontSize:width*0.03}}>ENVIAR</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    )
}
const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro
const currentColorMain4='#717171';  //color de letra resaltado

const StyleModalEdit=StyleSheet.create({
    root:{
        position:'absolute',
        width,
        height,
        backgroundColor:'#00000099',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesagge:{
        width:'95%',
        height:'60%',
        top:'-5%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
    },
    titleContainer:{
        width:'100%',
        height:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    contentContainer:{
        width:'100%',
        height:'17%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    fame:{
        width:'94%',
        height:'50%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row'
    },
    frameColumna:{
        height:'100%',
        width:'48%',
        borderWidth:height*0.001,
        borderColor:'#CCC',
        justifyContent:'flex-start',
        padding:'0.5%'
    },
    actionContainer:{
        width:'100%',
        height:'13%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    buttons:{
        width:'40%',
        height:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:height*0.005
    },
    fieldContainer:{
        width:'23%',
        height:'80%',
        margin:height*0.001,
        borderWidth:height*0.002,
        borderColor:currentColorMain2

    },
    fieldContainerButton:{
        width:'23%',
        height:'42%',
        alignSelf:'flex-end',
        marginBottom:'1.5%',
        margin:height*0.001,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:currentColorMain1,
        borderRadius:height*0.005,


    },
    subtitlesContainer:{
        width:'100%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:currentColorMain2,
        borderBottomWidth:height*0.002
        
    },
    subtitle:{
        color:currentColorMain4,
        fontWeight:'bold',
        fontSize:width*0.02
    }
})