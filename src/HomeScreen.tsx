import React, {useCallback} from 'react';
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
import {useSingleBarcodeScanner} from './hooks/useSingleBarcodeScanner';
import {
  PrimaryRouteNavigationProp,
  Screens,
  Section,
  SectionData,
} from './types';
import {useNavigation} from '@react-navigation/native';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {licenseNotValidAlert} from './utils/alerts';

export function HomeScreen() {
  const {onPress: onSingleBarcodeScanning} = useSingleBarcodeScanner();
  const navigation = useNavigation<PrimaryRouteNavigationProp>();

  const onNativeComponentBarcodeScanning = useCallback(async () => {
    const licenseInfo = await ScanbotBarcodeSDK.getLicenseInfo();
    if (licenseInfo.isLicenseValid) {
      navigation.navigate(Screens.NativeComponentBarcode);
    } else {
      licenseNotValidAlert();
    }
  }, [navigation]);

  const sectionListData: Section[] = [
    {
      title: 'Barcode Scanning Use Cases',
      data: [
        {
          title: 'Single Barcode Scanning',
          onPress: onSingleBarcodeScanning,
        },
      ],
    },
    {
      title: 'Native Components Use Cases',
      data: [
        {
          title: 'Single Barcode Scanning',
          onPress: onNativeComponentBarcodeScanning,
        },
      ],
    },
  ];

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
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    paddingVertical: 12,
  },
  listItemContainer: {
    marginVertical: 4,
    paddingVertical: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItemText: {
    fontSize: 16,
    flexShrink: 1,
  },
  listItemIcon: {
    marginLeft: 4,
    fontSize: 16,
    color: ScanbotTheme.colors.primary,
    fontWeight: 'bold',
  },
});
