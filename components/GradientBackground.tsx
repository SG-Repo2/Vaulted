import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'react-native-paper';

export function GradientBackground({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  
  return (
    <LinearGradient
      colors={[theme.colors.elevation.level3, theme.colors.elevation.level1]}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});