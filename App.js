import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.list}>
          <CarsList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171A20",
  },
  list: {
    marginTop: 35,
  },
});
