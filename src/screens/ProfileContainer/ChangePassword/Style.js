import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    marginHorizontal: 10,
  },
  passage: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  passArea: {
    marginTop: 50,
    height: '50%',
    width: '100%',
    justifyContent: 'space-around',
  },
  passContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: '100%',
    paddingHorizontal: 10,
  },
  textInput: {
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    width: '100%',
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
