import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {ScanbotTheme} from '../theme';
import React from 'react';

interface ListItemProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
}

export function ListItem({onPress, title, style}: ListItemProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, style && style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
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
