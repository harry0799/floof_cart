import React, {useContext} from 'react';
import {CheckContext} from '../Context/MainContext';
import {Button, View, Text} from 'react-native';

const CounterButton =() => {
   const [count, setCount] = useContext(CheckContext);

  return (
    <View>
      <View style={{marginVertical:20}}>
        <Button title="add" onPress={() => setCount(count + 1)} />
      </View>
      <View>
        <Button title="sub" onPress={() => setCount(count - 1)} />
      </View>
    </View>
    // <CheckContext.Consumer>
    //   {([count, setCount]) => (
    //     <View>
    //       <Button title="add" onPress={() => setCount(count + 1)} />
    //       <Button title="sub" onPress={() => setCount(count - 1)} />
    //     </View>
    //   )}
    // </CheckContext.Consumer>
  );
}
export default CounterButton
 