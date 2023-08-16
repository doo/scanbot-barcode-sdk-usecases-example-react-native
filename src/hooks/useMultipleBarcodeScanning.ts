import {useCallback} from 'react';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {PrimaryRouteNavigationProp, Screens} from '../types';
import {errorMessageAlert, licenseNotValidAlert} from '../utils/alerts';
import {useNavigation} from '@react-navigation/native';

export function useMultipleBarcodeScanning() {
  const navigation = useNavigation<PrimaryRouteNavigationProp>();

  return useCallback(async () => {
    try {
      const licenseResult = await ScanbotBarcodeSDK.getLicenseInfo();

      if (licenseResult.isLicenseValid) {
        const scanResult = await ScanbotBarcodeSDK.startBarcodeScanner({
          viewFinderEnabled: false,
        });
        if (scanResult.status === 'OK') {
          navigation.navigate(Screens.Results, scanResult);
        }
      } else {
        licenseNotValidAlert();
      }
    } catch (error) {
      errorMessageAlert(JSON.stringify(error));
    }
  }, [navigation]);
}
