import {Alert} from 'react-native';

export function licenceNotValidAlert() {
  Alert.alert(
    'Licence not valid',
    'Your license is corrupted or expired, Scanbot features are disabled. Please restart the app in order to receive one minute valid licence.',
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
