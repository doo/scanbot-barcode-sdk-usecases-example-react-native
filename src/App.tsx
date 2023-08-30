import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './HomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ScanbotTheme} from './theme';
import {PrimaryRoutesParamList, Screens} from './types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ScanbotBarcodeSDK from 'react-native-scanbot-barcode-scanner-sdk';
import {ResultsScreen} from './ResultsScreen';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';

const ScreenTitles: Record<Screens, string> = {
  [Screens.ScannersList]: 'Scanbot Barcode SDK Example',
  [Screens.Results]: 'Results',
};

const Stack = createStackNavigator<PrimaryRoutesParamList>();

function App() {
  useEffect(() => {
    ScanbotBarcodeSDK.initializeSdk({
      licenseKey: '',
      loggingEnabled: true,
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
              headerMode: 'float',
              headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
              transitionSpec: {
                open: transitionSpec,
                close: transitionSpec,
              },
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

const transitionSpec: TransitionSpec = {
  animation: 'spring',
  config: {
    delay: 350,
  },
};
export default App;
