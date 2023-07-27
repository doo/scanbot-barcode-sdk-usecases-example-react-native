import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScanbotTheme} from './theme';
import {PrimaryRoutesParamList, Screens} from './types';
import {SingleBarcodeScanning} from './SingleBarcodeScanning';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ScreenTitles: Record<Screens, string> = {
  [Screens.ScannersList]: 'Scanbot Barcode SDK Example',
  [Screens.SingleBarcodeScanner]: 'Single Barcode Scanner',
};

const Stack = createNativeStackNavigator<PrimaryRoutesParamList>();

function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={ScanbotTheme.colors.text}
        />
        <NavigationContainer theme={ScanbotTheme}>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerTintColor: Colors.white,
            }}>
            <Stack.Screen
              name={Screens.ScannersList}
              component={HomeScreen}
              options={{
                title: ScreenTitles.ScannersList,
              }}
            />
            <Stack.Screen
              name={Screens.SingleBarcodeScanner}
              component={SingleBarcodeScanning}
              options={{
                title: ScreenTitles.SingleBarcodeScanner,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
