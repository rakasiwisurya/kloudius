import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import useLogin from "./useLogin";

const Login = () => {
  const { onSubmit } = useLogin();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 10 }}>Login</Text>
      <Button mode="contained" onPress={onSubmit}>
        Press me
      </Button>
    </View>
  );
};

export default Login;
