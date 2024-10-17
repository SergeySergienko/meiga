import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProfileStore = create(
  persist(
    (set) => ({
      currentUser: {},
      update(userInfo) {
        set((state) => ({
          currentUser: { ...state.currentUser, ...userInfo },
        }));
      },
      reset() {
        set({ currentUser: {} });
      },
    }),
    { name: 'profile-storage' }
  )
);

export const useTeamMemberStore = create((set) => ({
  currentTeamMember: {},
  updateTeamMember(teamMemberInfo) {
    set((state) => ({
      currentTeamMember: { ...state.currentTeamMember, ...teamMemberInfo },
    }));
  },
  resetTeamMember() {
    set({ currentTeamMember: {} });
  },
}));

export const useModalStore = create((set) => ({
  isModalOpen: false,
  modalInfo: {},
  setModalOpen(isOpen) {
    set(() => ({ isModalOpen: isOpen }));
  },
  setModalInfo(modalInfo) {
    set(() => ({ modalInfo }));
  },
  resetModalInfo() {
    set({ modalInfo: {} });
  },
}));
