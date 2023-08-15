import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LicenseStatus} from 'react-native-scanbot-barcode-scanner-sdk/src/enum';
import {BarcodeScannerResult} from 'react-native-scanbot-barcode-scanner-sdk';
import {RouteProp} from '@react-navigation/native';

export enum Screens {
  ScannersList = 'ScannersList',
  Results = 'Results',
}

export type PrimaryRoutesParamList = {
  [Screens.ScannersList]: undefined;
  [Screens.Results]: BarcodeScannerResult | undefined;
};

export type PrimaryRouteNavigationProp = NativeStackNavigationProp<
  PrimaryRoutesParamList,
  keyof PrimaryRoutesParamList
>;

export type LicenseResult = {
  isLicenseValid: boolean;
  licenseStatus: LicenseStatus;
  licenseStatusMessage: string;
};

export type ResultScreenRouteProp = RouteProp<
  PrimaryRoutesParamList,
  Screens.Results
>;

export type SectionData = {
  title: string;
  onPress: () => void;
};

export type Section = {
  title: string;
  data: SectionData[];
};
