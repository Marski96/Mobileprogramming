import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberGame from './components/NumberGame'

export default function App() {
  return (
    <View style={styles.container}>
      <NumberGame></NumberGame>
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
