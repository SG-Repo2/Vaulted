// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, onAuthStateChanged, User } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: Constants.expoConfig?.extra?.firebaseApiKey,
    authDomain: Constants.expoConfig?.extra?.firebaseAuthDomain,
    projectId: Constants.expoConfig?.extra?.firebaseProjectId,
    storageBucket: Constants.expoConfig?.extra?.firebaseStorageBucket,
    messagingSenderId: Constants.expoConfig?.extra?.firebaseMessagingSenderId,
    appId: Constants.expoConfig?.extra?.firebaseAppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Making sure Firebase is initialized properly
console.log('Firebase app initialized:', app.name);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth with proper persistence
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
    // iOS-specific auth optimization
    ...(Platform.OS === 'ios' && {
        // Ensure auth is explicitly initialized on main thread for iOS
        asyncStorage: AsyncStorage,
        forceSynchronousInit: true
    })
});

// Register auth component explicitly to avoid initialization issues
export const registerAuth = () => {
    console.log('Auth module registered:', auth?.currentUser?.uid || 'no user');
    return auth;
};

// This function will be called from the auth store instead of directly importing
export const setupAuthListener = (setUserCallback: (user: User | null) => void) => {
    // Make sure auth is registered
    registerAuth();
    return onAuthStateChanged(auth, (user) => {
        setUserCallback(user);
    });
};