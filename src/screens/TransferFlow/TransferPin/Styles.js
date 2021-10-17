import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topHeaderContainer: {
    marginBottom: 5,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  contentTitle: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 40,
    marginBottom: 20,
  },
  contentSubTitle: {
    textAlign: 'center',
    fontSize: 16,
  },
  pinBox: {
    width: 47,
    height: 58,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A9A9A9',
    borderRadius: 10,
    fontSize: 40,
    padding: 0,
    textAlign: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginBottom: 15,
  },
  numPadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    alignItems: 'center',
  },
  numPadNumber: {fontSize: 30, textAlign: 'center'},
  numPadPressable: {flex: 1},
  continueButton: {
    width: 'auto',
    backgroundColor: '#6379F4',
    height: 57,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transferBtnText: {
    color: 'white',
    fontSize: 18,
  },
  transferBtnTextDisabled: {
    color: '#88888F',
    fontSize: 18,
  },
  continueButtonDisabled: {
    width: 'auto',
    backgroundColor: '#DADADA',
    height: 57,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
