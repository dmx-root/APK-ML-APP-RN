import { StyleSheet,View,Text,}  from 'react-native';
import {  Dimensions }    from 'react-native';

const {height}=Dimensions.get('window');

export function EmployeeComponent({data,index}){
    
    return(
        <View style={StyleIncentivoComponent.componentContainer}>
            <View style={StyleIncentivoComponent.information}>
              <Text style={StyleIncentivoComponent.text}>{'OPERARIA/O: '+(index)}</Text>
            </View>
            <View style={StyleIncentivoComponent.codigo}>
              <Text style={StyleIncentivoComponent.text}>{'CÓDIGO: '+data.operario}</Text>
            </View>
        </View>
    )
}

const StyleIncentivoComponent=StyleSheet.create({
  componentContainer:{
    height:'10.7%',
    width:'100%',
    borderColor:'#ccc',
    borderRadius:height*0.008,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'0.7%',
    flexDirection:'row',
    backgroundColor:'#EEE',
    borderBottomWidth:height*0.002,
  } ,
  text:{
    fontSize:height*0.017,
    color:'#999',
    fontWeight:'bold'
  },
  information:{
    width:'50%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  codigo:{
    width:'50%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
})