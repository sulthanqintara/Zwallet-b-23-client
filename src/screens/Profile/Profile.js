import React from 'react';
import {View, Text, Pressable, Switch, Image} from 'react-native';
import styles from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import profilePlaceHolder from '../../assets/img/profile.png';

const Profile = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.profileArea}>
          <Image source={profilePlaceHolder} style={styles.profilePic} />
          <Pressable style={styles.editPicture}>
            <Ionicons name="pencil-outline" size={20} color="#000" />
            <Text style={styles.profileText}>Edit</Text>
          </Pressable>
          <Text style={styles.userName}>Robert Chandler</Text>
          <Text style={styles.profileText}>+62 813-9387-7946</Text>
        </View>
        <View style={styles.profileNav}>
          <Pressable
            style={styles.profileButton}
            onPress={() => props.navigation.navigate('PersonalInfo')}>
            <Text style={styles.buttonText}>Personal Information</Text>
            <Ionicons name="arrow-forward" size={30} color="#7E7D84" />
          </Pressable>
          <Pressable style={styles.profileButton}>
            <Text style={styles.buttonText}>Change Password</Text>
            <Ionicons name="arrow-forward" size={30} color="#7E7D84" />
          </Pressable>
          <Pressable style={styles.profileButton}>
            <Text style={styles.buttonText}>Change PIN</Text>
            <Ionicons name="arrow-forward" size={30} color="#7E7D84" />
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
