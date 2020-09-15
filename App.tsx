import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View } from "react-native";
import Login from "./Login";
import { FirstUser } from "./FirstUser";
import { SecondUser } from "./SecondUser";
import { ThirdUser } from "./ThirdUser";
import { Image, Input } from "@silicon-ui/atoms";

export default function App() {
  return (
    <NativeRouter>
      <Text style={styles.title}>This is the Prayer App.</Text>
      <View style={styles.nav}>
        <Link to="/">
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Login</Text>
        </Link>
        <Link to="/Jam">
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Jam</Text>
        </Link>
        <Link to="/Robby">
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Robby</Text>
        </Link>
        <Link to="/Derek">
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Derek</Text>
        </Link>
      </View>

      <Route exact path="/" component={Login} />
      <Route path="/Jam" component={FirstUser} />
      <Route path="/Robby" component={SecondUser} />
      <Route path="/Derek" component={ThirdUser} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    backgroundColor: "orange",
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "orange",
    color: "black",
  },
});
