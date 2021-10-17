import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import styles from './Style';
const ChangePIN = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.pinArea}>
          <Text style={styles.passage}>
            Type your new 6 digits security PIN to use in Zwallet.
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
            onPress={() => props.navigation.replace('Profile')}>
            <Text style={styles.buttonText}>Change PIN</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ChangePIN;
