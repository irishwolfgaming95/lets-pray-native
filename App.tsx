import React from 'react'
import { NativeRouter, Route, Link } from "react-router-native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useForm, Controller } from "react-hook-form";



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
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return(
    <View style={{flex: 1}}>
    <Text style={{fontWeight: 'bold', fontSize: 30}}>Sign up here!</Text>

    <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{borderColor: 'black', borderWidth: 1, margin: 10}}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{borderColor: 'black', borderWidth: 1, margin: 10}}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.lastName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{borderColor: 'black', borderWidth: 1, margin: 10}}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.lastName && <Text>This is required.</Text>}

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={{borderColor: 'black', borderWidth: 1, margin: 10}}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.lastName && <Text>This is required.</Text>}


    
    <Button onPress={handleSubmit(onSubmit)} title="Register"/>
    
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