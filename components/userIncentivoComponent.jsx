import { StyleSheet,View,Text }     from 'react-native';
import {  Dimensions }              from 'react-native';


const {height}=Dimensions.get('window');

export function UserIncentivoComponent({data}){
   
    return(
        <View style={StyleUserIncentivo.componentContainer}>
            <View style={[StyleUserIncentivo.row,{width:'35%'}]}>
                <Text style={{color:'#999',fontWeight:'bold',fontSize:height*0.015}}>OPERARIO</Text>
            </View>
            <View style={[StyleUserIncentivo.row,{width:'15%'}]}>
                <Text style={{color:'#999',fontSize:height*0.015}}>{data.operario}</Text>
            </View>
            <View style={StyleUserIncentivo.row}>
                <Text style={{color:'#999',fontWeight:'bold',fontSize:height*0.015}}>CODIGO</Text>
            </View>
            <View style={StyleUserIncentivo.row}>
                <Text style={{color:'#999',fontSize:height*0.015}}>{data.codigo}</Text>
            </View>
        </View>
    )
}

const StyleUserIncentivo=StyleSheet.create({
  componentContainer:{
    height:'10%',
    width:'94%',
    
    borderRadius:height*0.00,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    margin:'0.5%',
    flexDirection:'row'
  },
  row:{
    height:'100%',
    width:'25%',
    borderColor:'#eee',
    borderWidth:height*0.001,
    justifyContent:'center',
    alignItems:'center'
  }
})