import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    paddingBottom: 40,
  },
  topHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerTitle: {color: 'white', fontSize: 20, marginLeft: 24},
  flexRow: {flexDirection: 'row'},
  bottomHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  balanceHeader: {marginLeft: 15},
  balanceHeaderTitle: {fontSize: 14, color: 'white'},
  balanceHeaderSubTitle: {fontSize: 18, color: 'white', marginTop: 8},
  contentTitle: {marginLeft: 16, marginTop: 40, fontSize: 18, marginBottom: 25},
  barGraph: {justifyContent: 'space-between', paddingHorizontal: 16},
  blueBar: {
    width: 14,
    backgroundColor: '#6379F4',
    borderRadius: 15,
  },
  greyBar: {width: 14, backgroundColor: '#9DA6B5'},
  barContainer: {
    alignItems: 'center',
    height: 250,
    justifyContent: 'flex-end',
  },
  cardContainer: {
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
  cardPicImage: {
    width: 56,
    height: 56,
    borderRadius: 10,
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
  seeAllContainer: {
    marginLeft: 'auto',
    marginRight: 16,
    marginTop: 40,
    marginBottom: 25,
  },
  seeAll: {fontSize: 14, color: '#6379F4'},
});
