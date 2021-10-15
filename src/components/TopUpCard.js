import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopUpCard = ({number, textContent}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.numberStyle, styles.nunito700]}>{number}</Text>
      <Text style={styles.contentText}>{textContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 'auto',
    height: 88,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  numberStyle: {
    color: '#6379F4',
    fontSize: 18,
    marginRight: 25,
  },
  nunito700: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '700',
  },
  contentText: {fontSize: 16, width: 243},
});

export default TopUpCard;
