import { ActivityIndicator, StyleSheet, Text, View}                                from 'react-native';
import { Dimensions,TouchableOpacity}                           from 'react-native';
import { Lock, User2}                                           from '../view/iconosSvg.jsx';
import { useMainContex }                                        from '../context/mainContext.jsx';
import { LoadingComponent } from './loadingComponent.jsx';

const { height } = Dimensions.get('window');

export function FormComponent({setModalLabel,loading}){
    const {loginUser,setModalInput}=useMainContex();
            
    const handlerModalInput=(label)=>{
        setModalInput(true);
        setModalLabel(label);
    }
    if(loading){
        return(<View style={[signOutStyle.fieldsContainer]}>
            <LoadingComponent message={'Iniciando sesión...'}/>
        </View>)

    }
  
    return(
        <View style={signOutStyle.fieldsContainer}>
            <View style={signOutStyle.inputContainer}>
                <View  style={signOutStyle.lock}>
                    <User2/>
                </View>
                <Text style={signOutStyle.label}>Documento</Text>
                <TouchableOpacity onPress={()=>{handlerModalInput('userDocumentId')}}>
                    <View style={signOutStyle.input}>
                        <Text style={signOutStyle.TextFieldInput}>{loginUser.userDocumentId}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={signOutStyle.inputContainer}>
                <View  style={signOutStyle.lock}>
                    <Lock/>
                </View>
                <Text style={signOutStyle.label}>Password</Text>
                <TouchableOpacity onPress={()=>{handlerModalInput('userPassword')}}>
                    <View style={signOutStyle.input}>
                        <Text style={signOutStyle.TextFieldInput}>{loginUser.userPassword?'*************':''}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>           
    )
}

const currentColorMain2='#e8e8e8'
const currentColorMain3='#717171'

const signOutStyle=StyleSheet.create({
    fieldsContainer:{
        width:'100%',
        height:'45%',
        justifyContent:'center',
    },
    inputContainer:{
        height:'40%',
        width:'100%',
        justifyContent:'center'
    },
    input:{
        backgroundColor:'#FFF',
        alignSelf:'center',
        width:'80%',
        height:'70%',
        justifyContent:'center',
        borderBottomWidth:height*0.002,
        borderColor:currentColorMain2,
        borderRadius:height*0.01,
        fontSize:height*0.03,
        paddingLeft:'3%',
        color:currentColorMain3
    },
    label:{
        marginLeft:'10%',
        color:'#ccc',
        fontWeight:'bold',
        fontSize:height*0.02
    },
    lock:{
        position:'absolute',
        zIndex:10,
        left:'83%',
        bottom:'40%',
        opacity:0.7
    },
    TextFieldInput:{
        color:currentColorMain3,
        justifyContent:'center',
        alignSelf:'center',
        fontSize:height*0.025,
        marginBottom:0,
    }

});
