import {useNavigation} from '@react-navigation/native';
import {PrimaryRouteNavigationProp, Screens} from '../types';
import {useCallback} from 'react';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {errorMessageAlert, licenseNotValidAlert} from '../utils/alerts';
import {launchImageLibrary} from 'react-native-image-picker';

export function useDetectBarcodeOnImage() {
  const navigation = useNavigation<PrimaryRouteNavigationProp>();

  return useCallback(async () => {
    try {
      const licenseResult = await ScanbotBarcodeSDK.getLicenseInfo();

      if (licenseResult.isLicenseValid) {
        const imagePickerResponse = await launchImageLibrary({
          selectionLimit: 1,
          mediaType: 'photo',
          includeBase64: false,
          includeExtra: true,
        });

        if (!imagePickerResponse.didCancel && imagePickerResponse.assets) {
          if (imagePickerResponse.errorMessage) {
            errorMessageAlert(imagePickerResponse.errorMessage);
            return;
          }

          const scanResult = await ScanbotBarcodeSDK.detectBarcodesOnImage({
            imageFileUri: imagePickerResponse.assets[0].uri!!,
          });

          if (scanResult.status === 'OK') {
            navigation.navigate(Screens.Results, scanResult);
          }
        }
      } else {
        licenseNotValidAlert();
      }
    } catch (error) {
      errorMessageAlert(JSON.stringify(error));
    }
  }, [navigation]);
}
