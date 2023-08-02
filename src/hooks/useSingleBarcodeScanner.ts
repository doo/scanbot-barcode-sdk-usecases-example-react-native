import {useCallback} from 'react';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {LicenceResult, PrimaryRouteNavigationProp, Screens} from '../types';
import {errorMessageAlert, licenceNotValidAlert} from '../utils/alerts';
import {useNavigation} from '@react-navigation/native';

export function useSingleBarcodeScanner() {
  const navigation = useNavigation<PrimaryRouteNavigationProp>();

  const onPress = useCallback(async () => {
    try {
      const licenceResult: LicenceResult =
        await ScanbotBarcodeSDK.getLicenseInfo();

      if (licenceResult.isLicenseValid) {
        const scanResult = await ScanbotBarcodeSDK.startBarcodeScanner({});
        if (scanResult.status === 'OK') {
          navigation.navigate(Screens.Results, scanResult);
        }
      } else {
        licenceNotValidAlert();
      }
    } catch (error) {
      errorMessageAlert(JSON.stringify(error));
    }
  }, [navigation]);

  return {onPress};
}
