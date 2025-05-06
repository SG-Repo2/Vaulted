// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, onAuthStateChanged } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
import { useAuth } from '../store/auth';

const firebaseConfig = {
    apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
    authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
    projectId: Constants.expoConfig?.extra?.firebaseProjectId,
    storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId,
    appId: Constants.expoConfig?.extra?.firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Subscribe to auth state changes
onAuthStateChanged(auth, (user) => {
    useAuth.getState().setUser(user);
});