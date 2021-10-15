import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

const ContactCard = props => {
  const {image, name, phone} = props;
  const data = {image, name, phone};
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        props.navigation.navigate('InputAmount', data);
      }}>
      <Image source={image} style={styles.profilePicture} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phoneNumber}>{phone}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 'auto',
    borderRadius: 10,
    padding: 16,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 56,
    height: 56,
    borderRadius: 10,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'NunitoSans-Bold',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 14,
    fontFamily: 'NunitoSans-Regular',
  },
});

export default ContactCard;
