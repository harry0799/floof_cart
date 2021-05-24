import React from 'react';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, StyleSheet, ActivityIndicator,Image, TouchableOpacity} from 'react-native';

const SplashHome =({navigation}) =>{
  setTimeout(() => {
    navigation.navigate('Home'); 
  }, 3000);
    return (
      <LinearGradient colors={['#3D7EAA', '#E4E5E6']} style={styles.container}>
        <ActivityIndicator size="small" color="#0000ff" />

        <Animatable.Image
          animation={'bounceIn'}
          duration={3000}
          source={{
            uri:
              'https://www.99corporates.com/CompanyLogoThumb/U72200GJ2010PTC060101.png',
          }}
          style={{width: '70%', height: 200}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 22,
            fontWeight: '700',
            color: '#00416A',
            textAlign: 'center',
          }}>
          Welcome to SYNOVERGE
        </Text>
      </LinearGradient>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SplashHome