import { StyleSheet } from 'react-native';
import palette from './palette';

const formStyles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: palette.primaryBg,
    height: '100%',

  },
  formBox: {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    'justifyContent': 'center',
    backgroundColor: palette.secondaryBg,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,

    shadowOpacity: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, hight: 5 },
    shadowRadius: 5,
    elevation: 10
  },
  input: {
    backgroundColor: '#fff',
    color: '#000',
    width: 250,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 2,
    marginVertical: 10,
    shadowOpacity: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, hight: 5 },
    shadowRadius: 5,
    elevation: 3
  },
  btn: {
    height: 50,
    width: 100,
    backgroundColor: palette.highlightOnSecond,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 20
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20
  },
  headerContainer: {
    backgroundColor: palette.highlightOnSecond,
    paddingBottom: 10,
    shadowOpacity: 0,
    shadowColor: 'blue',
    shadowOffset: { width: 0, hight: 15 },
    shadowRadius: 15,
    elevation: 5
  },
  errorTxt: {
    fontSize: 14,
    color: 'red',
    width: 250
  },
  modalOpenContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  modalOpenTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase'
  },
  modalBtn: {
    backgroundColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowOpacity: 0,
    shadowColor: 'blue',
    shadowOffset: { width: 0, hight: 15 },
    shadowRadius: 15,
    elevation: 5
  },
  modalContainer: {
    backgroundColor: 'blue',
    flex: 1
  }
});

export default formStyles;