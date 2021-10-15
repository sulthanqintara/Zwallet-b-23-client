import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  nunito700: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '700',
  },
  nunito400: {fontFamily: 'NunitoSans-Regular'},
  container: {flex: 1, backgroundColor: '#FAFCFF'},
  header: {
    backgroundColor: '#6379F4',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  flexRow: {flexDirection: 'row'},
  alignItemsCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    marginLeft: 24,
  },
  topHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  bottomHeaderContainer: {
    width: 'auto',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 20,
    flexDirection: 'row',
  },
  headerButton: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
    marginRight: 15,
  },
  plusText: {
    fontSize: 40,
    color: '#6379F4',
  },
  accountNumber: {
    fontSize: 16,
    marginTop: 10,
  },
  contentContainer: {
    padding: 16,
    paddingTop: 30,
    flex: 1,
  },
  contentTitle: {
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .25)',
  },
  modalView: {
    backgroundColor: '#FAFCFF',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  modalTitle: {fontSize: 18},
  modalNominal: {
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'grey',
  },
  modalInput: {
    padding: 5,
    letterSpacing: 3,
    backgroundColor: 'rgba(99, 121, 244, 0.5)',
    flex: 1,
    color: 'black',
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '700',
  },
  modalNominalText: {fontSize: 24, marginLeft: 10},
  modalButtonContainer: {justifyContent: 'space-around', marginTop: 10},
  modalOkButton: {
    backgroundColor: '#1EC15F',
  },
  modalCancelButton: {
    backgroundColor: '#FF5B37',
  },
  modalButton: {padding: 10, borderRadius: 5, width: 100, alignItems: 'center'},
  modalTextStyle: {color: 'white'},
  textCenter: {textAlign: 'center'},
});
