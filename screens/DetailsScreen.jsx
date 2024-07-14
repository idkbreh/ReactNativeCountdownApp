import React, { useState } from 'react';
import { View, Text, Button, StyleSheet ,Alert} from 'react-native';

function HomeScreen({ navigation }) {
  const [language, setLanguage] = useState('English');
  const showAlert = () => {
    Alert.alert(
      'Alert ',
      'Kuay ',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'English' ? 'Thai' : 'English');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Language: {language}</Text>
      {language === 'English' && <Text>Welcome to Application</Text>}
      {language === 'Thai' && <Text>ยินดีต้อนรับเข้าสู่แอพพลิเคชั่น.</Text>}
      <Button
        title="Change language"
        onPress={toggleLanguage}
      />
      <Button
        title='Test alert'
        onPress={showAlert}
      />
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
