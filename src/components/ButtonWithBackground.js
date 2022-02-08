import React from "react";
import {Text,View,StyleSheet,TouchableOpacity } from 'react-native';

const ButtonWithBackground = (props)=>{
    const content =(
        <View style={[styles.button,{backgroundColor:props.color}]}>
         <Text style={styles.text}>{props.title}</Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles=StyleSheet.create({
    button:{
        padding:16,
        width:200,
        borderRadius:24,
        alignItems:"center",
        margin:5,
    },
    text:{
        color:"white",
        fontSize:20,
    }
})


export default ButtonWithBackground;