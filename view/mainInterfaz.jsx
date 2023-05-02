import { StyleSheet, Text, FlatList,View, Modal}   from 'react-native';
import { TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { MenuIcon,PlusRect, SearchIcon}            from './iconosSvg.jsx';
import { OPcomponent }                             from '../components/opComponent.jsx';
import { OcrComponent }                            from '../components/ocrComponent.jsx';
import { useState }                                from 'react';
import { Aside }                                   from '../components/aside.jsx';
import { Lista1A, Lista1B, Lista2 }                from '../components/filterListaSelect.jsx'
import { useMainContex }                           from '../context/mainContext.jsx';

const {width,height}=Dimensions.get('window');

export function MainInterfaz(){
    const {asideState,setAsideState}= useMainContex();
    const { valueL2,createOCRState,setCreateOCRState }=useMainContex();
    // const inputType=[['numeric','numeric'],['numeric','numeric'],['numeric','number-pad','numeric','default']]

    return(
        <View style={{height,width}}>
            <View style={StyleMainWindow.headerBack}></View>
            <View style={StyleMainWindow.header}>
                <View style={StyleMainWindow.filterContainer}>
                    <View style={StyleMainWindow.inputContainer}>
                        <View style={StyleMainWindow.enterFilter}>
                            <View style={StyleMainWindow.span}>
                                <SearchIcon/>
                            </View>
                            <TextInput style={StyleMainWindow.input}/>
                        </View>
                        <View style={StyleMainWindow.fieldSelectFilter}>
                            <Lista2/>
                        </View>
                    </View>
                    <View style={StyleMainWindow.filterFieldContainer}>
                        {/* <Lista1B/> */}
                        {valueL2==="opcion1"||valueL2==="opcion2"?<Lista1A/>:valueL2==="opcion3"?<Lista1B/>:<></>}
                    </View>
                </View>
                <View style={StyleMainWindow.fieldContainer}>
                    <View style={StyleMainWindow.empty1}><Text style={StyleMainWindow.textField}>LISTA</Text></View>
                    <View style={StyleMainWindow.fieldContent}><Text style={StyleMainWindow.textField}>OP</Text></View>
                    <View style={StyleMainWindow.fieldContent}><Text style={StyleMainWindow.textField}>META</Text></View>
                    <View style={StyleMainWindow.fieldContent}><Text style={StyleMainWindow.textField}>COMP</Text></View>
                    <View style={StyleMainWindow.fieldContent}><Text style={StyleMainWindow.textField}>SIN COMP</Text></View>
                    <View style={StyleMainWindow.fieldContent}><Text style={StyleMainWindow.textField}>No. OCR</Text></View>
                </View>
            </View>
            <View style={StyleMainWindow.backRoots}></View>
            <View style={StyleMainWindow.root1}>
                <View style={StyleMainWindow.frame1}>
                    <FlatList renderItem={item=><OPcomponent/>} data={DATA} key={element=>element.id}>
                    </FlatList>
                </View>
            </View>
            <View style={StyleMainWindow.root2}>
                <View style={StyleMainWindow.frame2}>
                    <OcrComponent/>
                    <OcrComponent/>
                    <OcrComponent/>
                    <OcrComponent/>
                    {/* <FlatList renderItem={item=><OcrComponent/>} horizontal={true} data={DATA} key={element=>element.id}>
                    </FlatList> */}
                </View>
            </View>
            <TouchableOpacity style={StyleMainWindow.buttonOCR}  onPress={()=>{setCreateOCRState(!createOCRState)}}>
                <PlusRect/>
            </TouchableOpacity>
            <View style={StyleMainWindow.buttonMenu}>
                <TouchableOpacity onPress={()=>setAsideState(true)}>
                    <MenuIcon data={currentColorMain}/>
                </TouchableOpacity>
            </View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={asideState}>
                <Aside/>
            </Modal>
        </View>
    )
}

const currentColorMain='#44329C';   //azul oscuro
const currentColorMain1='#C7CCEC';  //Azul claro
const currentColorMain2='#e8e8e8';  //gris muy claro

const StyleMainWindow=StyleSheet.create({
    headerBack:{
        width:'100%',
        height:'15%',
        backgroundColor:currentColorMain
    },
    header:{
        position:'absolute',
        zIndex:10,
        height:'15%',
        width:'95%',
        backgroundColor:'#FFF',
        marginTop:'10%',
        borderRadius:height*0.01,
        alignSelf:'center'
    },
    backRoots:{
        height:'85%',
        width:'100%',
        backgroundColor:currentColorMain2
    },
    root1:{
        position:'absolute',
        zIndex:10,
        height:'56%',
        width:'95%',
        marginTop:'37%',
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        alignSelf:'center',
        justifyContent:'center'
    },
    root2:{
        position:'absolute',
        zIndex:10,
        height:'17%',
        width:'95%',
        marginTop:height*0.82,
        backgroundColor:'#FFF',
        borderRadius:height*0.01,
        alignSelf:'center',
        justifyContent:'center'
    },
    buttonOCR:{
        position:'absolute',
        top:height*0.9,
        left:width*0.83,
        zIndex:20,
        height:height*0.08,
        width:height*0.08,
        borderRadius:height*0.04,
        // backgroundColor:currentColorMain1,
        backgroundColor:'#FFF',
        elevation:height*0.006,
        justifyContent:'center',
        alignItems:'center'
    },
    frame1:{
        borderWidth:width*0.002,
        borderColor:currentColorMain2,
        height:'95%',
        width:'95%',
        borderRadius:height*0.01,
        alignSelf:'center',
    },
    frame2:{
        flexDirection:'row',
        borderWidth:width*0.002,
        borderColor:currentColorMain2,
        height:'85%',
        width:'95%',
        paddingLeft:'1%',
        borderRadius:height*0.01,
        // justifyContent:'center',
        alignSelf:'center',
        alignItems:'center',
        // flex:1
    },
    filterContainer:{
        width:'100%',
        height:'70%',
        flexDirection:'row',
        // backgroundColor:'aqua'
    },
    fieldContainer:{
        width:'100%',
        height:'30%',
        // backgroundColor:'aqua',
        flexDirection:'row',
        borderTopWidth:height*0.002,
        borderTopColor:currentColorMain2
    },
    empty1:{
        height:'100%',
        width:'13%',
        justifyContent:'center',
        alignItems:'flex-end',
    },
    fieldContent:{
        height:'100%',
        width:'15%',
        justifyContent:'center',
        alignItems:'center'
    },
    textField:{
        color:'#515151',
        fontWeight:'bold'
    },
    inputContainer:{
        height:'100%',
        width:'70%',
    },
    enterFilter:{
        height:'60%',
        width:'100%',
        // backgroundColor:'aqua',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    input:{
        height:'70%',
        width:'85%',
        borderWidth:height*0.0015,
        borderColor:currentColorMain1,
        borderRadius:height*0.05,
        paddingLeft:'15%'
    },
    span:{
        position:'absolute',
        left:'15%',
        borderColor:currentColorMain1,
        borderRadius:height*0.005,
        width:'10%',
        height:'40%',
        alignItems:'center',
        justifyContent:'center'
    },
    fieldSelectFilter:{
        // backgroundColor:'aqua',
        width:'100%',
        height:'40%',
        alignItems:'center',
    },
    buttonMenu:{
        position:'absolute',
        zIndex:20,
        height:height*0.07,
        width:height*0.07,
        backgroundColor:'#FFF',
        top:'5%',
        left:'1%',
        borderRadius:height*0.005,
        elevation:height*0.05,
        justifyContent:'center',
        alignItems:'center'
    },
    // filterFieldContainer:{
    //     width
    // }
    aside:{
        position:'absolute',
        zIndex:40,
        height:height,
        width:width*0.4,
        backgroundColor:currentColorMain
    },
    courtain:{
        position:'absolute',
        backgroundColor:'black',
        width:width,
        left:-width,
        height:height,
        zIndex:30,
        opacity:0.4

    }
    ,headerAside:{
        // backgroundColor:'aqua',
        width:'100%',
        height:'20%',
        justifyContent:'flex-end'
    },
    buttonMenu2:{
        position:'absolute',
        zIndex:40,
        elevation:height* 0.01,
        width:height*0.07,
        height:height*0.07,
        borderRadius:height*0.01,
        backgroundColor:currentColorMain,
        left:'75%',
        top:'5%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:height*0.001,
        borderColor:'#FFF'
    },
    img:{
        height:'100%',
        width:'100%',
        alignSelf:'center',
        flex:1,
        resizeMode:'contain',
        // opacity:0.5

    },
    bodyAside:{
        width:'100%',
        height:'80%',
        paddingTop:'10%'
    },
    fieldOptionContainer:{
        width:'100%',
        height:'10%',
        // borderTopWidth:height*0.002,
        flexDirection:'row',
        justifyContent:'center'
    },
    iconOptionContainer:{
        height:'100%',
        width:'30%',
        justifyContent:'center',
        alignItems:'center'
    },
    contentOptionContainer:{
        height:'100%',
        width:'50%',
        justifyContent:'center',
        alignItems:'flex-start'
        // backgroundColor:'aqua'
    },
    contentOptions:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:height*0.02
    },
    filterFieldContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
        width:'30%'
    }
});

const DATA = [
    { id: '01', title: 'Elemento 01' },
    { id: '02', title: 'Elemento 02' },
    { id: '03', title: 'Elemento 03' },
    { id: '04', title: 'Elemento 04' },
    { id: '05', title: 'Elemento 05' },
    { id: '06', title: 'Elemento 06' },
    { id: '07', title: 'Elemento 07' },
    { id: '08', title: 'Elemento 08' },
    { id: '09', title: 'Elemento 09' },
    { id: '10', title: 'Elemento 10' },
  ];