/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable quotes */

import React, {useState} from "react";
import {View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../../assets/Styles";

export default function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Insira seu Email</Text>
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            onChangeText={(text)=> setEmail}
            value={email}
            />
            <Text style={styles.text}>Insira uma Senha</Text>
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            onChangeText={(text)=> setPassword}
            value={password}
            />
            <Text style={styles.text}>Confirme sua Senha</Text>
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            onChangeText={(text)=> setPasswordConfirm}
            value={passwordConfirm}
            />
            <TouchableOpacity style={styles.buttomLog} onPress={ ()=>{
                    navigation.navigate('Login')
                    Alert.alert('Usuario cadastrado com sucesso')}
                    }>
                <Text style={{fontSize:15, color:'white'}}>Criar</Text>
            </TouchableOpacity>
        </View>
    );
}