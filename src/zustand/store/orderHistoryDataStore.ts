import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PetInfo = {
  name: string;
  petId: string;
  subId: string;
};

type Store = {
  selectedPetFromOrderHistory: PetInfo | null;
  selectedPetIndexFromOrderHistory: number;
  setSelectedPetFromOrderHistory: (pet: PetInfo) => void;
  clearSelectedPetFromOrderHistory: () => void;
  setSelectedPetIndexFromOrderHistory: (index: number) => void;
};

export const useOrderHistoryStore = create<Store>()(
  persist(
    (set) => ({
      selectedPetFromOrderHistory: null,
      selectedPetIndexFromOrderHistory: 0,
      setSelectedPetFromOrderHistory: (pet) => set({ selectedPetFromOrderHistory: pet }),
      clearSelectedPetFromOrderHistory: () => set({ selectedPetFromOrderHistory: null }),
      setSelectedPetIndexFromOrderHistory: (index) => set({ selectedPetIndexFromOrderHistory: index }),
    }),
    {
      name: 'order-history-store', // Unique name for localStorage
    }
  )
);