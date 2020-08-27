import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Login from './Login';
import { FirstUser } from './FirstUser';
import { SecondUser } from './SecondUser';
import { ThirdUser } from './ThirdUser';
import  Image  from '@silicon-ui/atoms/lib/Image';
import { ImageProps } from '@silicon-ui/atoms/lib/Image/imageProps';
import Input from '@silicon-ui/atoms/lib/Input';



export default function App() {
  return (
    <NativeRouter>
      <Text style={styles.title}>This is the Prayer App.</Text>
      <View style={styles.nav}>
        <Link to="/">
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Login</Text>
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

      <Route exact path="/" component={Login}/>
      <Route path="/Jam" component={FirstUser}/>
      <Route path="/Robby" component={SecondUser}/>
      <Route path="/Derek" component={ThirdUser}/>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
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