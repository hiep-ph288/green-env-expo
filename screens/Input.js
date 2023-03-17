import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

const Input = () => {
  const [size, setSize] = useState(12);
  const [color, setColor] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { fontSize: size, color: color}]}
        placeholder="Nhap vao day"
      />
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (size > 12) {
              setSize(size - 4);
            }
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={{ height: 50, margin: 25 }}>{size}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (size < 40) {
              setSize(size + 4);
            }
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={() => setColor("red")}
        >
          <Text>R</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={() => setColor("green")}
        >
          <Text>G</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "blue" }]}
          onPress={() => setColor("blue")}
        >
          <Text>B</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: " 80%",
    height: 100,
    backgroundColor: "#fff",
    marginTop: 50,
    borderRadius: 10,
  },
  main: {
    flexDirection: "row",
    margin: 50,
  },
  button: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
