import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import words from "./src/Words";
import styles from './src/Style'

export default function App() {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [newGame, setNewGame] = useState(false);
  const [dice, setDice] = useState('');

  useEffect(() => {
    if (newGame) {
      const numero = Math.floor(Math.random() * words.length);
      const wordAleatory = words[numero];
      setNewGame(false);
      setWord(wordAleatory.word);
      setDice(wordAleatory.dice);
      setGuesses([]);
      setRemainingAttempts(6);
    }

  }, [newGame]);

  const handleGuess = (letter) => {
    const newGuesses = [...guesses, letter];
    setGuesses(newGuesses);

    if (word.indexOf(letter) === -1) {
      setRemainingAttempts(remainingAttempts - 1);
    } 
  };
  const maskedWord = word.split('').map((letter) => (guesses.includes(letter) ? letter : '_')).join(' ');

  const handleNewGame = () => {
    setNewGame(true);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.btArea}>
        <TouchableOpacity style={styles.btOptions} onPress={handleNewGame}>
          <Text style={styles.textBt}>Chutar palavra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btOptions} onPress={handleNewGame}>
          <Text style={styles.textBt}>Novo Jogo</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.btArea, { backgroundColor: 'aqua' }]}>
        <Text style={{ fontSize: 20, fontStyle: 'italic' }}>{dice}</Text>
      </View>
      <View>
        <Text>{maskedWord}</Text>
      </View>
      <View>
        <Text>{remainingAttempts}</Text>
      </View>
      <View>
        <Button title="e" onPress={() => handleGuess('e')} />
        <Button title="t" onPress={() => handleGuess('t')} />
        <Button title="i" onPress={() => handleGuess('i')} />
        <Button title="s" onPress={() => handleGuess('s')} />
      </View>
    </View>
  );
}