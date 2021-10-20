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

const CreateNewPassword = props => {
  const email = props.route.params.email;
  const code = props.route.params.code;
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (newPassword.length < 6 && confirmPassword.length < 6) {
      return setError('Password must be more than 6 characters');
    }
    if (newPassword !== confirmPassword) {
      return setError("password didn't match");
    }

    const data = new URLSearchParams();
    data.append('password', newPassword);
    data.append('email', email);
    data.append('code', code);
    console.log(data);
    axios
      .patch(`${API_URL}/users/forgot_password/change-password`, data)
      .then(res => {
        console.log(res);
        props.navigation.replace('Login');
        return ToastAndroid.show(
          'Reset password success! Please login now',
          ToastAndroid.SHORT,
        );
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
          Create and confirm your new password so you can login to Zwallet.
        </Text>
        <View style={styles.wrapperInput}>
          <Icon name="key" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Create new password"
            placeholderTextColor="#A9A9A9"
            onChangeText={value => {
              setNewPassword(value);
              setError(false);
            }}
            value={newPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.wrapperInput}>
          <Icon name="key" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm new password"
            placeholderTextColor="#A9A9A9"
            onChangeText={value => {
              setConfirmPassword(value);
              setError(false);
            }}
            value={confirmPassword}
            secureTextEntry
          />
        </View>
        {error && (
          <View style={styles.wrapperError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
        {newPassword && confirmPassword !== '' ? (
          <View style={styles.wrapperButtonReset}>
            <TouchableOpacity style={styles.buttonActive} onPress={onSubmit}>
              <Text style={styles.buttonTextActive}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.wrapperButtonReset}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default CreateNewPassword;
