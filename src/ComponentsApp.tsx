import React from 'react';
import { Text, View } from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';

export const ComponentsApp = () => {
  return (
    <View>
      <Text>Components App</Text>
      <HomeScreen />
    </View>
  );
};
