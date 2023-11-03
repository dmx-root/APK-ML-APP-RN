import { StyleSheet,View,Text,}  from 'react-native';
import {  Dimensions }    from 'react-native';
import { User2 } from '../../view/iconosSvg';

const {height}=Dimensions.get('window');

export function EmployeeInformationComponent({data,index}){
    
    return(
        <View style={StyleIncentivoComponent.componentContainer}>
          <View style={StyleIncentivoComponent.icontContainer}>
              <User2 />
          </View>
          <View style={StyleIncentivoComponent.informationContainer}>
            <View style={StyleIncentivoComponent.componentContainerRow}>
              <View style={StyleIncentivoComponent.tittleContainer}>
                <Text style={StyleIncentivoComponent.title}>CODIGO</Text>
              </View>
              <View style={StyleIncentivoComponent.informationContainerField}>
                <Text style={StyleIncentivoComponent.information}>332</Text>
              </View>
            </View>
            <View style={StyleIncentivoComponent.componentContainerRow}>
              <View style={StyleIncentivoComponent.tittleContainer}>
                <Text style={StyleIncentivoComponent.title}>NOMBRE</Text>
              </View>
              <View style={StyleIncentivoComponent.informationContainerField}>
                <Text style={StyleIncentivoComponent.information}>ANA IV</Text>
              </View>
            </View>
            <View style={StyleIncentivoComponent.componentContainerRow}>
              <View style={StyleIncentivoComponent.tittleContainer}>
                <Text style={StyleIncentivoComponent.title}>DOC. ID</Text>
              </View>
              <View style={StyleIncentivoComponent.informationContainerField}>
                <Text style={StyleIncentivoComponent.information}>1145411...</Text>
              </View>
            </View>
          </View>
        </View>
    )
}

const StyleIncentivoComponent=StyleSheet.create({
  componentContainer:{
    height:'19%',
    width:'98%',
    borderColor:'#ccc',
    borderRadius:height*0.008,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'2%',
    flexDirection:'row',
    backgroundColor:'#DDD',
    borderBottomWidth:height*0.002,
  } ,
  componentContainerRow:{
    height:'33%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
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
  },
  icontContainer:{
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    width:'30%',
    // backgroundColor:'aqua'
  },
  informationContainer:{
    height:'100%',
    width:'70%',
    // backgroundColor:'aqua'
  },
  tittleContainer:{
    height:'100%',
    width:'40%',
    justifyContent:'center',

  },
  informationContainerField:{
    height:'100%',
    width:'60%',
    justifyContent:'center',
  },
  title:{
    color:'#999',
    fontSize:height*0.014,
    fontWeight:'bold'
  },
  information:{
    color:'#AAA',
    fontSize:height*0.014,
    
  }
})