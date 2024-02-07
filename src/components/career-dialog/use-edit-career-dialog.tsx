import { Career } from "@/types/career";
import { create } from "zustand";

interface EditCareerDialogStore {
  defaultValues?: Career;
  isOpen: boolean;
  onOpen: (defaultValues: Career) => void;
  onClose: () => void;
}

export const useEditCareerDialog = create<EditCareerDialogStore>((set) => ({
  defaultValues: undefined,
  isOpen: false,
  onOpen: (defaultValues: Career) => set({ defaultValues, isOpen: true }),
  onClose: () => set({ defaultValues: undefined, isOpen: false }),
}));
