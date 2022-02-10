import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type="one",bgColor ,fgColor}) => {
  return (
    <TouchableOpacity onPress={onPress} 
    style={[styles.container, styles[`container_${type}`],
    bgColor?{backgroundColor:bgColor}:{}
    
    ]}>
      <Text style={[styles.text, styles[`text_${type}`],
      fgColor?{color:fgColor}:{}
      
      
      ]}> {text}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    container:{
        
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:"center",
        borderRadius:5,
    },
    container_one:{
        backgroundColor:"#A020F0",
    },
    container_third:{},
    text:{
        fontWeight:"bold",
        color:"white",
    },
    text_third:{
        color:"gray"
    }
})

export default CustomButton;