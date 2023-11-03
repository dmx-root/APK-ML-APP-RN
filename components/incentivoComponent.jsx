import { StyleSheet,View,Text,}  from 'react-native';
import {  Dimensions }    from 'react-native';

const {height}=Dimensions.get('window');

export function IncentivosComponent({data}){
    
    return(
        <View style={StyleIncentivoComponent.componentContainer}>
            <View style={StyleIncentivoComponent.information}>
              <Text style={StyleIncentivoComponent.text}>{'OPERARIA/O: '+(data.index+1)}</Text>
            </View>
            <View style={StyleIncentivoComponent.codigo}>
              <Text style={StyleIncentivoComponent.text}>{'CÓDIGO: '+data.item}</Text>
            </View>
        </View>
    )
}

const StyleIncentivoComponent=StyleSheet.create({
  componentContainer:{
    height:height*0.05,
    width:'100%',
    borderColor:'#eee',
    borderWidth:height*0.001,
    borderRadius:height*0.015,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'1%',
    flexDirection:'row'
  } ,
  text:{
    fontSize:height*0.018,
    color:'#777'
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