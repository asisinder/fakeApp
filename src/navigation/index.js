import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ShippingScreen from '../screens/ShippingScreen';
import YourOrderScreen from '../screens/YourOrderScreen';
import PaymentgatewayScreen from '../screens/PaymentgatewayScreen';
import DiscountScreen from '../screens/DiscountScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import UpdatePasswordScreen from '../screens/UpdatePasswordScreen';


 const myStack = createNativeStackNavigator();
 

const MainNavigation = (props) =>{
    return(
        <NavigationContainer>
            <myStack.Navigator screenOptions={{headerShown:false}} initialRouteName='login'>
              <myStack.Screen name='login' component={LoginScreen}/>
              <myStack.Screen name='signup' component={SignupScreen} />
              <myStack.Screen name='bottomTab' component={MyBottomTab} />
              <myStack.Screen name='cart' component={CartScreen} />
              <myStack.Screen name='product' component={ProductDetailScreen}  />
              <myStack.Screen name='shipping' component={ShippingScreen}  />
              <myStack.Screen name='order' component={YourOrderScreen}  />
              <myStack.Screen name='payment' component={PaymentgatewayScreen}  />
              <myStack.Screen name='discount' component={DiscountScreen} />
              <myStack.Screen name='forgetPassword' component={ForgetPasswordScreen} />
              <myStack.Screen name='updatePassword' component={UpdatePasswordScreen} />
              
            </myStack.Navigator>
        </NavigationContainer>
    )
}

const bottomStack = createMaterialBottomTabNavigator();
function MyBottomTab(){
    return(
        <bottomStack.Navigator screenOptions={{headerShown:false}} initialRouteName='home'  activeColor="red" 
        barStyle={{backgroundColor: 'white',height:100,display:'flex',flexDirection:"column",justifyContent:"space-evenly",}}>
           
           
           <bottomStack.Screen name='home' component={HomeScreen} options={{  tabBarLabel: 'Home',
           tabBarIcon:({color})=>(<FontAwesome name={'home'} color={color} size={20}/>),
           }}/>

           <bottomStack.Screen name='cart' component={CartScreen} options={{ tabBarLabel: 'Cart',
           tabBarIcon:({color})=>(<FontAwesome name={'shopping-cart'} color={color} size={20} />),
           }} />
           <bottomStack.Screen name='discount' component={DiscountScreen} options={{tabBarLabel: 'Discount',
           tabBarIcon:({color})=>(<FontAwesome name={'percent'} color={color} size={20} />),
           }} />
           <bottomStack.Screen name='user' component={UserProfileScreen} options={{tabBarLabel: 'User Profile',
           tabBarIcon:({color})=>(<FontAwesome name={'user'} color={color} size={20} />),
           }} />

        </bottomStack.Navigator>
    )
}



export default MainNavigation;