import React from "react";
import {View,Text, StyleSheet} from 'react-native';
import ButtonWithBackground from "../components/ButtonWithBackground";

function UserProfileScreen(props){
    return(
        <View style={styles.container}>
            <Text style={styles.textFont}>User Profile Screen</Text>
            <ButtonWithBackground title="Your Orders" color="green"  onPress={()=>props.navigation.navigate('order')}></ButtonWithBackground>
            
        </View>
    )
}

export default UserProfileScreen;

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
