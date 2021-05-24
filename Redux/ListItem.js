import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, Button } from 'react-native';
import { addToCart, removeFromCart } from './Action';
import { useDispatch } from 'react-redux'

const ListItem = (props) => {
    const item = props?.personItem;
    const selectedId = props?.selectedItem1;
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={props?.onItemClick}>
            <View style={styles.mainView}>
                <View style={{ flexDirection: 'row', flex: 0.5 }} key={item?.id}>
                    <Image source={{ uri: item?.image }} style={styles.imageStyle} />
                    <View style={styles.viewText}>
                        <Text
                            style={
                                selectedId === props.personItem?.id
                                    ? styles.colorSelected
                                    : styles.nameStyle
                            }>
                            {item?.name}
                        </Text>
                        <Text style={{ fontSize: 18, color: '#636D8A' }}>{item?.description}</Text>
                        <Text style={{ fontSize: 18 }}>Price : {item?.price}</Text>
                    </View>
                </View>
                {/* <View style={styles.imageView}>
          {item.isActive ? (
            <Image
              source={require('../images/right.png')}
              style={{height: 20, width: 20}}
            />
          ) : (
            <Text
              style={{
                borderRadius: 13,
                width: 13,
                height: 13,
                backgroundColor: '#d33',
              }}
            />
          )}
        </View> */}
                <View style={{ alignItems: "center", justifyContent: "center" }}>

                    {!item?.inCart ? <TouchableOpacity onPress={() => dispatch(addToCart(item?.id))}>
                        <Image source={require('./Images/cart.png')} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity> :
                        <TouchableOpacity onPress={() => dispatch(removeFromCart(item?.id))}>
                            <Image source={require('./Images/cartfill.png')} style={{ height: 30, width: 30 }} />
                        </TouchableOpacity>
                    }


                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
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
        borderWidth: 1,
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

export default ListItem;
