import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

const StyleButton = (props) => {
  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;

  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFCC";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";
  const marginTop = type === "primary" ? 0 : 55;

  const [loaded] = useFonts({
    PoppinsThin: require("../assets/fonts/Poppins-Thin.ttf"),
    PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  } else {
    return (
      <View style={[styles.container, { marginTop: marginTop }]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: backgroundColor }]}
          onPress={onPress}
        >
          <Text style={[styles.text, { color: textColor }]}>{content}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 24,
    position: "absolute",
  },
  button: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 15,
    fontFamily: "PoppinsMedium",
  },
});

export default StyleButton;
