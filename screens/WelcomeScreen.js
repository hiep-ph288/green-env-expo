import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AuthContext } from "../store/auth-context";
import { WebView } from "react-native-webview";

function WelcomeScreen({ navigation }) {

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  webview: {
    margin: 10,
  },
});
