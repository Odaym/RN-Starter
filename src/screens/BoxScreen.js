import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>Child #1</Text>
      <Text style={styles.textStyle2}>Child #2</Text>
      <Text style={styles.textStyle3}>Child #3</Text>
      <Text style={styles.textStyle4}>Child #4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  textStyle1: {
    borderWidth: 3,
    alignSelf: "flex-end",
    borderColor: "red",
  },
  textStyle2: {
    borderWidth: 3,
    flex: 1,
    borderColor: "red",
    alignSelf: "flex-start",
  },
  textStyle3: {
    flex: 1,
    borderWidth: 3,
    alignSelf:"stretch",
    borderColor: "red",
  },
  textStyle4: {
    alignSelf:"flex-end",
    borderWidth: 3,
    borderColor: "red",
  },
});

export default BoxScreen;
