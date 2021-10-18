import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  BackHandler,
  Image,
  Pressable,
} from 'react-native';
import styles from './Styles';
import styles2 from '../TransferPin/Styles';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePlaceholder from '../../../assets/img/profile.png';

const FinalTransfer = props => {
  const {navigation, route} = props;
  const data = route.params;
  const transactionDate = new Date(data.time);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[transactionDate.getMonth()];
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const backAction = () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerTitle, styles.nunito700]}>
          Transfer Details
        </Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <Ionicons
          name={status ? 'checkmark-circle' : 'close-circle'}
          color={status ? '#1EC15F' : '#FF5B37'}
          size={70}
          style={styles.checkMark}
        />
        <Text style={[styles.contentTitle, styles.nunito700]}>
          {status ? 'Transfer Success' : 'Transfer Failed'}
        </Text>
        {!status && (
          <Text style={styles.failedText}>
            We can’t transfer your money at the moment, we recommend you to
            check your internet connection and try again.
          </Text>
        )}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={[styles.cardTitle, styles.nunito400]}>Amount</Text>
            <Text style={[styles.nunito700, styles.cardSubTitle]}>
              Rp {data.topUpNominal}
            </Text>
          </View>
          <View style={styles.gap} />
          <View style={styles.card}>
            <Text style={[styles.cardTitle, styles.nunito400]}>
              Balance Left
            </Text>
            <Text style={[styles.nunito700, styles.cardSubTitle]}>
              Rp {data.topUpNominal}
            </Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={[styles.cardTitle, styles.nunito400]}>Date</Text>
            <Text style={[styles.nunito700, styles.cardSubTitle]}>
              {month + ' '}
              {transactionDate.getDate() + ', '}
              {transactionDate.getFullYear()}
            </Text>
          </View>
          <View style={styles.gap} />
          <View style={styles.card}>
            <Text style={[styles.cardTitle, styles.nunito400]}>Time</Text>
            <Text style={[styles.nunito700, styles.cardSubTitle]}>
              {transactionDate.getHours() < 10
                ? '0' + transactionDate.getHours()
                : transactionDate.getHours()}
              .
              {transactionDate.getMinutes() < 10
                ? '0' + transactionDate.getMinutes()
                : transactionDate.getMinutes()}
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text style={[styles.cardTitle, styles.nunito400]}>Notes</Text>
          <Text style={[styles.nunito700, styles.cardSubTitle]}>
            {data.notes ? data.notes : 'None'}
          </Text>
        </View>
        <Text style={[styles.contentSubTitle, styles.nunito700]}>From</Text>
        <View style={[styles.card, styles.flexRow]}>
          <Image source={ProfilePlaceholder} style={styles.profilePic} />
          <View style={styles.contactContainer}>
            <Text style={[styles.nunito700, styles.contactTitle]}>
              Robert Chandler
            </Text>
            <Text style={[styles.nunito400]}>+62 813-9387-7946</Text>
          </View>
        </View>
        <Text style={[styles.contentSubTitle, styles.nunito700]}>To</Text>
        <View style={[styles.card, styles.flexRow]}>
          <Image source={data.image} style={styles.profilePic} />
          <View style={styles.contactContainer}>
            <Text style={[styles.nunito700, styles.contactTitle]}>
              {data.name}
            </Text>
            <Text style={[styles.nunito400]}>{data.phone}</Text>
          </View>
        </View>
        <Pressable
          style={[styles2.continueButton, styles.buttonMargin]}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
          }}>
          <Text style={[styles2.transferBtnText, styles.nunito700]}>
            Back To Home
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default FinalTransfer;
