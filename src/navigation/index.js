import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ShippingScreen from '../screens/ShippingScreen';
import YourOrderScreen from '../screens/YourOrderScreen';
import PaymentgatewayScreen from '../screens/PaymentgatewayScreen';


 const myStack = createNativeStackNavigator();

const MainNavigation = (props) =>{
    return(
        <NavigationContainer>
            <myStack.Navigator screenOptions={{headerShown:false}} initialRouteName='login'>
              <myStack.Screen name='login' component={LoginScreen}/>
              <myStack.Screen name='signup' component={SignupScreen} />
              <myStack.Screen name='home' component={HomeScreen} />
              <myStack.Screen name='cart' component={CartScreen} />
              <myStack.Screen name='product' component={ProductDetailScreen}  />
              <myStack.Screen name='shipping' component={ShippingScreen}  />
              <myStack.Screen name='order' component={YourOrderScreen}  />
              <myStack.Screen name='payment' component={PaymentgatewayScreen}  />
            
            </myStack.Navigator>
        </NavigationContainer>
    )
}




export default MainNavigation;