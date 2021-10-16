import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text, Pressable} from 'react-native';

import ContactCard from '../../../components/ContactCard';
import styles from './Styles';
import styles2 from '../InputAmount/Styles';

const Confirmation = props => {
  const {route, navigation} = props;
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
  const data = route.params;
  const dateNow = new Date(); // 2009-11-10
  const month = monthNames[dateNow.getMonth()];
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
            Confirmation
          </Text>
        </View>
        <ContactCard
          image={route.params.image}
          name={route.params.name}
          phone={route.params.phone}
          {...props}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={[styles.flexRow, styles.topCardContainer]}>
          <View style={styles.topCard}>
            <Text style={[styles.topCardTitleTxt, styles.nunito400]}>
              Amount
            </Text>
            <Text style={[styles.topCardTxt, styles.nunito700]}>Rp100.000</Text>
          </View>
          <View style={styles.topCard}>
            <Text style={[styles.topCardTitleTxt, styles.nunito400]}>
              Balance Left
            </Text>
            <Text style={[styles.topCardTxt, styles.nunito700]}>Rp20.000</Text>
          </View>
        </View>
        <View style={[styles.flexRow, styles.topCardContainer]}>
          <View style={styles.topCard}>
            <Text style={[styles.topCardTitleTxt, styles.nunito400]}>Date</Text>
            <Text style={[styles.topCardTxt, styles.nunito700]}>
              {month + ' '}
              {dateNow.getDate() + ', '}
              {dateNow.getFullYear()}
            </Text>
          </View>
          <View style={styles.topCard}>
            <Text style={[styles.topCardTitleTxt, styles.nunito400]}>Time</Text>
            <Text style={[styles.topCardTxt, styles.nunito700]}>
              {dateNow.getHours() < 10
                ? '0' + dateNow.getHours()
                : dateNow.getHours()}
              .
              {dateNow.getMinutes() < 10
                ? '0' + dateNow.getMinutes()
                : dateNow.getMinutes()}
            </Text>
          </View>
        </View>
        <View style={styles.bottomCard}>
          <Text style={[styles.topCardTitleTxt, styles.nunito400]}>Notes</Text>
          <Text style={[styles.topCardTxt, styles.nunito700]}>
            For buying some socks
          </Text>
        </View>
        <Pressable
          style={styles.continueButton}
          onPress={() => {
            navigation.navigate('TransferConfirmation', data);
          }}>
          <Text style={[styles2.continueText, styles2.nunito700]}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Confirmation;
