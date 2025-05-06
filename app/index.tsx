import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { GradientBackground } from '@/components/GradientBackground';

export default function LandingScreen() {
  const router = useRouter();
  return (
    <GradientBackground>
      <View style={styles.overlay}>
        <Text style={styles.title}>Vaulted</Text>
        <Text style={styles.tagline}>Elevate Your Wardrobe</Text>
        <Pressable style={styles.button} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.buttonText}>Enter Vaulted</Text>
        </Pressable>
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 48,
    color: '#FFF',
    fontFamily: 'SFPro-Semibold',
    letterSpacing: 2,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 18,
    color: '#DDD',
    fontFamily: 'SFPro-Regular',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#E5E5E5',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 24,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'SFPro-Semibold',
  },
});