/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const SplashScreen = ({navigation}) => {
  const auth = useSelector(reduxState => reduxState.auth);
  console.log(auth);
  useEffect(() => {
    auth.token !== ''
      ? setTimeout(() => {
          navigation.replace('Home');
        }, 500)
      : setTimeout(() => {
          navigation.replace('Login');
        }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zwallet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6379F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'NunitoSans-Bold',
  },
});

export default SplashScreen;
