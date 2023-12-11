/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatList from './src/screens/ChatList';
import ChatRoom from './src/screens/ChatRoom';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoom}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
