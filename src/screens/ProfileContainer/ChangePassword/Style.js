import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    height: '100%',
  },
  content: {
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 10,
  },
  passArea: {
    marginTop: 100,
    height: 300,
    width: '100%',
    justifyContent: 'space-around',
  },
  passage: {
    marginTop: 100,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
    height: 100,
    marginBottom: 30,
  },
  passContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    // marginVertical: 100,
    marginTop: 100,
    marginBottom: 50,
    height: 70,
  },
  textInput: {
    borderBottomColor: '#A9A9A9',
    alignSelf: 'stretch',
    flex: 1,
  },
  buttonArea: {
    marginTop: 100,
    height: 150,
    width: '100%',
  },
  changeButton: {
    width: '100%',
    height: '100%',
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
  wrapperError: {
    alignItems: 'center',
    marginTop: 50,
    height: 20,
  },
  textError: {
    color: '#FF5B37',
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
  },
});
