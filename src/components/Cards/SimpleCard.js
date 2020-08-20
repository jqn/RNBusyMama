import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

const SimpleCard = ({style}) => (
  <View style={[styles.container, style]}>
    <View style={styles.row}>
      <Text style={styles.callout}>Total balance</Text>
      <Entypo name="dots-two-horizontal" size={35} />
    </View>
    <Text style={styles.largeTitle}>$ 580.920</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  callout: {
    fontFamily: 'System',
    fontSize: 16,
    alignSelf: 'center',
    color: '#808B96',
    lineHeight: 21,
  },
  largeTitle: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 41,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SimpleCard;
