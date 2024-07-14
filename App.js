// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen.jsx';
import TimerScreen from './screens/TimerScreen.jsx';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false ,tabBarStyle: {backgroundColor:'rgba(0, 0, 0, 0.82)'}}} initialRouteName="Timer">
        <Stack.Screen name="Timer" component={TimerScreen} screenOptions={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
