import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import {Button} from 'react-native-paper'
function TimerComponent() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(seconds)}</Text>
      <View style={styles.row}>
        <Button
            icon='contain-start'
            onPress={toggle}
            mode='contained'
        >
            {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button icon="camera" mode="contained"  onPress={reset}  >
            Reset
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color:'white',
    backgroundColor:'rgba(0, 0, 0, 0.82)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color:'white',
    fontSize: 60,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default TimerComponent
