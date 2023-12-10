const styles = {
  flatListStyle: {padding: 10},
  chat: {
    container: {flexDirection: 'row', paddingVertical: 10},
    image: {
      container: {marginRight: 10},
      imageStyle: {height: 55, width: 55, borderRadius: 50},
    },
    content: {
      container: {flex: 1},
      name: {
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
        },
        text: {fontSize: 16, fontWeight: 'bold'},
        timestamp: {fontSize: 12},
      },
    },
  },
};

export default styles;
