import React from "react";
import { View, Text, ImageBackground } from "react-native";
import StyleButton from "../StyleButton";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View style={styles.carConatiner}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.imageStyle}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $60,420</Text>
      </View>

      <StyleButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.log("first");
        }}
      />
      <StyleButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.log("second");
        }}
      />
    </View>
  );
};
export default CarItem;
