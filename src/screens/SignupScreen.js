import React from "react";
import {View,Text,Button, StyleSheet,Pressable} from 'react-native';
import ButtonWithBackground from "../components/ButtonWithBackground";

function SignupScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Sign-up Screen</Text>
            <ButtonWithBackground title="Sign-up" color="green"  onPress={()=>props.navigation.navigate('bottomTab')}></ButtonWithBackground>
            
        </View>
    )
}

export default SignupScreen;

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
