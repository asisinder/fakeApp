import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

function SearchBox(props){
    return(
        <TextInput style={styles.input} placeholder='Search' placeholderTextColor="#DCDCDC" />
    )

}
export default SearchBox;

const styles = StyleSheet.create({
    input: {
      height: 50,
      margin: 5,
      borderRadius:15,
      padding: 10,
      backgroundColor:"#F5F5F5",
      fontSize:20,
    },
  });