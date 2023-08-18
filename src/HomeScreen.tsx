import React, {useMemo} from 'react';
import {
  Pressable,
  SafeAreaView,
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
  StyleSheet,
  Text,
} from 'react-native';
import {SupportSection} from './components';
import {ScanbotTheme} from './theme';
import {
  useARMultiScan,
  useARSelectScan,
  useBatchScanning,
  useDetectBarcodeOnImage,
  useMultipleBarcodeScanning,
  useSingleBarcodeScanning,
} from './hooks';
import {Section, SectionData} from './types';

export function HomeScreen() {
  const onSingleBarcodeScanning = useSingleBarcodeScanning();
  const onMultipleBarcodeScanning = useMultipleBarcodeScanning();
  const onBatchScanning = useBatchScanning();
  const onDetectBarcodeFromImage = useDetectBarcodeOnImage();
  const onARMultiScan = useARMultiScan();
  const onARSelectScan = useARSelectScan();

  const sectionListData: Section[] = useMemo(
    () => [
      {
        title: 'Barcode Scanning Use Cases',
        data: [
          {
            title: 'Scan Single Barcodes',
            onPress: onSingleBarcodeScanning,
          },
          {
            title: 'Scanning Multiple Barcodes',
            onPress: onMultipleBarcodeScanning,
          },
          {
            title: 'Batch Scanning',
            onPress: onBatchScanning,
          },
          {
            title: 'Detect Barcode On Image',
            onPress: onDetectBarcodeFromImage,
          },
        ],
      },
      {
        title: 'Barcode AR Overlay Use Cases',
        data: [
          {
            title: 'AR-MultiScan',
            onPress: onARMultiScan,
          },
          {
            title: 'AR-SelectScan',
            onPress: onARSelectScan,
          },
        ],
      },
    ],
    [
      onARMultiScan,
      onARSelectScan,
      onBatchScanning,
      onDetectBarcodeFromImage,
      onMultipleBarcodeScanning,
      onSingleBarcodeScanning,
    ],
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionListData}
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        ListFooterComponentStyle={styles.listFooter}
        ListFooterComponent={<SupportSection />}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
}

function renderSectionHeader(item: {
  section: SectionListData<SectionData, Section>;
}) {
  return <Text style={styles.listHeader}>{item.section.title}</Text>;
}

function renderItem(listItem: SectionListRenderItemInfo<SectionData, Section>) {
  const {item} = listItem;
  return (
    <Pressable onPress={item.onPress} style={styles.listItemContainer}>
      <Text style={styles.listItemText}>{item.title}</Text>
      <Text style={styles.listItemIcon}>&gt;</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: '4%',
    paddingVertical: 8,
    flex: 1,
  },
  listContent: {
    flexGrow: 1,
  },
  listFooter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  listHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    paddingVertical: 12,
  },
  listItemContainer: {
    marginVertical: 8,
    paddingVertical: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItemText: {
    fontSize: 18,
    flexShrink: 1,
  },
  listItemIcon: {
    marginLeft: 4,
    fontSize: 16,
    color: ScanbotTheme.colors.primary,
    fontWeight: 'bold',
  },
});
