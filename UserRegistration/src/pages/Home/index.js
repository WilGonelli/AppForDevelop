/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable quotes */

import React from "react";
import {View, Text, TextInput, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import Login from "../LogIn";
import styles from "../../assets/Styles";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.containerHome}>
            <Text style={styles.text}>Bem Vindo!!!</Text>
            <Icon name="log-out" size={40} style={{marginEnd:30}} onPress={ ()=> navigation.navigate('Login') } />
        </View>
    );
}