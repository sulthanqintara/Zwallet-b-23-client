import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChangePassword = props => {
  const [currentPassword, setCurrentPassword] = useState(props.value);
  const [newPassword, setNewPassword] = useState(props.value);
  const [repeatPassword, setRepeatPassword] = useState(props.value);
  const [currentVisible, setCurrentVisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  const [repeatVisible, setRepeatVisible] = useState(false);

  const iconCurrent = !currentVisible ? 'eye-outline' : 'eye-off-outline';
  const iconNew = !newVisible ? 'eye-outline' : 'eye-off-outline';
  const iconRepeat = !repeatVisible ? 'eye-outline' : 'eye-off-outline';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.passArea}>
          <Text style={styles.passage}>
            You must enter your current password and then type your new password
            twice.
          </Text>
          <View style={styles.passContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#000" />
            <TextInput
              secureTextEntry={!currentVisible}
              placeholder="Current Password"
              style={styles.textInput}
              onChange={e => {
                setCurrentPassword(e.nativeEvent.text);
              }}
            />
            <Ionicons
              name={iconCurrent}
              size={20}
              color="#000"
              onPress={() => setCurrentVisible(!currentVisible)}
            />
          </View>
          <View style={styles.passContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#000" />
            <TextInput
              secureTextEntry={!newVisible}
              placeholder="New Password"
              style={styles.textInput}
              onChange={e => {
                setNewPassword(e.nativeEvent.text);
              }}
            />
            <Ionicons
              name={iconNew}
              size={20}
              color="#000"
              onPress={() => setNewVisible(!newVisible)}
            />
          </View>
          <View style={styles.passContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#000" />
            <TextInput
              secureTextEntry={!repeatVisible}
              placeholder="Repeat Password"
              style={styles.textInput}
              onChange={e => {
                setRepeatPassword(e.nativeEvent.text);
              }}
            />
            <Ionicons
              name={iconRepeat}
              size={20}
              color="#000"
              onPress={() => setRepeatVisible(!repeatVisible)}
            />
          </View>
        </View>
        <View style={styles.buttonArea}>
          <Pressable style={styles.changeButton}>
            <Text style={styles.buttonText}>Change Password</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;
