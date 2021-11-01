import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Pressable,
  Switch,
  Image,
  PermissionsAndroid,
  Alert,
  Platform,
} from 'react-native';
import profilePlaceHolder from '../../../assets/img/user.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';
import {connect, useSelector} from 'react-redux';
import {getUserById} from '../../../utils/https/users';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {API_URL} from '@env';
import socket from '../../../utils/socket/SocketIo';
import {
  logoutAction,
  updateUserAction,
} from '../../../redux/actionCreators/auth';

const Profile = props => {
  const authInfo = useSelector(reduxState => reduxState.auth.authInfo);
  const token = useSelector(reduxState => reduxState.auth.token);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState(profilePlaceHolder);
  const [upload, setUpload] = useState();

  let initValue = useRef(true);

  useEffect(() => {
    if (initValue.current) {
      initValue.current = false;
    } else {
      const params = authInfo.userId;
      console.log('does this rerender?', params);
      const unsubscribe = props.navigation.addListener('focus', () => {
        getUserById(params, token).then(data => {
          console.log('data usernya', data.data.result[0]);
          setFirstName(data.data.result[0].userFirstName);
          setLastName(data.data.result[0].userLastName);
          setPhone(data.data.result[0].userPhone);
          setImage(data.data.result[0].userImage);
        });
      });
      return unsubscribe;
    }
  }, [authInfo.userId, props.navigation, token]);

  useEffect(() => {
    const params = authInfo.userId;
    getUserById(params, token)
      .then(data => {
        console.log('data usernya', data.data.result[0]);
        setFirstName(data.data.result[0].userFirstName);
        setLastName(data.data.result[0].userLastName);
        setPhone(data.data.result[0].userPhone);
      })
      .catch(error => {
        const newErr = String(error);
        if (newErr.includes('403') === true) {
          return logoutHandler();
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        onPress: () => onSubmit(),
      },
    ];
    Alert.alert(title, message, buttons);
  };

  const onSubmit = () => {
    const id = authInfo.userId;
    const data = new FormData();
    upload !== '' &&
      data.append('image', {
        name: upload.fileName,
        type: upload.type,
        uri:
          Platform.OS === 'android'
            ? upload.uri
            : upload.uri.replace('file://', ''),
      });
    props.onUpdate(id, data, token);
  };
  const handleChoosePhoto = () => {
    const options = {};
    launchImageLibrary(options, res => {
      console.log('response', res);
      if (res.didCancel) {
        console.log('User canceled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        setImage(res.assets[0].uri);
        setUpload(res.assets[0]);
      }
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
      if (res.didCancel) {
        console.log('User canceled image picker.');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else {
        setImage(res.assets[0]);
        setUpload(res.assets[0]);
      }
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

  const logoutHandler = () => {
    socket.off(`transaction_${authInfo.userId}`);
    props.onLogout(token, props.navigation.replace('Login'));
  };

  const alertWindowLogout = () => {
    const title = 'Confirm logout';
    const message = 'Are you sure you want to logout?';
    const buttons = [
      {
        text: 'No',
        type: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => logoutHandler(),
      },
    ];
    Alert.alert(title, message, buttons);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileArea}>
          <Image
            source={
              authInfo.profilePic ? {uri: API_URL + authInfo.profilePic} : image
            }
            style={styles.profilePic}
          />
          <Pressable style={styles.editArea} onPress={() => picturePrompt()}>
            <Ionicons name="pencil" size={20} color="#000" />
            <Text style={styles.textHeading}>Edit</Text>
          </Pressable>
          <Pressable onPress={() => alertWindow()} style={styles.submitPic}>
            <Text style={styles.picText}>Submit</Text>
          </Pressable>
          <Text style={styles.nameHeading}>
            {firstName && lastName
              ? `${firstName} ${lastName}`
              : `${authInfo.username}`}
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
          <Pressable
            style={styles.profileButton}
            onPress={() => alertWindowLogout()}>
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

const mapDispatchToProps = dispatch => {
  return {
    onUpdate: (id, body, token) => {
      dispatch(updateUserAction(id, body, token));
    },
    onLogout: token => {
      dispatch(logoutAction(token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
