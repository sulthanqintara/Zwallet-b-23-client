import React from 'react';
import {View, Text} from 'react-native';
import styles from './Style';

const PersonalInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.passage}>
          <Text style={styles.passageText}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>
        </View>
        <View style={styles.dataArea}>
          <View style={styles.personalData}>
            <Text style={styles.boxHeading}>First Name</Text>
            <Text style={styles.boxContent}>Robert</Text>
          </View>
          <View style={styles.personalData}>
            <Text style={styles.boxHeading}>Last Name</Text>
            <Text style={styles.boxContent}>Chandler</Text>
          </View>
          <View style={styles.personalData}>
            <Text style={styles.boxHeading}>Verified E-mail</Text>
            <Text style={styles.boxContent}>pewdiepie1@gmail.com</Text>
          </View>
          <View style={styles.phoneData}>
            <View>
              <Text style={styles.boxHeading}>Phone Number</Text>
              <Text style={styles.boxContent}>+62 813-9387-7946</Text>
            </View>
            <Text style={styles.manage}>Manage</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;
