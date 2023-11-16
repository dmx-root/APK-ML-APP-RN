import {Dimensions,View,TextInput,Text,TouchableOpacity,StyleSheet, TouchableWithoutFeedback, Alert}   from 'react-native'
import { useEffect, useRef, useState }                                                          from 'react';
import { usePlantaContext }                                                                     from '../../context/plantaContext';
import { EmptyInterfaz }                                                                        from '../../components/allVersions/emptyInterfaz';
import { EmployeeInformationComponent }                                                         from '../../components/adminVersion/employeeInformationComponent';
import {EmployeeComponent}                                                                      from '../../components/plantaVersion/employeeComponent'


const {height,width} =Dimensions.get('window')

export function ModalRegisterEmployeesPlanta(){

    const [valueCode,setValueCode,]=useState();
    const {setModalRegisterEmployees,employeeList}=usePlantaContext();
    const [empList, setEmpList]=useState([]);
    const [empListA, setEmpListA]=useState([]);
    const [empListB, setEmpListB]=useState([]);
    
    const input=useRef(null);
    
    useEffect(()=>{
        input.current.focus();
        setEmpList(employeeList);//CREAR CONTROLADOR QUE HAGA LA PARTICION 
    },[]);

    useEffect(()=>{
        
        if(empList.length<9){
            setEmpListA(empList.slice(0,8));
            setEmpListB([]);
        }else{
            setEmpListA(empList.slice(0,8));
            setEmpListB(empList.slice(8,16));
        }

    },[empList.length]);
    

    const handlerSubmit=()=>{
        input.current.focus();

        const findedValue=empList.filter(element=>element.emp_code===valueCode);
        console.log(empList)

        if(findedValue.length===0){

            const newEmployee={
                creation_date: new Date().toLocaleDateString(), 
                emp_code: valueCode.slice(0,3), 
                emp_description:"Operario de maquina", 
                emp_name: 'operario'+valueCode.slice(0,3), 
                mdl_id: 2, 
                mdl_label:"MODULO-2", 
                number_employees: 2
            };

            if(empList.length<16)setEmpList([...empList,newEmployee]);
            else Alert.alert('¡Límite alcanzado!','Has alcanzado el límite máximo de operarios');

        }else {
            const arrayValueRemove=empList.filter(element=>element.emp_code!==valueCode);
            setEmpList(arrayValueRemove);
        }
        setValueCode('');
    }

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
                                {empListA.length===0?<EmptyInterfaz data={'Ingresar los operarios'}/>:empListA.map((element,index)=><EmployeeInformationComponent data={element} key={index}/>)}
                            </View>
                            <View style={StyleModalEdit.frameColumna}>
                                {empListB.length===0?<EmptyInterfaz data={'Ingresar los operarios'}/>:empListB .map((element,index)=><EmployeeInformationComponent data={element} key={index}/>)}
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
                                    ref={input}
                                    onBlur={handlerSubmit}
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
                                <Text style={{color:currentColorMain,fontWeight:'bold',fontSize:width*0.03}}>CANCELAR</Text>
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
        height:'80%',
        top:'-5%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
    },
    titleContainer:{
        width:'100%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center'
    },
    contentContainer:{
        width:'100%',
        height:'13%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    fame:{
        width:'94%',
        height:'65%',
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
        height:'9%',
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