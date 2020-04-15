import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EuroConverter from './components/EuroConverter';

export default function App() {
  return (
    <View style={styles.container}>
      <EuroConverter></EuroConverter>
    </View>
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
