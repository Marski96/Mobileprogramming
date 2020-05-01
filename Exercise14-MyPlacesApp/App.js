import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyPlaces from './components/MyPlaces';
import Map from './components/Map';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyPlaces"
          component={MyPlaces}
          options={{title: "MyPlaces"}}
        />
        <Stack.Screen 
          name="Map"
          component={Map}
          option={{title: "Map"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}