/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PushNotification from 'react-native-push-notification';
import socket from '../../utils/socket/SocketIo';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const auth = useSelector(reduxState => reduxState.auth);

  const createChannel = () => {
    PushNotification.createChannel({
      channelId: 'transaction-channel',
      channelName: 'Transaction',
    });
    PushNotification.createChannel({
      channelId: 'chat-channel',
      channelName: 'Chat',
    });
  };
  useEffect(() => {
    createChannel();
    auth.token !== ''
      ? setTimeout(() => {
          socket.on('connect');
          socket.on(`transaction_${auth.authInfo.userId}`, data => {
            PushNotification.localNotification({
              channelId: 'transaction-channel',
              title: 'Incoming transaction',
              message: data.message,
            });
            console.log(auth.authInfo.userId);
          });
          navigation.replace('Home');
        }, 500)
      : setTimeout(() => {
          navigation.replace('Login');
          socket.off(`transaction_${auth.authInfo.userId}`);
        }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zwallet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6379F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'NunitoSans-Bold',
  },
});

export default SplashScreen;
