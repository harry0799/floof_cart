import React, { Component } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios';

const GetAll = () => {
    const getAll = () =>{
        axios
          .get('https://reqres.in/api/users?page=2')
          .then(function (response) {
            // handle success
            Alert.alert(JSON.stringify(response.data));
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
        return (
            <View>
                <Text> textInComponent </Text>
                <TouchableOpacity onPress={getAll}>
                    <Text>Click to call API</Text>
                </TouchableOpacity>
            </View>
        )
    }
export default GetAll
