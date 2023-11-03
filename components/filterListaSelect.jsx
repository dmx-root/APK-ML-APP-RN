import { Picker }                           from '@react-native-picker/picker';
import { View, Dimensions, StyleSheet}       from 'react-native';
import { useMainContex }                    from '../context/mainContext';

const {height}=Dimensions.get('window');

export function FilterSelect(){
    const {modulo,setModulo}=useMainContex();
    return(
    <View style={StyleCArgo.container}>
        <Picker style={{color:'#777',fontSize:height}} onValueChange={(itemValue, itemIndex) =>{setModulo(itemValue)}}>
            <Picker.Item label="NONBRE"                 value='1'/>
            <Picker.Item label="FECHA"                  value='2'/>
            <Picker.Item label="MODULO"                 value='3'/>
            <Picker.Item label="HORA DE INICIO"         value='4'/>
            <Picker.Item label="HORA DE FINALIZACION"   value='5'/>
        </Picker>
    </View>
    )
}

const StyleCArgo=StyleSheet.create({
    container:{
        height:'50%',
        width:'100%'
    }
})

