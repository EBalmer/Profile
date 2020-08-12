import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Adventure } from './screens/index'

function HomeScreen({ navigation }) {
  return (
    <Home onPress = {() => navigation.navigate('Adventure')} />
  );
}

function AdventureScreen() {
  return (
    <Adventure />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Adventure" component={AdventureScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;