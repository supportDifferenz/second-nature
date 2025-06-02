import { userAxiosInstance } from "../axiosInstance";

export const createUser = async (formData: {
    "firstname": string;
    "lastname": string;
    "emailId": string;
    "contactNo": string;
    "password": string;
    // "userName": string;
    // "emailId": string; 
    // "password": string;
    // "isWhatsapp": boolean;
    // "isSubscribe": boolean;
}) => {
    
  console.log("formData", formData);

  try {
      const response = await userAxiosInstance.post(
        "/api/user/createUser",
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
        console.error("Error in user login", error);
        throw error;
    }
};

export const getUserDetails = async (userId: string) => {
  try {
      const response = await userAxiosInstance.get(
        `/api/user/getCustomerById/${userId}`
    );
      return response.data;
    } catch (error) {
        console.error("Error in getting user details", error);
        throw error;
    }
};

export const updateUser = async (
  userId: string,
  formData: {
    firstname: string;
    lastname: string;
    emailId: string;
    alternativeEmail: string;
    contactNo: string;
    alternativeMobile: string;
  }
) => {
  console.log("formData", formData);

  try {
    const response = await userAxiosInstance.put(
      `/api/user/${userId}`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error in updating user details", error);
    throw error;
  }
};

export const changePassword = async ({
  userId,
  currentPassword,
  newPassword,
  confirmNewPassword,
}: {
  userId: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}) => {
  try {
    const response = await userAxiosInstance.post(
      `/api/user/changePassword/${userId}`,
      {
        currentPassword,
        newPassword,
        confirmNewPassword,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in changing password", error);
    throw error;
  }
};