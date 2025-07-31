import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type PetDetails = {
  id: string;
  location: string;
  catOrDog: 'cat' | 'dog' | '';
  name: string;
  age?: number;
  gender?: 'male' | 'female' | '';
  breed?: string;
  crossBreed?: string;
  eatingPreferences?: Array<string>;
  allergiesOrIntolerances?: Array<string>;
  dateOfBirth?: string;
  ageMonth?: number;
  ageYear?: number;
  currentWeight?: number;
  targetWeight?: number;
  activityLevel?: string;
  planType?: string;
  planPrice?: number;
  protein?: string;
  bowlSize?: string;
};

type createdPetDetails = {
  petId: string;
  name: string;
  type: string;
  gender: string;
  location: string;
  dateOfBirth?: string;
  ageMonth?: number;
  ageYear?: number;
  breed?: string;
  crossBreeds?: Array<string>;
  eatingPreferences?: Array<string>;
  allergiesOrIntolerances?: Array<string>;
  activityLevel?: string;
  currentWeight: number;
  targetWeight: number;
  plan: {
    type: string;
    duration: string;
    price: number;
    protein: string;
    bowlSize: string;
  }
}

type PetStore = {
  location: string;
  pets: PetDetails[];
  createdPets: createdPetDetails[];
  currentPetId: string | null;
  selectedPetIndex: number | null;
  noOfPets: number;
  createdPetsFromAPI: createdPetDetails[];
  
  setLocation: (location: string) => void;
  setCurrentPet: (petId: string) => void;
  setPetDetails: (petId: string, details: Partial<PetDetails>) => void;
  addNewPet: ({ catOrDog, name }: { catOrDog: 'cat' | 'dog'; name: string }) => string;
  removePet: (petId: string) => void;
  setSelectedPetIndex: (index: number | null) => void;
  clearPetDetails: () => void;
  addCreatedPet: (pet: createdPetDetails) => void;
  addCreatedPetsFromAPI: (pet: createdPetDetails) => void;
  removeCreatedPetsFromAPI: () => void;
};

export const usePetStore = create<PetStore>()(
  persist(
    (set) => ({
      location: "",
      pets: [],
      createdPets: [],
      createdPetsFromAPI: [],
      currentPetId: null,
      selectedPetIndex: null,
      noOfPets: 0,
      
      setLocation: (location) => {
        set((state) => ({
          location,
          pets: state.pets.map(pet => ({
            ...pet,
            location,
          })),
          noOfPets: state.pets.length
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
          noOfPets: state.pets.length
        })),

      addNewPet: ({ catOrDog, name }) => {
        const newPetId = `pet_${Date.now()}`;
        set((state) => {
          const newPet: PetDetails = {
            id: newPetId,
            location: state.location,
            catOrDog,
            name,
            gender: "",
            crossBreed: "",
          };
          return {
            pets: [...state.pets, newPet],
            currentPetId: newPet.id,
            noOfPets: state.pets.length + 1
          };
        });
        return newPetId;
      },

      removePet: (petId) =>
        set((state) => {
          const newPets = state.pets.filter(pet => pet.id !== petId);
          const newCurrentPetId = state.currentPetId === petId ? newPets[0]?.id || null : state.currentPetId;
          return {
            pets: newPets,
            currentPetId: newCurrentPetId,
            noOfPets: newPets.length
          };
        }),

      setSelectedPetIndex: (index) => set({ selectedPetIndex: index }),

      clearPetDetails: () => set({
        location: "",
        pets: [],
        currentPetId: null,
        selectedPetIndex: null,
        noOfPets: 0,
      }),

      addCreatedPet: (pet) => set((state) => ({
        createdPets: [...state.createdPets, pet],
      })),

      addCreatedPetsFromAPI: (pet) => set((state) => ({
        createdPetsFromAPI: [...state.createdPetsFromAPI, pet],
      })),

      removeCreatedPetsFromAPI: () => set({
        createdPetsFromAPI: [],
      }),

    }),
    {
      name: 'pet-store', // unique name for the storage key
      storage: createJSONStorage(() => localStorage), // or sessionStorage
      // You can also add partial persistence if needed:
      // partialize: (state) => ({ pets: state.pets, location: state.location }),
    }
  )
);









// import { create } from 'zustand';

// type PetDetails = {
//   id: string; // Add id property
//   location: string;
//   catOrDog: 'cat' | 'dog' | '';
//   name: string;
//   age?: number;
//   gender?: 'male' | 'female' | '';
//   breed?: string;
//   crossBreed?: string;
// };

// type PetStore = {
//   location: string;
//   pets: PetDetails[]; // Change pets to an array
//   currentPetId: string | null;
//   selectedPetIndex: number | null; // Add selectedPetIndex property
  
//   setLocation: (location: string) => void;
//   setCurrentPet: (petId: string) => void;
//   setPetDetails: (petId: string, details: Partial<PetDetails>) => void;
//   addNewPet: ({ catOrDog, name }: { catOrDog: 'cat' | 'dog'; name: string }) => string;
//   removePet: (petId: string) => void;
//   setSelectedPetIndex: (index: number | null) => void; // Add setter for selectedPetIndex
// };

// export const usePetStore = create<PetStore>()((set) => ({
//   location: "",
//   pets: [], // Initialize as an empty array
//   currentPetId: null,
//   selectedPetIndex: null, // Initialize selectedPetIndex as null
  
//   setLocation: (location) => {
//     set((state) => ({
//       location,
//       pets: state.pets.map(pet => ({
//         ...pet,
//         location,
//       })),
//     }));
//   },

//   setCurrentPet: (petId) => set({ currentPetId: petId }),

//   setPetDetails: (petId, details) =>
//     set((state) => ({
//       pets: state.pets.map(pet => 
//         petId === pet.id
//           ? { ...pet, ...details }
//           : pet
//       ),
//     })),

//   addNewPet: ({ catOrDog, name }) => {
//     set((state) => {
//       const newPet: PetDetails = {
//         id: `pet_${Date.now()}`,
//         location: state.location,
//         catOrDog,
//         name,
//         gender: "", // Matches the union type "" | "male" | "female" | undefined
//         crossBreed: "",
//       };
//       return {
//         pets: [...state.pets, newPet],
//         currentPetId: newPet.id,
//       };
//     });
//     return `pet_${Date.now()}`;
//   },

//   removePet: (petId) =>
//     set((state) => {
//       const newPets = state.pets.filter(pet => pet.id !== petId);
//       const newCurrentPetId = state.currentPetId === petId ? newPets[0]?.id || null : state.currentPetId;
//       return {
//         pets: newPets,
//         currentPetId: newCurrentPetId,
//       };
//     }),

//   setSelectedPetIndex: (index) => set({ selectedPetIndex: index }),
// }));