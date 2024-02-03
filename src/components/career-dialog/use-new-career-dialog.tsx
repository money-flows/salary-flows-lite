import { create } from "zustand";

interface NewCareerDialogStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNewCareerDialog = create<NewCareerDialogStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
