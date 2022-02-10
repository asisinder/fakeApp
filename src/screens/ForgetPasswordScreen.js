import React, {useState} from "react";
import {View,Text, StyleSheet, StatusBar,ScrollView} from 'react-native';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


const ForgetPasswordScreen = (props) => {
    const [email,setEmail]=useState('');

    const onSendPressed = ()=>{
        console.warn("Code is send to your Email");
        props.navigation.navigate('updatePassword')
    }

    const onSignInPressed = ()=>{
        //some code
        props.navigation.navigate('login')
    }


  return (
    <View style={styles.container}>
    <StatusBar hidden={false} backgroundColor="#A020F0" />
    <Text style={styles.textFont}>Reset your password</Text>
    
    <CustomInput placeholder="Email" value={email} setValue={setEmail}  />
       
       <CustomButton text="Send" onPress={onSendPressed} />
       <CustomButton text="Back to Sign in" onPress={onSignInPressed} type="third" />
    </View>
  )
};

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
     
});

export default ForgetPasswordScreen;