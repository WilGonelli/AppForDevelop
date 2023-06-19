/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import Login from "./src/pages/LogIn";
import Signin from "./src/pages/Signin";


const Stack = createNativeStackNavigator();

export default function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Signin" component={Signin}/>
        <Stack.Screen name = "Home" component={Home} options={{
          headerBackVisible: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}