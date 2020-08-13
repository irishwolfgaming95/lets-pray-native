import { NativeRouter, Route, Link } from "react-router-native";
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';



export default function App() {
  return (
    <NativeRouter>
      <View style={styles.nav}>
        <Link to="/">
          <Text style={{fontWeight: 'bold'}}>Home</Text>
        </Link>
        <Link to="/Jam">
          <Text style={{fontWeight: 'bold'}}>Jam</Text>
        </Link>
        <Link to="/Robby">
          <Text style={{fontWeight: 'bold'}}>Robby</Text>
        </Link>
        <Link to="/Derek">
          <Text style={{fontWeight: 'bold'}}>Derek</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home}/>
      <Route path="/Jam" component={FirstUser}/>
      <Route path="/Robby" component={SecondUser}/>
      <Route path="/Derek" component={ThirdUser}/>
    </NativeRouter>
  );
}

export function Home() {



  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Prayer App.</Text>
      <Text>Live changes</Text>
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

export function FirstUser() {

  return (
    
    <View>
      <Text style={{fontWeight: 'bold'}}>This is Jam's Profile.</Text>
    </View>
  );
}

export function SecondUser() {

  return(
    <View>
      <Text style={{fontWeight: 'bold'}}>This is Robby's Profile.</Text>
    </View>
  );
}

export function ThirdUser() {

  return(
    <View>
      <Text style={{fontWeight: 'bold'}}>This is Derek's Profile.</Text>
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

  nav: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginTop: 50,
    padding: 10
  }

});