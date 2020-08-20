import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {CheckBox, ListItem} from 'react-native-elements';

import {SettingsHeader} from '../Headers';

const list = [
  {
    title: 'Username',
    icon: 'email',
    type: 'entypo',
  },
  {
    title: 'Phone',
    icon: 'smartphone',
    type: 'material',
  },
  {
    title: 'Notifications',
    icon: 'notifications',
    type: 'material',
  },
  {
    title: 'Privacy',
    icon: 'lock',
    type: 'material',
  },
  {
    title: 'Dark Mode',
    icon: 'md-moon',
    type: 'ionicon',
  },
  {
    title: 'Help',
    icon: 'md-help',
    type: 'ionicon',
  },
];

const Item = ({title, subtitle, icon, iconType}) => {
  return (
    <ListItem
      title={title}
      titleStyle={styles.headline}
      containerStyle={styles.item}
      chevron
      leftIcon={{name: icon, type: iconType}}
      bottomDivider
    />
  );
};

const SimpleList = ({params}) => (
  <View style={styles.container}>
    <FlatList
      data={list}
      renderItem={({item}) => (
        <Item
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          iconType={item.type}
        />
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <SettingsHeader />}
      stickyHeaderIndices={[0]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  amountContainer: {width: 78, alignContent: 'flex-start'},
  item: {
    backgroundColor: '#FFF',
    padding: 16,
    marginHorizontal: 16,
  },
  headline: {
    fontFamily: 'System',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  callout: {
    fontFamily: 'System',
    fontSize: 16,
    color: '#808B96',
    fontWeight: '500',
  },
  subtitle: {
    fontFamily: 'System',
    fontSize: 16,
    lineHeight: 22,
    color: '#ABB2B9',
    fontWeight: '400',
  },
});

export default SimpleList;
