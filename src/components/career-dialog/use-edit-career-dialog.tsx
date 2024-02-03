import { create } from "zustand";

interface EditCareerDialogStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useEditCareerDialog = create<EditCareerDialogStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
