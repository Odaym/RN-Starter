import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>

      <Button
        onPress={() => {
          navigation.navigate('Components');
        }}
        title="Go to Components Demo" />

      <Button
        title="Go to List Demo"
        onPress={() => { navigation.navigate('List') }}
      />

      <Button
        title="Go to Image Demo"
        onPress={() => { navigation.navigate('Image') }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;