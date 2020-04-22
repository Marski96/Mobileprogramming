import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FindAddress from './components/FindAddress';

export default function App() {
  return (
    <View style={styles.container}>
      <FindAddress></FindAddress>      
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
