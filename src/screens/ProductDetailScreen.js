import React from "react";
import {View,Text,Button, StyleSheet} from 'react-native';
import ButtonWithBackground from "../components/ButtonWithBackground";

function ProductDetailScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Product1 Detail Screen</Text>
            <ButtonWithBackground title="Add to Cart" color="green" onPress={()=>props.navigation.navigate('cart')} />
            <ButtonWithBackground title="Buy Now" color="orange" onPress={()=>props.navigation.navigate('shipping')}></ButtonWithBackground>
            <ButtonWithBackground title="Back" color="red" onPress={()=>props.navigation.navigate('home')}></ButtonWithBackground>
        </View>
    )
}

export default ProductDetailScreen;

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