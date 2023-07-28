import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarcodeScannerResult} from 'react-native-scanbot-barcode-scanner-sdk';

interface ResultsSectionProp {
  results?: BarcodeScannerResult;
}

export function ResultsSection({results}: ResultsSectionProp) {
  return (
    <View style={styles.resultsContainer}>
      {results?.status === 'OK' && results.barcodes.length > 0 && (
        <FlatList
          style={styles.resultsList}
          data={results.barcodes}
          renderItem={({item}) => <Text>{item.text}</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  resultsContainer: {
    flex: 4,
  },
  resultsList: {
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 12,
  },
});
