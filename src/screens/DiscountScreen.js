import React from "react";
import {View,Text,StyleSheet} from 'react-native';


function DiscountScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>Discount Screen %</Text>
            <Text style={styles.textFont}>List of Products </Text>
            
        </View>
    )
}

export default DiscountScreen;

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
