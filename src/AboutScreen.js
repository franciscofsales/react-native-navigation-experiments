/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class AboutScreen extends Component {
  static route = {
    navigationBar: {
      title: 'About',
    }
  }
  _goBackHome = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Im the AboutScreen component</Text>
        <Text onPress={this._goBackHome}>
          Go back home
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
