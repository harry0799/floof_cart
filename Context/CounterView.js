import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';
import {MainContext} from './MainContext';

 const CounterView=() => {
  return (
    <MainContext>
      <View style={{alignItems:"center", marginVertical:"30%"}}>
        <CounterDisplay />
         <CounterButton />
      </View>
    </MainContext>
  );
}
export default CounterView