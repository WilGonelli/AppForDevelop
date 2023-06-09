/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await api.get('agents');
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
      <Text style={styles.buttonText}>{item.displayName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={agents}
        renderItem={renderAgent}
        keyExtractor={(item) => item.uuid}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: '40%',
    margin: 5,
    marginStart: 25,
    padding: 5,
    backgroundColor: 'teal',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Agents;
