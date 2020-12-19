import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorAdjuster = ({ color, onMore, onLess }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`More ${color}`}
        onPress={() => {
          onMore();
        }}
      />
      <Button
        title={`Less ${color}`}
        onPress={() => {
          onLess();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjuster;
