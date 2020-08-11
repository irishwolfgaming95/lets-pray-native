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
        <Stack.Screen name="Jam" component={FirstUser}/>
        <Stack.Screen name="Robby" component={SecondUser}/>
        <Stack.Screen name="Derek" component={ThirdUser}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export function Home({ navigation: {navigate} }) {



  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Prayer App.</Text>
      <TextInput style={
        {height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
        ></TextInput>
      
      <Text>Live changes</Text>
      <Button onPress={() => navigate('Jam')} title={`Go to Jam's profile.`}/>
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

export function FirstUser({ navigation: { navigate } }) {

  return (
    
    <View>
      <Text style={{fontWeight: 'bold'}}>This is Jam's Profile.</Text>
      <Button onPress={() => navigate('Robby')} title={`Go to Robby's Profile`}/>
    </View>
  );
}

export function SecondUser({navigation: { navigate }}) {

  return(
    <View>
      <Text style={{fontWeight: 'bold'}}>This is Robby's Profile.</Text>
      <Button onPress={() => navigate('Derek')} title={`go to Derek's Profile`}/>
    </View>
  );
}

export function ThirdUser({navigation: { navigate }}) {

  return(
    <View>
      <Text style={{fontWeight: 'bold'}}>This is Derek's Profile.</Text>
      <Button onPress={() => navigate('Home')} title="go to Home page"/>
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