import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';




export function FirstUser() {

    return (
      <View style={{backgroundColor: 'green', flex: 1, justifyContent: 'space-evenly', flexDirection: 'column'}}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>This is Jam's Profile.</Text>
        <TextInput style={{marginTop: 50, borderColor: 'white', borderWidth: 2}} multiline numberOfLines={10} placeholder="Prayer Requests"/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
        <Button onPress={() => console.log('previous page')} title="Previous Page"/> 
        <Button onPress={() => console.log('next page')} title="Next Page"/>
        </View>
      </View>
    );
  }