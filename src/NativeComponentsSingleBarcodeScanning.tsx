import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ScanbotBarcodeCameraView} from 'react-native-scanbot-barcode-scanner-sdk';
import React, {useCallback, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PrimaryRouteNavigationProp, Screens} from './types';
import {Button, CustomOverlay} from './components';

export function NativeComponentsSingleBarcodeScanning() {
  const navigation = useNavigation<PrimaryRouteNavigationProp>();
  const [customOverlay, setCustomOverlay] = useState(false);

  const onSwitchOverlay = useCallback(() => {
    setCustomOverlay(!customOverlay);
  }, [customOverlay]);

  const onCancel = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScanbotBarcodeCameraView
        configuration={{
          shouldUseFinderView: !customOverlay,
          finderAspectRatio: {
            width: 1,
            height: 1,
          },
          finderLineWidth: 4,
          finderLineColor: '#ffffff',
          finderBackgroundColor: '#000000',
          finderBackgroundOpacity: 0.4,
        }}
        onBarcodeScannerResult={scanResult => {
          navigation.navigate(Screens.Results, scanResult);
        }}
        style={styles.container}>
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={onCancel}
              style={styles.container}
              text={'Cancel'}
            />
            <Button
              onPress={onSwitchOverlay}
              style={styles.container}
              text={'Custom overlay'}
            />
          </View>
          {customOverlay && <CustomOverlay />}
        </View>
      </ScanbotBarcodeCameraView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 20,
  },
});
