import { StyleSheet, Text, View }                  from 'react-native';
import { Image,Dimensions,TouchableOpacity }       from 'react-native';

const {height,width}=Dimensions.get('window');
const currentColorDefault='#44329C'
const currentColorMain='#44329C';
const currentColorMain3='#717171';

export function WelcomeInterface(){
    return(
        <View style={{height,width}}>
        <View style={StyleWelcome.backGroundApp}>
            <View style={StyleWelcome.frame1}></View>
            <View style={StyleWelcome.frame2}></View>
        </View>
        <View style={StyleWelcome.overBackground}>
                <View style={StyleWelcome.titleContainer}>
                    <Image source={require('../media_public/img/tranparentLogo.png')} style={StyleWelcome.img}/>
                </View>
            <View style={StyleWelcome.formContainer}>
                <View style={StyleWelcome.span}>
                    <View style={StyleWelcome.hola}>
                        <Text style={{fontSize:height*0.08,color:currentColorMain3,fontWeight:'bold'}}>Bienvenido</Text>
                    </View>
                    <View style={StyleWelcome.ingresar}>
                        <Text style={{fontSize:height*0.03,color:'#bbb',fontWeight:'bold'}}>a nuestra app</Text>
                    </View>
                </View>
                <View style={StyleWelcome.actionContainer}>
                    <View style={StyleWelcome.buttonContainer}>
                        <TouchableOpacity style={StyleWelcome.signupButton} >
                            <Text style={StyleWelcome.registrarse}>SIGUIENTE {'>>'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
    )
}
const StyleWelcome=StyleSheet.create({
    backGroundApp:{
        position:'relative',
        zIndex:10,
        height:'100%',
        width:'100%',
        flexDirection:'row',
    },
    frame1:{
        backgroundColor:'#FFF',
        height:'80%',
        width:'50%'
    },
    frame2:{
        backgroundColor:currentColorDefault,
        height:'80%',
        width:'50%'
    },
    overBackground:{
        position:'absolute',
        zIndex:20,
        height,
        width
    },
    titleContainer:{
        height:parseInt(height*0.65),
        width:'100%',
        backgroundColor:currentColorDefault,
        borderBottomLeftRadius:height*0.1
    },
    formContainer:{
        height:parseInt(height*0.78),
        width:'100%',
        fontFamily:'sans-serif',
        backgroundColor:'#FFF',
        borderTopRightRadius:height*0.1,
        paddingLeft:0,
        paddingTop:height*0.01,
    },
    img:{
        // position:'relative',
        // zIndex:50,
        flex:1,
        resizeMode:'repeat',
        alignSelf:'center',
        opacity:0.05,
        // height:height*0.55,
        width:width,
    },
    span:{
        height:'25%',
        width:'100%',
        justifyContent:'center',
        paddingLeft:'10%'
    },
    hola:{
        width:'90%',
        height:'60%',
        justifyContent:'flex-end'
    },
    ingresar:{
        width:'70%',
        height:'30%',
        justifyContent:'center'
    },
    actionContainer:{
        // backgroundColor:'aqua',
        width:'100%',
        height:'20%',
        marginTop:'0%'
    },
    buttonContainer:{
        height:'50%',
        width:'80%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    signupButton:{
        backgroundColor:'#FFF',
        width:'100%',
        height:'80%',
        borderColor:currentColorMain,
        borderWidth:height*0.003,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:height*0.005,
    },
    registrarse:{
        color:currentColorMain,
        fontWeight:'bold',
        fontSize:height*0.02
    },

});