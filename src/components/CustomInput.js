import { View, Text,TextInput,StyleSheet } from 'react-native'
import React  from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry,keyboardType="default"}) => {
  return (
    <View style={styles.container}>
      <TextInput
       value={value}
       onChangeText={setValue}
       placeholder={placeholder}
       secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
       style={styles.input}></TextInput>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
         
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,

        paddingHorizontal:10,
        marginVertical:8,
    },
    input:{},
})

export default CustomInput