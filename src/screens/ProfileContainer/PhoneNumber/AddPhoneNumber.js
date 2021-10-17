import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddPhoneNumber = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.phoneArea}>
          <Text style={styles.passage}>
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </Text>
          <Ionicons name="call-outline" size={20} color="#000" />
          <Text>+62</Text>
          <TextInput
            placeholder="Enter your phone number"
            keyboardType="number-pad"
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonArea}>
          <Pressable style={styles.changeButton}>
            <Text style={styles.buttonText}>Change Password</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default AddPhoneNumber;
