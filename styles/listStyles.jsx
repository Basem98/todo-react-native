import { StyleSheet } from "react-native";
import palette from './palette';

const listStyles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: palette.primaryBg,
    height: '100%',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },
  listItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: palette.secondaryBg,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  doneListItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: palette.highlightOnSecond,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  itemText: {
    color: '#000',
    fontWeight: 'bold'
  },
  doneItem: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'line-through'
  },
  addContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: palette.highlightOnSecond,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 30,
    paddingHorizontal: 15,
    paddingVertical: 20,
    shadowOpacity: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, hight: 5 },
    shadowRadius: 25,
    elevation: 20,
    borderRadius: 5
  },
  addBtn: {
    height: 50,
    width: 70,
    backgroundColor: palette.secondaryBg,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 5,
    borderBottomRightRadius: 5,
  },
  btnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20
  },
  itemInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  done: {
    backgroundColor: '#3AAB58',
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, hight: 5 },
    shadowRadius: 25,
    elevation: 20,
    borderRadius: 5
  },
  delete: {
    backgroundColor: '#F32013',
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, hight: 5 },
    shadowRadius: 25,
    elevation: 20,
    borderRadius: 5
  }
});

export default listStyles;