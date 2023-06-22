import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import words from "./src/Words";
import styles from './src/Style'

export default function App() {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(6);
  const [newGame, setNewGame] = useState(false);
  const [dice, setDice] = useState('');
  const [keyBoard, setKeyboard] = useState({
    q: { disabled: false, color: 'darkcyan' },
    w: { disabled: false, color: 'darkcyan' },
    e: { disabled: false, color: 'darkcyan' },
    r: { disabled: false, color: 'darkcyan' },
    t: { disabled: false, color: 'darkcyan' },
    y: { disabled: false, color: 'darkcyan' },
    u: { disabled: false, color: 'darkcyan' },
    i: { disabled: false, color: 'darkcyan' },
    o: { disabled: false, color: 'darkcyan' },
    p: { disabled: false, color: 'darkcyan' },
    a: { disabled: false, color: 'darkcyan' },
    s: { disabled: false, color: 'darkcyan' },
    d: { disabled: false, color: 'darkcyan' },
    f: { disabled: false, color: 'darkcyan' },
    g: { disabled: false, color: 'darkcyan' },
    h: { disabled: false, color: 'darkcyan' },
    j: { disabled: false, color: 'darkcyan' },
    k: { disabled: false, color: 'darkcyan' },
    l: { disabled: false, color: 'darkcyan' },
    z: { disabled: false, color: 'darkcyan' },
    x: { disabled: false, color: 'darkcyan' },
    c: { disabled: false, color: 'darkcyan' },
    v: { disabled: false, color: 'darkcyan' },
    b: { disabled: false, color: 'darkcyan' },
    n: { disabled: false, color: 'darkcyan' },
    m: { disabled: false, color: 'darkcyan' },
  });
 
  useEffect(() => {
    if (newGame) {
      const numero = Math.floor(Math.random() * words.length);
      const wordAleatory = words[numero];
      setNewGame(false);
      setWord(wordAleatory.word);
      setDice(wordAleatory.dice);
      setGuesses([]);
      setRemainingAttempts(6);
      setKeyboard({
        q: { disabled: false, color: 'darkcyan' },
        w: { disabled: false, color: 'darkcyan' },
        e: { disabled: false, color: 'darkcyan' },
        r: { disabled: false, color: 'darkcyan' },
        t: { disabled: false, color: 'darkcyan' },
        y: { disabled: false, color: 'darkcyan' },
        u: { disabled: false, color: 'darkcyan' },
        i: { disabled: false, color: 'darkcyan' },
        o: { disabled: false, color: 'darkcyan' },
        p: { disabled: false, color: 'darkcyan' },
        a: { disabled: false, color: 'darkcyan' },
        s: { disabled: false, color: 'darkcyan' },
        d: { disabled: false, color: 'darkcyan' },
        f: { disabled: false, color: 'darkcyan' },
        g: { disabled: false, color: 'darkcyan' },
        h: { disabled: false, color: 'darkcyan' },
        j: { disabled: false, color: 'darkcyan' },
        k: { disabled: false, color: 'darkcyan' },
        l: { disabled: false, color: 'darkcyan' },
        z: { disabled: false, color: 'darkcyan' },
        x: { disabled: false, color: 'darkcyan' },
        c: { disabled: false, color: 'darkcyan' },
        v: { disabled: false, color: 'darkcyan' },
        b: { disabled: false, color: 'darkcyan' },
        n: { disabled: false, color: 'darkcyan' },
        m: { disabled: false, color: 'darkcyan' },
      });
    }

  }, [newGame]);

  const handleGuess = (letter) => {
    
    const newGuesses = [...guesses, letter];
    setGuesses(newGuesses);

    if (word.indexOf(letter) === -1) {
      setRemainingAttempts(remainingAttempts - 1);
      setKeyboard((prevState) => {
        return { ...prevState, [letter]: { disabled: true, color: 'darkgray'} };
      });
    }else{
      setKeyboard((prevState) => {
        return { ...prevState, [letter]: { disabled: true, color: 'green'} };
      });
    }
    if(remainingAttempts=== 1){
      Alert.alert(`Você PERDEU A palavra era: ${word}. \n\t\t Tente Novamente`)
      setNewGame(true);
    }
      
  };
  const maskedWord = word.split('').map((letter) => (guesses.includes(letter) ? letter : '_')).join(' ');

  const handleNewGame = () => {
    setNewGame(true);
  };
  return (
    <ImageBackground source={require('./src/assets/forca.jpg')} style={styles.backgroundImage}>
      <View style={{ flex: 1 }}>
        <View style={styles.btArea}>
          <TouchableOpacity style={styles.btOptions} onPress={handleNewGame}>
            <Text style={styles.textBt}>Novo Jogo</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.btArea, { backgroundColor: 'rgba(20,150,150,0.7)' }]}>
          <Text style={{ fontSize: 25, fontStyle: 'italic',color:'black' }}>{dice}</Text>
        </View>
        <View style={{ flex: 1 , alignItems:'flex-end',justifyContent:'flex-end',marginEnd:100}}>
          <Text style={{ fontSize:50,fontWeight:'bold', color:'black'}}>{remainingAttempts}</Text>
        </View>
        <View style={{ flex: 1 , justifyContent:'flex-end',marginBottom:30}}>
          <Text style={{ fontSize:50,fontWeight:'bold', color:'black', marginStart:30}}>{maskedWord}</Text>
        </View>
        <View style={styles.keyboard}>
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.q.color }]} onPress={() => handleGuess('q')} disabled={keyBoard.q.disabled}>
            <Text style={styles.textBt}>q</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.w.color }]} onPress={() => handleGuess('w')} disabled={keyBoard.w.disabled}>
            <Text style={styles.textBt}>w</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.e.color }]} onPress={() => handleGuess('e')} disabled={keyBoard.e.disabled}>
            <Text style={styles.textBt}>e</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.r.color }]} onPress={() => handleGuess('r')} disabled={keyBoard.r.disabled}>
            <Text style={styles.textBt}>r</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.t.color }]} onPress={() => handleGuess('t')} disabled={keyBoard.t.disabled}>
            <Text style={styles.textBt}>t</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.y.color }]} onPress={() => handleGuess('y')}  disabled={keyBoard.y.disabled}>
            <Text style={styles.textBt}>y</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.u.color }]} onPress={() => handleGuess('u')} disabled={keyBoard.u.disabled}>
            <Text style={styles.textBt}>u</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.i.color }]} onPress={() => handleGuess('i')} disabled={keyBoard.i.disabled}>
            <Text style={styles.textBt}>i</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.o.color }]} onPress={() => handleGuess('o')} disabled={keyBoard.o.disabled}>
            <Text style={styles.textBt}>o</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.p.color }]} onPress={() => handleGuess('p')} disabled={keyBoard.p.disabled}>
            <Text style={styles.textBt}>p</Text>
          </TouchableOpacity>             
        </View>
        <View style={styles.keyboard}>
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.a.color }]} onPress={() => handleGuess('a')} disabled={keyBoard.a.disabled}>
            <Text style={styles.textBt}>a</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.s.color }]} onPress={() => handleGuess('s')} disabled={keyBoard.s.disabled}>
            <Text style={styles.textBt}>s</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.d.color }]} onPress={() => handleGuess('d')} disabled={keyBoard.d.disabled}>
            <Text style={styles.textBt}>d</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.f.color }]} onPress={() => handleGuess('f')} disabled={keyBoard.f.disabled}>
            <Text style={styles.textBt}>f</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.g.color }]} onPress={() => handleGuess('g')} disabled={keyBoard.g.disabled}>
            <Text style={styles.textBt}>g</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.h.color }]} onPress={() => handleGuess('h')} disabled={keyBoard.h.disabled}>
            <Text style={styles.textBt}>h</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.j.color }]} onPress={() => handleGuess('j')} disabled={keyBoard.j.disabled}>
            <Text style={styles.textBt}>j</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.k.color }]} onPress={() => handleGuess('k')} disabled={keyBoard.k.disabled}>
            <Text style={styles.textBt}>k</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.l.color }]} onPress={() => handleGuess('l')} disabled={keyBoard.l.disabled}>
            <Text style={styles.textBt}>l</Text>
          </TouchableOpacity>              
        </View>
        <View style={styles.keyboard}>
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.z.color }]} onPress={() => handleGuess('z')} disabled={keyBoard.z.disabled}>
            <Text style={styles.textBt}>z</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.x.color }]} onPress={() => handleGuess('x')} disabled={keyBoard.x.disabled}>
            <Text style={styles.textBt}>x</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.c.color }]} onPress={() => handleGuess('c')} disabled={keyBoard.c.disabled}>
            <Text style={styles.textBt}>c</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.v.color }]} onPress={() => handleGuess('v')} disabled={keyBoard.v.disabled}>
            <Text style={styles.textBt}>v</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.b.color }]} onPress={() => handleGuess('b')} disabled={keyBoard.b.disabled}>
            <Text style={styles.textBt}>b</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.n.color }]} onPress={() => handleGuess('n')} disabled={keyBoard.n.disabled}>
            <Text style={styles.textBt}>n</Text>
          </TouchableOpacity> 
          <TouchableOpacity style={[styles.keyboardBt, { backgroundColor: keyBoard.m.color }]} onPress={() => handleGuess('m')} disabled={keyBoard.m.disabled}>
            <Text style={styles.textBt}>m</Text>
          </TouchableOpacity>            
        </View>
      </View>
    </ImageBackground>
  );
}