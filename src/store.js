import { create } from 'zustand';

export const useProfileStore = create(
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
);

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
