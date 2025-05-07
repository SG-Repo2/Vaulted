// Update the export format in app/(tabs)/index.tsx
import { StyleSheet, Button } from 'react-native';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../src/lib/firebase';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { GradientBackground } from '@/components/GradientBackground';

// Change to named export declaration for clarity
export default function TabOneScreen() {
  const pingFirebase = async () => {
    await addDoc(collection(db, 'test'), { created: Date.now() });
    const snap = await getDocs(collection(db, 'test'));
    alert(`Docs in /test: ${snap.size}`);
  };

  return (
    <GradientBackground>
      <View style={styles.overlay}>
        <Text style={styles.title}>Tab One</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="app/(tabs)/index.tsx" />
        <Text>Helloooooo College 👋</Text>
        <Button title="Ping Firestore" onPress={pingFirebase} />
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});