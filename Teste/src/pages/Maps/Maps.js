/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import api from '../../services/api';


class Maps extends Component{

    constructor(props){
        super(props);
        this.state = {
            agents: [],
        };

    }
    async componentDidMount(){
        const response = await api.get('agents/pt-br');
        this.setState({
            agents: response.data,
        });
    }

    render(){
        return(
            <View style={style.container}>
                <Text>...</Text>
            </View>
        );
    }

}
export default Maps;

const style = StyleSheet.create({
    container:{
        flex: 1,
    },
});

