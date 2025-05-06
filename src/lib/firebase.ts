// src/lib/firebase.ts
import { initializeApp }   from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore }    from 'firebase/firestore';

const firebaseConfig = {
    apiKey:            'AIzaSyB9UzvmqpkdC7yMjpCfZ407i—o2I1vdM',
    authDomain:        'vaulted-71a56.firebaseapp.com',
    projectId:         'vaulted-71a56',
    storageBucket:     'vaulted-71a56.appspot.com',
    messagingSenderId: '1064918724930',
    appId:             '1:1064918724930:web:81d548e6ed1cbda04098db',
};

// Initialise once
const app       = initializeApp(firebaseConfig);
export const db   = getFirestore(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// (add getStorage, getFunctions, etc., later if you need them)