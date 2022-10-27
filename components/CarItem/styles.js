import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carConatiner: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
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

export default styles;
