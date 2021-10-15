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
  },
  topHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerTitle: {color: 'white', fontSize: 20, marginLeft: 24},
  searchContainer: {
    width: 'auto',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  searchInput: {
    marginLeft: 12,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  contentTitle: {
    fontSize: 18,
    marginLeft: 16,
    marginTop: 30,
  },
  contentSubTitle: {
    marginLeft: 16,
    marginTop: 16,
  },
});
