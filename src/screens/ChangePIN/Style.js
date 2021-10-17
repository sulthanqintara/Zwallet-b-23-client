import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
    height: '100%',
  },
  content: {
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  pinArea: {
    marginTop: 100,
    width: '100%',
  },
  passage: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  wrapperInputOtp: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  textInputOtp: {
    borderRadius: 12,
    width: 47,
    height: 58,
    borderColor: 'grey',
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 24,
    fontFamily: 'NunitoSans-Bold',
  },
  buttonArea: {
    height: '20%',
    width: '100%',
  },
  changeButton: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADADA',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
    color: '#88888F',
  },
  changeButtonActive: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6379F4',
    borderRadius: 10,
  },
  buttonTextActive: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
