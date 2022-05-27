import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import LoginScreens from './Screens/LoginScreens';
import RegistrationScreens from './Screens/RegistrationScreens';
import SplashScreen from './Screens/SplashScreen';
import Animal from './Screens/Animal';
import Fruit from './Screens/Fruit';
import Machine from './Screens/Machine';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="plashScreen"
          component={SplashScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="registrationScreens"
          component={RegistrationScreens}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="loginScreens"
          component={LoginScreens}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{header: () => null}}
        />
        <Stack.Screen name="Animal" component={Animal} />
        <Stack.Screen name="Fruit" component={Fruit} />
        <Stack.Screen name="Machine" component={Machine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
