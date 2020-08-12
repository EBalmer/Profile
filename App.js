import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => navigation.navigate('1')}
      />
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('2')}
      />
      <Button
        title="Go to Screen 3"
        onPress={() => navigation.navigate('3')}
      />
    </View>
  );
}

function Screen1() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 1</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen 3</Text>
    </View>
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
        <Stack.Screen name="1" component={Screen1} />
        <Stack.Screen name="2" component={Screen2} />
        <Stack.Screen name="3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;