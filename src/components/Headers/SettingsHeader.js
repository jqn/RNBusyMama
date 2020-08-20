import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import PropTypes from 'prop-types';

import {images} from '../../themes';

const height = Dimensions.get('window').height;

const SettingsHeader = ({title, profileHeight, dividerHeight}) => (
  <View style={[styles.container, {height: profileHeight}]}>
    <View style={[styles.content, styles.row]}>
      <Image style={styles.avatar} source={images.avatar} resizeMode="cover" />
      <Text style={[styles.largeTitle, styles.lightText]}>{title}</Text>
    </View>
    <View style={[styles.divider, {flex: dividerHeight}]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ABB2B9',
    marginBottom: 16,
  },
  content: {
    flex: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    backgroundColor: '#FFF',
  },
  row: {
    flexDirection: 'row',
  },
  largeTitle: {
    fontSize: 34,
    fontFamily: 'System',
    fontWeight: 'bold',
    lineHeight: 41,
  },
  lightText: {
    color: '#FFF',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFF',
    marginRight: 16,
  },
});

SettingsHeader.defaultProps = {
  title: 'Anna Leonardo',
  avatar: '',
  profileHeight: height / 2.3,
  dividerHeight: 0.05,
};

SettingsHeader.propTypes = {
  title: PropTypes.string,
  profileHeight: PropTypes.number,
  dividerHeight: PropTypes.number,
};

export default SettingsHeader;
