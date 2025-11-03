import React from 'react';
import { Alert, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import { Button } from '../../components/ui/Button';
import prompt from 'react-native-prompt-android';
import { showPrompt } from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {

  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const createThreeButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const onShowPromt = () => {

    // prompt(
    //   'Enter password',
    //   'Enter your password to claim your $1.5B in lottery winnings',
    //   [
    //     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    //     {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
    //   ],
    //   {
    //     type: 'secure-text',
    //     cancelable: false,
    //     defaultValue: 'test',
    //     placeholder: 'placeholder'
    //   }
    // );

    showPrompt({
      title: 'Correo electrónico',
      subTitle: 'Enim commodo ut amer esse aligua.',
      buttons: [
        // { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      placeholder: 'Placehoolder'
    });
    
    // ! Código nativo
    // Alert.prompt(
    //   'Correo electrónico',
    //   'Enim commodo ut amer esse aligua.',
    //   (valor: string) => console.log({ valor }),
    //   'secure-text',
    //   'Soy el valor por defecto',
    //   'number-pad'
    // );
  };

  return (
    <CustomView style={ globalStyles.globalMargin }>
      <Title safe text='Alertas' />

      <Button
        text='Alerta - 2 botones'
        onPress={ createTwoButtonAlert }
      />

      <View style={{ height: 10 }} />

      <Button
        text='Alerta - 3 botones'
        onPress={ createThreeButtonAlert }
      />

      <View style={{ height: 10 }} />

      <Button
        text='Prompt - Input'
        onPress={ onShowPromt }
      />

    </CustomView>
  );
};
