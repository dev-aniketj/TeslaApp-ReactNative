import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 12,
    top: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    opacity: 0.8,
    zIndex: 1,
  },
  logo: {
    width: 120,
    height: 24,
    resizeMode: "contain",
  },
  menu: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default styles;
