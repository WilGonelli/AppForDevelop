/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Agents from './src/pages/Agents';
import Agent from './src/pages/Agent';

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Agents" component={Agents}/>
        <Stack.Screen name = "Agent" component={Agent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
