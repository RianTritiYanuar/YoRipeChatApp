/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const ChatRoom = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'orange',
          padding: 10,
        }}>
        <Text>goback</Text>
        <Text>name</Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatRoom;
