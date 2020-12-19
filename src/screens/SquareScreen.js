import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const COLOR_INCREMENT = 15;
  const COLOR_DECREMENT = -15;

  const setColor = (color, change) => {
    switch (color) {
      case "red": {
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      }
      case "green": {
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      }
      case "blue": {
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      }
      default:
        return;
    }
  };

  return (
    <View>
      <ColorAdjuster
        color="Red"
        onMore={() => {
          setColor("red", COLOR_INCREMENT);
        }}
        onLess={() => {
          setColor("red", COLOR_DECREMENT);
        }}
      />

      <ColorAdjuster
        color="Green"
        onMore={() => {
          setColor("green", COLOR_INCREMENT);
        }}
        onLess={() => {
          setColor("green", COLOR_DECREMENT);
        }}
      />

      <ColorAdjuster
        color="Blue"
        onMore={() => {
          setColor("blue", COLOR_INCREMENT);
        }}
        onLess={() => {
          setColor("blue", COLOR_DECREMENT);
        }}
      />

      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
