import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  BackHandler,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {connect, useSelector} from 'react-redux';
import {logoutAction} from '../../redux/actionCreators/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './Style';
import profilePlaceHolder from '../../assets/img/user.png';
import {API_URL} from '@env';
import {useFocusEffect} from '@react-navigation/core';
import {getTransaction} from '../../utils/https/transaction';

const Home = props => {
  const [backButton, setBackButton] = useState(0);
  const [timer, setTimer] = useState(Date.now());
  const [cardData, setCardData] = useState([]);
  const token = useSelector(reduxState => reduxState.auth.token);
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  useFocusEffect(
    useCallback(() => {
      const backAction = () => {
        const exitTimer = Date.now();
        if (backButton === 0) {
          setBackButton(backButton + 1);
          ToastAndroid.show(
            'Press again to exit the application',
            ToastAndroid.SHORT,
          );
          setTimer(Date.now());
        }
        if (backButton === 1) {
          if (timer < exitTimer - 3000) {
            ToastAndroid.show(
              'Press again to exit the application',
              ToastAndroid.SHORT,
            );
            setTimer(Date.now());
          } else {
            BackHandler.exitApp();
          }
        }
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, [backButton, timer]),
  );
  useEffect(() => {
    const params = {user_id: authInfo.userId, limit: 4};

    const unsubscribe = props.navigation.addListener('focus', () => {
      getTransaction(params, token).then(data => setCardData(data.data.result));
    });
    getTransaction(params, token).then(data => setCardData(data.data.result));
    return unsubscribe;
  }, [authInfo.userId, props.navigation, token]);

  const logoutHandler = () => {
    props.onLogout(token, props.navigation.replace('Login'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => props.navigation.navigate('Profile')}>
          <Image
            source={
              authInfo.profilePic
                ? {uri: API_URL + authInfo.profilePic}
                : profilePlaceHolder
            }
            style={styles.profilePic}
          />
        </Pressable>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.nunito400, styles.balanceTxt]}>Balance</Text>
          <Text style={[styles.nunito700, styles.balanceAmount]}>
            {authInfo.balance ? `Rp ${authInfo.balance}` : 'Rp 0'}
          </Text>
        </View>
        <Pressable>
          <Ionicons name="notifications-outline" size={25} color="white" />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.topSection}>
          <View style={styles.flexRow}>
            <Pressable
              style={[styles.topButton, styles.flexRow]}
              onPress={() => {
                props.navigation.navigate('FindReceiver');
              }}>
              <Ionicons name="arrow-up" size={28} color="#608DE2" />
              <Text style={[styles.nunito700, styles.topButtonTxt]}>
                Transfer
              </Text>
            </Pressable>
            <Pressable
              style={[styles.topButton, styles.flexRow]}
              onPress={() => {
                props.navigation.navigate('Topup');
              }}>
              <Ionicons name="add" size={36} color="#608DE2" />
              <Text style={[styles.nunito700, styles.topButtonTxt]}>
                Top Up
              </Text>
            </Pressable>
          </View>
          <View style={[styles.flexRow, styles.transactionTitleContainer]}>
            <Text style={[styles.transactionHistoryTxt, styles.nunito700]}>
              Transaction History
            </Text>
            <Pressable
              onPress={() => {
                props.navigation.navigate('TransactionDetail');
              }}>
              <Text style={[styles.seeAllTxt, styles.nunito400]}>
                See details
              </Text>
            </Pressable>
          </View>
        </View>
        {cardData.transactionData?.map(data => {
          let cardPicture = '';
          if (authInfo.userId === data.sender_id) {
            if (data.recepient_picture) {
              cardPicture = {uri: API_URL + data.recepient_picture};
            } else {
              cardPicture = profilePlaceHolder;
            }
          } else if (data.sender_picture) {
            cardPicture = {uri: API_URL + data.sender_picture};
          } else {
            cardPicture = profilePlaceHolder;
          }
          return (
            <View
              style={[styles.homeCardContainer, styles.flexRow]}
              key={data.id}>
              <View style={styles.cardPic}>
                <Image source={cardPicture} style={styles.cardPicImage} />
              </View>
              <View>
                <Text style={[styles.nunito700, styles.cardTitle]}>
                  {data.sender_id === authInfo.userId
                    ? data.recepient
                    : data.sender}
                </Text>
                <Text>
                  {data.transaction_status_id === 1 && 'Top up'}
                  {data.transaction_status_id === 2 && 'Subscription'}
                  {data.transaction_status_id === 3 && 'Transfer'}
                </Text>
              </View>
              <Text
                style={
                  data.sender_id === authInfo.userId
                    ? [styles.cardNominal, styles.nunito700, styles.redText]
                    : [styles.cardNominal, styles.nunito700, styles.greenText]
                }>
                {data.sender_id === authInfo.userId ? '- ' : '+ '}
                Rp {data.amount}
              </Text>
            </View>
          );
        })}
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.button} onPress={logoutHandler}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: token => {
      dispatch(logoutAction(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
