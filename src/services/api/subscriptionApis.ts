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
      useDifferentBilling?: boolean;
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
      `/api/subscription/getAddressByUserId/${userId}`,
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

export const createSubscription = async (formData: {
    user_id: string;
    account: {
      firstName: string;
      lastName: string;
      email: string;
      mobileNumber: string;
      password: string;
    },
    shippingDetails: {
      firstName: string;
      lastName: string;
      contactNo: string;
      address: string;
      aptSuite: string;
      municipality: string;
    },
    billingDetails: {
      firstName: string;
      lastName: string;
      contactNo: string;
      address: string;
      aptSuite: string;
      municipality: string;
      useDifferentBilling: boolean;
    },
    subscriptiondate: string;
    promoCode: string;
    subscribeToOffers: boolean;
    pets: Array<{
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
      activityLevel?: string;
      currentWeight: number;
      targetWeight: number;
      plan: {
        type: string;
        duration: string;
        price: number;
        protein: string;
        bowlSize: string;
        planStatus: string;
        isChangedprotein: boolean;
        isDowngrade: boolean;
        isUpgrade: boolean;
      };
    }>;
    payment: {
      method: string;
      cardNumber: string;
      cardExpiry: string;
      cardCVV: string;
    }
    isDeleted: boolean;
}) => {
  
console.log("formData", formData);

try {
    const response = await subscriptionAxiosInstance.post(
      "/api/subscription/createSubscription",
      formData
  );
    return response.data;
  } catch (error) {
      console.error("Error in create subscription", error);
      throw error;
  }
};

export const updateAddressById = async (
  addressId: string,
  subId: string,
  type: string,
  formData: {
    shippingAddress: {
      firstName: string;
      lastName: string;
      contactNo: string;
      address: string;
      aptSuite: string;
      municipality: string;
    },
    billingAddress: {
      firstName: string;
      lastName: string;
      contactNo: string;
      address: string;
      aptSuite: string;
      municipality: string;
      useDifferentBilling?: boolean;
    }
  }
) => {
  console.log("formData in update address by ID", formData);

  try {
    const response = await subscriptionAxiosInstance.put(
      `/api/subscription/updateAddressById/${addressId}/${subId}/${type}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error in updating address details", error);
    throw error;
  }
};

export const getPetDetailsByUserId = async (userId: string) => {
  try {
      const response = await subscriptionAxiosInstance.get(
        `/api/subscription/getPetByUserId/${userId}`,
    );
      return response.data;
    } catch (error) {
        console.error("Error in getting pet details", error);
        throw error;
    }
};

export const updatePetByPetId = async (
  {
    petId,
    formData,
  } : {
    petId: string;
    formData: {
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
    }
  }
) => {
  
console.log("formData", formData);

try {
    const response = await subscriptionAxiosInstance.put(
      `/api/subscription/updatePetById/${petId}`,
      formData
  );
    return response.data;
  } catch (error) {
      console.error("Error in updating pet details", error);
      throw error;
  }
};

export const getSubscriptionDetailsByUserId = async (userId: string) => {
  try {
      const response = await subscriptionAxiosInstance.get(
        `/api/subscription/getSubscriptionByUserId/${userId}`,
    );
      return response.data;
    } catch (error) {
        console.error("Error in getting subscription details", error);
        throw error;
    }
};

export const getSubscriptionDetailsBySubIdAndPetId = async (subId: string, petId: string) => {
  try {
      const response = await subscriptionAxiosInstance.get(
        `/api/subscription/getSubscriptionById/${subId}/${petId}`,
    );
      return response.data;
    } catch (error) {
        console.error("Error in getting subscription details by pet ID and subscription ID", error);
        throw error;
    }
};

export const getInvoiceBySubIdAndPetId = async (subId: string, petId: string) => {
  try {
      const response = await subscriptionAxiosInstance.get(
        `/api/subscription/invoiceGeneration/${subId}/${petId}`,
    );
      return response.data;
    } catch (error) {
        console.error("Error in getting invoice details by pet ID and subscription ID", error);
        throw error;
    }
};

export const changeProteinBySubIdPetIdUserId = async (
  {
    subId,
    petId,
    userId,
    proteinType,
  } : {
    subId: string;
    petId: string;
    userId: string;
    proteinType: string;
  }
) => {
  

try {
    const response = await subscriptionAxiosInstance.post(
      `/api/subscription/changeProtein/${subId}/${petId}/${userId}`,
      { "proteinType": proteinType }
  );
    return response.data;
  } catch (error) {
      console.error("Error in change protein", error);
      throw error;
  }
};

export const upgradePlanBySubIdPetIdUserId = async (
  {
    subId,
    petId,
    userId,
    upgradeReason,
  } : {
    subId: string;
    petId: string;
    userId: string;
    upgradeReason: string;
  }
) => {
  

try {
    const response = await subscriptionAxiosInstance.post(
      `/api/subscription/upgradePlan/${subId}/${petId}/${userId}`,
      upgradeReason
  );
    return response.data;
  } catch (error) {
      console.error("Error in upgrading plan", error);
      throw error;
  }
};

export const downgradePlanBySubIdPetIdUserId = async (
  {
    subId,
    petId,
    userId,
    downgradeReason,
  } : {
    subId: string;
    petId: string;
    userId: string;
    downgradeReason: string;
  }
) => {
  

try {
    const response = await subscriptionAxiosInstance.post(
      `/api/subscription/downgradePlan/${subId}/${petId}/${userId}`,
      downgradeReason
  );
    return response.data;
  } catch (error) {
      console.error("Error in downgrading plan", error);
      throw error;
  }
};

export const pausePlanBySubIdPetIdUserId = async (
  {
    subId,
    petId,
    userId,
    formData,
  } : {
    subId: string;
    petId: string;
    userId: string;
    formData: {
      pauseReason: string;
      weeks: number;
      startDate: string;
      endDate: string;
    }
  }
) => {
  

try {
    const response = await subscriptionAxiosInstance.post(
      `/api/subscription/pausePlan/${subId}/${petId}/${userId}`,
      formData
  );
    return response.data;
  } catch (error) {
      console.error("Error in pause plan", error);
      throw error;
  }
};

export const cancelPlanBySubIdPetIdUserId = async (
  {
    subId,
    petId,
    userId,
    formData,
  } : {
    subId: string;
    petId: string;
    userId: string;
    formData: {
      cancelReason: string;
    }
  }
) => {
  

try {
    const response = await subscriptionAxiosInstance.post(
      `/api/subscription/cancelPlan/${subId}/${petId}/${userId}`,
      formData
  );
    return response.data;
  } catch (error) {
      console.error("Error in updating pet details", error);
      throw error;
  }
};