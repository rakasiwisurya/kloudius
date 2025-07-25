import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Loading from "../components/Loading";
import { useAuth } from "../hooks/auth";
import { useAppSelector } from "../hooks/redux";
import Home from "../screens/Home";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

const Router = () => {
  const { isAppLoading } = useAppSelector((state) => state.auth);
  const { isAuthorized } = useAuth();

  if (isAppLoading) return <Loading />;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
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
