/**
 * RNBusyMama
 * https://github.com/facebook/react-native
 */
import React from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store';

if (__DEV__) {
  import('./src/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

import RootContainer from './src/containers/RootContainer';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <RootContainer />
    </Provider>
  );
};

export default App;
