import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';

import { Feed } from '../pages/Feed';
import { SignIn } from '../pages/SignIn';

const App = createStackNavigator();

function AppRoutes(): ReactElement {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#1D212B' },
      }}
    >
      <App.Screen name="SignIn" component={SignIn} />
      <App.Screen name="Feed" component={Feed} />
    </App.Navigator>
  );
}

export { AppRoutes };
