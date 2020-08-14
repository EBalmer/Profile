import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Hobbies, Home, PersonalStatement, Education, Employment, Experience, Details } from './screens/index'

function HomeScreen({ navigation }) {
  return (
    <Home
      navHobbies={() => navigation.navigate('Hobbies')}
      navPersonalStatement={() => navigation.navigate('PersonalStatement')}
      navEducation={() => navigation.navigate('Education')}
      navEmployment={() => navigation.navigate('Employment')}
      navExperience={() => navigation.navigate('Experience')}
      navDetails={() => navigation.navigate('Details')} />
  );
}

function PersonalStatementScreen() {
  return (
    <PersonalStatement />
  );
}

function HobbiesScreen() {
  return (
    <Hobbies />
  );
}

function EducationScreen() {
  return (
    <Education />
  );
}

function EmploymentScreen() {
  return (
    <Employment />
  );
}

function ExperienceScreen() {
  return (
    <Experience />
  );
}

function DetailsScreen() {
  return (
    <Details />
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
        <Stack.Screen name="Hobbies" component={HobbiesScreen} />
        <Stack.Screen name="PersonalStatement" component={PersonalStatementScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
        <Stack.Screen name="Employment" component={EmploymentScreen} />
        <Stack.Screen name="Experience" component={ExperienceScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;