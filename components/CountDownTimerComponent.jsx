import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 60 }, (_, i) => i);
const seconds = Array.from({ length: 60 }, (_, i) => i);//ai gen

function CountdownComponent() {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedSecond, setSelectedSecond] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && totalSeconds > 0) {
      interval = setInterval(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);
    } else if (totalSeconds === 0 && isActive) {
      clearInterval(interval);
      Alert.alert("Time's up!");
      setIsActive(false);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, totalSeconds]);

  const startTimer = () => {
    const total =
      parseInt(selectedHour) * 3600 +
      parseInt(selectedMinute) * 60 +
      parseInt(selectedSecond);
    setTotalSeconds(total);
    setIsActive(true);
  };

  const resetTimer = () => {
    setSelectedHour(0);
    setSelectedMinute(0);
    setSelectedSecond(0);
    setTotalSeconds(0);
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(totalSeconds)}</Text>
      {!isActive && (
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue) => setSelectedHour(itemValue)}
            style={styles.picker}
          >
            {hours.map((hour) => (
              <Picker.Item key={hour} label={`${hour}`} value={hour} />
            ))}
          </Picker>
          <Picker
            selectedValue={selectedMinute}
            onValueChange={(itemValue) => setSelectedMinute(itemValue)}
            style={styles.picker}
          >
            {minutes.map((minute) => (
              <Picker.Item key={minute} label={`${minute}`} value={minute} />
            ))}
          </Picker>
          <Picker
            selectedValue={selectedSecond}
            onValueChange={(itemValue) => setSelectedSecond(itemValue)}
            style={styles.picker}
          >
            {seconds.map((second) => (
              <Picker.Item key={second} label={`${second}`} value={second} />
            ))}
          </Picker>
        </View>
      )}
      <View style={styles.row}>
        <Button
          icon={isActive ? 'pause' : 'play'}
          mode="contained"
          onPress={isActive ? () => setIsActive(false) : startTimer}
        >
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button icon="restart" mode="contained" onPress={resetTimer}>
          Reset
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 48,
    marginBottom: 20,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  picker: {
    width: 100,
    height: 150,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default CountdownComponent;
