import { NavigationContainer } from '@react-navigation/native';
import {ThemeProvider} from 'styled-components'
import React from 'react';
import { View } from 'react-native';

import { AppRoutes } from './src/routes/app.routes';
import theme from './src/themes';

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
