import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import styles from './Style';
import styles2 from '../../TransferFlow/Confirmation/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {connect, useSelector} from 'react-redux';
import {updatePin} from '../../../utils/https/users';
const NewPIN = props => {
  const oldPin = props.route.params.oldPin;
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);
  const [pin, setPin] = useState('');
  const numPadHandler = num => {
    if (pin.length < 6) {
      return setPin(pin + num);
    }
  };
  const onSubmit = () => {
    console.log('pin lama: ', oldPin);
    const id = authInfo.userId;
    const pinBody = {oldPinNumber: oldPin, newPinNumber: pin};
    updatePin(id, pinBody, token);
    props.navigation.pop(2);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Zwallet</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textLogin}>Enter New PIN</Text>
          <Text style={styles.descLogin}>
            Type your new 6 digits security PIN to use in Zwallet.
          </Text>
          <View style={styles.pinContainer}>
            <Text style={styles.pinBox}>{pin.length >= 1 && '*'}</Text>
            <Text style={styles.pinBox}>{pin.length >= 2 && '*'}</Text>
            <Text style={styles.pinBox}>{pin.length >= 3 && '*'}</Text>
            <Text style={styles.pinBox}>{pin.length >= 4 && '*'}</Text>
            <Text style={styles.pinBox}>{pin.length >= 5 && '*'}</Text>
            <Text style={styles.pinBox}>{pin.length >= 6 && '*'}</Text>
          </View>
          <View style={styles.numPadContainer}>
            {pin.length === 6 ? (
              <Pressable style={styles.continueButton} onPress={onSubmit}>
                <Text style={[styles.transferBtnText, styles2.nunito700]}>
                  Confirm
                </Text>
              </Pressable>
            ) : (
              <Pressable style={styles.continueButtonDisabled} disabled={true}>
                <Text
                  style={[styles.transferBtnTextDisabled, styles2.nunito700]}>
                  Confirm
                </Text>
              </Pressable>
            )}
            <View style={styles.numPadRow}>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(1);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>1</Text>
              </Pressable>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(2);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>2</Text>
              </Pressable>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(3);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>3</Text>
              </Pressable>
            </View>
            <View style={styles.numPadRow}>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(4);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>4</Text>
              </Pressable>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(5);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>5</Text>
              </Pressable>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(6);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>6</Text>
              </Pressable>
            </View>
            <View style={styles.numPadRow}>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(7);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>7</Text>
              </Pressable>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(8);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>8</Text>
              </Pressable>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(9);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>9</Text>
              </Pressable>
            </View>
            <View style={styles.numPadRow}>
              <Pressable style={styles.numPadPressable} />
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  numPadHandler(0);
                }}>
                <Text style={[styles.numPadNumber, styles2.nunito400]}>0</Text>
              </Pressable>
              <Pressable
                style={styles.numPadPressable}
                onPress={() => {
                  if (pin.length > 0) {
                    setPin(pin.substring(0, pin.length - 1));
                  }
                }}>
                <MaterialIcons name="backspace" style={styles.numPadNumber} />
              </Pressable>
            </View>
          </View>
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

export default connect(mapStateToProps)(NewPIN);
