import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChangePassword = props => {
  const [value, onChangeText] = useState(props.value);
  const [visible, setVisibility] = useState(false);

  const icon = !visible ? 'eye-off-outline' : 'eye-outline';

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
              secureTextEntry={!visible}
              placeholder="Current Password"
              style={styles.textInput}
            />
            <Ionicons
              name={icon}
              size={20}
              color="#000"
              onPress={() => setVisibility(!visible)}
            />
          </View>
          <View style={styles.passContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#000" />
            <TextInput
              secureTextEntry={!visible}
              placeholder="New Password"
              style={styles.textInput}
            />
            <Ionicons
              name={icon}
              size={20}
              color="#000"
              onPress={() => setVisibility(!visible)}
            />
          </View>
          <View style={styles.passContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="#000" />
            <TextInput
              secureTextEntry={!visible}
              placeholder="Repeat Password"
              style={styles.textInput}
            />
            <Ionicons
              name={icon}
              size={20}
              color="#000"
              onPress={() => setVisibility(!visible)}
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
