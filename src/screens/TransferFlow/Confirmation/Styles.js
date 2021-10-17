import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flexRow: {flexDirection: 'row'},
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',
  },
  nunito700: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '700',
  },
  nunito400: {fontFamily: 'NunitoSans-Regular'},
  header: {
    backgroundColor: '#6379F4',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
  },
  topHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerTitle: {color: 'white', fontSize: 20, marginLeft: 24},
  contentContainer: {flex: 1, paddingHorizontal: 16},
  topCardContainer: {
    justifyContent: 'space-between',
    marginTop: 30,
  },
  topCard: {
    backgroundColor: 'white',
    height: 87,
    width: 162,
    borderRadius: 10,
    padding: 15,
  },
  topCardTitleTxt: {
    color: '#7A7886',
    fontSize: 16,
  },
  topCardTxt: {fontSize: 18, color: '#514F5B', marginTop: 10},
  bottomCard: {
    width: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 87,
    marginTop: 30,
    padding: 15,
  },
  continueButton: {
    width: 'auto',
    backgroundColor: '#6379F4',
    height: 57,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },
});
