import React, { Component, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import Backbutton from './Backbutton';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const [userpass, setLogin] = useState({ password: '', email: '' });
  const [passwordShow, setPasswordShow] = useState(true);
  // const [username,setUname] = useState('');
  // const [password, setPass] = useState('');


  const onLogin = () => {
    let data = {
      email: userpass.email,
      password: userpass.password,
    };
    NetInfo.fetch().then(state => {
      console.log(state.isConnected)
      if (state.isConnected) {
        axios
          .post('https://reqres.in/api/login', data)
          .then(function (response) {
            // handle success
            Alert.alert(JSON.stringify(response));
            console.log(response);
            navigation.navigate('Dashboard', { name: userpass.email });
          })
          .catch(function (error) {
            Alert.alert('error');
            console.log(error);
          });
      }
      else {
        Alert.alert("Check your connection")
      }
    })

  };


  const Click = () => {
    navigation.goBack();
  };
  return (
    <LinearGradient colors={['#3D7EAA', '#E4E5E6']} style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          margin: 5,
          position: 'absolute',
        }}>
        <Backbutton onClick={() => Click()} />
      </View>
      <View style={{ flex: 7, alignItems: 'center' }}>
        <Text style={{ fontSize: 30, marginTop: 20 }}>Welcome Back </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: '#00416A',
            marginTop: 25,
            textAlign: 'center',
          }}>
          Grab your opportunity
        </Text>
        <TextInput
          style={styles.textView}
          placeholder="email"
          onChangeText={text => {
            setLogin({ password: userpass.password, email: text });

          }}
        />
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={[styles.textView, { flex: 1 }]}
            placeholder="password"
            secureTextEntry={passwordShow}
            onChangeText={text => {
              setLogin({ password: text, email: userpass.email });
            }}
          />
          <Icon onPress={() => setPasswordShow(!passwordShow)}
            name="eye" size={35} color="#900" />

        </View>
        {/* <TouchableOpacity>
          <Image 
            source={require('./Images/view.png')}
            style={{height:30, width:30}}
           />
        </TouchableOpacity> */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity style={styles.loginView} onPress={onLogin}>
            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
              Login Now
            </Text>
          </TouchableOpacity>
          <Text style={{ marginTop: 20, color: '#00416A', fontSize: 15 }}>
            Forgot Password ?
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 40 }}>
            <View style={[styles.socialView, { backgroundColor: '#3f51b5' }]}>
              <Text style={styles.socialText}>f</Text>
            </View>
            <View style={[styles.socialView, { backgroundColor: '#f44336' }]}>
              <Text style={styles.socialText}>G</Text>
            </View>
            <View style={[styles.socialView, { backgroundColor: '#1565c0' }]}>
              <Text style={styles.socialText}>in</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <Text style={{ fontSize: 15, fontWeight: '500', color: '#00416A' }}>
              Don't have an account?{' '}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Register</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  textView: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    width: '100%',
    height: 50,
    marginTop: 25,
    paddingHorizontal: 20,
    fontSize: 15,
  },
  socialView: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  loginView: {
    width: 200,
    padding: 10,
    backgroundColor: '#0d47a1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  socialText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
export default Login;
