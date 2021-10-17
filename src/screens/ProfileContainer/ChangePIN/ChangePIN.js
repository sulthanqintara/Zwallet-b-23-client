import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './Style';
const ChangePIN = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.pinArea}>
          <Text style={styles.passage}>
            Enter your current 6 digits Zwallet PIN below to continue to the
            next steps.
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
        </View>
        <View style={styles.buttonArea}>
          <Pressable
            style={styles.changeButton}
            onPress={() => props.navigation.navigate('NewPIN')}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ChangePIN;
