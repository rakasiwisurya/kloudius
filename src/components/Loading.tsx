import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator animating={true} color={MD2Colors.red500} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

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
  text: {
    fontSize: 18,
    color: MD2Colors.red500,
    marginTop: 16,
  },
});
