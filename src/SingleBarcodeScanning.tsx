import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ScanbotBarcodeSDK, {
  BarcodeScannerResult,
} from 'react-native-scanbot-barcode-scanner-sdk';
import {ErrorSection, ListItem} from './components';
import {LicenceResult} from './types';
import {licenceNotValidAlert} from './utils/alerts';
import {ResultsSection} from './components/ResultsSection';

export function SingleBarcodeScanning() {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [results, setResults] = useState<BarcodeScannerResult | undefined>();

  const onPress = useCallback(async () => {
    try {
      const licenceResult: LicenceResult =
        await ScanbotBarcodeSDK.getLicenseInfo();

      if (licenceResult.isLicenseValid) {
        const scanResult = await ScanbotBarcodeSDK.startBarcodeScanner({
          cameraModule: 'BACK',
        });

        if (scanResult.status === 'OK') {
          setResults(scanResult);
          setErrorMessage(undefined);
        } else {
          setResults(undefined);
        }
      } else {
        licenceNotValidAlert();
      }
    } catch (error) {
      setErrorMessage(JSON.stringify(error));
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ResultsSection results={results} />
      <ErrorSection errorMessage={errorMessage} />
      <View style={styles.buttonContainer}>
        <ListItem onPress={onPress} title={'Scan Barcode'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
