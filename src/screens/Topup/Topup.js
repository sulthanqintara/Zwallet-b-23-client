import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Modal,
  ToastAndroid,
} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopUpCard from '../../components/TopUpCard';
import {TextInput} from 'react-native-gesture-handler';

const Topup = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState(0);

  const addBalanceHandler = () => {
    if (amount < 10000) {
      return ToastAndroid.show(
        'Minimum Rp 10.000 for top up!',
        ToastAndroid.SHORT,
      );
    }
    setModalVisible(!modalVisible);
    return ToastAndroid.show(
      'Balance added to your account!',
      ToastAndroid.SHORT,
    );
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalTitle, styles.nunito700]}>
              Input The Amount You Want To Add
            </Text>
            <View
              style={[
                styles.flexRow,
                styles.alignItemsCenter,
                styles.modalNominal,
              ]}>
              <Text style={styles.modalNominalText}>Rp. </Text>
              <TextInput
                keyboardType="numeric"
                textAlign="center"
                style={[styles.modalInput, styles.modalNominalText]}
                onChange={e => {
                  setAmount(e.nativeEvent.text);
                }}
              />
            </View>
            <Text style={[styles.nunito700, styles.textCenter]}>
              Min. Rp 10.000
            </Text>
            <View style={[styles.flexRow, styles.modalButtonContainer]}>
              <Pressable
                style={[styles.modalOkButton, styles.modalButton]}
                onPress={addBalanceHandler}>
                <Text style={styles.modalTextStyle}>Add Balance</Text>
              </Pressable>
              <Pressable
                style={[styles.modalCancelButton, styles.modalButton]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.modalTextStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={styles.topHeaderContainer}>
          <Ionicons name="arrow-back" color="white" size={28} />
          <Text style={[styles.headerTitle, styles.nunito700]}>Top Up</Text>
        </View>
        <View style={styles.bottomHeaderContainer}>
          <Pressable
            style={styles.headerButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.plusText}>+</Text>
          </Pressable>
          <View>
            <Text style={styles.nunito400}>Virtual Account Number</Text>
            <Text style={[styles.nunito700, styles.accountNumber]}>
              2389 081393877946
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={[styles.contentTitle, styles.nunito700]}>
            How to Top-Up
          </Text>
          <TopUpCard
            number={1}
            textContent="Go to the nearest ATM or you can use E-Banking."
          />
          <TopUpCard
            number={2}
            textContent="Type your security number on the
          ATM or E-Banking."
          />
          <TopUpCard number={3} textContent="Select “Transfer” in the menu" />
          <TopUpCard
            number={4}
            textContent="Type the virtual account number that we provide you at the top."
          />
          <TopUpCard
            number={5}
            textContent="Type the amount of the money you want to top up."
          />
          <TopUpCard number={6} textContent="Read the summary details." />
          <TopUpCard number={7} textContent="Press transfer / top up." />
          <TopUpCard
            number={8}
            textContent="You can see your money in Zwallet within 3 hours."
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Topup;
