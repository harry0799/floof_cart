import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { useSelector } from 'react-redux';
import ItemsList from './ItemsList';
import { useDispatch } from 'react-redux'
import { removeFromCart } from './Action';

export const Cart = ({ navigation }) => {
    const { listItems } = useSelector(({ cartReducer }) => cartReducer ?? [])
    const dispatch = useDispatch();
    const cartData = listItems?.filter(item => item?.inCart === true)
    const goToList = () => {
        navigation.navigate('list')
    }
    const goToDesc = (item) => {
        navigation.navigate('Description', item)
    }
    return (
        <View>
            <TouchableOpacity onPress={goToList}>
                <Image
                    source={require('./Images/back.png')}
                    style={{ height: 30, width: 30, margin: 20 }}
                />
            </TouchableOpacity>
            {
                cartData.length > 0 ? (cartData?.map((item) =>
                (
                    <View key={item?.id}>

                        <View style={styles.mainView} key={item?.id}>
                            <TouchableOpacity onPress={() => goToDesc(item)}>
                                <View style={{ flexDirection: 'row', }} >
                                    <Image source={{ uri: item?.image }} style={styles.imageStyle} />
                                    <View style={styles.viewText}>
                                        <Text style={styles.colorSelected}>
                                            {item?.name}
                                        </Text>
                                        <Text style={{ fontSize: 18, color: '#636D8A' }}>{item?.description}</Text>
                                        <Text style={{ fontSize: 18 }}>Price : {item?.price}</Text>
                                    </View>
                                    <View style={{ alignItems: "center", justifyContent: 'center', marginLeft: 10 }}>
                                        <Button title="remove" onPress={() => dispatch(removeFromCart(item?.id))} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
                )
                ) : <View>
                    <View style={{ alignItems: "center", top: 40 }}>
                        <Text style={{ fontSize: 28, color: "blue" }}>no items added</Text>
                    </View>
                </View>
            }
        </View>
    );
};
const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'space-around',
        margin: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderRadius: 15,
        borderColor: '#173EC1',
        borderWidth: 3,
        elevation: 20,
    },
    imageStyle: {
        height: 115,
        width: 115,
        resizeMode: 'contain',
        borderRadius: 75,
        marginTop: 7,
    },
    viewText: {
        flexDirection: 'column',
        paddingLeft: 20,
    },
    imageView: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    nameStyle: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
    },
    colorSelected: {
        color: 'blue',
        fontSize: 18,
        fontWeight: '700',
    },
});