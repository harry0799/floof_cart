/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet, Button,
  Text,
  View,
} from 'react-native';
import Home from './API_Practice/Home';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashHome from './Screens/SplashHome';
import Login from './API_Practice/Login';
import Register from './Screens/Register';
import Dashboard from './API_Practice/Dashboard';
import Shimmering from './Floof/Shimmering';
import Screen2 from './Floof/Screen2';
import Date from './Floof/Date';
import DateTime from './Floof/DateTime';
import Screen3 from './Floof/Screen3';
import PetsShimmering from './Floof/PetsShimmering';
import Screen4 from './Floof/Screen4';
import Screen5 from './Floof/Screen5';
import CounterView from './Context/CounterView';
import ItemsList from './Redux/ItemsList';
import Description from './Redux/Description';
import { Cart } from './Redux/Cart';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import Lists from './Redux_floof/Lists';


const App = () => {


  const Stack = createStackNavigator();
  return (
    //<Date />
    // <Login />
    //<CounterView /> 
    // <Lists />
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="list"
              component={ItemsList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Description"
              component={Description}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="cart"
              component={Cart}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
