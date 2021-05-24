import React, { Component, createContext, useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';


export const CheckContext = createContext();

export const MainContext =()=> {
  const [count, setCount] = useState(0);

    return (
      <CheckContext.Provider value={[count, setCount]}>
        <View style={{alignItems: 'center', marginVertical: '30%'}}>
          <CounterDisplay />
          <CounterButton />
        </View>
      </CheckContext.Provider>
    );
    
}

const styles = StyleSheet.create({})
