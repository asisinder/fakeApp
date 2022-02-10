import React, {useState} from "react";
import {View,Text, StyleSheet, StatusBar,ScrollView} from 'react-native';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


const UpdatePasswordScreen = (props) => {

    const [code,setCode]=useState('');
    const [password,setPassword] = useState('');
    const [passwordRepeat,setPasswordRepeat] = useState('');

    const onUpdatePressed = ()=>{
        //some code
        console.warn("Password Updated!Login with new credentials")
        props.navigation.navigate('login')
    }

  return (
    <View style={styles.container}>
    <StatusBar hidden={false} backgroundColor="#A020F0" />
    <Text style={styles.textFont}>Update your password</Text>
    <CustomInput placeholder="Enter Code" value={code} setValue={setCode} keyboardType="phone-pad"  />
    <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
    <CustomInput placeholder="Confirm Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
       
       <CustomButton text="Update" onPress={onUpdatePressed} />
      
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

export default UpdatePasswordScreen