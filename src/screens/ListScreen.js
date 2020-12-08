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
        { name: 'Friend #1' },
        { name: 'Friend #2' },
        { name: 'Friend #3' },
        { name: 'Friend #4' },
        { name: 'Friend #5' },
        { name: 'Friend #6' },
        { name: 'Friend #7' },
        { name: 'Friend #8' },
        { name: 'Friend #9' },
        { name: 'Friend #10' },
        { name: 'Friend #11' }
    ];

    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return (<Text>{item.name}</Text>);
            }}
        />
    )
};

const styles = StyleSheet.create({

})

export default ListScreen;