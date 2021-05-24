import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import * as theme from './Theme'

const Lists = () => {

    const ShopList = [
        { id: '1', category: 'Bathing', name: 'Groomers', price: '5000', quantity: '2' },
        { id: '2', category: 'Bathing', name: 'Groomers', price: '4000', quantity: '3' },
        { id: '3', category: 'Bathing', name: 'Groomers', price: '3000', quantity: '5' },
        { id: '4', category: 'Grooming', name: 'Groomers', price: '7000', quantity: '2' },
        { id: '5', category: 'Grooming', name: 'Groomers', price: '8000', quantity: '2' },
    ]
    return (
        <View>
            <View>
                <Text style={{ fontSize: theme.FONT_24PX, margin: theme.vSpacing, fontWeight: "bold" }}>
                    Shop </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity style={{ justifyContent: "center", height: theme.height * 0.05, width: theme.width / 5, borderRadius: theme.SPACING, borderWidth: 1, margin: theme.vSpacing }}>
                    <Text style={{ fontSize: theme.FONT_20PX, textAlign: "center" }}>Bathing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", height: theme.height * 0.05, width: theme.width / 4, borderRadius: theme.SPACING, borderWidth: 1, margin: theme.vSpacing }}>
                    <Text style={{ fontSize: theme.FONT_20PX, textAlign: "center" }}>Grooming</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                data={ShopList}
                keyExtractor={item => item?.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity>
                            <View style={styles.mainView}>
                                <Text>{item.category}</Text>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'space-around',
        margin: 10,
        backgroundColor: '#fff',
        paddingVertical: 25,
        paddingHorizontal: 20,
        borderRadius: 15,
        borderColor: '#173EC1',
        borderWidth: 3,
        elevation: 10,
    },
});

export default Lists