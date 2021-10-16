import React from 'react';
import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';

const CreateNewPassword = props => {
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
            secureTextEntry
          />
        </View>
        <View style={styles.wrapperInput}>
          <Icon name="key" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm new password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry
          />
        </View>
        <View style={styles.wrapperButtonReset}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('klik')}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.wrapperButtonReset}>
          <TouchableOpacity
            style={styles.buttonActive}
            onPress={() => console.log('klik')}>
            <Text style={styles.buttonTextActive}>Reset Password</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

export default CreateNewPassword;
