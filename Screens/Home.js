import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native'
import Backbutton from './Backbutton';

const Home = ({navigation}) =>{
  const loginClick =()=>{
    navigation.navigate('Login')
  }
  const Click =()=>{
    navigation.goBack()
  }
    return (
      <LinearGradient colors={['#3D7EAA', '#E4E5E6']} style={styles.container}>
        <View style={{flex: 1, alignItems: 'flex-start', margin: 15}}>
          <Backbutton onClick={() => Click()} />
        </View>
        <View style={{flex: 4, alignItems: 'center'}}>
          <Image
            source={require('./Images/logo2.png')}
            style={{width: '100%', height: 250}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 25,
              marginTop: 5,
              fontWeight: '700',
              color: '#00416A',
            }}>
            Don’t wait for an OPPORTUNITY.
          </Text>
          <Text style={styles.firstText}>Make your own</Text>
          <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 10}}>
            <TouchableOpacity
              onPress={loginClick}
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 30,
                marginHorizontal: 4,
                width: 100,
              }}>
              <Text style={{textAlign: 'center', color: '#fff'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 30,
                marginHorizontal: 4,
                borderColor: '#0d47a1',
                borderWidth: 1,
                width: 100,
              }}>
              <Text style={{textAlign: 'center', color: '#0d47a1'}}>
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 20, marginTop: 20, color: '#00416A'}}>
            Or via social media{' '}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={[styles.socialView, {backgroundColor: '#3f51b5'}]}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>
                f
              </Text>
            </View>
            <View style={[styles.socialView, {backgroundColor: '#f44336'}]}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>
                G
              </Text>
            </View>
            <View style={[styles.socialView, {backgroundColor: '#1565c0'}]}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 25}}>
                in
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  firstText: {
    fontSize: 18,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: '#00416A',
    textAlign: 'center',
  },
  socialView: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
});

export default Home