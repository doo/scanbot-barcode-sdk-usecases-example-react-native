import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';
import {ScanbotTheme} from '../theme';

interface ButtonProps {
  onPress: () => void;
  text: string;
  style?: ViewStyle;
}

export function Button(props: ButtonProps) {
  const {onPress, text, style} = props;

  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: ScanbotTheme.colors.primary,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
