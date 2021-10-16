import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './Style';
import profilePlaceHolder from '../../assets/img/profile.png';
import SpotifyIcon from '../../assets/img/spotify.png';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => props.navigation.push('Profile')}>
          <Image source={profilePlaceHolder} style={styles.profilePic} />
        </Pressable>
        <View style={styles.headerTextContainer}>
          <Text style={[styles.nunito400, styles.balanceTxt]}>Balance</Text>
          <Text style={[styles.nunito700, styles.balanceAmount]}>
            Rp 120.000
          </Text>
        </View>
        <Pressable>
          <Ionicons name="notifications-outline" size={25} color="white" />
        </Pressable>
      </View>
      <View>
        <View style={styles.topSection}>
          <View style={styles.flexRow}>
            <Pressable
              style={[styles.topButton, styles.flexRow]}
              onPress={() => {
                props.navigation.navigate('FindReceiver');
              }}>
              <Ionicons name="arrow-up" size={28} color="#608DE2" />
              <Text style={[styles.nunito700, styles.topButtonTxt]}>
                Transfer
              </Text>
            </Pressable>
            <Pressable
              style={[styles.topButton, styles.flexRow]}
              onPress={() => {
                props.navigation.navigate('Topup');
              }}>
              <Ionicons name="add" size={36} color="#608DE2" />
              <Text style={[styles.nunito700, styles.topButtonTxt]}>
                Top Up
              </Text>
            </Pressable>
          </View>
          <View style={[styles.flexRow, styles.transactionTitleContainer]}>
            <Text style={[styles.transactionHistoryTxt, styles.nunito700]}>
              Transaction History
            </Text>
            <Pressable>
              <Text style={[styles.seeAllTxt, styles.nunito400]}>
                See details
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.homeCardContainer, styles.flexRow]}>
          <View style={styles.cardPic}>
            <Image source={SpotifyIcon} style={styles.cardPicIcon} />
          </View>
          <View>
            <Text style={[styles.nunito700, styles.cardTitle]}>Spotify</Text>
            <Text>Subscription</Text>
          </View>
          <Text style={[styles.cardNominal, styles.nunito700, styles.redText]}>
            -Rp149000
          </Text>
        </View>
        <View style={[styles.homeCardContainer, styles.flexRow]}>
          <View style={styles.cardPic}>
            <Image source={profilePlaceHolder} style={styles.cardPicImage} />
          </View>
          <View>
            <Text style={[styles.nunito700, styles.cardTitle]}>Bobi Sammy</Text>
            <Text>Transfer</Text>
          </View>
          <Text
            style={[styles.cardNominal, styles.nunito700, styles.greenText]}>
            +Rp1.150.000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
