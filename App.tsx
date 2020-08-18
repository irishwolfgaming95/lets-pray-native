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
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Home</Text>
        </Link>
        <Link to="/Register">
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Register</Text>
        </Link>
        <Link to="/Jam">
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Jam</Text>
        </Link>
        <Link to="/Robby">
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Robby</Text>
        </Link>
        <Link to="/Derek">
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Derek</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home}/>
      <Route exact path="/Register" component={SignUp}/>
      <Route path="/Jam" component={FirstUser}/>
      <Route path="/Robby" component={SecondUser}/>
      <Route path="/Derek" component={ThirdUser}/>
    </NativeRouter>
  );
}

export function Home() {

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', marginBottom: 50}}>Sign in to get started.</Text>
      <TextInput style={{marginBottom: 20, borderWidth: 2, borderColor: 'white'}} placeholder="Email"/>
      <TextInput style={{marginBottom: 20, borderWidth: 2, borderColor: 'white'}} placeholder="Password"/>
      <Button onPress={ () => {console.log("logged in");}} title="Login"/>
      <Text style={{marginTop: 50, color: 'white'}}>New to the App? Sign up here!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

export function SignUp() {
  return(
    <View style={{flex: 1}}>
    <Text style={{fontWeight: 'bold', fontSize: 30}}>Sign up here!</Text>
    <TextInput style={{borderColor: 'black', borderWidth: 1, margin: 10}} placeholder="Name"/>
    <TextInput style={{borderColor: 'black', borderWidth: 1, margin: 10}} placeholder="Email"/>
    <TextInput style={{borderColor: 'black', borderWidth: 1, margin: 10}} placeholder="Password"/>
    <TextInput style={{borderColor: 'black', borderWidth: 1, margin: 10}} placeholder="Verify Password"/>
    <Button onPress={ () => {console.log("Registered!");}} title="Register"/>
    </View>
  );
}

export function FirstUser() {

  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>This is Jam's Profile.</Text>
      <TextInput style={{marginTop: 50, borderColor: 'white', borderWidth: 2}} multiline numberOfLines={10} placeholder="Prayer Requests"/>
    </View>
  );
}

export function SecondUser() {

  return(
    <View style={{backgroundColor: 'red', flex: 1}}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>This is Robby's Profile.</Text>
      <TextInput style={{marginTop: 50, borderColor: 'white', borderWidth: 2}} multiline numberOfLines={10} placeholder="Prayer Requests"/>
    </View>
  );
}

export function ThirdUser() {

  return(
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>This is Derek's Profile.</Text>
      <TextInput style={{marginTop: 50, borderColor: 'white', borderWidth: 2}} multiline numberOfLines={10} placeholder="Prayer Requests"/>
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
    fontSize: 30,
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