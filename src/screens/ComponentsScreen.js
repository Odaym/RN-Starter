import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Hello!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 55
    }
});

export default ComponentsScreen;