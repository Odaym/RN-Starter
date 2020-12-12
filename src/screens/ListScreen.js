/*
    NOTES:

    // In FlatList's renderItem, an element in the lambda looks like:
    // { item: {name: 'Friend #1'}, index: 0 }
    // instead of specifying element and then getting item
    // just specify { item }; Destructuring

    // Every FlatList needs a key to identify the item by
    // And without it React Native would have to rebuild the whole list
    // Instead of doing notifyItemChanged it would do notifyDataSetChanged
    // Keys have to be String and unique

    // Either add keys manually to each object like:
    // key: String
    
    // OR use the keyExtractor function on FlatList
*/

import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: 12 },
        { name: 'Friend 2', age: 14 },
        { name: 'Friend 3', age: 13 },
        { name: 'Friend 4', age: 16 },
        { name: 'Friend 5', age: 19 },
        { name: 'Friend 6', age: 44 },
        { name: 'Friend 7', age: 25 },
        { name: 'Friend 8', age: 28 },
        { name: 'Friend 9', age: 18 },
        { name: 'Friend 10', age: 32 },
        { name: 'Friend 11', age: 33 }
    ];

    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            showsVerticalScrollIndicator={false}
            data={friends}
            renderItem={({ item }) => {
                return (<Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>);
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;