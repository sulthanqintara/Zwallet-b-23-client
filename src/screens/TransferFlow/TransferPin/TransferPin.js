import React, {useState} from 'react';
import {View, Text, Pressable, ToastAndroid} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {topUpAction} from '../../../redux/actionCreators/auth';
import {verifyToken} from '../../../utils/https/users';
import styles2 from '../Confirmation/Styles';
import Styles from './Styles';

const TransferPin = props => {
  const {route, navigation} = props;
  const [pin, setPin] = useState('');
  const token = useSelector(reduxState => reduxState.auth.token);
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const data = route.params;
  const numPadHandler = num => {
    if (pin.length < 6) {
      return setPin(pin + num);
    }
  };
  const dispatch = useDispatch();
  const buttonHandler = () => {
    const pinBody = {user_id: authInfo.userId, pin};
    return verifyToken(pinBody, token)
      .then(() => {
        const body = {
          sender_id: authInfo.userId,
          recipient_id: data.userId,
          amount: data.topUpNominal,
          status: 1,
          transaction_status_id: 3,
          notes: data.notes,
        };
        dispatch(topUpAction(body, token));
        return navigation.navigate('FinalTransfer', {data});
      })
      .catch(() => {
        return ToastAndroid.show('Pin is incorrect!', ToastAndroid.SHORT);
      });
  };
  return (
    <View style={styles2.container}>
      <View style={styles2.header}>
        <View style={[styles2.topHeaderContainer, Styles.topHeaderContainer]}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back" color="white" size={28} />
          </Pressable>
          <Text style={[styles2.headerTitle, styles2.nunito700]}>
            Enter Your PIN
          </Text>
        </View>
      </View>
      <View style={Styles.contentContainer}>
        <Text style={[Styles.contentTitle, styles2.nunito700]}>
          Enter PIN to Transfer
        </Text>
        <Text style={[Styles.contentSubTitle, styles2.nunito400]}>
          Enter your 6 digits PIN for confirmation to continue transferring
          money
        </Text>
        <View style={Styles.pinContainer}>
          <Text style={Styles.pinBox}>{pin.length >= 1 && '*'}</Text>
          <Text style={Styles.pinBox}>{pin.length >= 2 && '*'}</Text>
          <Text style={Styles.pinBox}>{pin.length >= 3 && '*'}</Text>
          <Text style={Styles.pinBox}>{pin.length >= 4 && '*'}</Text>
          <Text style={Styles.pinBox}>{pin.length >= 5 && '*'}</Text>
          <Text style={Styles.pinBox}>{pin.length >= 6 && '*'}</Text>
        </View>
        <View style={Styles.numPadContainer}>
          <View style={Styles.numPadRow}>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(1);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>1</Text>
            </Pressable>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(2);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>2</Text>
            </Pressable>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(3);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>3</Text>
            </Pressable>
          </View>
          <View style={Styles.numPadRow}>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(4);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>4</Text>
            </Pressable>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(5);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>5</Text>
            </Pressable>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(6);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>6</Text>
            </Pressable>
          </View>
          <View style={Styles.numPadRow}>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(7);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>7</Text>
            </Pressable>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(8);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>8</Text>
            </Pressable>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(9);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>9</Text>
            </Pressable>
          </View>
          <View style={Styles.numPadRow}>
            <Pressable style={Styles.numPadPressable} />
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                numPadHandler(0);
              }}>
              <Text style={[Styles.numPadNumber, styles2.nunito400]}>0</Text>
            </Pressable>
            <Pressable
              style={Styles.numPadPressable}
              onPress={() => {
                if (pin.length > 0) {
                  setPin(pin.substring(0, pin.length - 1));
                }
              }}>
              <MaterialIcons name="backspace" style={Styles.numPadNumber} />
            </Pressable>
          </View>
        </View>
        {pin.length === 6 ? (
          <Pressable style={Styles.continueButton} onPress={buttonHandler}>
            <Text style={[Styles.transferBtnText, styles2.nunito700]}>
              Transfer Now
            </Text>
          </Pressable>
        ) : (
          <Pressable style={Styles.continueButtonDisabled} disabled={true}>
            <Text style={[Styles.transferBtnTextDisabled, styles2.nunito700]}>
              Transfer Now
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default TransferPin;
