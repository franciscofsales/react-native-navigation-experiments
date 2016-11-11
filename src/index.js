import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Router from './Router';

import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

export default class App extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          defaultRouteConfig={{
            navigationBar: {
              backgroundColor: '#f44336',
              tintColor: 'white',
              titleStyle:{
                fontSize: 22,
                fontWeight: '600'
              }
            },

          }}
          initialRoute={Router.getRoute('home')}
        />
      </NavigationProvider>
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
});
