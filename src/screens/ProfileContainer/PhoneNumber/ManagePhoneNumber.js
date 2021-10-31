import React from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect, useSelector} from 'react-redux';
import {updateUserAction} from '../../../redux/actionCreators/auth';

const ManagePhoneNumber = props => {
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);

  const submitChanges = () => {
    const queries = new URLSearchParams();
    const userId = authInfo.userId;
    queries.append('phone', '');
    props.onUpdate(userId, queries, token);
    props.navigation.pop(1);
  };

  const alertWindow = () => {
    const title = 'Delete Phone Number';
    const message = 'Are you sure you want to delete your phone number?';
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
            You can only delete the phone number and then you must add another
            phone number.
          </Text>
          <View style={styles.boxArea}>
            <View style={styles.numberArea}>
              <Text style={styles.numberHeading}>Primary</Text>
              <Text style={styles.numberContent}>{authInfo.userPhone}</Text>
            </View>
            <Ionicons
              name="trash-outline"
              size={30}
              color="#000"
              onPress={() => alertWindow()}
            />
          </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagePhoneNumber);
