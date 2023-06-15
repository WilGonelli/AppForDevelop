/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable quotes */

import React, { useState } from "react";
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../../assets/Styles";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Email</Text>
            <TextInput
            style={styles.textArea}
                underlineColorAndroid="transparent"
                onChangeText={(text)=> setEmail}
                value={email}
            />
            <Text style={styles.text}>Senha</Text>
            <TextInput
            style={styles.textArea}
                underlineColorAndroid="transparent"
                onChangeText={(text)=> setPassword}
                value={password}
            />
            <TouchableOpacity style={styles.buttomLog} onPress={ ()=>navigation.navigate('Home')} >
                <Text style={{fontSize:15, color:'white'}}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttom} onPress={ ()=>navigation.navigate('Signin')}>
                <Text style={{fontSize:15, color:'white'}}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}