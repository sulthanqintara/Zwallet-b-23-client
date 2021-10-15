import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactCard from '../../../components/ContactCard';

import styles from './Styles';

const InputAmount = props => {
  const {route, navigation} = props;
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
        />
        <Text style={[styles.amountAvailable, styles.nunito700]}>
          Rp x Available
        </Text>
        <View style={styles.notesContainer}>
          <Ionicons name="pencil-outline" size={28} />
          <TextInput
            placeholder="Add some notes"
            multiline={true}
            style={styles.notesInput}
          />
        </View>
      </View>
    </View>
  );
};

export default InputAmount;
