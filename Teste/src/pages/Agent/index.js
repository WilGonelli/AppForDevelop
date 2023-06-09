/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable eol-last */
import React, {  useState } from 'react';
import { useRoute, useNavigation} from '@react-navigation/native';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';

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
        <Text style={styles.text}>
          <Image source={{ uri: agent.role.displayIcon }} style={styles.icon} />   {agent.role.displayName}
        </Text>
        <Text style={[styles.textDescription,{fontWeight:'bold'}]}>             {agent.description}</Text>
        <Text style={styles.text}>Abilities:</Text>
        </View>
        <ScrollView >
          <View style={styles.contentContainer}>
            <Text style={[styles.text,{fontSize:25}]}>
              <Image source={{ uri: agent.abilities[0].displayIcon }} style={styles.icon} />   {agent.abilities[0].displayName}:
            </Text>
            <Text style={styles.textDescription}>                   {agent.abilities[0].description}</Text>
            <Text style={[styles.text,{fontSize:25}]}>
              <Image source={{ uri: agent.abilities[1].displayIcon }} style={styles.icon} />   {agent.abilities[1].displayName}:
            </Text>
            <Text style={styles.textDescription}>                   {agent.abilities[1].description}</Text>
            <Text style={[styles.text,{fontSize:25}]}>
              <Image source={{ uri: agent.abilities[2].displayIcon }} style={styles.icon} />   {agent.abilities[2].displayName}:
            </Text>
            <Text style={styles.textDescription}>                   {agent.abilities[2].description}</Text>
          </View>
        </ScrollView>
      
    </ImageBackground>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Define um fundo semi-transparente para o conteúdo
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 4,
    textShadowColor: 'white',
    textShadowRadius: 10,
    marginStart:10,
  },
  icon:{
    height:30,
    width:30,
  },
  textDescription:{
    fontSize:16,
    color: 'white',
    margin:5,
  }
});