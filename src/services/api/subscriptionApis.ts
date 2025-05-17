import { subscriptionAxiosInstance } from "../axiosInstance";

export const getBreedDetails = async (catOrDog: string) => {
  try {
      const response = await subscriptionAxiosInstance.get(
        `/api/subscription/${catOrDog}`,
    );
      return response.data;
    } catch (error) {
        console.error("Error in getting breed details", error);
        throw error;
    }
};

export const getCrossBreedDetails = async (catOrDog: string) => {
  try {
      const response = await subscriptionAxiosInstance.get(
        `/api/subscription/${catOrDog}`,
    );
      return response.data;
    } catch (error) {
        console.error("Error in getting breed details", error);
        throw error;
    }
};

export const createAddress = async (formData: {
    user_id: string;
    shippingAddress: Array<{
      firstName: string;
      lastName: string;
      contactNo: string;
      address: string;
      aptSuite: string;
      municipality: string;
    }>;
    billingAddress: Array<{
      firstName: string;
      lastName: string;
      contactNo: string;
      address: string;
      aptSuite: string;
      municipality: string;
      useDifferentBilling: boolean;
    }>;
    // isActive?: boolean;
    // isDeleted?: boolean;
    // createdOn?: string;
    // modifiedOn?: string;
    // additionalProp1?: Record<string, unknown>;
}) => {
  
console.log("formData", formData);

try {
    const response = await subscriptionAxiosInstance.post(
      "/api/subscription/createAddress",
      formData
    //   {
    //       headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //         "Authorization": "Basic Y2tfNWFkNGU4OTA2NGZiYmQ2ZjEyZWEwYWNiNDgwYTFiZGI2YTBmODMwZTpjc19iNGMxYjk4MDgxMWFmYmI3YTEzMGY0YmQzOWMyNDdjMDVhYzNkNzM4"
    //       },
    //   }
  );
    return response.data;
  } catch (error) {
      console.error("Error in create address", error);
      throw error;
  }
};

export const getAllPlan = async () => {
  
try {
    const response = await subscriptionAxiosInstance.post(
      "/api/subscription/plan/getAllplan",
  );
    return response.data;
  } catch (error) {
      console.error("Error in getting all plan details", error);
      throw error;
  }
};

export const getAllProtein = async () => {
  
try {
    const response = await subscriptionAxiosInstance.post(
      "/api/subscription/protein/getAllProtein",
  );
    return response.data;
  } catch (error) {
      console.error("Error in getting all protein details", error);
      throw error;
  }
};

export const getAllBowl = async () => {
  
try {
    const response = await subscriptionAxiosInstance.post(
      "/api/subscription/bowl/getAllbowl",
  );
    return response.data;
  } catch (error) {
      console.error("Error in getting all bowl details", error);
      throw error;
  }
};

export const getPrice = async (formData: {
    weight: number;
    proteinType: string;
    activityLevel: string;
    bowlSize: string;
    planType: string;
}) => {
  
console.log("Formdata in getPrice", formData);

try {
    const response = await subscriptionAxiosInstance.post(
      "/api/subscription/setting/getPrice",
      formData
  );
    return response.data;
  } catch (error) {
      console.error("Error in getting price", error);
      throw error;
  }
};

export const getAddressById= async (userId: string) => {
  
try {
    const response = await subscriptionAxiosInstance.get(
      `/api/subscription/getAddressById/${userId}`,
  );
    return response.data;
  } catch (error) {
      console.error("Error in getting address by id", error);
      throw error;
  }
};

export const getPromoOffer= async (promoCode: string) => {
  
try {
    const response = await subscriptionAxiosInstance.get(
      `/api/subscription/promocode/getpromocodeByCode/${promoCode}`,
  );
    return response.data;
  } catch (error) {
      console.error("Error in getting promo offer", error);
      throw error;
  }
};

export const createPet = async (formData: {
    user_id: string;
    name: string;
    type: string;
    gender: string;
    location: string;
    dateOfBirth: string;
    ageMonth: number;
    ageYear: number;
    breed: string;
    crossBreeds: Array<string>;
    activityLevel: string;
    currentWeight: number;
    targetWeight: number;
    plan: {
      type: string;
      duration: string;
      price: number;
      protein: string;
      bowlSize: string;
    }
}) => {
  
console.log("formData", formData);

try {
    const response = await subscriptionAxiosInstance.post(
      "api/subscription/createPet",
      formData
  );
    return response.data;
  } catch (error) {
      console.error("Error in create pet", error);
      throw error;
  }
};