import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail />
            <ImageDetail />
            <ImageDetail />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default ImageScreen;