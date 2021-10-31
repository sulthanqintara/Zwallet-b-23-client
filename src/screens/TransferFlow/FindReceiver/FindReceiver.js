import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, TextInput, FlatList, Image} from 'react-native';
import styles from './Styles';
import {API_URL} from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons';
import socket from '../../../utils/socket/SocketIo';

import profilePlaceHolder from '../../../assets/img/user.png';
import {getUsers} from '../../../utils/https/users';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '../../../redux/actionCreators/auth';

const FindReceiver = props => {
  const [nextPage, setNexPage] = useState(null);
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState([]);
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const dispatch = useDispatch();
  const token = useSelector(reduxState => reduxState.auth.token);
  const searchHandler = keyword => {
    let params = {};
    if (keyword) {
      params = {...params, keyword};
    }
    getUsers(params, token)
      .then(result => {
        console.log(result.data.result);
        setData(result.data.result.data);
        setNexPage(result.data.result.nextPage);
        setTotalData(result.data.result.totalData);
      })
      .catch(err => {
        console.log(err.response);
        setData([]);
        setTotalData(0);
      });
  };

  useEffect(() => {
    getUsers({}, token)
      .then(result => {
        console.log(result.data.result);
        setData(result.data.result.data);
        setNexPage(result.data.result.nextPage);
        setTotalData(result.data.result.totalData);
      })
      .catch(err => {
        console.log(err.response);
        if (String(err).includes('403')) {
          socket.off(`transaction_${authInfo.userId}`);
          dispatch(logoutAction(token));
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
        }
      });
  }, [authInfo.userId, dispatch, props.navigation, token]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topHeaderContainer}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back" color="white" size={28} />
          </Pressable>
          <Text style={[styles.headerTitle, styles.nunito700]}>
            Find Receiver
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="search" color="#A9A9A9" size={24} />
          <TextInput
            placeholder="Search receiver here"
            style={styles.searchInput}
            onEndEditing={e => {
              searchHandler(e.nativeEvent.text);
            }}
          />
        </View>
      </View>
      <Text style={[styles.contentTitle, styles.nunito700]}>Contacts</Text>
      <Text style={[styles.contentSubTitle, styles.nunito400]}>
        {totalData ? totalData - 1 : 0} Contacts Found
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          const pic = API_URL + item.userImage;
          if (item.userId !== authInfo.userId) {
            return (
              <Pressable
                style={styles.cardContainer}
                onPress={() => {
                  props.navigation.navigate('InputAmount', item);
                }}>
                <Image
                  source={item.userImage ? {uri: pic} : profilePlaceHolder}
                  style={styles.profilePicture}
                />
                <View>
                  <Text style={styles.name}>{item.userUsername}</Text>
                  <Text style={styles.phoneNumber}>{item.userPhone}</Text>
                </View>
              </Pressable>
            );
          }
        }}
        keyExtractor={(_, index) => index}
        onEndReached={() => {
          nextPage !== null &&
            axios
              .get(API_URL + nextPage, {
                headers: {'x-access-token': `Bearer ${token}`},
              })
              .then(result => {
                setNexPage(result.data.result.nextPage);
                return setData(prevState => [
                  ...prevState,
                  ...result.data.result.data,
                ]);
              });
        }}
      />
    </View>
  );
};

export default FindReceiver;
