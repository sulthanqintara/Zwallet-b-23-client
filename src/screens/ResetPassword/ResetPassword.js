/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {API_URL} from '@env';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const ResetPassword = props => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (email === '') {
      return setError('E-mail or Username are required!');
    }
    if (!email.includes('@')) {
      return setError('Please input a valid Email');
    }

    const data = new URLSearchParams();
    data.append('email', email);
    axios
      .post(`${API_URL}/users/forgot_password`, data)
      .then(res => {
        console.log(res);
        props.navigation.replace('Confirm-Otp', {email});
        return ToastAndroid.show('Success get code', ToastAndroid.SHORT);
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textLogin}>Reset Password</Text>
        <Text style={styles.descLogin}>
          Enter your Zwallet e-mail so we can send you a password reset link.
        </Text>
        <View style={styles.wrapperInput}>
          <Icon name="mail" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your e-mail"
            keyboardType="email-address"
            placeholderTextColor="#A9A9A9"
            onChangeText={value => {
              setEmail(value);
              setError(false);
            }}
            value={email}
          />
        </View>
        {error && (
          <View style={styles.wrapperError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
        {email !== '' ? (
          <View style={styles.wrapperButton}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: '#6379F4'}]}
              onPress={onSubmit}>
              <Text style={[styles.buttonText, {color: 'white'}]}>Confirm</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.wrapperButton}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default ResetPassword;
