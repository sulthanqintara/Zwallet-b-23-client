import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect, useSelector} from 'react-redux';
import {updatePassword} from '../../../utils/https/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ChangePassword = props => {
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);
  const [currentPassword, setCurrentPassword] = useState(props.value);
  const [newPassword, setNewPassword] = useState(props.value);
  const [repeatPassword, setRepeatPassword] = useState(props.value);
  const [currentVisible, setCurrentVisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  const [repeatVisible, setRepeatVisible] = useState(false);
  const [error, setError] = useState(false);

  const iconCurrent = !currentVisible ? 'eye-outline' : 'eye-off-outline';
  const iconNew = !newVisible ? 'eye-outline' : 'eye-off-outline';
  const iconRepeat = !repeatVisible ? 'eye-outline' : 'eye-off-outline';

  const changePass = () => {
    if (currentPassword < 6) {
      return setError('Current password must contain 6 or more characters');
    }
    if (newPassword < 6) {
      return setError('New password must contain 6 or more characters');
    }
    if (repeatPassword < 6) {
      return setError('Repeat password must contain 6 or more characters');
    }
    if (newPassword !== repeatPassword) {
      return setError("Password didn't match!");
    }

    const data = new URLSearchParams();
    data.append('oldPass', currentPassword);
    data.append('newPass', newPassword);
    updatePassword(authInfo.userId, data, token);
  };
  const alertWindow = () => {
    const title = 'Submit Profile Changes';
    const message = 'Are you sure you want to submit these changes?';
    const buttons = [
      {
        text: 'No',
        type: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => changePass(),
      },
    ];
    Alert.alert(title, message, buttons);
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
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
                setError(false);
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
                setError(false);
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
                setError(false);
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
        {error && (
          <View style={styles.wrapperError}>
            <Text style={styles.textError}>{error}</Text>
          </View>
        )}
        <View style={styles.buttonArea}>
          <Pressable
            style={styles.changeButtonActive}
            onPress={() => alertWindow()}>
            <Text style={styles.buttonTextActive}>Change Password</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(ChangePassword);
