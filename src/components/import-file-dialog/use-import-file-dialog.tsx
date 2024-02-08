import { create } from "zustand";

interface ImportFileDialogStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useImportFileDialog = create<ImportFileDialogStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
