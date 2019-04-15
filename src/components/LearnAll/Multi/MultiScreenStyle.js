import { StyleSheet } from 'react-native';

// This is layout formart for multiplication
export const styles = StyleSheet.create({
  topTextContainer: {
    alignItems: 'center',
    textAlign: 'center',
    // borderWidth:5,
    width: '90%',
    height: '8%',
    top: 100,
    // borderColor:'grey',
    // borderRadius: 15,
    left: 20,
  },
  topTextSize: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#04444b',
  },
  tableArrayTextView: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#04444b',
    textAlign: 'center',
    margin: 1,
    top: 5
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  arrResultViewFirst: {
    //flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 3,
    width: '47%',
    left: 15,
    top: 105,
    borderColor: 'grey',
    borderRadius: 15
  },
  arrResultViewSecond: {
    //flex:2,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 3,
    width: '47%',
    left: 203,
    bottom: 145,
    borderColor: 'grey',
    borderRadius: 15
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    margin: 5,
    backgroundColor: '#04444b',
    borderRadius: 20,
    width: 70,
    height: 70,
    // left: 65,

  },
  buttonTextSize: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    padding: 20
  },
  buttonViewContainer: {
    alignItems: 'center',
    borderWidth: 3,
    width: '80%',
    height: '28%',
    bottom: 130,
    borderColor: 'grey',
    borderRadius: 15,
    left: 40
  },
});