import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScanbotTheme} from '../theme';

interface ErrorSectionProps {
  errorMessage?: string;
}

export function ErrorSection({errorMessage}: ErrorSectionProps) {
  if (!errorMessage) {
    return <></>;
  }

  return (
    <View>
      <Text style={styles.errorTitle}>Error</Text>
      <Text style={styles.errorMessage}>{errorMessage}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: ScanbotTheme.colors.primary,
    textAlign: 'center',
  },
  errorTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ScanbotTheme.colors.primary,
    textAlign: 'center',
  },
});
