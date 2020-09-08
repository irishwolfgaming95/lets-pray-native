import React from "react";
import { Text, View, TextInput, Button, Image, ScrollView } from "react-native";
import { Input } from "@silicon-ui/atoms";

export function FirstUser() {
  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            source={require("./assets/nvidia-logo-4k.jpg")}
            style={{ height: 300, width: 300 }}
          />
        </View>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 30 }}>
          This is Jam's Profile.
        </Text>
        <TextInput
          style={{ marginTop: 50, borderColor: "white", borderWidth: 2 }}
          multiline
          numberOfLines={10}
          placeholder="Prayer Requests"
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <Button
            onPress={() => console.log("previous page")}
            title="Previous Page"
          />
          <Button onPress={() => console.log("next page")} title="Next Page" />
        </View>
      </ScrollView>
    </View>
  );
}
