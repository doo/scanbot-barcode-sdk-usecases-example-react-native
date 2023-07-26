import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ScannersListScreen} from './ScannersListScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

enum Screens {
  ScannersList = 'ScannersList',
}

type PrimaryRoutesParamList = {
  [Screens.ScannersList]: undefined;
};

const Stack = createNativeStackNavigator<PrimaryRoutesParamList>();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen
            name={Screens.ScannersList}
            component={ScannersListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
