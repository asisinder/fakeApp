import React from "react";
import {View,Text,Button, StyleSheet} from 'react-native';
import ButtonWithBackground from "../components/ButtonWithBackground";

function LoginScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Login Screen</Text>
            <ButtonWithBackground title="Login" color="green" onPress={()=>props.navigation.navigate('home')} />
            <ButtonWithBackground title="Sign-up" color="orange" onPress={()=>props.navigation.navigate('signup')} />
        </View>
    )
}

export default LoginScreen;

const styles=StyleSheet.create({
    container:{
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       flex:1,
       backgroundColor:"#eee",
    },
    textFont: {
        fontSize: 24,
        fontWeight: '600',
      },
   
});