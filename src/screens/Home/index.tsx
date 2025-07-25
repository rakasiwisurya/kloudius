import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, MD2Colors } from "react-native-paper";
import useHome from "./useHome";

const Home = () => {
  const { user, isLogoutLoading, logout } = useHome();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Home</Text>
        <Card.Cover
          source={require("../../../assets/icon.png")}
          resizeMode="contain"
        />
        <Card.Content style={styles.contentContainer}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Name</Text>
            <Text style={styles.description}> : </Text>
            <Text style={styles.description}>{user?.name}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Email</Text>
            <Text style={styles.description}> : </Text>
            <Text style={styles.description}>{user?.email}</Text>
          </View>
        </Card.Content>
        <Button
          mode="contained-tonal"
          loading={isLogoutLoading}
          disabled={isLogoutLoading}
          onPress={logout}
        >
          Logout
        </Button>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "100%",
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: MD2Colors.grey800,
    marginBottom: 20,
  },
  contentContainer: {
    marginVertical: 15,
    gap: 5,
  },
  descriptionContainer: {
    flexDirection: "row",
  },
  description: {
    fontSize: 15,
    fontWeight: "500",
    color: MD2Colors.grey800,
  },
});

export default Home;
