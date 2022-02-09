import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Dimensions } from 'react-native';

const getWidth = () => Dimensions.get('window').width;

function Product(props){
    return(
         <TouchableOpacity style={styles.card}>
         <Image />
        <Text></Text>
        </TouchableOpacity>
    )
}
 export default Product;

 const styles =StyleSheet.create({
     card:{
         width:getWidth()/2,
         borderRadius: 8,
         margin:5,
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor:"#eee",

     }
 })