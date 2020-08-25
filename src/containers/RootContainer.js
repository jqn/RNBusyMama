import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {getStorybookUI, configure} from '@storybook/react-native';

import Navigation from '../navigation/AppNavigation';

const RootContainer = () => (
  <View style={styles.container}>
    <Navigation />
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#EAEDED'},
});

/**
 * Setup Storybook. It would probably be a fantastic idea to not do this when not in dev.
 * That is an exercise for the consumer though
 */
configure(() => {
  require('../components/stories');
}, module);

const StorybookUIRoot = getStorybookUI({port: 7007, onDeviceUI: true});

class StorybookUIHMRRoot extends Component {
  render() {
    return <StorybookUIRoot />;
  }
}

export default console.tron.storybookSwitcher(StorybookUIHMRRoot)(
  RootContainer,
);
