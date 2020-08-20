import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SimpleList} from '../components/Lists';

const SettingsScreen = ({params}) => (
  <View style={styles.container}>
    <SimpleList />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
  },
});

export default SettingsScreen;
