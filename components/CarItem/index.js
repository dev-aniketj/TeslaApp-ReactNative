import React from "react";
import { View, Text, ImageBackground, ToastAndroid } from "react-native";
import StyleButton from "../StyleButton";
import styles from "./styles";
import Header from "../Header";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carConatiner}>
      <Header />
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline + " "}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            ToastAndroid.show("Custom Order", ToastAndroid.SHORT);
          }}
        />
        <StyleButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            ToastAndroid.show("Existing Inventory", ToastAndroid.SHORT);
          }}
        />
      </View>
    </View>
  );
};
export default CarItem;
