import React, { Component } from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import imageBGR from '../images/BGR.png';

export class SplashScreen extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      imageBGR: imageBGR,
    }

  }
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'teal' }];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
      <View style={viewStyles}>
           <Image style={styles.imageView}
            source={this.state.imageBGR}
          />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    imageView: {
      alignItems: 'center',
      width: 430,
      height: 430,
      left: 5,
      top: 10
    }
  });
  