import { subscriptionAxiosInstance } from "../axiosInstance";

export const getBreedDetails = async (catOrDog: string) => {
    
    try {
        const response = await subscriptionAxiosInstance.get(
          `/api/subscription/customerAddress/${catOrDog}`,
      );
        return response.data;
      } catch (error) {
          console.error("Error in getting breed details", error);
          throw error;
      }
  };