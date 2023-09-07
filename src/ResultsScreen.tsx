import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {ResultScreenRouteProp} from './types';

export function ResultsScreen() {
  const {params: results} = useRoute<ResultScreenRouteProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultsContainer}>
        {results?.status === 'OK' && results.barcodes.length > 0 && (
          <View>
            <Text style={styles.title}>Results</Text>
            <FlatList
              style={styles.resultsList}
              data={results.barcodes}
              renderItem={({item}) => {
                const {type, textWithExtension} = item;
                return (
                  <Text style={styles.barcodeType}>
                    {type + ' '}
                    <Text style={styles.barcodeText}>{textWithExtension}</Text>
                  </Text>
                );
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  resultsContainer: {
    flex: 4,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  resultsList: {
    paddingVertical: 10,
    marginVertical: 12,
  },
  barcodeType: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  barcodeText: {
    fontWeight: 'normal',
  },
});
