import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Input, Button} from 'react-native-elements';

export default ({navigation}) => (
  <View style={styles.container}>
    <View style={[styles.section]}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
      </View>
      <View style={styles.form}>
        <Input
          placeholder="email@address.com"
          leftIcon={{type: 'font-awesome', name: 'envelope'}}
          inputStyle={styles.userNameText}
        />
        <Input
          placeholder="Password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
          inputStyle={styles.passwordText}
        />
        <View style={styles.groupedContent}>
          <Button
            title="Sign In"
            onPress={() => navigation.push('SignUp')}
            raised
            containerStyle={styles.button}
          />
        </View>
      </View>
      <View style={styles.groupedContent}>
        <Text style={[styles.bodyText, styles.centeredText]}>
          Don't have an account?
        </Text>
        <Button
          title="Sign Up"
          onPress={() => navigation.push('SignUp')}
          type="clear"
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    flex: 1,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupedContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  form: {
    paddingVertical: 16,
  },
  button: {
    width: '100%',
  },
  header: {
    padding: 8,
  },
  footer: {
    backgroundColor: 'grey',
  },
  userNameText: {paddingLeft: 4},
  passwordText: {paddingLeft: 14},
  centeredText: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 34,
  },
  bodyText: {
    fontSize: 16,
  },
});
