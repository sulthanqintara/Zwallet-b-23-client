import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Switch, Image} from 'react-native';
import profilePlaceHolder from '../../../assets/img/profile.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import {connect, useSelector} from 'react-redux';
import {getUserById} from '../../../utils/https/users';

const Profile = props => {
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  useEffect(() => {
    const params = authInfo.userId;

    const unsubscribe = props.navigation.addListener('focus', () => {
      getUserById(params, token).then(data => {
        console.log('data usernya', data.data.result[0]);
        setFirstName(data.data.result[0].userFirstName);
        setLastName(data.data.result[0].userLastName);
      });
    });
    getUserById(params, token).then(data => {
      console.log('data usernya', data.data.result[0]);
      setFirstName(data.data.result[0].userFirstName);
      setLastName(data.data.result[0].userLastName);
    });
    return unsubscribe;
  }, [authInfo.userId, props.navigation, token]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileArea}>
          <Image source={profilePlaceHolder} style={styles.profilePic} />
          <Pressable style={styles.editArea}>
            <Ionicons name="pencil" size={20} color="#000" />
            <Text style={styles.textHeading}>Edit</Text>
          </Pressable>
          <Text style={styles.nameHeading}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.textHeading}>+62 813-9387-7946</Text>
        </View>
        <View style={styles.buttonArea}>
          <Pressable
            style={styles.profileButton}
            onPress={() => props.navigation.navigate('PersonalInfo')}>
            <Text style={styles.buttonText}>Personal Information</Text>
            <Ionicons name="arrow-forward" size={30} color="#000" />
          </Pressable>
          <Pressable
            style={styles.profileButton}
            onPress={() => props.navigation.navigate('ChangePassword')}>
            <Text style={styles.buttonText}>Change Password</Text>
            <Ionicons name="arrow-forward" size={30} color="#000" />
          </Pressable>
          <Pressable
            style={styles.profileButton}
            onPress={() => props.navigation.navigate('ChangePIN')}>
            <Text style={styles.buttonText}>Change PIN</Text>
            <Ionicons name="arrow-forward" size={30} color="#000" />
          </Pressable>
          <Pressable
            style={styles.profileButton}
            onPress={() => props.navigation.navigate('Notifications')}>
            <Text style={styles.buttonText}>Notification</Text>
            <Switch />
          </Pressable>
          <Pressable style={styles.profileButton}>
            <Text style={styles.buttonText}>Logout</Text>
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

export default connect(mapStateToProps)(Profile);
