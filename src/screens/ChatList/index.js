import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const ChatList = () => {
  const list = [
    {
      id: 1,
      name: 'John Doe',
      type: 'dm',
      image:
        'https://images.pexels.com/photos/19273414/pexels-photo-19273414/free-photo-of-portrait-of-a-man-wearing-a-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      latest_chat: {
        is_from_me: false,
        sender_name: 'John Doe',
        content: 'Hi, there!',
        timestamp: '08:00',
        status: 'sent',
      },
    },
    {
      id: 2,
      name: 'My Family',
      type: 'group',
      image:
        'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      latest_chat: {
        is_from_me: true,
        sender_name: 'You',
        content:
          "I'll be home late into the sky do you think time would pass me by",
        timestamp: '19:00',
        status: 'read',
      },
    },
  ];
  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity key={index.toString()} style={styles.chat.container}>
        <View style={styles.chat.image.container}>
          <Image
            style={styles.chat.image.imageStyle}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View style={styles.chat.content.container}>
          <View style={styles.chat.content.name.container}>
            <Text numberOfLines={1} style={styles.chat.content.name.text}>
              {item.name}
            </Text>
            <Text style={styles.chat.content.name.timestamp}>
              {item.latest_chat.timestamp}
            </Text>
          </View>
          <Text numberOfLines={1}>{item.latest_chat.content}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={list}
        renderItem={_renderItem}
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyle}
      />
    </SafeAreaView>
  );
};

export default ChatList;
