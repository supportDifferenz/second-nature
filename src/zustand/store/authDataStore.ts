"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  login: (accessToken: string) => void;
  logout: () => void;
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
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;