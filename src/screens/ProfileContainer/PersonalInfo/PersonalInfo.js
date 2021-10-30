import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, TextInput, Alert} from 'react-native';
import styles from './Style';
import {connect, useSelector} from 'react-redux';
import {getUserById} from '../../../utils/https/users';
import {updateUserAction} from '../../../redux/actionCreators/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const PersonalInfo = props => {
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const submitChanges = () => {
    const queries = new FormData();
    const userId = authInfo.userId;
    queries.append('first_name', firstName);
    queries.append('last_name', lastName);
    props.onUpdate(userId, queries, token);
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

  useEffect(() => {
    const params = authInfo.userId;

    const unsubscribe = props.navigation.addListener('focus', () => {
      getUserById(params, token).then(data => {
        console.log('data usernya', data.data.result[0]);
        setFirstName(data.data.result[0].userFirstName);
        setLastName(data.data.result[0].userLastName);
        setEmail(data.data.result[0].userEmail);
        setPhone(data.data.result[0].userPhone);
      });
    });
    getUserById(params, token).then(data => {
      console.log('data usernya', data.data.result[0]);
      setFirstName(data.data.result[0].userFirstName);
      setLastName(data.data.result[0].userLastName);
      setEmail(data.data.result[0].userEmail);
      setPhone(data.data.result[0].userPhone);
    });
    return unsubscribe;
  }, [authInfo.userId, props.navigation, token]);
  return (
    <KeyboardAwareScrollView style={styles.container}>
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
            <TextInput
              style={styles.boxContent}
              defaultValue={firstName}
              onChangeText={e => setFirstName(e)}
            />
          </View>
          <View style={styles.personalData}>
            <Text style={styles.boxHeading}>Last Name</Text>
            <TextInput
              style={styles.boxContent}
              defaultValue={lastName}
              onChangeText={e => setLastName(e)}
            />
          </View>
          <View style={styles.personalData}>
            <Text style={styles.boxHeading}>Verified E-mail</Text>
            <Text style={styles.boxContent}>{email}</Text>
          </View>
          {phone === undefined || phone === '0' || phone === '' ? (
            <View style={styles.personalData}>
              <Text style={styles.boxHeading}>Phone Number</Text>
              <Pressable
                onPress={() => props.navigation.navigate('AddPhoneNumber')}>
                <Text style={styles.addPhone}>Add Phone Number</Text>
              </Pressable>
            </View>
          ) : (
            <View style={styles.phoneData}>
              <View>
                <Text style={styles.boxHeading}>Phone Number</Text>
                <Text style={styles.boxContent}>{phone}</Text>
              </View>
              <Pressable
                onPress={() => props.navigation.navigate('ManagePhoneNumber')}>
                <Text style={styles.manage}>Manage</Text>
              </Pressable>
            </View>
          )}
          <Pressable style={styles.submitButton} onPress={alertWindow}>
            <Text style={styles.buttonText}>Submit Changes</Text>
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

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: (id, body, token) => {
      dispatch(updateUserAction(id, body, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);
