import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";

const StyleButton = (props) => {
  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;

  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20" : "#FFFFFF";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";
  const marginTop = type === "primary" ? "171%" : "188%";

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
};
export default StyleButton;
