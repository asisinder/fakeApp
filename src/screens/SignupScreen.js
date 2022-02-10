import React, {useState} from "react";
import {View,Text, StyleSheet, StatusBar,ScrollView} from 'react-native';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

//onPress={()=>props.navigation.navigate('signup')}
//onPress={()=>props.navigation.navigate('bottomTab')} 

function SignUpScreen(props){
    const [username,setUsername] = useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [password,setPassword] = useState('');
    const [passwordRepeat,setPasswordRepeat] = useState('');

    const onRegisterPressed = ()=>{
        //some code
        props.navigation.navigate('bottomTab')
    }

    const onSignInPressed = ()=>{
        //some code
        props.navigation.navigate('login')
    }

   
    const onSignInGoogle = ()=>{
        console.warn("Sign in with Google");
    }

   
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
        <StatusBar hidden={false} backgroundColor="#A020F0" />
        <Text style={styles.textFont}>Create Account</Text>
        
           <CustomInput placeholder="Username" value={username} setValue={setUsername}  />
           <CustomInput placeholder="Email" value={email} setValue={setEmail}  />
           <CustomInput placeholder="Mobile No." value={mobile} setValue={setMobile} keyboardType="phone-pad"  />
           <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
           <CustomInput placeholder="Confirm Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
           
           <CustomButton text="Register" onPress={onRegisterPressed} />
           

           <CustomButton text="Sign in with Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />

           <CustomButton text="Already have an account? Sign in!" onPress={onSignInPressed} type="third" />

        </View>
        </ScrollView>
    )
};

export default SignUpScreen;

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
        margin:10,
      },
     
   
});