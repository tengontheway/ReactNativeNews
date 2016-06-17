/**
 * React Native News App
 * https://github.com/tengontheway/ReactNativeNews
 * @Evil.T
 */
'use strict';

import React, { Component } from 'react';
import TabBarView from './app/view/TabBar.js';

import {
  AppRegistry,
  StyleSheet,
} from 'react-native';


class ReactNativeNews extends Component {
  render() {
    return (
      <TabBarView style={styles.container}>
      </TabBarView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ReactNativeNews', () => ReactNativeNews);
