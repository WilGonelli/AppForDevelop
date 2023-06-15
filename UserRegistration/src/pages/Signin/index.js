/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
/* eslint-disable quotes */

import React, {useState} from "react";
import {View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from "../../assets/Styles";
import getCities from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export default function Signin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigation = useNavigation();
    const auth = getAuth(getCities);

    function compare(){
        if(password === passwordConfirm){
            signin();
        }else{
            Alert.alert('Senhas diferentes')
        }
    }

    async function signin() {
        await createUserWithEmailAndPassword(auth, email, password)
            .then((value) => {
                Alert.alert('Usuário ' + value.user.email + ' cadastrado com sucesso');
                navigation.navigate('Login');
            })
            .catch((error) => {
                Alert.alert('Algo deu errado');
            });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Insira seu Email</Text>
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            onChangeText={(text)=> setEmail(text)}
            value={email}
            />
            <Text style={styles.text}>Insira uma Senha</Text>
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            onChangeText={(text)=> setPassword(text)}
            value={password}
            />
            <Text style={styles.text}>Confirme sua Senha</Text>
            <TextInput
            style={styles.textArea}
            underlineColorAndroid="transparent"
            onChangeText={(text)=> setPasswordConfirm(text)}
            value={passwordConfirm}
            />
            <TouchableOpacity style={styles.buttomLog} onPress={ ()=>{compare()}}>
                <Text style={{fontSize:15, color:'white'}}>Criar</Text>
            </TouchableOpacity>
        </View>
    );
}