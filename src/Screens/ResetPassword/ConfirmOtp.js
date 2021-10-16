/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Style';

const ConfirmOtp = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textLogin}>Please input your OTP</Text>
        <Text style={styles.descLogin}>
          We have sent your OTP (One Time Password) code via Email
        </Text>
        <View style={styles.wrapperInputOtp}>
          <TextInput
            style={styles.textInputOtp}
            placeholderTextColor="#A9A9A9"
            maxLength={1}
          />
          <TextInput
            style={styles.textInputOtp}
            placeholderTextColor="#A9A9A9"
            maxLength={1}
          />
          <TextInput
            style={styles.textInputOtp}
            placeholderTextColor="#A9A9A9"
            maxLength={1}
          />
          <TextInput
            style={styles.textInputOtp}
            placeholderTextColor="#A9A9A9"
            maxLength={1}
          />
          <TextInput
            style={styles.textInputOtp}
            placeholderTextColor="#A9A9A9"
            maxLength={1}
          />
          <TextInput
            style={styles.textInputOtp}
            placeholderTextColor="#A9A9A9"
            maxLength={1}
          />
        </View>
        {/* <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate('Create-Password')}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#6379F4'}]}
            onPress={() => props.navigation.navigate('Create-Password')}>
            <Text style={[styles.buttonText, {color: 'white'}]}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmOtp;
