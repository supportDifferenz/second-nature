import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserDetails = {
  name: string;
  email: string;
};

type UserStore = {
  userDetails: UserDetails;
  
  // Actions
  setUserDetails: (details: Partial<UserDetails>) => void;
  clearUserDetails: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userDetails: {
        name: "",
        email: ""
      },
      
      // Set partial user details (can update just name or just email)
      setUserDetails: (details) => 
        set((state) => ({
          userDetails: {
            ...state.userDetails,
            ...details
          }
        })),
      
      // Reset user details to initial state
      clearUserDetails: () => 
        set({
          userDetails: {
            name: "",
            email: ""
          }
        })
    }),
    {
      name: 'user-store', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);