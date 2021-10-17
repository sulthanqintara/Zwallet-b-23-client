import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '90%',
  },
  phoneArea: {
    marginTop: 100,
    width: '100%',
  },
  passage: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
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
  boxArea: {
    marginTop: 30,
    backgroundColor: '#FFF',
    elevation: 0.4,
    borderRadius: 10,
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  numberArea: {
    justifyContent: 'space-evenly',
    height: '100%',
  },
  numberHeading: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  numberContent: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 22,
    color: '#514F5B',
  },
});
