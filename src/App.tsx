import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScanbotTheme} from './theme';
import {PrimaryRoutesParamList, Screens} from './types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {ResultsScreen} from './ResultsScreen';

const ScreenTitles: Record<Screens, string> = {
  [Screens.ScannersList]: 'Scanbot Barcode SDK Example',
  [Screens.Results]: 'Results',
};

const Stack = createNativeStackNavigator<PrimaryRoutesParamList>();

/**
 * TODO Add the Scanbot Barcode Scanner SDK license key here.
 * Please note: Scanbot Barcode Scanner SDK will run without a license key for one minute per session!
 * After the trial period has expired all SDK features and UI components will stop working.
 * You can get a free "no-strings-attached" trial license key. Please submit the trial license
 * form (https://scanbot.io/trial) on our website by using the app identifier
 * "io.scanbot.example.barcode.usecases.reactnative" of this example app.
 */
const LICENSE_KEY = '';

function App() {
  useEffect(() => {
    ScanbotBarcodeSDK.initializeSdk({
      licenseKey: LICENSE_KEY,
      loggingEnabled: true,
      useCameraX: true,
    });
  }, []);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={ScanbotTheme.colors.primary}
        />
        <NavigationContainer theme={ScanbotTheme}>
          <Stack.Navigator
            screenOptions={{
              headerBackTitleVisible: false,
              headerTintColor: Colors.white,
              headerTitleStyle: {
                fontSize: 18,
              },
              animation: 'none',
            }}>
            <Stack.Screen
              name={Screens.ScannersList}
              component={HomeScreen}
              options={{
                title: ScreenTitles.ScannersList,
              }}
            />
            <Stack.Screen
              name={Screens.Results}
              component={ResultsScreen}
              options={{
                title: ScreenTitles.Results,
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
