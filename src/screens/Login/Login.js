import React from 'react';
import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = props => {
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
          />
        </View>
        <View style={styles.wrapperInput}>
          <Icon name="key" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Input your password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry
          />
        </View>
        <Pressable onPress={() => props.navigation.navigate('Reset-Password')}>
          <Text style={styles.forgotPass}>Forgot password?</Text>
        </Pressable>
        {/* <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('klik')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.buttonActive}
            onPress={() => props.navigation.navigate('Home')}>
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

export default Login;
