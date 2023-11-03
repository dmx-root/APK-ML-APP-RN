import {View, Dimensions, Text, TextInput, StyleSheet, TouchableOpacity, Alert}     from 'react-native'
import { useMainContex }                                                            from '../context/mainContext';
import { CheckIcon, CloseIcon }                                                     from '../view/iconosSvg';
import {  useState }                                                                from 'react';

const {height,width}= Dimensions.get('window')

export function ModalInputDate({title}){
    const {setModalStateDate,setNewUser,newUser} = useMainContex();
    const [day,setDay]=useState('');
    const [month,setMonth]=useState('');
    const [year,setYear]=useState('');
    const handlerSubmit=()=>{
        if(day&&month&&year){
            const date=year+'-'+month+'-'+day;
            newUser.userFechaExp=date;
            setNewUser(newUser);
            setModalStateDate(false);
        }
        else{
            Alert.alert('Campos vacios','Asegurese de haber completado todos los campos');
        }
    }
    
    return(
        <View style={StyleModalInput.root}>
            <View style={StyleModalInput.boxMesage}>
                <View style={StyleModalInput.titleBox}>
                    <Text style={StyleModalInput.tittle}>FECHA DE EXP-CEDULA {'(DD/MM/AAAA)'}</Text>
                </View>
                <View style={StyleModalInput.inputBox}>
                     <View style={StyleModalInput.inputContainer}>
                        <Text style={StyleModalInput.title}>DD</Text>
                        <TextInput style={StyleModalInput.input} keyboardType='numeric' onChangeText={(text)=>setDay(text)}></TextInput>
                     </View>
                     <View style={StyleModalInput.inputContainer}>
                        <Text style={StyleModalInput.title}>MM</Text>
                        <TextInput style={StyleModalInput.input} keyboardType='numeric' onChangeText={(text)=>setMonth(text)}></TextInput>
                     </View>
                     <View style={StyleModalInput.inputContainer}>
                        <Text style={StyleModalInput.title}>AAAA</Text>
                        <TextInput style={StyleModalInput.input} keyboardType='numeric'  onChangeText={(text)=>setYear(text)}></TextInput>
                     </View>
                </View>
                <View style={StyleModalInput.actionContainer}>
                    <TouchableOpacity style={[StyleModalInput.buttons]} onPress={()=>setModalStateDate(false)}>
                        <CloseIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[StyleModalInput.buttons]} onPress={handlerSubmit}>
                        <CheckIcon/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const currentColorMain1='#C7CCEC';  //Azul claro

const StyleModalInput=StyleSheet.create({
    root:{
        height,
        width,
        backgroundColor:'#00000045',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center'
    },
    boxMesage:{
        width:'90%',
        height:'20%',
        borderRadius:height*0.005,
        backgroundColor:'#FFF',

    },
    titleBox:{
        height:'20%',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    inputBox:{
        height:'40%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    inputContainer:{
        flexDirection:'row',
        height:'100%',
        width:'30%',
        // alignItems:'center',
        // justifyContent:'center'
    },
    title:{
        alignSelf:'center',
        // paddingLeft:'5%',
        paddingRight:'5%',
        fontSize:height*0.025,
        color:'#888',
        fontWeight:'bold',
    },
    input:{
        borderWidth:height*0.002,
        height:'65%',
        borderColor:'#e1e1e1',
        borderRadius:height*0.005,
        width:'50%',
        alignSelf:'center',
        fontSize:height*0.025,
        color:'#919191',
        paddingLeft:'5%'
    },
    tittle:{
        color:'#a1a1a1',
        fontWeight:'bold',
        fontSize:height*0.02
    },
    actionContainer:{
        width:'100%',
        height:'30%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    buttons:{
        width:'40%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginRight:height*0.005,
        borderWidth:height*0.002,
        borderColor:currentColorMain1,
        // backgroundColor:currentColorMain1
    },

});