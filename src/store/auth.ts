import { create } from 'zustand';
import { User } from 'firebase/auth';
import { registerForPushNotifications } from '../lib/notifications';
import { setupAuthListener } from '../lib/firebase';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  registerForNotifications: () => Promise<boolean>;
  initializeAuthListener: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => {
    set({ user });
    if (user) {
      // When user logs in, register for notifications
      useAuth.getState().registerForNotifications();
    }
  },
  registerForNotifications: async () => {
    return await registerForPushNotifications();
  },
  initializeAuthListener: () => {
    setupAuthListener((user) => {
      set({ user });
      if (user) {
        useAuth.getState().registerForNotifications();
      }
    });
  }
}));