import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      currentUser: {},
      updateUser(userInfo) {
        set((state) => ({
          currentUser: { ...state.currentUser, ...userInfo },
        }));
      },
      resetUser() {
        set({ currentUser: {} });
      },

      currentTeamMember: {},
      updateTeamMember(teamMemberInfo) {
        set((state) => ({
          currentTeamMember: { ...state.currentTeamMember, ...teamMemberInfo },
        }));
      },
      resetTeamMember() {
        set({ currentTeamMember: {} });
      },
    }),
    { name: 'store' }
  )
);
