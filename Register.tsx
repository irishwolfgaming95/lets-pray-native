import React from 'react'
import { Text, View, Button, TextInput } from 'react-native';
import { useForm, Controller } from "react-hook-form";


export default function SignUp() {
    const { control, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}>
      <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30, marginBottom: 40}}>Sign up here!</Text>
  
      <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              placeholder="First Name"
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
              placeholder="Last Name"
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
              placeholder="Enter Email"
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
              placeholder="Enter Password"
              style={{borderColor: 'black', borderWidth: 1, margin: 10, marginBottom: 30}}
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