import {StyleSheet, Text, View} from 'react-native';
import {ScanbotTheme} from '../theme';
import React from 'react';

export function CustomOverlay() {
  return (
    <View style={styles.container}>
      <View style={styles.overlayContainer} />
      <Text style={styles.overlayText}>
        Please align the camera with the barcode !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayContainer: {
    width: '90%',
    height: '54%',
    borderRadius: 12,
    borderWidth: 4,
    borderColor: ScanbotTheme.colors.primary,
  },
  overlayText: {
    paddingHorizontal: '4%',
    paddingVertical: '6%',
    fontSize: 16,
    letterSpacing: 0.4,
    color: ScanbotTheme.colors.text,
  },
});
