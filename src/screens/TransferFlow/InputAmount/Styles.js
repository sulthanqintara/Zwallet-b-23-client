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
  contentContainer: {flex: 1, paddingHorizontal: 16},
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
  nominalInput: {fontSize: 42, marginVertical: 20, width: 'auto'},
  amountAvailable: {
    textAlign: 'center',
    color: '#7C7895',
    fontSize: 16,
  },
  notesContainer: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#A9A9A9',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  notesInput: {
    flex: 1,
    color: 'green',
  },
});
