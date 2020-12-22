import React, { useReducer } from "react";
import { View, StyleSheet } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const reducer = (state, action) => {
  // state === { red: number, green: number, blue : number}
  // action === { colorToChange: 'red' | 'green' | 'blue', amount: 15 || -15 }

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const INCREMENT_AMOUNT = 50;

  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state;

  return (
    <View>
      <ColorAdjuster
        color="Red"
        onMore={() => {
          runMyReducer({ type: "change_red", payload: INCREMENT_AMOUNT });
        }}
        onLess={() => {
          runMyReducer({ type: "change_red", payload: -1 * INCREMENT_AMOUNT });
        }}
      />

      <ColorAdjuster
        color="Green"
        onMore={() => {
          runMyReducer({ type: "change_green", payload: INCREMENT_AMOUNT });
        }}
        onLess={() => {
          runMyReducer({
            type: "change_green",
            payload: -1 * INCREMENT_AMOUNT,
          });
        }}
      />

      <ColorAdjuster
        color="Blue"
        onMore={() => {
          runMyReducer({ type: "change_blue", payload: INCREMENT_AMOUNT });
        }}
        onLess={() => {
          runMyReducer({ type: "change_blue", payload: -1 * INCREMENT_AMOUNT });
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
