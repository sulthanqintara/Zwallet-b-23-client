import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FAFCFF'},
  header: {
    height: 156,
    backgroundColor: '#6379F4',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  profilePic: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  headerTextContainer: {
    marginLeft: 20,
    marginRight: 'auto',
  },
  nunito700: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '700',
  },
  nunito400: {fontFamily: 'NunitoSans-Regular'},
  balanceTxt: {
    color: 'white',
  },
  balanceAmount: {
    fontSize: 24,
    color: 'white',
    marginTop: 10,
  },
  topSection: {
    paddingHorizontal: 16,
    paddingVertical: 25,
  },
  flexRow: {flexDirection: 'row'},
  topButton: {
    width: 162,
    height: 57,
    backgroundColor: '#EAEDFF',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButtonTxt: {fontSize: 18, marginLeft: 10},
  transactionTitleContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  transactionHistoryTxt: {
    fontSize: 18,
    marginRight: 'auto',
  },
  seeAllTxt: {
    color: '#6379F4',
  },
  homeCardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 'auto',
    height: 96,
    elevation: 5,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  cardPic: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
    marginRight: 16,
  },
  cardPicIcon: {
    width: 36,
    height: 36,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardNominal: {
    marginLeft: 'auto',
    fontSize: 18,
  },
  redText: {
    color: '#FF5B37',
  },
  greenText: {color: '#1EC15F'},
  cardPicImage: {
    width: 56,
    height: 56,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#DADADA',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    padding: 13,
    bottom: 70,
  },
  wrapperButton: {
    marginTop: 100,
  },
  buttonText: {
    color: '#88888F',
    fontWeight: '600',
    fontSize: 18,
    fontFamily: 'NunitoSans-SemiBold',
  },
});
