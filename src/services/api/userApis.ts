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