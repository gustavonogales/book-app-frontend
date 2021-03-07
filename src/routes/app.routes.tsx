import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../pages/SignIn';
import { Feed } from '../pages/Feed';

const App = createStackNavigator();

function AppRoutes(): ReactElement {
  return (
    <App.Navigator>
      <App.Screen name="SignIn" component={SignIn} />
      <App.Screen name="Feed" component={Feed} />
    </App.Navigator>
  );
}

export { AppRoutes };