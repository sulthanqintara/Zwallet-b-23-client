import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './Style';

const PersonalInfo = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.passage}>
          We got your personal information from the sign up process. If you want
          to make changes on your information, contact our support.
        </Text>
        <View style={styles.buttons}>
          <View style={styles.personalInfoBox}>
            <Text style={styles.boxHeading}>First Name</Text>
            <Text style={styles.boxContent}>Robert</Text>
          </View>
          <View style={styles.personalInfoBox}>
            <Text style={styles.boxHeading}>Last Name</Text>
            <Text style={styles.boxContent}>Chandler</Text>
          </View>
          <View style={styles.personalInfoBox}>
            <Text style={styles.boxHeading}>Verified E-mail</Text>
            <Text style={styles.boxContent}>pewdiepie1@gmail.com</Text>
          </View>
          <View style={styles.phoneBox}>
            <View>
              <Text style={styles.boxHeading}>Phone Number</Text>
              <Text style={styles.boxContent}>+62 813-9387-7946</Text>
            </View>
            <Pressable>
              <Text style={styles.manage}>Manage</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;
