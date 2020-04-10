import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MultipageCalculatorScreen from './components/MultipageCalculator';
import HistoryScreen from './components/screens/History';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="MultipageCalculatorScreen"
            component={MultipageCalculatorScreen}
            options={{title: 'Calculator'}}
          />
          <Stack.Screen 
            name="HistoryScreen"
            component={HistoryScreen}
            options={{title: 'History'}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
