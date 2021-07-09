import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from "./screens/HomeScreen";
import SpaceCraftScreen from "./screens/SpaceCraftScreen";
import DailyPicScreen from "./screens/DailyPicScreen";
import StarMapScreen from "./screens/StarMapScreen";

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="home" component={HomeScreen}/>
          <Stack.Screen name="spacecraft" component={SpaceCraftScreen}/>
          <Stack.Screen name="daily-pic" component={DailyPicScreen}/>
          <Stack.Screen name="star-map" component={StarMapScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
