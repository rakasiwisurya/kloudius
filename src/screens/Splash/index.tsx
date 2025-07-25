import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Splash = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../../assets/icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MD2Colors.white,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 150,
    height: 150,
  },
});
