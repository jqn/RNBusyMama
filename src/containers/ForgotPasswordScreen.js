import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Input, Button} from 'react-native-elements';

const ForgotPasswordScreen = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.bodyText}>
          Fill the details & create your account
        </Text>
      </View>
      <View style={styles.form}>
        <Input
          placeholder="Your Email Address"
          leftIcon={{type: 'font-awesome', name: 'envelope'}}
        />
        <Input
          placeholder="Full Name"
          leftIcon={{type: 'font-awesome', name: 'user'}}
        />
        <Input
          placeholder="Password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
        />
        <Button
          title="Submit"
          onPress={() => navigation.push('SignUp')}
          raised
          type="outline"
          containerStyle={styles.button}
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

export default ForgotPasswordScreen;
