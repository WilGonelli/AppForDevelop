/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={ ()=> navigation.navigate('Agents') }>
        <Text style={styles.text}>Agentes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={ ()=> navigation.navigate('Maps') }>
        <Text style={styles.text}>Mapas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  button:{
    height: '10%',
    backgroundColor:'blue',
    width: '60%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 25,
    margin: 20,
    borderColor:'black',
    borderWidth: 4,
  },
  text:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
