"use client";

import { createPet } from "../../services/api/subscriptionApis"
import { useMutation } from "@tanstack/react-query";
import { QUERY_KEYS } from "../queryKeys";

export const useCreatePetHook = () => {
    return useMutation({
      mutationKey: [QUERY_KEYS.CREATE_PET],
      mutationFn: async ({
        user_id,
        name,
        type,
        gender,
        location,
        dateOfBirth,
        ageMonth,
        ageYear,
        breed,
        crossBreeds,
        activityLevel,
        currentWeight,
        targetWeight,
        plan: {
            type: planType,
            duration: planDuration,
            price: planPrice,
            protein: planProtein,
            bowlSize: planBowlSize,
        },
      }: {
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
      }) => {
        const plan = {
          type: planType,
          duration: planDuration,
          price: planPrice,
          protein: planProtein,
          bowlSize: planBowlSize,
        };
        return createPet({ 
          user_id,
          name,
          type,
          gender,
          location,
          dateOfBirth,
          ageMonth,
          ageYear,
          breed,
          crossBreeds,
          activityLevel,
          currentWeight,
          targetWeight,
          plan,
        });
      },
    });
  };