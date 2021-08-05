/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/Screens/Home';
import DetailsScreen from './src/Screens/Details';

const TestStack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <TestStack.Navigator screenOptions={{headerShown: false}}>
          <TestStack.Screen name="Home" component={HomeScreen} />
          <TestStack.Screen name="Detail" component={DetailsScreen} />
        </TestStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
