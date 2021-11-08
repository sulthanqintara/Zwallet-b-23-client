import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import {API_URL} from '@env';

import Ionicons from 'react-native-vector-icons/Ionicons';
import profilePlaceHolder from '../../../assets/img/user.png';
import styles from './Styles';
import {useSelector} from 'react-redux';
import {getTransaction} from '../../../utils/https/transaction';

const TransactionDetail = props => {
  const token = useSelector(reduxState => reduxState.auth.token);
  const auth = useSelector(state => state.auth.authInfo);
  const [cardData, setCardData] = useState([]);
  const dateNow = new Date();
  const dayArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const shownDay = num => {
    let day = dateNow.getDay() - num;
    if (day < 0) {
      day = day + 7;
    }
    return dayArray[day];
  };
  let income = 0;
  let expense = 0;
  useEffect(() => {
    const date = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const duration = date
      .toISOString()
      .substr(0, 19)
      .replace('T', ' ')
      .split(' ')[0];
    const params = {user_id: auth.userId, limit: 100, start_duration: duration};

    const unsubscribe = props.navigation.addListener('focus', () => {
      getTransaction(params, token)
        .then(data => {
          setCardData(data.data.result.transactionData);
        })
        .catch(err => console.log(err.response));
    });
    getTransaction(params, token)
      .then(data => {
        setCardData(data.data.result.transactionData);
      })
      .catch(err => console.log(err.response));
    return unsubscribe;
  }, [auth.userId, props.navigation, token]);

  cardData?.forEach(
    data => data.sender_id !== auth.userId && (income = income + data.amount),
  );
  cardData?.forEach(
    data =>
      data.sender_id === auth?.userId && (expense = expense + data.amount),
  );
  const lastWeek = (days, time) => {
    const daysAgoEnd = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    const daysAgoStart = new Date(
      Date.now() - (days + 1) * 24 * 60 * 60 * 1000,
    );
    if (daysAgoStart < time && time < daysAgoEnd) {
      return true;
    }
    return false;
  };
  let amountDay1 = 0;
  let amountDay2 = 0;
  let amountDay3 = 0;
  let amountDay4 = 0;
  let amountDay5 = 0;
  let amountDay6 = 0;
  let amountDay7 = 0;
  cardData.forEach(data => {
    const timeStamp = new Date(data.timestamp);
    const values = lastWeek(6, timeStamp);
    if (values === true) {
      return (amountDay1 = amountDay1 + data.amount);
    }
  });
  cardData.forEach(data => {
    const timeStamp = new Date(data.timestamp);
    const values = lastWeek(5, timeStamp);
    if (values === true) {
      return (amountDay2 = amountDay2 + data.amount);
    }
  });
  cardData.forEach(data => {
    const timeStamp = new Date(data.timestamp);
    const values = lastWeek(4, timeStamp);
    if (values === true) {
      return (amountDay3 = amountDay3 + data.amount);
    }
  });
  cardData.forEach(data => {
    const timeStamp = new Date(data.timestamp);
    const values = lastWeek(3, timeStamp);
    if (values === true) {
      return (amountDay4 = amountDay4 + data.amount);
    }
  });
  cardData.forEach(data => {
    const timeStamp = new Date(data.timestamp);
    const values = lastWeek(2, timeStamp);
    if (values === true) {
      return (amountDay5 = amountDay5 + data.amount);
    }
  });
  cardData.forEach(data => {
    const timeStamp = new Date(data.timestamp);
    const values = lastWeek(1, timeStamp);
    if (values === true) {
      return (amountDay6 = amountDay6 + data.amount);
    }
  });
  cardData.forEach(data => {
    const timeStamp = new Date(data.timestamp);
    const values = lastWeek(0, timeStamp);
    if (values === true) {
      return (amountDay7 = amountDay7 + data.amount);
    }
  });
  const maxTransactionAmount = Math.max(
    amountDay1,
    amountDay2,
    amountDay3,
    amountDay4,
    amountDay5,
    amountDay6,
    amountDay7,
  );
  const barHeight = nominal => {
    if (maxTransactionAmount) {
      return (nominal / maxTransactionAmount) * 250;
    }
    return 0;
  };
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
            Transaction
          </Text>
        </View>
        <View style={styles.bottomHeaderContainer}>
          <View style={styles.flexRow}>
            <Ionicons name="arrow-down" color="#4CEDB3" size={32} />
            <View style={styles.balanceHeader}>
              <Text style={[styles.balanceHeaderTitle, styles.nunito400]}>
                Income
              </Text>
              <Text style={[styles.balanceHeaderSubTitle, styles.nunito700]}>
                Rp{income}
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
            <Ionicons name="arrow-up" color="#FF5B37" size={32} />
            <View style={styles.balanceHeader}>
              <Text style={[styles.balanceHeaderTitle, styles.nunito400]}>
                Expense
              </Text>
              <Text style={[styles.balanceHeaderSubTitle, styles.nunito700]}>
                Rp{expense}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView>
        <Text style={[styles.contentTitle, styles.nunito700]}>
          In This Week
        </Text>
        <View style={[styles.barGraph, styles.flexRow]}>
          <View style={styles.barContainer}>
            <View style={[styles.blueBar, {height: barHeight(amountDay1)}]} />
            <Text>{shownDay(6)}</Text>
          </View>
          <View style={styles.barContainer}>
            <View style={[styles.blueBar, {height: barHeight(amountDay2)}]} />
            <Text>{shownDay(5)}</Text>
          </View>
          <View style={styles.barContainer}>
            <View style={[styles.blueBar, {height: barHeight(amountDay3)}]} />
            <Text>{shownDay(4)}</Text>
          </View>
          <View style={styles.barContainer}>
            <View style={[styles.blueBar, {height: barHeight(amountDay4)}]} />
            <Text>{shownDay(3)}</Text>
          </View>
          <View style={styles.barContainer}>
            <View style={[styles.blueBar, {height: barHeight(amountDay5)}]} />
            <Text>{shownDay(2)}</Text>
          </View>
          <View style={styles.barContainer}>
            <View style={[styles.blueBar, {height: barHeight(amountDay6)}]} />
            <Text>{shownDay(1)}</Text>
          </View>
          <View style={styles.barContainer}>
            <View style={[styles.blueBar, {height: barHeight(amountDay7)}]} />
            <Text>{shownDay(0)}</Text>
          </View>
        </View>
        <View style={styles.flexRow}>
          <Text style={[styles.contentTitle, styles.nunito700]}>
            Transaction History
          </Text>
          <Pressable
            style={styles.seeAllContainer}
            onPress={() => {
              props.navigation.navigate('TransactionHistory');
            }}>
            <Text style={[styles.seeAll, styles.nunito400]}>
              See all History
            </Text>
          </Pressable>
        </View>
        {cardData.map(data => {
          let cardPicture = '';
          if (auth.userId === data.sender_id) {
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
            <View style={[styles.cardContainer, styles.flexRow]} key={data.id}>
              <View style={styles.cardPic}>
                <Image source={cardPicture} style={styles.cardPicImage} />
              </View>
              <View>
                <Text style={[styles.nunito700, styles.cardTitle]}>
                  {data.sender_id === auth.userId
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
                  data.sender_id === auth.userId
                    ? [styles.cardNominal, styles.nunito700, styles.redText]
                    : [styles.cardNominal, styles.nunito700, styles.greenText]
                }>
                {data.sender_id === auth.userId ? '- ' : '+ '}
                {'Rp' + data.amount}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TransactionDetail;
