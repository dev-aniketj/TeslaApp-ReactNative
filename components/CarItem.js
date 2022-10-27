import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ToastAndroid,
  Dimensions,
} from "react-native";
import StyleButton from "./StyleButton";
import Header from "./Header";

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
    height: Dimensions.get("window").height,
    resizeMode: "cover",
    position: "absolute",
  },
  titles: {
    width: "100%",
    top: 50,
    alignItems: "center",
  },
  title: {
    color: "#232323",
    fontSize: 37,
    fontWeight: "700",
  },
  subtitle: {
    color: "#343434",
    fontSize: 16,
    fontWeight: "300",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
});
