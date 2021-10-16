import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: '100%',
  },
  content: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  profileArea: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  editPicture: {
    flexDirection: 'row',
    width: '15%',
    justifyContent: 'space-between',
  },
  userName: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 24,
    color: '#4D4B57',
  },
  profileText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  profileNav: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
    width: '100%',
    height: '60%',
  },
  profileButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#E5E8ED',
    width: '90%',
    height: '15%',
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: 'NunitoSans-Bold',
    color: '#4D4B57',
    fontSize: 16,
  },
});
