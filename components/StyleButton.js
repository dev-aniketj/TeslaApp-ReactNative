import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const StyleButton = (props) => {
  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;

  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20B3" : "#FFFFFF99";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";
  const marginTop = type === "primary" ? 0 : 65;

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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 14,
    position: "absolute",
  },
  button: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.15,
  },
});

export default StyleButton;
