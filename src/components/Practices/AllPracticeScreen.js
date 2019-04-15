import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Alert, StyleSheet, Text, Platform, View, StatusBar, Button, TouchableOpacity } from 'react-native';
import { MultiTestScreen } from './MultiTest/MultiTestScreen';
import { DivTestScreen } from './DivTest/DivTestScreen';
import { AddMainTestScreen } from './AddTest/AddMainTestScreen';
import { SubtractMainTestScreen } from './SubtractTest/SubtractMainTestScreen';


const isAndroid = Platform.OS === 'android';

class MainPracticeScreen extends React.Component {
  render() {
    return (
      <View style={[styles.container, { backgroundColor: 'white' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="teal"
        />
        <View>
          <Text style={[styles.paragraph, { color: 'darkblue' }]}>
            Select to practice
        </Text>
        </View>
        <TouchableOpacity color={isAndroid ? "blue" : "#04444b"} style={styles.buttonView} onPress={() => this.props.navigation.navigate('AddTestScreen')} >
          <Text style={styles.buttonTextSize}>Adding practice</Text>
        </TouchableOpacity>
        <TouchableOpacity color={isAndroid ? "blue" : "#04444b"} style={styles.buttonView} onPress={() => this.props.navigation.navigate('SubtractMainTestScreen')} >
          <Text style={styles.buttonTextSize}>Subtracting practice</Text>
        </TouchableOpacity>
        <TouchableOpacity color={isAndroid ? "blue" : "#04444b"} style={styles.buttonView} onPress={() => this.props.navigation.navigate('MultiTestScreen')} >
          <Text style={styles.buttonTextSize}>Multiplying practice</Text>
        </TouchableOpacity>
        <TouchableOpacity color={isAndroid ? "blue" : "#04444b"}
          style={styles.buttonView}
          onPress={() => this.props.navigation.navigate('DivTestScreen')} >
          <Text style={styles.buttonTextSize}>Dividing practice</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 50
  },

  paragraph: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonTextSize: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 12,
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonView: {
    margin: 15,
    backgroundColor: '#04444b',
    borderRadius: 20,
    width: '80%',
    height: 70,
    // left: 65,

  },
})

export class AllPracticeScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const RootStack = createStackNavigator({
  MainPracticeScreen: MainPracticeScreen,
  AddTestScreen: AddMainTestScreen,
  //SubtractMainTestScreen:SubtractTestScreen,
  SubtractMainTestScreen: SubtractMainTestScreen,
  MultiTestScreen: MultiTestScreen,
  DivTestScreen: DivTestScreen,
}, {
    headerMode: 'none',
  });
const AppContainer = createAppContainer(RootStack);



