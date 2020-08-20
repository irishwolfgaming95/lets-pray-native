import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import { useForm, Controller } from "react-hook-form";



export default function Login() {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', marginBottom: 50}}>Sign in to get started.</Text>
  
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
        <Text style={{marginTop: 50, color: 'white'}}>New to the App? Sign up here!</Text>
        <StatusBar style="auto"/>
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