import { NavigationContainer } from '@react-navigation/native';
import { createServer } from 'miragejs';
import React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './src/routes/app.routes';
import theme from './src/themes';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/session', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date(),
        },
      ];
    });
  },
});

export default function App() {
  const { background } = theme.colors;
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: background }}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </View>
    </NavigationContainer>
  );
}
