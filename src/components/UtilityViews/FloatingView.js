import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

const FloatingView = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    padding: 16,
    zIndex: 100,
    width: '100%',
  },
});

FloatingView.defaultProps = {
  children: null,
};

FloatingView.propTypes = {
  children: PropTypes.node,
};

export default FloatingView;
