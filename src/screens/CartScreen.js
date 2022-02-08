import React from "react";
import {View,Text,Button, StyleSheet} from 'react-native';
import ButtonWithBackground from "../components/ButtonWithBackground";

function CartScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Cart Screen</Text>
            <ButtonWithBackground title="Proceed To Pay" color="green" onPress={()=>props.navigation.navigate('shipping')}></ButtonWithBackground>
            <ButtonWithBackground title="Back" color="red" onPress={()=>props.navigation.goBack()}></ButtonWithBackground>
        </View>
    )
}

export default CartScreen;

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