import {Alert} from 'react-native';

export function licenseNotValidAlert() {
  Alert.alert(
    'License not valid',
    'Your license is corrupted or expired, Scanbot features are disabled. Please restart the app in order to receive one minute valid license.',
    [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => {},
      },
    ],
    {
      cancelable: true,
    },
  );
}

export function errorMessageAlert(message: string) {
  Alert.alert(
    'An unexpected error has occurred',
    message,
    [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => {},
      },
    ],
    {
      cancelable: true,
    },
  );
}
