import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { auth, db } from './firebase';
import { doc, setDoc } from 'firebase/firestore';

// Configure notifications behavior
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function registerForPushNotifications() {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    return false;
  }

  // Get the token
  const token = (await Notifications.getExpoPushTokenAsync()).data;

  // Store the token in Firestore if user is authenticated
  if (auth.currentUser) {
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      pushToken: token,
      updatedAt: new Date(),
    }, { merge: true });
  }

  return true;
}