import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Switch,
  Image,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import profilePlaceHolder from '../../../assets/img/profile.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import {connect, useSelector} from 'react-redux';
import {getUserById} from '../../../utils/https/users';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profile = props => {
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    const params = authInfo.userId;

    const unsubscribe = props.navigation.addListener('focus', () => {
      getUserById(params, token).then(data => {
        console.log('data usernya', data.data.result[0]);
        setFirstName(data.data.result[0].userFirstName);
        setLastName(data.data.result[0].userLastName);
        setPhone(data.data.result[0].userPhone);
      });
    });
    getUserById(params, token).then(data => {
      console.log('data usernya', data.data.result[0]);
      setFirstName(data.data.result[0].userFirstName);
      setLastName(data.data.result[0].userLastName);
      setPhone(data.data.result[0].userPhone);
    });
    return unsubscribe;
  }, [authInfo.userId, props.navigation, token]);

  const handleChoosePhoto = () => {
    const options = {};
    launchImageLibrary(options, res => {
      console.log('response', res);
      setImage(res.assets[0].uri);
    });
  };
  const handleCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      console.log('response', res);
    });
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const picturePrompt = () => {
    const title = 'Upload Profile Picture';
    const message = 'Choose the upload method you want.';
    const buttons = [
      {
        text: 'No',
        type: 'cancel',
      },
      {
        text: 'Camera',
        onPress: () => requestCameraPermission(),
      },
      {
        text: 'Library',
        onPress: () => handleChoosePhoto(),
      },
    ];
    Alert.alert(title, message, buttons);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileArea}>
          <Image
            source={image ? {uri: image} : profilePlaceHolder}
            style={styles.profilePic}
          />
          <Pressable style={styles.editArea} onPress={() => picturePrompt()}>
            <Ionicons name="pencil" size={20} color="#000" />
            <Text style={styles.textHeading}>Edit</Text>
          </Pressable>
          <Text style={styles.nameHeading}>
            {firstName && lastName
              ? `${firstName} ${lastName}`
              : `${authInfo.userUsername}`}
          </Text>
          <Text style={styles.textHeading}>
            {phone ? phone : 'No number yet'}
          </Text>
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
