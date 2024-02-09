import { create } from "zustand";
import { DepositTransaction } from "./types";

interface ImportFileDialogStore {
  transactions?: DepositTransaction[];
  setTransactions: (transactions: DepositTransaction[]) => void;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useImportFileDialog = create<ImportFileDialogStore>((set) => ({
  transactions: undefined,
  setTransactions: (transactions) => set({ transactions }),
  isOpen: false,
  onOpen: () => set({ isOpen: true, transactions: undefined }),
  onClose: () => {
    set({ isOpen: false });

    // Clear dialog states after the dialog is closed (wait for the animation to finish)
    setTimeout(() => {
      set({ transactions: undefined });
    }, 1000);
  },
}));
