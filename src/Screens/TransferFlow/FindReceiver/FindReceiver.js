import React from 'react';
import {View, Text, Pressable, TextInput, ScrollView} from 'react-native';
import styles from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ContactCard from '../../../components/ContactCard';
import PhotoPlaceholder from '../../../assets/img/profileplaceholder.png';
import PhotoPlaceholder1 from '../../../assets/img/profileplaceholder1.png';
import PhotoPlaceholder2 from '../../../assets/img/profileplaceholder2.png';

const FindReceiver = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topHeaderContainer}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Ionicons name="arrow-back" color="white" size={28} />
          </Pressable>
          <Text style={[styles.headerTitle, styles.nunito700]}>
            Find Receiver
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <Ionicons name="search" color="#A9A9A9" size={24} />
          <TextInput
            placeholder="Search receiver here"
            style={styles.searchInput}
          />
        </View>
      </View>
      <ScrollView>
        <Text style={[styles.contentTitle, styles.nunito700]}>Contacts</Text>
        <Text style={[styles.contentSubTitle, styles.nunito400]}>
          X Contacts Found
        </Text>
        <View style={styles.contentContainer}>
          <ContactCard
            image={PhotoPlaceholder}
            name="Samuel Suhi"
            phone="+62 813-8492-9994"
            {...props}
          />
          <ContactCard
            image={PhotoPlaceholder1}
            name="Julia Syen"
            phone="+62 812-3942-3656"
            {...props}
          />
          <ContactCard
            image={PhotoPlaceholder2}
            name="Bobi Sammy"
            phone="+62 813-5982-2940"
            {...props}
          />
          <ContactCard
            image={PhotoPlaceholder}
            name="Samuel Suhi"
            phone="+62 813-8492-9994"
            {...props}
          />
          <ContactCard
            image={PhotoPlaceholder1}
            name="Julia Syen"
            phone="+62 812-3942-3656"
            {...props}
          />
          <ContactCard
            image={PhotoPlaceholder2}
            name="Bobi Sammy"
            phone="+62 813-5982-2940"
            {...props}
          />
          <ContactCard
            image={PhotoPlaceholder}
            name="Samuel Suhi"
            phone="+62 813-8492-9994"
            {...props}
          />
          <ContactCard
            image={PhotoPlaceholder1}
            name="Julia Syen"
            phone="+62 812-3942-3656"
            {...props}
          />
          <ContactCard
            image={PhotoPlaceholder2}
            name="Bobi Sammy"
            phone="+62 813-5982-2940"
            {...props}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FindReceiver;
