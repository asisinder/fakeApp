import React from 'react';
import { SafeAreaView,StatusBar,View,Text, StyleSheet, TextInput } from 'react-native';
import SearchBox from './SearchBox';

function Header(props){
    return(
      <SafeAreaView >
      <StatusBar hidden={false} backgroundColor="#9932CC" />

      <View style={styles.newcontainer}>

      <View style={styles.container}>
      <Text style={styles.heading}>Online Art Store</Text>
      <Text style={styles.smallheading}> Log out</Text>
      </View>

      <SearchBox />
      </View>
      
      </SafeAreaView>
    )
};

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:5,
        backgroundColor:"#9932CC",
        
    },
    heading:{
       fontSize:25,
       color:"white",
       fontWeight:"bold",
       
    },
    smallheading:{
        fontSize:15,
        color:"white",
        fontWeight:"bold",
        
     },
     newcontainer:{
        flexDirection:"column",
        justifyContent:"flex-start",
        backgroundColor:"#9932CC",
        height:110,
    },

});