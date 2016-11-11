/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Router from './Router';

export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Home',
    }
  }

  _goToAbout = () => {
    this.props.navigator.push(Router.getRoute('about'));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Im the HomeScreen component</Text>
        <TouchableOpacity onPress={this._goToAbout}>
          <Text>
            Push about route
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
