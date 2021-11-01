import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import {loginAction} from '../../redux/actionCreators/auth';
import {connect} from 'react-redux';

const Register = props => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (username === '') {
      return setError('Username are Required');
    }
    if (email === '') {
      return setError('E-mail are Required');
    }
    if (!email.includes('@')) {
      return setError('Please input a valid Email');
    }
    if (password === '') {
      return setError('Password are Required');
    }
    if (password.length < 6) {
      return setError('Password must have 6 or more characters');
    }

    const data = {
      email: email,
      username: username,
      password: password,
    };

    props.navigation.replace('Create-Pin', {data});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textLogin}>Sign Up</Text>
        <Text style={styles.descLogin}>
          Create your account to access Zwallet.
        </Text>
        <View style={styles.wrapperInput}>
          <Icon name="person" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your username"
            keyboardType="email-address"
            placeholderTextColor="#A9A9A9"
            onChangeText={value => {
              setUsername(value);
              setError(false);
            }}
            value={username}
          />
        </View>
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
        <View style={styles.wrapperInput}>
          <Icon name="key" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Create your password"
            placeholderTextColor="#A9A9A9"
            onChangeText={value => {
              setPassword(value);
              setError(false);
            }}
            value={password}
            secureTextEntry
          />
        </View>
        {error && (
          <View style={styles.wrapperError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
        {/* <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.buttonActive} onPress={onSubmit}>
            <Text style={styles.buttonTextActive}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textBottom}>
          <Text style={styles.textDontHave}>
            Already have an account? Let’s
          </Text>
          <Pressable onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.textSignUp}> Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Register;
