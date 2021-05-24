import React from 'react';
import { Button, Text, View, Image, TouchableOpacity } from 'react-native';
import { addToCart, removeFromCart } from './Action';
import { useDispatch } from 'react-redux'

const Description = ({ route, navigation }) => {
    const { id, name, image, description, price, inCart } = route.params;
    const dispatch = useDispatch();
    const goToList = () => {
        navigation.navigate('list')
    }
    return (
        <View>
            <View style={{ flexDirection: "row", margin: 20 }}>
                <TouchableOpacity onPress={goToList}>
                    <Image
                        source={require('./Images/back.png')}
                        style={{ height: 25, width: 25, }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: 28, left: 100, color: "blue" }}>Mobiee Shop</Text>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ marginVertical: 20, fontSize: 20 }}> Brand: {name} </Text>
                <Image source={{ uri: image }} style={{ height: "53%", width: "65%" }} />
                <Text style={{ marginVertical: 20, fontSize: 20 }}>Rs: {price} </Text>
                <Text style={{ fontSize: 18 }}>About this item: </Text>
                <Text style={{ fontSize: 20 }}> {description} </Text>
                <View style={{ alignItems: "center", marginVertical: 15 }}>
                    {!inCart ? <Button title="Add to cart" onPress={() => {
                        dispatch(addToCart(id));
                    }} /> : <Button title="Remove from cart" onPress={() => {
                        dispatch(removeFromCart(id));
                        // navigation.goBack()
                    }} />}

                </View>
                <View>
                    <Button title="Buy now" />
                </View>
            </View>
        </View>
    );
};
export default Description;
