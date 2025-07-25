import React from "react";
import { Text, View } from "react-native";
import useHome from "./useHome";

const Home = () => {
  const {} = useHome();

  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
