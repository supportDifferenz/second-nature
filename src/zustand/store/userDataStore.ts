import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserDetails = {
  userId: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  shippingDetails: ShippingDetails;
  billingDetails: BillingDetails;
};

interface ShippingDetails {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  aptSuite: string;
  municipality: string;
}

interface BillingDetails {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  aptSuite: string;
  municipality: string;
  useDifferentBilling: boolean;
}

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
        userId: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        password: "",
        shippingDetails: {
          firstName: "",
          lastName: "",
          mobile: "",
          address: "",
          aptSuite: "",
          municipality: "",
        },
        billingDetails: {
          firstName: "",
          lastName: "",
          mobile: "",
          address: "",
          aptSuite: "",
          municipality: "",
          useDifferentBilling: true,
        },
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
            userId: "",
            firstName: "",
            lastName: "",
            emailAddress: "",
            phoneNumber: "",
            password: "",
            shippingDetails: {
              firstName: "",
              lastName: "",
              mobile: "",
              address: "",
              aptSuite: "",
              municipality: "",
            },
            billingDetails: {
              firstName: "",
              lastName: "",
              mobile: "",
              address: "",
              aptSuite: "",
              municipality: "",
              useDifferentBilling: true,
            },
          }
        })
    }),
    {
      name: 'user-store', // unique name for localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);