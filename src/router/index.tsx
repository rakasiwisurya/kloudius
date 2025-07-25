import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MD2Colors } from "react-native-paper";
import { useAuth } from "../hooks/auth";
import { useAppSelector } from "../hooks/redux";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Splash from "../screens/Splash";

const Stack = createNativeStackNavigator();

const Router = () => {
  const { isAppLoading } = useAppSelector((state) => state.auth);
  const { isAuthorized } = useAuth();

  if (isAppLoading) return <Splash />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: MD2Colors.white, padding: 5 },
      }}
    >
      {isAuthorized ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;
