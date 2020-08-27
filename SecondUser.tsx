import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';




export function SecondUser() {

    return(
      <View style={{backgroundColor: 'red', flex: 1, justifyContent: 'space-evenly', flexDirection: 'column'}}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>This is Robby's Profile.</Text>
        <TextInput style={{marginTop: 50, borderColor: 'black', borderWidth: 2}} multiline numberOfLines={10} placeholder="Prayer Requests"/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 40}}>
        <Button onPress={() => console.log('previous page')} title="Previous Page"/> 
        <Button onPress={() => console.log('next page')} title="Next Page"/>
        </View>
      </View>
    );
  }