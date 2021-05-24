import React, {useContext} from 'react';
import {CheckContext} from '../Context/MainContext';
import {Text, StyleSheet, View} from 'react-native';


const CounterDisplay = () => {
  const [count] = useContext(CheckContext);

  return (
    <View>
      <Text style={{fontSize:30,textAlign: "center"}}>{count}</Text>
      <Text style={{fontSize:25}}>Counter</Text>
    </View>
  );
}
export default CounterDisplay

