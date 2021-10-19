import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timestamp: {paddingHorizontal: 16, paddingVertical: 30},
  bottomContainer: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 40,
    backgroundColor: '#FAFCFF',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
  },
  filterText: {
    fontSize: 18,
    color: '#6379F4',
    marginHorizontal: 40,
  },
  modalContainer: {
    paddingTop: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#6379F4',
    borderRadius: 10,
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 30,
    width: '97%',
  },
  dateTitle: {
    marginTop: 10,
    marginBottom: 10,
  },
});
