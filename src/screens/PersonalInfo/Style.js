import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  passage: {
    height: '20%',
    width: '90%',
  },
  passageText: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: '#7A7886',
  },
  dataArea: {
    width: '90%',
    height: '50%',
  },
  personalData: {
    backgroundColor: '#FFF',
    elevation: 0.5,
    height: '20%',
    marginVertical: 20,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    borderRadius: 10,
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
  phoneData: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    elevation: 0.5,
    height: '20%',
    marginVertical: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  manage: {
    color: '#6379F4',
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 14,
  },
  addPhone: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 22,
    color: '#6379F4',
  },
});
