import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect, useSelector} from 'react-redux';
import {updateUserAction} from '../../../redux/actionCreators/auth';

const AddPhoneNumber = props => {
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);
  const [phone, setPhone] = useState();
  const [error, setError] = useState(false);

  const submitChanges = () => {
    const userId = authInfo.userId;
    const phoneNumber = '0'.concat(phone);
    if (phoneNumber.length < 11) {
      return setError('Phone number must be 12 digits!');
    }
    const queries = new URLSearchParams();
    queries.append('phone', phoneNumber);
    props.onUpdate(userId, queries, token);
    props.navigation.pop(1);
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
        onPress: () => submitChanges(),
      },
    ];
    Alert.alert(title, message, buttons);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.phoneArea}>
          <Text style={styles.passage}>
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </Text>
          <View style={styles.phoneContainer}>
            <Ionicons name="call-outline" size={20} color="#000" />
            <Text>+62</Text>
            <TextInput
              placeholder="Enter your phone number"
              keyboardType="number-pad"
              maxLength={11}
              style={styles.textInput}
              onChangeText={e => setPhone(e)}
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
            <Text style={styles.buttonTextActive}>Add Phone Number</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = ({auth}) => {
  return {
    auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: (id, body, token) => {
      dispatch(updateUserAction(id, body, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoneNumber);
