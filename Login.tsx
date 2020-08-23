import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import SignUp from './Register'
import { NativeRouter, Route, Link } from "react-router-native";



export default function Login() {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={{color: 'white', marginBottom: 50, marginTop: 30}}>Sign in to get started.</Text>
  
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              placeholder="Email"
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
        {errors.firstName && <Text>This is required.</Text>}
  
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              placeholder="Password"
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
        {errors.firstName && <Text>This is required.</Text>}
  
        <Button onPress={handleSubmit(onSubmit)} title="Login"/>
        <StatusBar style="auto"/>
        <NativeRouter>
        <View style={styles.container}>
          <Link to="/Register">
            <Text style={{color: 'white', marginTop: 40}}>New to the App? Sign up here!</Text>
          </Link>
        </View>
        <Route exact path="/Register" component={SignUp}/>
        </NativeRouter>
        </ScrollView>
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
  
  });