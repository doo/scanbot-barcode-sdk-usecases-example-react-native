import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScanbotTheme} from '../theme';
import React from 'react';

export function ListItem({
  onPress,
  title,
}: {
  onPress: () => void;
  title: string;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ScanbotTheme.colors.primary,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    paddingHorizontal: 14,
    paddingVertical: 22,
    marginVertical: 4,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ScanbotTheme.colors.text,
  },
});
