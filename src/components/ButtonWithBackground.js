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
        padding:12,
        width:180,
        borderRadius:24,
        alignItems:"center",
        margin:5,
    },
    text:{
        color:"white",
        fontSize:20,
    },
    smallbutton:{
        padding:5,
        width:25,
        borderRadius:5,
        alignItems:"center",
        margin:5,
    }
})


export default ButtonWithBackground;