/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../assets/Style';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../../assets/images/logo.png')} style={styles.backgroundImage}>
      <View style={[styles.container,  {justifyContent:'space-around'}]}>
        <TouchableOpacity style={[styles.button,{backgroundColor: 'rgba(0, 0, 0, 0.7)', height: 100, width: '80%'}]} onPress={ ()=> navigation.navigate('Agents') }>
          <Text style={[styles.text,{fontSize:30}]}>Agents</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

