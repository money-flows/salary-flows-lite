import { Career } from "@/types/career";
import { create } from "zustand";

interface CareersStore {
  careers: Career[];
  addCareer: (career: Career) => void;
}

export const useCareers = create<CareersStore>((set) => ({
  careers: [],
  addCareer: (career) =>
    set((state) => ({ careers: [...state.careers, career] })),
}));
