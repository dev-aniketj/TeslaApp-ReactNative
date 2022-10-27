import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import cars from "./cars_list/cars";
import CarItem from "./CarItem";
import Header from "./Header";

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={"center"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CarsList;
