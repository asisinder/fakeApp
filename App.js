
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MainNavigation from './src/navigation';


const App=()=>{
  return (
    <View style={styles.container}>
   <MainNavigation />
   </View>
  )
}



export default App;

const styles = StyleSheet.create({
container:{
  display:'flex',
  flex:1,
  backgroundColor:"white",

},
})
