import React from "react";
import {View,Text,Button, StyleSheet, KeyboardAvoidingView, FlatList, ScrollView} from 'react-native';
import ButtonWithBackground from "../components/ButtonWithBackground";
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../components/Header";
import HomeProductContainer, { HomeCard } from "../components/HomeProductContainer";

function HomeScreen(props){
    const renderitem=({item})=><HomeProductContainer name={item}  ontap={cat=>props.navigation.navigate('product')}/>
    return(
       <KeyboardAvoidingView style={styles.homee}>
        <Header />
        <FlatList data={HomeCard} renderItem={renderitem}
    keyExtractor={item => item.toString()} >
            
            {/* <ButtonWithBackground  title="Product1" color="green" onPress={()=>props.navigation.navigate('product')} />  */}
           
        </FlatList>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen;

const styles=StyleSheet.create({
    homee:{
    flexDirection:"column",
    justifyContent:"flex-start",
    backgroundColor:"#eee",

    },
    
    container:{
        marginTop:10,
       display:"flex",
       flexDirection:"column",
       backgroundColor:"#eee",
    },
    textFont: {
        fontSize: 24,
        fontWeight: '600',
      },
  
});