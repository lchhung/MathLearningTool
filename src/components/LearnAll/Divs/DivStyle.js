import { StyleSheet } from 'react-native';

// This is layout formart for division tables
export const styles = StyleSheet.create({
  topTextContainer: {
    alignItems: 'center',
    textAlign: 'center',
    // borderWidth:5,
    width: '80%',
    height: '8%',
    top: 85,
    // borderColor:'grey',
    // borderRadius: 15,
    left: 50,
  },
  topTextSize: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#04444b',
  },
  tableArrayTextView: {
    fontSize: 28,
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
    top: 85,
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
    bottom: 160,
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
    width: 80,
    height: 60,
    // left: 65,
  },
  buttonTextSize: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    padding: 20
  },
  buttonViewContainer: {
    alignItems: 'center',
    borderWidth: 3,
    width: '90%',
    height: '36%',
    bottom: 150,
    borderColor: 'grey',
    borderRadius: 15,
    left: 20
  },
});