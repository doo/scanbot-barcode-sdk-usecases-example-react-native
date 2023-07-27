import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
