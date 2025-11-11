import React, { useContext } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';
import { Button } from '../../components/ui/Button';

export const Animation101Screen = () => {

  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation();
  const { colors } = useContext(ThemeContext);

  return (
    <CustomView style={ styles.container }>
      
      <Animated.View style={[
        styles.purpleBox,
        {
          backgroundColor: colors.primary
        },
        { 
          opacity: animatedOpacity,
          transform: [{
            translateY: animatedTop
          }]
        }
      ]} />

      <Button
        text='FadeIn'
        onPress={ () => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 750
          });
        }} 
        styles={{ marginTop: 10 }}>
      </Button>

      <Button
        text='FadeOut'
        onPress={ () => fadeOut({}) } styles={{ marginTop: 10 }}
      >
      </Button>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});