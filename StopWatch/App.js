import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Timer from "./src/Timer";
import StopWatch from "./src/StopWatch";

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cronometro" component={StopWatch} options={{
          tabBarLabel: 'Cronometro',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="stopwatch" color={color} size={size} />
          ),
          tabBarLabelStyle:{
            fontSize:15,
            fontWeight: 'bold',
          }
        }} />
        <Tab.Screen name="Temporizador" component={Timer} options={{
          tabBarLabel: 'Temporizador',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer" color={color} size={size} />
          ),
          tabBarLabelStyle:{
            fontSize:15,
            fontWeight: 'bold',
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}