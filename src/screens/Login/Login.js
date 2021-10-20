/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {loginAction} from '../../redux/actionCreators/auth';
import PushNotification from 'react-native-push-notification';
import socket from '../../utils/socket/SocketIo';

const Login = props => {
  // console.log(props.auth.error.message);
  const [userLogin, setUserLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    if (userLogin === '') {
      return setError('E-mail or Username are required!');
    }
    if (password === '') {
      return setError('Password are required');
    }

    const data = new URLSearchParams();
    data.append('userLogin', userLogin);
    data.append('password', password);

    props.onLogin(data);
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    const errorLogin = String(props.auth.error.message);
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (props.auth.isLogin) {
        socket.on('connect');
        socket.on(`transaction_${props.auth.authInfo.userId}`, data => {
          PushNotification.localNotification({
            channelId: 'transaction-channel',
            title: 'Incoming transaction',
            message: data.message,
          });
        });
        return props.navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }
    }
    if (errorLogin.includes('401') === true) {
      return setError('Email or Password Are Incorrect');
    }
  }, [props.auth.isLogin, props.auth.error.message]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textLogin}>Login</Text>
        <Text style={styles.descLogin}>
          Login to your existing account to access all the features in Zwallet.
        </Text>
        <View style={styles.wrapperInput}>
          <Icon name="mail" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Email"
            keyboardType="email-address"
            placeholderTextColor="#A9A9A9"
            onChangeText={value => {
              setUserLogin(value);
              setError(false);
            }}
            value={userLogin}
          />
        </View>
        <View style={styles.wrapperInput}>
          <Icon name="key" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Input your password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry
            onChangeText={value => {
              setPassword(value);
              setError(false);
            }}
            value={password}
          />
        </View>
        <Pressable onPress={() => props.navigation.navigate('Reset-Password')}>
          <Text style={styles.forgotPass}>Forgot password?</Text>
        </Pressable>
        {error && (
          <View style={styles.wrapperError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
        {/* <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('klik')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.wrapperButton}>
          <TouchableOpacity style={styles.buttonActive} onPress={onSubmit}>
            <Text style={styles.buttonTextActive}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textBottom}>
          <Text style={styles.textDontHave}>Don’t have an account? Let’s </Text>
          <Pressable onPress={() => props.navigation.navigate('Register')}>
            <Text style={styles.textSignUp}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: body => {
      dispatch(loginAction(body));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
