import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker } from 'react-native';
import { Component } from 'react';


export default function App() {
  function handlePress() {
    console.log('YOU CLICKED THE BUTTON')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the Prayer App.</Text>
      <TextInput style={
        {height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
        ></TextInput>
      
      <Text>Live changes</Text>
      <Button onPress={handlePress} title="Press Me" />
      <StatusBar style="auto" />
    </View>
  );
}


export class CategoryScreen extends Component {
  state = {
    selectedcat: "",
    category: [
      {
        itemName: "User1"
      },
      {
        itemName: "User2"
      },
      {
        itemName: "User3"
      },
      {
        itemName: "User3"
      },
      {
        itemName: "User4"
      },
      {
        itemName: "User5"
      }
    ]
  };

  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={{ flex: 0.3 }}>
          <Text style={styles.textStyle}>Categories</Text>
        </View>
        <View style={{ flex: 0.7, }}>
          <Picker
            itemStyle={styles.itemStyle}
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
            {this.state.category.map((item, index) => (
              <Picker.Item
                color="#0087F0"
                label={item.itemName}
                value={item.itemName}
                
              />
            ))}
          </Picker>
        </View>
      </View>
    );
  }
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

  viewStyle: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "92%",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 14
  },

  itemStyle: {
    fontSize: 10,
    color: "#007aff"
  },

  pickerStyle: {
    width: "100%",
    height: 40,
    color: "#007aff",
    fontSize: 14,
    
  },

  textStyle: {
    fontSize: 14,
    
  }
});