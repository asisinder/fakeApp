import React from "react";
import {View,Text,Button, StyleSheet} from 'react-native';

function YourOrderScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Your Order Screen</Text>
        
            <Button title="Back" style={styles.buttonStyleN} onPress={()=>props.navigation.navigate('bottomTab')}></Button>
        </View>
    )
}

export default YourOrderScreen;

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
    buttonStyleP:{
      borderRadius:"20px",
      height:10,
      width:"50%",
      backgroundColor:"lightgreen",
      color:"white",
      padding:5,
    },
    buttonStyleN:{
        borderRadius:"20px",
        height:10,
        width:"50%",
        backgroundColor:"red",
        color:"white",
        padding:5,
      },
});