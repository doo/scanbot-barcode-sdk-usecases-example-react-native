import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LicenseStatus} from 'react-native-scanbot-barcode-scanner-sdk/src/enum';

export enum Screens {
  ScannersList = 'ScannersList',
  SingleBarcodeScanner = 'SingleBarcodeScanner',
}

export type PrimaryRoutesParamList = {
  [Screens.ScannersList]: undefined;
  [Screens.SingleBarcodeScanner]: undefined;
};

export type PrimaryRouteNavigationProp = NativeStackNavigationProp<
  PrimaryRoutesParamList,
  keyof PrimaryRoutesParamList
>;

export type ListDataItem = {screen: Screens; title: string};

export type LicenceResult = {
  isLicenseValid: boolean;
  licenseStatus: LicenseStatus;
  licenseStatusMessage: string;
};
