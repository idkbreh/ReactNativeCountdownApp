import React, { useState } from 'react'
import TimerComponent from '../components/TimerComponent'
import { Button } from 'react-native-paper';
import {StyleSheet, View,Text} from 'react-native'
import CountdownComponent from '../components/CountDownTimerComponent';

function TimerScreen() {

    const [mode, setMode] = useState('timer');
    const toggleChangeMode = () => {
            setMode(modeSelect => modeSelect === 'timer' ? 'countdown' : 'timer');
        };

  return (
    <>
    <View style={styles.container}>
        <Text> </Text> 

        <Button
            style={styles.button}
            icon="globe-model"
            mode="contained-tonal"
            onPress={toggleChangeMode}>
            {mode}
        </Button>

    </View>
    {mode === "timer" && <TimerComponent/>}
    {mode === "countdown" && <CountdownComponent/>}
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        color:'white',
        backgroundColor:'rgba(0, 0, 0, 0.82)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
      marginTop: 50,
    },
  });

export default TimerScreen
