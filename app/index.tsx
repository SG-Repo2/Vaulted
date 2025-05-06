import React from 'react';
import { ImageBackground, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, View } from '@/components/Themed';

export default function LandingScreen() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require('../assets/images/marbleSwatch.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Vaulted</Text>
        <Text style={styles.tagline}>Elevate Your Wardrobe</Text>
        <Pressable style={styles.button} onPress={() => router.replace('/(tabs)')}>
          <Text style={styles.buttonText}>Enter Vaulted</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'repeat',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
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