import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProfileStore = create(
  // persist(
  (set) => ({
    currentUser: {},
    update(currentUser) {
      set(() => ({ currentUser }));
    },
    reset() {
      set({ currentUser: {} });
    },
  }),
  { name: 'profile' }
  // )
);
