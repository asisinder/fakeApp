import React, {useState} from "react";
import {View,Text,Image, StyleSheet,useWindowDimensions, StatusBar,ScrollView} from 'react-native';
import CustomInput from "../components/CustomInput";
import Logo from "../../images/logo.jpg";
import CustomButton from "../components/CustomButton";

//onPress={()=>props.navigation.navigate('signup')}
//onPress={()=>props.navigation.navigate('bottomTab')} 

function LoginScreen(props){
    const [mobile,setMobile] = useState('');
    const [password,setPassword] = useState('');

    const onSignInPressed = ()=>{
        //some code
        console.warn("Sign in");
        props.navigation.navigate('bottomTab')
    }

    const onSignUpPressed = ()=>{
        //some code
        console.warn("Create New Account Pressed");
        props.navigation.navigate('signup')
    }

    const onForgetPasswordPressed = ()=>{
        //some code
        console.warn("Forget password");
        props.navigation.navigate('forgetPassword')
    }
    const onSignInGoogle = ()=>{
        console.warn("Sign in with Google");
    }

    const {height} = useWindowDimensions();
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#A020F0" />
        <Text style={styles.textFont}>Sign In</Text>
         <Image source={Logo} style={[styles.logo,{height:height*0.2}]} resizeMode="contain"/>
           <CustomInput placeholder="Phone Number" value={mobile} setValue={setMobile} keyboardType="phone-pad" />
           <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
           
           <CustomButton text="Sign In" onPress={onSignInPressed} />
           <CustomButton text="Forget password" onPress={onForgetPasswordPressed} type="third" />

           <CustomButton text="Sign in with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />

           <CustomButton text="Don't have an Account? Create new!" onPress={onSignUpPressed} type="third" />

        </View>
        </ScrollView>
    )
};

export default LoginScreen;

const styles=StyleSheet.create({
    container:{
       flex:1,
       alignItems:"center",
       padding:20,
       backgroundColor:"#eee",
    },
    textFont: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      logo:{
          width:'70%',
          maxWidth:300,
          maxHeight:220,
      },
   
});