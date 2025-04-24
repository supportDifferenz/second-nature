import { userAxiosInstance } from "../axiosInstance";

export const userLogin = async (formData: {
    "userName": string;
    "emailId": string; 
    "password": string;
    "isWhatsapp": boolean;
    "isSubscribe": boolean;
}) => {
    
    console.log("formData", formData);

    try {
        const response = await userAxiosInstance.post(
          "/api/user/login",
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
          console.error("Error submitting contact form:", error);
          throw error;
      }
  };

// export const userLogin = async ({
//     userName,
//     emailId,
//     password,
//     isWhatsapp,
//     isSubscribe,
//     // additionalProp1
//   }: {
//     userName: string;
//     emailId: string;
//     password: string;
//     isWhatsapp: boolean;
//     isSubscribe: boolean;
//     // additionalProp1: {};
//   }) => {
//     const { data } = await userAxiosInstance.post("/api/user/login", {
//       userName,
//       emailId,
//       password,
//       isWhatsapp,
//       isSubscribe,
//     });
//     // const otp = data.result;
//     return data.result;
//   };