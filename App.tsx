import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function App() {
  return (
    <NativeRouter>
      <Text style={styles.title}>This is the Prayer App.</Text>
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
      <Text style={{color: 'white'}}>Live changes</Text>
      <TextInput placeholder="Username"/>
      <TextInput placeholder="Password"/>
      <Button onPress={ () => {console.log("logged in");}} title="Login"/>
      <StatusBar style="auto"/>
    </View>
  );
}

export function FirstUser() {

  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text style={{fontWeight: 'bold'}}>This is Jam's Profile.</Text>
    </View>
  );
}

export function SecondUser() {

  return(
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>This is Robby's Profile.</Text>
    </View>
  );
}

export function ThirdUser() {

  return(
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>This is Derek's Profile.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nav: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginTop: 50,
    padding: 10,
  }

});