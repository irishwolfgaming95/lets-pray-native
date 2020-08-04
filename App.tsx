import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  function handlePress() {
    console.log('YOU CLICKED THE BUTTON')
  }

  return (
    <View style={styles.container}>
      <Text>Live changes</Text>
      <Button onPress={handlePress} title="Press Me" />
      <StatusBar style="auto" />
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
