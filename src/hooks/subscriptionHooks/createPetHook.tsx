"use client";

import { createPet } from "../../services/api/subscriptionApis";
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

interface PetData {
  user_id: string;
  name: string;
  type: string;
  gender: string;
  location: string;
  dateOfBirth: string;
  ageMonth: number;
  ageYear: number;
  breed: string;
  crossBreeds: string[];
  activityLevel: string;
  currentWeight: number;
  targetWeight: number;
  plan: {
    type: string;
    duration: string;
    price: number;
    protein: string;
    bowlSize: string;
  };
}

export const useCreatePetHook = () => {
  return useMutation({
    mutationKey: [QUERY_KEYS.CREATE_PET],
    mutationFn: async (petData: PetData) => {
      return createPet(petData);
    },
  });
};