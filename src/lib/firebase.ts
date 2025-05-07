// src/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, onAuthStateChanged, User } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9u2ymopkpdC7YMjpCFz407i-_o2IivdM",
    authDomain: "vaulted-71a56.firebaseapp.com",
    projectId: "vaulted-71a56",
    storageBucket: "vaulted-71a56.firebasestorage.app",
    messagingSenderId: "1064918724930",
    appId: "1:1064918724930:web:81d548e6ed1bcda04098db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// This function will be called from the auth store instead of directly importing
export const setupAuthListener = (setUserCallback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, (user) => {
        setUserCallback(user);
    });
};