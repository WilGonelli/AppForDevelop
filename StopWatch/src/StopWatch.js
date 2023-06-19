import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from "./GlobalStyle";

export default function StopWatch() {
  const [mille, setMille] =useState(0);
  const [seconds,setSeconds] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours, setHours] = useState(0);

  const [start, setStart] = useState(false);
  const [icon, setIcon] = useState("play");
  const [color, setColor] = useState("dodgerblue")
  const [color2, setColor2] = useState("black")
  const [status,setStatus] = useState("")

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setMille((prevMille) => prevMille + 1);
        if(mille >= 99){
            setSeconds((prevSecunds) => prevSecunds + 1);
            setMille(0);
            return
          }
          if(seconds === 59){
            setMinute((prevMinute) => prevMinute + 1);
            setSeconds(0);
            return
          }
          if(minute === 59){
            setHours((prevHours) => prevHours + 1);
            setMinute(0);
            return
          }
      }, 1);  
    }
    return () => clearInterval(intervalId);
  }, [start, mille, minute, seconds]);

  const handleStart = () => {
    if(start){
        setStart(false);
        setIcon("play");
        setColor("dodgerblue");
        setColor2("black");
        setStatus("Pause");
    }else{
        setStart(true);
        setIcon("pause");
        setColor("khaki");
        setColor2("red");
        setStatus("");
    }
  };
  const handleStop = () => {
    setStart(false);
    setMille(0);
    setSeconds(0);
    setMinute(0);
    setHours(0);
    setColor("dodgerblue");
    setColor2("black");
    setIcon("play");
    setStatus("");
  };
  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };
  return (
    <View style={styles.container}>
        <View style={styles.areaText}>
        <Text style={[styles.timer,{color:'black'}]}>{status}</Text>
        <Text style={styles.timer}>
          {formatTime(hours)} : {formatTime(minute)} : {formatTime(seconds)} :{" "}
          {formatTime(mille)}
        </Text>
        </View>
        <View style={styles.areaButtom}>
            <FontAwesome.Button
                style={styles.buttom}
                name={icon}
                backgroundColor={color}
                onPress={handleStart}
            />
            <FontAwesome.Button
                style={styles.buttom}
                name="stop"
                backgroundColor={color2}
                onPress={handleStop}
            />
        </View>
    </View>
  );
}

