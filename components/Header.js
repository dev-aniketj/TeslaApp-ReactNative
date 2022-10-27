import { StyleSheet, View, Image } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Image
        source={require("../assets/images/menu.png")}
        style={styles.menu}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    top: 14,
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

export default Header;
