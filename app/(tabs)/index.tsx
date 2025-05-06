import { StyleSheet, Button } from 'react-native';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../src/lib/firebase';   // ← adjust relative path if needed

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const pingFirebase = async () => {
    await addDoc(collection(db, 'test'), { created: Date.now() });
    const snap = await getDocs(collection(db, 'test'));
    alert(`Docs in /test: ${snap.size}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Text>Hello Firebase 👋</Text>
      <Button title="Ping Firestore" onPress={pingFirebase} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
