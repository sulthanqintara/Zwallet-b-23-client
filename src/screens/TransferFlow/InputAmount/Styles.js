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

  nominalInput: {
    fontSize: 42,
    marginTop: 20,
    width: 'auto',
    color: '#6379F4',
    padding: 0,
  },
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
    marginLeft: 10,
  },
  continueButton: {
    width: 'auto',
    backgroundColor: '#6379F4',
    height: 57,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 75,
    justifyContent: 'center',
  },
  continueText: {
    fontSize: 18,
    color: 'white',
  },
  errorMessage: {
    textAlign: 'center',
    color: 'red',
    marginVertical: 10,
  },
});
