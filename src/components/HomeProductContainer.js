import React from "react";
import {Image, Pressable, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import { Dimensions } from 'react-native';

const getWidth = () => Dimensions.get('window').width;
    const HomeCard = ['New arrivals','Paintings','Budget Friendly','Deals of the Day'] ;
    export {HomeCard};

export default function HomeProductContainer(props){
    return(
        <View style={styles.main}>

        <View style={styles.header}>
        <Text style={styles.textFont}>{props.name}</Text>
        <Pressable onPress={props.onSeeMore} >
        <Text style={styles.textFont}>See more</Text>
        </Pressable>
        </View>

        <View style={styles.body}>
        <View style={styles.subsBody}>
         <TouchableOpacity onPress={props.ontap} >
         <Image  style={styles.imgStyle} source={{uri:"https://assets.puzzlefactory.pl/puzzle/201/486/original.jpg"}} resizeMode="cover" />
        <View style={{paddingLeft:25}}>
         <Text style={styles.textF}>Lady painting</Text>
         <Text style={styles.textp}>3000</Text>
         <Text style={{textDecorationLine:'line-through'}}>5000</Text>
         </View>
         </TouchableOpacity>
         </View>

         <View style={styles.subBody}>
         <View style={styles.subsBody}>
         <TouchableOpacity onPress={props.ontap} >
         <Image  style={styles.imgStyleSmall} source={{uri:"https://m.media-amazon.com/images/I/81nh7yEGiHL._SX466_.jpg"}} resizeMode="cover" />
         <View style={{paddingLeft:25}}>
         <Text style={styles.textF}>Moon painting</Text>
         <Text style={styles.textp}>3000</Text>
         <Text style={{textDecorationLine:'line-through'}}>5000</Text>
         </View>
         </TouchableOpacity>
         </View>
         <View style={styles.subsBody}>
         <TouchableOpacity onPress={props.ontap} >
         <Image  style={styles.imgStyleSmall} source={{uri:"https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} resizeMode="cover" />
         <View style={{paddingLeft:25}}>
         <Text style={styles.textF}>Artistic painting</Text>
         <Text style={styles.textp}>3000</Text>
         <Text style={{textDecorationLine:'line-through'}}>5000</Text>
         </View>
         </TouchableOpacity>
         </View>
         
         </View>
        
        </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop:10,
        flexDirection:"column",
        justifyContent:"flex-start",
        backgroundColor:"white",
        width:getWidth(),
       // height:360,
       

    },
    header:{
        padding:7,
        flexDirection:"row",
        justifyContent:"space-between",
        width:getWidth(),
       
    },
    body:{
        marginTop:5,
        flexDirection:"row",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#e1e1e1",
        width:'100%',
        backgroundColor:"#fff",
        
       
      
    },
    subsBody:{
    
        flexDirection:"column",
        justifyContent:"center",
        borderWidth:1,
        borderColor:"#e1e1e1",
        width:getWidth()/2,
    
    },
    imgStyle:{
     width:'100%',
     height:270,
    },
    imgStyleSmall:{
        width:'100%',
        height:100,
       },
    textFont: {
        fontSize: 24,
        fontWeight: '600',
        color:"#9932CC",
      },
      subBody:{
    
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"flex-start",
        borderWidth:1,
        borderColor:"#e1e1e1",
        width:getWidth()/2,
        
    },
    textF: {
        fontSize: 19,
        fontWeight: '600',
        color:"#9932CC",
      },
      textp: {
        fontSize: 17,
        fontWeight: '600',
        color:"green",
      },
})