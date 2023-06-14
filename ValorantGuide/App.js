/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Agents from './src/pages/Agents';
import Maps from './src/pages/Maps/Maps';
import Agent from './src/pages/Agent';

const Stack = createNativeStackNavigator();
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Agents" component={Agents}/>
        <Stack.Screen name = "Maps" component={Maps}/>
        <Stack.Screen name = "Agent" component={Agent}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
