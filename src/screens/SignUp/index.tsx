import React from "react";
import { Text, View } from "react-native";
import useSignUp from "./useSignUp";

const SignUp = () => {
  const {} = useSignUp();

  return (
    <View style={{ flex: 1 }}>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;
