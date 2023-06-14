/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import styles from '../../assets/Style'

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await api.get('agents?language=pt-BR');
        const playableAgents = response.data.data.filter(agent => agent.isPlayableCharacter);
        setAgents(playableAgents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAgents();
  }, []);

  const handleAgentClick = (agent) => {
    navigation.navigate('Agent',  { agent });
  };

  const renderAgent = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleAgentClick(item)}>
      <Text style={styles.text}>{item.displayName}</Text>
      <Image source={{ uri: item.displayIcon }} style={styles.icon}/>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../../assets/images/VALORANT_Logo_V_thumbnail.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <FlatList
          data={agents}
          renderItem={renderAgent}
          keyExtractor={(item) => item.uuid}
          numColumns={2}
        />
      </View>
    </ImageBackground>
  );
};

export default Agents;
