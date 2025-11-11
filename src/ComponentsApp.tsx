import React from 'react';
import { Text, View } from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './presentation/context/ThemeContext';

const AppState = ({ children }: PropsWithChildren) => {
  return(
    <NavigationContainer>
      <ThemeProvider>{ children }</ThemeProvider>
    </NavigationContainer>
  );
};

export const ComponentsApp = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};
