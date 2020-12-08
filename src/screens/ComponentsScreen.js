import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Oday';

    return (
        <View>
            <Text style={styles.textStyle1}>Getting started with React Native</Text>
            <Text style={styles.textStyle2}>My name is {myName}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 30
    }
});

export default ComponentsScreen;