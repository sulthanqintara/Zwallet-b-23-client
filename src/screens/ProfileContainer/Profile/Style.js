import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFF',
  },
  content: {
    justifyContent: 'space-evenly',
    height: '100%',
    alignItems: 'center',
    width: '100%',
  },
  profileArea: {
    width: '90%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  editArea: {
    flexDirection: 'row',
    width: '20%',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  nameHeading: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 24,
    color: '#4D4B57',
  },
  textHeading: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  buttonArea: {
    width: '90%',
    alignItems: 'center',
    height: '50%',
    justifyContent: 'space-between',
  },
  profileButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#E5E8ED',
    height: '15%',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: '#4D4B57',
  },
});
