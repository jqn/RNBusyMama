import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingsScreen from '../containers/SettingsScreen';
import SignInScreen from '../containers/SignInScreen';
import SignUpScreen from '../containers/SignUpScreen';
import HomeScreen from '../containers/HomeScreen';
import Loading from '../containers/Loading';

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: (props) => (
          <Ionicons name="ios-list" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: (props) => (
          <Ionicons name="ios-cog" size={props.size} color={props.color} />
        ),
      }}
    />
  </AppTabs.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser({});
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : user ? <AppTabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
