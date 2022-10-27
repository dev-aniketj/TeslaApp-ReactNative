import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carConatiner: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 150,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  titles: {
    width: "100%",
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    color: "#232323",
    fontSize: 37,
    fontWeight: "700",
  },
  subtitle: {
    color: "#232323",
    fontSize: 16,
    fontWeight: "300",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
});

export default styles;
