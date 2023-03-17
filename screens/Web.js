import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { useState } from "react";
import { firestore } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const Web = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  const create = () => {
    addDoc(collection(firestore, "users"), {
      username: username,
      email: email,
    })
      .then(() => {
        // Data saved successfully!
        console.log("data submitted");
      })
      .catch((error) => {
        // The write failed...
        console.log(error);
      });
  };
  return (
    <View>
      <TextInput
        value={username}
        onChangeText={(username) => {
          setName(username);
        }}
        placeholder="Username"
        style={styles.textBoxes}
      />
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        placeholder="Email"
        style={styles.textBoxes}
      />

      <Button onPress={create} title="Add User" />
    </View>
  );
  // return <WebView source={{ uri: "https://youtube.com" }} />;
};

export default Web;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 300,
    backgroundColor: "#3D7944",
    alignItems: "center",
  },
  search: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
  },
  textBoxes: {
    width: "90%",
    fontSize: 18,
    padding: 12,
    borderColor: "gray",
    borderWidth: 0.2,
    borderRadius: 10,
  },
});
