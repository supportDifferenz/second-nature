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

export const getCrossBreedDetails = async (catOrDog: string) => {
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
      "/api/subscription/customerAddress/createAddress",
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