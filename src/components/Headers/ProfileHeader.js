import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import PropTypes from 'prop-types';

const height = Dimensions.get('window').height;

const ProfileHeader = ({title, profileHeight, dividerHeight}) => (
  <View style={[styles.container, {height: profileHeight}]}>
    <View style={[styles.content, styles.row]}>
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
    flex: 0.85,
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
});

ProfileHeader.defaultProps = {
  title: 'Anna Leonardo',
  avatar: '',
  profileHeight: height / 2.3,
  dividerHeight: 0.15,
};

ProfileHeader.propTypes = {
  title: PropTypes.string,
  profileHeight: PropTypes.number,
  dividerHeight: PropTypes.number,
};

export default ProfileHeader;
