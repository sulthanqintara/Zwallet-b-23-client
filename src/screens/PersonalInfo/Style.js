import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
    height: '100%',
  },
  content: {
    justifyContent: 'space-evenly',
    height: '100%',
    marginHorizontal: 10,
  },
  passage: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  buttons: {
    height: '50%',
    justifyContent: 'space-evenly',
  },
  personalInfoBox: {
    elevation: 0.4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: '25%',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  phoneBox: {
    elevation: 0.4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: '25%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxHeading: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  boxContent: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 22,
    color: '#514F5B',
  },
  manage: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 14,
    color: '#6379F4',
  },
});
