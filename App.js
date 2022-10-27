import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./assets/images/ModelX.jpeg")}
        style={styles.imageStyle}
      />
      <View style={styles.carConatiner}>
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $60,420</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  carConatiner: {
    width: "100%",
    height: "100%",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  titles: {
    width: "100%",
    marginTop: "22%",
    alignItems: "center",
  },
  title: {
    color: "#232323",
    fontSize: 30,
    fontWeight: "700",
  },
  subtitle: {
    color: "#232323",
    fontSize: 15,
    fontWeight: "300",
  },
});
