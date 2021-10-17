import React from 'react';
import {View, Text} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ManagePhoneNumber = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.phoneArea}>
          <Text style={styles.passage}>
            You can only delete the phone number and then you must add another
            phone number.
          </Text>
          <View style={styles.boxArea}>
            <View style={styles.numberArea}>
              <Text style={styles.numberHeading}>Primary</Text>
              <Text style={styles.numberContent}>+62 813 9387 7946</Text>
            </View>
            <Ionicons name="trash-outline" size={30} color="#000" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ManagePhoneNumber;
