import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter password: </Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(newValue) => {
          setPassword(newValue);
        }}
      />

      {password.length < 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 50,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
