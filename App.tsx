import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export function Home() {
  function handlePress() {
    console.log('YOU CLICKED THE BUTTON')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Prayer App.</Text>
      <TextInput style={
        {height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
        ></TextInput>
      
      <Text>Live changes</Text>
      <Button onPress={handlePress} title="Press Me" />
      <Dropdown ></Dropdown>
      <StatusBar style="auto" />
    </View>
  );
}

export function Dropdown() {
  const [selectedValue, setSelectedValue] = useState("Jam");
  return (
    <View>
     <Text style={{fontWeight: 'bold', margin: 20}}>Profiles</Text>
      <Picker
         selectedValue={selectedValue}
         style={{ height: 50, width: 150}}
         onValueChange={(itemValue, _itemIndex) => setSelectedValue(itemValue)}>
         <Picker.Item label="Jam" value="User1" />
         <Picker.Item label="Robby" value="User2" />
         <Picker.Item label="Derek" value="User3" />
       </Picker>
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

  title: {
    fontWeight: 'bold',
    fontSize: 30,
    
  },

});