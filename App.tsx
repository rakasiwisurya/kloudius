import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  MD3LightTheme as DefaultTheme,
  MD2Colors,
  PaperProvider,
} from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/redux/app/store";
import Router from "./src/router";
import FlashMessage from "react-native-flash-message";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: MD2Colors.red500,
  },
};

function MainApp() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <StatusBar style="auto" />
            <Router />
          </NavigationContainer>
          <FlashMessage position="bottom" floating />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
