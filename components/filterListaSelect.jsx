import { Picker }                from '@react-native-picker/picker'
import { useState }              from 'react'
import { View, StyleSheet}       from 'react-native'
import { useMainContex }         from '../context/mainContext';

export function Lista1B(){
    const { valueL1A, setValueL1A }=useMainContex();
    return(
        <View style={StyleLista1.container}>
            <Picker selectedValue={valueL1A} onValueChange={(itemValue, itemIndex) =>setValueL1A(itemValue)}>
                <Picker.Item label="OCR"        value="opcion1" />
                <Picker.Item label="Modulo"     value="opcion2" />
                <Picker.Item label="Fecha"      value="opcion3" />
                <Picker.Item label="Referencia" value="opcion4" />
            </Picker>
        </View>
    )
}
export function Lista1A(){
    const { valueL1B, setValueL1B }=useMainContex();
    return(
        <View style={StyleLista1.container}>
            <Picker selectedValue={valueL1B} onValueChange={(itemValue, itemIndex) =>setValueL1B(itemValue)}>
                <Picker.Item label="Numero De OP" value="opcion1" />
                <Picker.Item label="Cantidad De Registros" value="opcion2" />
            </Picker>
        </View>
    )
}
export function Lista2(){
    const { valueL2, setValueL2 }=useMainContex();
    return(
        <View style={StyleLista2.container}>
            <Picker selectedValue={valueL2} onValueChange={(itemValue, itemIndex) =>setValueL2(itemValue)}>
                <Picker.Item label="MOP" value="opcion1" />
                <Picker.Item label="MOB" value="opcion2" />
                <Picker.Item label="OCR" value="opcion3" />
            </Picker>
        </View>
    )
}
export function CargoList(){
    const { cargo, setCargo}=useMainContex();
    return(
    <View style={StyleCArgo.container}>
        <Picker selectedValue={cargo} onValueChange={(itemValue, itemIndex) =>setCargo(itemValue)}>
            <Picker.Item label="OPERARIA/O" value="opcion1" />
            <Picker.Item label="ADMINISTRATIVO" value="opcion2" />
        </Picker>
    </View>
    )
}

const StyleLista1=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
    }
})

const StyleLista2=StyleSheet.create({
    container:{
        height:'100%',
        width:'50%',
    }
})

const StyleCArgo=StyleSheet.create({
    container:{
        height:'50%',
        width:'85%',
        alignSelf:'center',
        // clo
    }
})

