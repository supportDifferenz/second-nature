"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  isEmailVerified: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsEmailVerified: (isEmailVerified: boolean) => void;
}

const getAuthStatus = () => {
    if (typeof window === 'undefined') {
      return false; // Default for server-side
    }
    return !!localStorage.getItem("authAccessToken");
  };

const useAuthStore = create<AuthState, [["zustand/persist", AuthState]]>(
  persist(
    (set) => ({
      isAuthenticated: getAuthStatus(),
      isEmailVerified: false,
      login: (accessToken) => {
        // localStorage.setItem("authAccessToken", accessToken);
        if (typeof window !== 'undefined') {
            localStorage.setItem("authAccessToken", accessToken);
        }
        set({ isAuthenticated: true });
      },
      logout: () => {
        // localStorage.removeItem("authAccessToken");
        if (typeof window !== 'undefined') {
            localStorage.removeItem("authAccessToken");
        }
        set({ isAuthenticated: false });
      },
      setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
      setIsEmailVerified: (isEmailVerified: boolean) => set({ isEmailVerified }),
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;