import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {ListItem} from './components/ListItem';
import {ListDataItem, PrimaryRouteNavigationProp, Screens} from './types';
import {useNavigation} from '@react-navigation/native';

const dataList: Array<ListDataItem> = [
  {
    screen: Screens.SingleBarcodeScanner,
    title: 'Single Barcode Scanner',
  },
];

export function HomeScreen() {
  const navigation = useNavigation<PrimaryRouteNavigationProp>();

  return (
    <SafeAreaView>
      <FlatList
        data={dataList}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            onPress={() => navigation.navigate(item.screen)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
});
