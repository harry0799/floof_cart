import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'

const Backbutton =(props) =>  {
        return (
            <View>
                <TouchableOpacity onPress={props.onClick}>
                    <Image 
                        source={require('./Images/back.png')}
                        style={{height:50, width:50}}
                    />
                </TouchableOpacity>
            </View>
        )
}
export default Backbutton