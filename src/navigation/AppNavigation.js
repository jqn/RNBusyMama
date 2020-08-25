import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

import {Linking, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TransactionDetailScreen from '../containers/TransactionDetailScreen';
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

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setUser({});
        setIsLoading(false);
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return <Loading />;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }>
      {isLoading ? <Loading /> : user ? <AppTabsScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};
