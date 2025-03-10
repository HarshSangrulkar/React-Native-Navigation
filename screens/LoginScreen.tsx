import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Details Screen"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default LoginScreen;
