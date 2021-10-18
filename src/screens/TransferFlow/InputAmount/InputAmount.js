import React, {useState} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactCard from '../../../components/ContactCard';

import styles from './Styles';

const InputAmount = props => {
  const [notes, setNotes] = useState('');
  const [topUpNominal, setTopUpNominal] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const {route, navigation} = props;
  const data = route.params;

  const nextPageHandler = () => {
    if (topUpNominal < 10000) {
      return setErrorMessage('Minimum amount Rp 10.000');
    }
    setErrorMessage(false);
    navigation.navigate('TransferConfirmation', {
      ...data,
      notes,
      topUpNominal,
    });
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
          <Text style={[styles.headerTitle, styles.nunito700]}>Transfer</Text>
        </View>
        <ContactCard
          image={route.params.image}
          name={route.params.name}
          phone={route.params.phone}
          {...props}
        />
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          textAlign="center"
          placeholder="0.00"
          style={[styles.nominalInput, styles.nunito700]}
          keyboardType="numeric"
          onChange={e => {
            setTopUpNominal(e.nativeEvent.text);
          }}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <Text style={[styles.amountAvailable, styles.nunito700]}>
          Rp x Available
        </Text>
        <View style={styles.notesContainer}>
          <Ionicons name="pencil-outline" size={28} />
          <TextInput
            placeholder="Add some notes"
            style={styles.notesInput}
            onChange={e => {
              setNotes(e.nativeEvent.text);
            }}
          />
        </View>
        <Pressable style={styles.continueButton} onPress={nextPageHandler}>
          <Text style={[styles.continueText, styles.nunito700]}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default InputAmount;
