import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Style';
import successImage from '../../assets/img/success.png';

const SuccessRegister = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.content}>
        <Image source={successImage} style={styles.successImage} />
        <Text style={styles.textLogin}>PIN Successfully Created</Text>
        <Text style={styles.descLogin}>
          Your PIN was successfully created and you can now access all the
          features in Zwallet. Login to your new account and start exploring!
        </Text>
        <View style={styles.wrapperButtonReset}>
          <TouchableOpacity
            style={styles.buttonActive}
            onPress={() => props.navigation.replace('Login')}>
            <Text style={styles.buttonTextActive}>Login Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SuccessRegister;
