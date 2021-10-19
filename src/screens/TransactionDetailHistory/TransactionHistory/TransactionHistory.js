import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Pressable, Image, ScrollView, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {API_URL} from '@env';
import DatePicker from 'react-native-date-picker';

import {getTransaction} from '../../../utils/https/transaction';
import styles from './Styles';
import styles2 from '../TransactionDetail/Styles';
import profilePlaceHolder from '../../../assets/img/user.png';

const TransactionHistory = props => {
  const auth = useSelector(state => state.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);
  const [cardData, setCardData] = useState([]);
  const [expense, setExpense] = useState(false);
  const [income, setIncome] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [finishDate, setFinishDate] = useState(new Date());
  const [startDate, setStartDate] = useState(
    new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
  );
  const currentDate = new Date().getTime();
  let paramsTransaction = {
    user_id: auth.userId,
    limit: 100,
    start_duration: `${startDate.getFullYear()}-${
      startDate.getMonth() + 1
    }-${startDate.getDate()}`,
    finish_duration: `${finishDate.getFullYear()}-${
      finishDate.getMonth() + 1
    }-${finishDate.getDate()}`,
  };

  const modalHandler = () => {
    setModalVisible(!modalVisible);
    let modalParams = paramsTransaction;
    if (income) {
      modalParams = {...paramsTransaction, filter: 'income'};
    }
    if (expense) {
      modalParams = {...paramsTransaction, filter: 'expense'};
    }
    getTransaction(modalParams, token).then(data => {
      setCardData(data.data.result.transactionData);
    });
  };
  const expenseHandler = () => {
    console.log(income);
    if (income) {
      setIncome(!income);
      setExpense(!expense);
    }
    if (!expense) {
      getTransaction({...paramsTransaction, filter: 'expense'}, token).then(
        data => {
          setCardData(data.data.result.transactionData);
        },
      );
      return setExpense(!expense);
    }
    getTransaction(paramsTransaction, token).then(data => {
      setCardData(data.data.result.transactionData);
    });

    return setExpense(!expense);
  };

  const incomeHandler = () => {
    console.log(income);
    if (expense) {
      setExpense(!expense);
      setIncome(!income);
    }
    if (!income) {
      getTransaction({...paramsTransaction, filter: 'income'}, token).then(
        data => {
          setCardData(data.data.result.transactionData);
        },
      );
      return setIncome(!income);
    }
    getTransaction(paramsTransaction, token).then(data => {
      setCardData(data.data.result.transactionData);
    });

    return setIncome(!income);
  };
  useEffect(() => {
    const dateEffect = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const durationEffect = `${dateEffect.getFullYear()}-${
      dateEffect.getMonth() + 1
    }-${dateEffect.getDate()}`;
    const params = {
      user_id: auth.userId,
      limit: 100,
      start_duration: durationEffect,
    };
    getTransaction(params, token).then(data => {
      setCardData(data.data.result.transactionData);
    });
  }, [auth.userId, token]);
  return (
    <View style={styles2.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={[styles.modalTitle, styles2.nunito700]}>
              Filter by Date
            </Text>
            <Text
              style={[styles.modalTitle, styles2.nunito700, styles.dateTitle]}>
              From
            </Text>
            <DatePicker
              date={startDate}
              onDateChange={setStartDate}
              mode="date"
            />
            <Text
              style={[styles.modalTitle, styles2.nunito700, styles.dateTitle]}>
              To
            </Text>
            <DatePicker
              date={finishDate}
              onDateChange={setFinishDate}
              mode="date"
            />
            <Pressable style={[styles.modalButton]} onPress={modalHandler}>
              <Text style={[styles2.headerTitle, styles2.nunito700]}>
                Apply
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles2.header}>
        <View style={styles.topHeaderContainer}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back" color="white" size={28} />
          </Pressable>
          <Text style={[styles2.headerTitle, styles2.nunito700]}>History</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={[styles.timestamp, styles2.nunito400]}>This Week</Text>
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
          if (
            new Date(data.timestamp).getTime() -
              currentDate +
              7 * 24 * 60 * 60 * 1000 >
            0
          ) {
            return (
              <View
                style={[styles2.cardContainer, styles2.flexRow]}
                key={data.id}>
                <View style={styles2.cardPic}>
                  <Image source={cardPicture} style={styles2.cardPicImage} />
                </View>
                <View>
                  <Text style={[styles2.nunito700, styles2.cardTitle]}>
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
                      ? [
                          styles2.cardNominal,
                          styles2.nunito700,
                          styles2.redText,
                        ]
                      : [
                          styles2.cardNominal,
                          styles2.nunito700,
                          styles2.greenText,
                        ]
                  }>
                  {data.sender_id === auth.userId ? '- ' : '+ '}
                  {'Rp' + data.amount}
                </Text>
              </View>
            );
          }
        })}
        <Text style={[styles.timestamp, styles2.nunito400]}>This Month</Text>
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
          if (
            new Date(data.timestamp).getTime() -
              currentDate +
              7 * 24 * 60 * 60 * 1000 <
            0
          ) {
            return (
              <View
                style={[styles2.cardContainer, styles2.flexRow]}
                key={data.id}>
                <View style={styles2.cardPic}>
                  <Image source={cardPicture} style={styles2.cardPicImage} />
                </View>
                <View>
                  <Text style={[styles2.nunito700, styles2.cardTitle]}>
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
                      ? [
                          styles2.cardNominal,
                          styles2.nunito700,
                          styles2.redText,
                        ]
                      : [
                          styles2.cardNominal,
                          styles2.nunito700,
                          styles2.greenText,
                        ]
                  }>
                  {data.sender_id === auth.userId ? '- ' : '+ '}
                  {'Rp' + data.amount}
                </Text>
              </View>
            );
          }
        })}
      </ScrollView>
      <View style={[styles.bottomContainer, styles2.flexRow]}>
        <Pressable
          style={
            !expense
              ? styles.button
              : [styles.button, {backgroundColor: '#6379F4'}]
          }
          onPress={expenseHandler}>
          <Ionicons
            name="arrow-up"
            size={32}
            color={expense ? 'white' : '#FF5B37'}
          />
        </Pressable>
        <Pressable
          style={
            !income
              ? styles.button
              : [styles.button, {backgroundColor: '#6379F4'}]
          }
          onPress={incomeHandler}>
          <Ionicons
            name="arrow-down"
            size={32}
            color={income ? 'white' : '#1EC15F'}
          />
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={[styles2.nunito700, styles.filterText]}>
            Filter by Date
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TransactionHistory;
