/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
import React, {  useState } from 'react';
import { useRoute, useNavigation} from '@react-navigation/native';
import { Text, View,  Image, ImageBackground, ScrollView } from 'react-native';
import styles from '../../assets/Style'

const DestinationScreen = () => {
  const route = useRoute();
  const { agent } = route.params;
  const navigation = useNavigation();
  const [agentSet, setAgentSet] = useState([]);
  // Define o título do cabeçalho com o displayName do agente
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: agent.displayName });
  }, [navigation, agent.displayName]);
  // Resto do código do componente
  return (
    <ImageBackground source={{ uri: agent.bustPortrait }} style={styles.backgroundImage}>
      <View style={styles.contentContainer}>
        <Text style={styles.textAgent}>
          <Image source={{ uri: agent.role.displayIcon }} style={styles.icon} />   {agent.role.displayName}
        </Text>
        <Text style={[styles.textDescription,{fontWeight:'bold'}]}>             {agent.description}</Text>
        <Text style={styles.textAgent}>Abilities:</Text>
        </View>
        <ScrollView >
          <View style={styles.contentContainer}>
            <Text style={[styles.textAgent,{fontSize:25}]}>
              <Image source={{ uri: agent.abilities[0].displayIcon }} style={styles.icon} />   {agent.abilities[0].displayName}:
            </Text>
            <Text style={styles.textDescription}>                   {agent.abilities[0].description}</Text>
            <Text style={[styles.textAgent,{fontSize:25}]}>
              <Image source={{ uri: agent.abilities[1].displayIcon }} style={styles.icon} />   {agent.abilities[1].displayName}:
            </Text>
            <Text style={styles.textDescription}>                   {agent.abilities[1].description}</Text>
            <Text style={[styles.textAgent,{fontSize:25}]}>
              <Image source={{ uri: agent.abilities[2].displayIcon }} style={styles.icon} />   {agent.abilities[2].displayName}:
            </Text>
            <Text style={styles.textDescription}>                   {agent.abilities[2].description}</Text>
          </View>
        </ScrollView>
      
    </ImageBackground>
  );
};

export default DestinationScreen;
