import { create } from 'zustand';

type PetDetails = {
  id: string; // Add id property
  location: string;
  catOrDog: 'cat' | 'dog' | '';
  name: string;
  age?: number;
  breed?: string;
};

type PetStore = {
  location: string;
  pets: PetDetails[]; // Change pets to an array
  currentPetId: string | null;
  selectedPetIndex: number | null; // Add selectedPetIndex property
  
  setLocation: (location: string) => void;
  setCurrentPet: (petId: string) => void;
  setPetDetails: (petId: string, details: Partial<PetDetails>) => void;
  addNewPet: ({ catOrDog, name }: { catOrDog: 'cat' | 'dog'; name: string }) => string;
  removePet: (petId: string) => void;
  setSelectedPetIndex: (index: number | null) => void; // Add setter for selectedPetIndex
};

export const usePetStore = create<PetStore>()((set) => ({
  location: "",
  pets: [], // Initialize as an empty array
  currentPetId: null,
  selectedPetIndex: null, // Initialize selectedPetIndex as null
  
  setLocation: (location) => {
    set((state) => ({
      location,
      pets: state.pets.map(pet => ({
        ...pet,
        location,
      })),
    }));
  },

  setCurrentPet: (petId) => set({ currentPetId: petId }),

  setPetDetails: (petId, details) =>
    set((state) => ({
      pets: state.pets.map(pet => 
        petId === pet.id
          ? { ...pet, ...details }
          : pet
      ),
    })),

  addNewPet: ({ catOrDog, name }) => {
    set((state) => {
      const newPet = {
        id: `pet_${Date.now()}`,
        location: state.location,
        catOrDog,
        name,
      };
      return {
        pets: [...state.pets, newPet],
        currentPetId: newPet.id,
      };
    });
    return `pet_${Date.now()}`;
  },

  removePet: (petId) =>
    set((state) => {
      const newPets = state.pets.filter(pet => pet.id !== petId);
      const newCurrentPetId = state.currentPetId === petId ? newPets[0]?.id || null : state.currentPetId;
      return {
        pets: newPets,
        currentPetId: newCurrentPetId,
      };
    }),

  setSelectedPetIndex: (index) => set({ selectedPetIndex: index }),
}));
