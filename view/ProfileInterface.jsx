import { StyleSheet, Text, View, Alert, Image}              from 'react-native';
import { Dimensions, TouchableOpacity,ActivityIndicator }   from 'react-native';
import { RoowLeft }                                         from './iconosSvg';
import { useMainContex } from '../context/mainContext';

const{height,width}=Dimensions.get('window');

export function ProfileInterface({navigation}){

    const {currentUser}=useMainContex();

    if(false){
        return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
        )
    }
    return(<View style={StyleSheetProfile.mainLayer}>
        <View style={StyleSheetProfile.header}>
            <Image source={require('../media_public/img/tranparentLogo.png')} style={StyleSheetProfile.img}/>
            <Image source={require('../media_public/img/tranparentLogo.png')} style={StyleSheetProfile.img}/>
            <View style={StyleSheetProfile.headerContent}>
                <View style={StyleSheetProfile.nameEmpty}></View>
                <Text style={StyleSheetProfile.name}>{currentUser.user_name.length>24?currentUser.user_name.slice(0,24)+'...':currentUser.user_name}</Text>
                {/* <Text style={StyleSheetProfile.cargo}>{}</Text> */}
            </View>
        </View>
        <View style={StyleSheetProfile.body}>
            <View style={StyleSheetProfile.containerInformationHeader}>
                <View style={StyleSheetProfile.empty}></View>
                <View style={StyleSheetProfile.informationHeaderContainer}>
                    <Text style={StyleSheetProfile.titleInformationHeader}>{currentUser.profile_label}</Text>
                    
                </View>
                {/* <View style={StyleSheetProfile.informationHeaderContainer}>
                    <Text style={StyleSheetProfile.titleInformationHeader}>Pendientes</Text>
                    <Text style={StyleSheetProfile.contentInformationHeader}>x</Text>
                </View> */}
            </View>
            <View style={StyleSheetProfile.containerInformationHeader2}>
                <View style={StyleSheetProfile.fieldTitleContainer}>
                    <Text style={StyleSheetProfile.titleInformation}>Documento</Text>
                </View>
                <View style={[StyleSheetProfile.fieldTitleContainer,{width:'60%'}]}>
                    <Text style={{color:currentColorMain3,fontSize:height*0.02,fontWeight:'bold',marginLeft:'10%'}}>{currentUser.user_document_id}</Text>
                </View>
            </View>
            <View style={StyleSheetProfile.containerInformationHeader2}>
                <View style={StyleSheetProfile.fieldTitleContainer}>
                    <Text style={StyleSheetProfile.titleInformation}>Tipo de documento</Text>
                </View>
                <View style={[StyleSheetProfile.fieldTitleContainer,{width:'60%'}]}>
                    <Text style={{color:currentColorMain3,fontSize:height*0.02,fontWeight:'bold',marginLeft:'10%'}}>CÉDULA DE CIUDADANIA</Text>
                </View>
            </View>
            <View style={StyleSheetProfile.containerInformationHeader2}>
                <View style={StyleSheetProfile.fieldTitleContainer}>
                    <Text style={StyleSheetProfile.titleInformation}>Fecha de creación</Text>
                </View>
                <View style={[StyleSheetProfile.fieldTitleContainer,{width:'60%'}]}>
                    <Text style={{color:currentColorMain3,fontSize:height*0.02,fontWeight:'bold',marginLeft:'10%'}}>{currentUser.user_create_dete.slice(0,10)}</Text>
                </View>
            </View>
            <View style={StyleSheetProfile.containerInformationHeader2}>
                <View style={StyleSheetProfile.fieldTitleContainer}>
                    <Text style={StyleSheetProfile.titleInformation}>Descripción</Text>
                </View>
                <View style={[StyleSheetProfile.fieldTitleContainer,{width:'60%'}]}>
                    <Text style={{color:currentColorMain3,fontSize:height*0.02,fontWeight:'bold',marginLeft:'10%'}}>{currentUser.user_description}</Text>
                </View>
            </View>
            {/* <View style={StyleSheetProfile.root}></View> */}
        </View>
        <View style={StyleSheetProfile.photoContainer}>
            <Image source={require('../media_public/img/photo-profile.jpg')} style={StyleSheetProfile.photoProfile}/>
        </View>
        <View style={StyleSheetProfile.buttonMenu}>
            <TouchableOpacity onPress={()=>{navigation.navigate('MainViewContainer')}}>
                <RoowLeft data={'#FFF'}/>
            </TouchableOpacity>
        </View>
    </View>)
}
const currentColorDefault='#44329C';
const currentColorMain='#44329C';
const currentColorMain2='#eee';
const currentColorMain3='#717171';
const currentColorMain4='#a1a1a1';

const StyleSheetProfile=StyleSheet.create({
    mainLayer:{
        height,
        width,
        backgroundColor:'#FFF'
    },
    header:{
        height:height*0.25,
        width,
        backgroundColor:currentColorMain,
        flexDirection:'row'
    },
    img:{
        flex:1,
        resizeMode:'contain',
        alignSelf:'center',
        height:height*0.55,
        width:width*0.55,
        opacity:0.1
    },
    body:{
        height:height*0.8,
        width,
        backgroundColor:currentColorMain2,
        // justifyContent:'flex-end',
        // alignItems:'center'
    },
    photoContainer:{
        position:'absolute',
        zIndex:10,
        backgroundColor:'#FFF',
        width:width*0.3,
        height:width*0.3,
        borderRadius:width*0.25,
        top:height*0.155,
        left:width*0.05,
        borderWidth:height*0.005,
        borderColor:'#FFF',
        overflow:'hidden'
    },
    photoProfile:{
        flex:1,
        resizeMode:'contain',
        alignSelf:'center',
        height:height*0.55,
        width:width*0.55,
        // opacity:0.
    },
    headerContent:{
       position:'absolute',
       alignSelf:'flex-end',
       height:height*0.1,
       width:width,
       flexDirection:'row',
       alignItems:'center',
    //    marginRight:'20%'
    },
    name:{
        fontSize:height*0.025,
        color:'#FFF',
        fontWeight:'bold',
        marginLeft:'20%',
        opacity:0.9,
        // backgroundColor:'aqua'
    },
    nameEmpty:{
        height:'100%',
        width:'17%'
    },
    cargo:{
        fontSize:height*0.02,
        color:'#FFF',
        fontWeight:'bold',
        // marginLeft:'20%',
        opacity:0.8
    },
    root:{
        height:'50%',
        width:'90%',
        backgroundColor:'#FFF',
        borderRadius:height*0.02,
        marginTop:'5%',
        alignSelf:'center'
    },
    empty:{
        height:'100%',
        width:'35%'
    },
    containerInformationHeader:{
        height:'20%',
        flexDirection:'row',
        alignItems:'flex-start'
    },
    informationHeaderContainer:{
        height:'50%',
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'aqua'
    },
    titleInformationHeader:{
        fontSize:height*0.02,
        color:currentColorMain4,
        fontWeight:'bold'
    },
    contentInformationHeader:{
        color:currentColorMain3,
        fontSize:height*0.04,
        fontWeight:'bold'
    },
    containerInformationHeader2:{
        height:'10%',
        flexDirection:'row',
        alignItems:'center',
        width:'90%',
        alignSelf:'center'
    },
    fieldTitleContainer:{
        height:'100%',
        width:'40%',
        justifyContent:'center'
    },
    titleInformation:{
        fontSize:height*0.02,
        color:currentColorMain4,
        fontWeight:'bold'
    },
    buttonMenu:{
        position:'absolute',
        zIndex:20,
        height:height*0.07,
        width:height*0.07,
        // backgroundColor:'#FFF',
        borderWidth:height*0.003,
        borderColor:'#FFF',
        top:'5%',
        left:'1%',
        borderRadius:height*0.005,
        elevation:height*0.05,
        justifyContent:'center',
        alignItems:'center'
    },

});