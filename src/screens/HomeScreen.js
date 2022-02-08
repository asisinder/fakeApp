import React from "react";
import {View,Text,Button, StyleSheet} from 'react-native';
import ButtonWithBackground from "../components/ButtonWithBackground";

function HomeScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Home Screen</Text>
            <ButtonWithBackground title="Product1" color="green" onPress={()=>props.navigation.navigate('product')} />
           
        </View>
    )
}

export default HomeScreen;

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