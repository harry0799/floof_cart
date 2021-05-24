import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import ListItem from './ListItem';
import { useSelector, useDispatch } from 'react-redux'

const ItemsList = ({ navigation }) => {
    const [Sitem, selectedItem] = useState();
    const [cartTitle, setCartTitle] = useState()
    const listClick = item => {
        selectedItem(item?.id);
        navigation.navigate('Description', item);
    };
    const calCart = () => {
        navigation.navigate('cart')
    }
    const data = useSelector(({ cartReducer }) => cartReducer?.listItems ?? [])


    useEffect(() => {
        const count = data.filter(item => item?.inCart === true)
        setCartTitle(`${count.length}`);
    }, [data])

    return (
        <View style={{ flex: 1, backgroundColor: '#6ACAFA' }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                <View style={{ flex: 6, alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ fontSize: 24, textAlign: "center", left: 25, color: "blue" }}>Mobiee Shop</Text>
                </View>
                <TouchableOpacity onPress={calCart} style={{ marginRight: 15 }}>
                    <Text style={styles.cartCount}>
                        {cartTitle} </Text>
                    <Image
                        source={require('./Images/cart.png')}
                        style={{ height: 35, width: 35, resizeMode: "contain" }}
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                keyExtractor={item => item?.id}
                renderItem={({ item }) => {
                    return (
                        <ListItem
                            personItem={item}
                            onItemClick={() => listClick(item)}
                            stylename={styles.styleName}
                            selectedItem1={Sitem}
                        />
                    );
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    styleName: {
        color: 'red',
        fontWeight: '700',
    },
    cartCount: {
        fontSize: 18,
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: "cyan",
        textAlign: 'center'
    }
});

export default ItemsList;
