import React from 'react';
import {View, Text, Pressable, Switch, Image} from 'react-native';
import profilePlaceHolder from '../../assets/img/profile.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Style';

const Profile = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileArea}>
          <Image source={profilePlaceHolder} style={styles.profilePic} />
          <Pressable style={styles.editArea}>
            <Ionicons name="pencil" size={20} color="#000" />
            <Text style={styles.textHeading}>Edit</Text>
          </Pressable>
          <Text style={styles.nameHeading}>Robert Chandler</Text>
          <Text style={styles.textHeading}>+62 813-9387-7946</Text>
        </View>
        <View style={styles.buttonArea}>
          <Pressable
            style={styles.profileButton}
            onPress={() => props.navigation.navigate('PersonalInfo')}>
            <Text style={styles.buttonText}>Personal Information</Text>
            <Ionicons name="arrow-forward" size={30} color="#000" />
          </Pressable>
          <Pressable style={styles.profileButton}>
            <Text style={styles.buttonText}>Change Password</Text>
            <Ionicons name="arrow-forward" size={30} color="#000" />
          </Pressable>
          <Pressable style={styles.profileButton}>
            <Text style={styles.buttonText}>Change PIN</Text>
            <Ionicons name="arrow-forward" size={30} color="#000" />
          </Pressable>
          <Pressable style={styles.profileButton}>
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

export default Profile;
