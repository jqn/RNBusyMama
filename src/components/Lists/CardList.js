import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {ListItem} from 'react-native-elements';
import moment from 'moment';

import {ProfileHeader} from '../Headers';

const list = [
  {
    title: 'Whole Foods',
    amount: '$ 0.70',
    subtitle: moment().format('MM/DD/YYYY h:mm:ss a'),
  },
  {
    title: 'Natural Grocers',
    amount: '$ 157.00',
    subtitle: moment().format('MM/DD/YYYY h:mm:ss a'),
  },
  {
    title: 'King Soopers',
    amount: '$ 1030.00',
    subtitle: moment().format('MM/DD/YYYY h:mm:ss a'),
  },
  {
    title: "Trader Joe's",
    amount: '$ 223.00',
    subtitle: moment().format('MM/DD/YYYY h:mm:ss a'),
  },
  {
    title: 'Chipotle',
    amount: '$ 5.00',
    subtitle: moment().format('MM/DD/YYYY h:mm:ss a'),
  },
];

const Amount = ({text}) => {
  return (
    <View style={styles.amountContainer}>
      <Text style={styles.callout} ellipsizeMode="tail" numberOfLines={1}>
        {text}
      </Text>
    </View>
  );
};

const Item = ({title, subtitle, amount}) => {
  return (
    <ListItem
      title={title}
      titleStyle={styles.headline}
      subtitle={subtitle}
      subtitleStyle={styles.subtitle}
      containerStyle={styles.item}
      chevron
      leftElement={<Amount text={amount} />}
    />
  );
};

const CardList = ({params}) => (
  <View style={styles.container}>
    <FlatList
      data={list}
      renderItem={({item}) => (
        <Item
          title={item.title}
          subtitle={item.subtitle}
          amount={item.amount}
        />
      )}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => <ProfileHeader />}
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
    marginVertical: 4,
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

export default CardList;
