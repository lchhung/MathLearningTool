import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import { SafeAreaView, StyleSheet, Text, Platform, View, StatusBar, Button, TouchableOpacity } from 'react-native';
import { MultiScreen } from './Multi/MultiScreen';
import { DivScreen } from './Divs/DivScreen';

const isAndroid = Platform.OS === 'android';

class MainLearnScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: 'white' }]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="teal"
        />
        <View>
          <Text style={[styles.paragraph, { color: 'darkblue' }]}>
            Select to learn!
        </Text>
        </View>

        <TouchableOpacity color={isAndroid ? "black" : "#4caf50"} style={styles.buttonView} onPress={() => this.props.navigation.navigate('ScreenMulti')} >
          <Text style={styles.buttonTextSize}>Multiplication tables</Text>
        </TouchableOpacity>
        <TouchableOpacity color={isAndroid ? "black" : "#04444b"} style={styles.buttonView} onPress={() => this.props.navigation.navigate('ScreenDiv')} >
          <Text style={styles.buttonTextSize}>Division tables</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    //flexDirection: 'row',
    //alignItems: 'center',
    //textAlign: 'center',
    margin: 20,
    backgroundColor: '#04444b',
    borderRadius: 20,
    width: '80%',
    height: 70,
    // left: 65,

  },
})

export class LearnAllScreen extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const RootStack = createStackNavigator({
  MainLearnScreen: MainLearnScreen,
  ScreenMulti: MultiScreen,
  ScreenDiv: DivScreen,
}, {
    headerMode: 'none',
  });
const AppContainer = createAppContainer(RootStack);



