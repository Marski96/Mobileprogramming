import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorWithHistory from './components/CalculatorWithHistory';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorWithHistory></CalculatorWithHistory>
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
