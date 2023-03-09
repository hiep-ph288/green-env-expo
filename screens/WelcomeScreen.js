import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button} from "react-native";
import { AuthContext } from "../store/auth-context";
import {WebView} from 'react-native-webview'

function WelcomeScreen({ navigation }) {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    axios
      .get(
        "https://react-native-course-3cceb-default-rtdb.firebaseio.com/message.json?auth=" +
          token
      )
      .then((response) => {
        setFetchedMessage(response.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Button
        title="Web View"
        onPress={() => navigation.navigate("Web")}
      />
      {/* <Text>{fetchedMessage}</Text> */}
      <Button
        title="Go Place"
        onPress={() => navigation.navigate("AllPlace")}
      />
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
  }
});
