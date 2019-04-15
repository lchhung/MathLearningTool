import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 140
  },
  textButton: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  styleButton: {
    width: 80,
    alignItems: 'center',
    margin: 3,
    backgroundColor: '#04444b',
    marginTop: 50,
    borderRadius: 30,
    width: 80,
    height: 80,
    textAlign: 'center'
  },
  scoreView: {
    flexDirection: 'row',
    fontSize: 40,
    color: '#04444b',
    fontWeight: 'bold',
    left: 70,
    top: 5,
  },
  testAnswerView: {
    fontSize: 60,
    color: '#04444b',
    fontWeight: 'bold',
    paddingTop: 150,
    textAlign: 'center',
    bottom: 140

  },
  timerTextView: {
    fontSize: 40,
    color: '#04444b',
    fontWeight: 'bold',
    left: 30,
    top: 10
  },
  timerContainerView: {
    top: 10,
    paddingTop: 10,
    left: 5
  },
  imageClockView: {
    width: 50,
    height: 50,
  },
  imageView: {
    alignItems: 'center',
    width: 170,
    height: 180,
    left: 70,
    top: 10
  }
});