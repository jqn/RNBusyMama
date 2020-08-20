import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const componentName = ({children, style, ...rest}) => (
  <View style={[styles.container, styles.centeredContent]}>
    <ActivityIndicator size="large" color="#000" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAEDED',
    flex: 1,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default componentName;
