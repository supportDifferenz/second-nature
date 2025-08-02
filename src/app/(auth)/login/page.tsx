"use client";

import Typography from "@/components/atoms/typography/Typography";
import AuthLayout from "@/components/templates/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useUserLoginHook } from "@/hooks/authHooks/loginUserHook";
import { useRouter } from "next/navigation";
import useAuthStore from "@/zustand/store/authDataStore";
import { loginSchema } from "@/schemas/authSchemas/loginSchema";
import { useUserStore } from "@/zustand/store/userDataStore";
import { startTransition } from "react";

interface LoginData {
  userName?: string;
  emailId: string;
  password: string;
  isWhatsapp?: boolean;
  isSubscribe?: boolean;
}

interface ApiError {
  response?: {
    data?: {
      message: string;
    };
  };
  message?: string;
}

export default function Page() {

  const router = useRouter()

  const { mutate, isError, error } = useUserLoginHook();
  const { userDetails, setUserDetails } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<LoginData>({
    userName: "string",
    emailId: "",
    password: "",
    isWhatsapp: true,
    isSubscribe: true,
  });

  const [formErrors, setFormErrors] = useState<{
    emailId?: string;
    password?: string;
  }>({});

  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate using Zod schema
    const validationResult = loginSchema.safeParse({
      emailId: formData.emailId,
      password: formData.password,
    });
    
    if (!validationResult.success) {
      const zodErrors = validationResult.error.flatten().fieldErrors;
      setFormErrors({
        emailId: zodErrors.emailId?.[0],
        password: zodErrors.password?.[0],
      });
      return;
    }
    
    setIsLoading(true);
    mutate(
      {
        userName: "string", // Still hardcoded
        emailId: formData.emailId,
        password: formData.password,
        isWhatsapp: true,
        isSubscribe: true,
      },
      {
        onSuccess: (data) => {
          console.log("Login successful", data);
          const token = data?.result?.token;
          if (token) {
            login(token);
            console.log("Token stored in Zustand store is", token);
          }

          setUserDetails({
            userId: data?.result?.userId,
            firstName: data?.result?.firstname,
            lastName: data?.result?.lastname,
            emailAddress: data?.result?.emailId,
            phoneNumber: data?.result?.contactNo,
          })

          startTransition(() => {
            router.push("/personal-information");
          })
          // router.push("/personal-information");
        },
        onError: (error) => {
          console.error("Login failed", error);
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  //   // Clear error when user types
  //   if (formErrors[name as keyof typeof formErrors]) {
  //     setFormErrors(prev => ({
  //       ...prev,
  //       [name]: ""
  //     }));
  //   }
  // };

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // const result = nameEmailSchema.safeParse(formData);
  //   // if (!result.success) {
  //   //   const fieldErrors = result.error.flatten().fieldErrors;
  //   //   setErrors({
  //   //     name: fieldErrors.name?.[0],
  //   //     email: fieldErrors.email?.[0],
  //   //   });
  //   //   return;
  //   // }
  //   mutate(
  //     {
  //       // name: formData.name,
  //       // email: formData.email || "",
  //       // mobile: mobileNumber,
  //       // isSubscribed,
  //       // isRegistered,
  //       userName: "string",
  //       emailId: "suji@diffrenz.com",
  //       password: "suji@123",
  //       isWhatsapp: true,
  //       isSubscribe: true
  //     },
  //     {
  //       onSuccess: () => {
  //         // setUserName(formData.name);
  //         // setEmail(formData.email || "");
  //         // if (token) {
  //         //   login(token);
  //         // }
  //         // navigate(lastVisitedPage);
  //       },
  //     }
  //   );
  // };

  // async function loginUser() {
  //   const url = 'http://194.233.76.88:8092/api/user/login';
  //   const data = {
  //     userName: "string",
  //     emailId: "suji@diffrenz.com",
  //     password: "suji@123",
  //     isWhatsapp: true,
  //     isSubscribe: true,
  //     additionalProp1: {}
  //   };
  
  //   try {
  //     const response = await fetch(url, {
  //       method: 'POST',
  //       headers: {
  //         'accept': 'application/json',
  //         'apikey': 'a',
  //         'clientkey': 'a',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(data)
  //     });
  
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  
  //     const result = await response.json();
  //     console.log('Success:', result);
  //     return result;
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
  
  // Call the function
  // loginUser();

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   // Basic validation
  //   const errors = {
  //     emailId: !formData.emailId ? "Email is required" : "",
  //     password: !formData.password ? "Password is required" : "",
  //   };
    
  //   setFormErrors(errors);
    
  //   if (Object.values(errors).some(error => error)) return;
  //   setIsLoading(true);
  //   mutate(
  //     {
  //       userName: "string", // Still hardcoded - should this be dynamic?
  //       emailId: formData.emailId,
  //       password: formData.password,
  //       isWhatsapp: true,
  //       isSubscribe: true
  //     },
  //     {
  //       onSuccess: (data) => {
  //         // Handle successful login
  //         console.log("Login successful", data);
  //         const token = data?.result?.token;
  //         if(token){
  //           login(token);
  //           console.log("Token stored in Zustand store is", token);
  //         }
  //         router.push("/personal-information")
  //       },
  //       onError: (error) => {
  //         // API errors are already available via the error from useUserLoginHook
  //         console.error("Login failed", error);
  //       },
  //       onSettled: () => {
  //         setIsLoading(false);
  //       }
  //     }
  //   );
  // };

  console.log("User details in login page", userDetails);
  
  return (
    <AuthLayout>
      <div className="flex flex-col justify-between bg-[#F3F5E8] h-full lg:w-[31.25vw] rounded-2xl p-6 sm:p-12 lg:px-10 lg:py-15 cursor-default">
        <div className="flex flex-col text-center sm:text-start border-b border-[#A1A1A1] pb-[var(--space-20-57)] ">
          <div className=" pb-[30px]">
            <Typography
              tag="h3"
              text="Welcome!"
              className="font-bold text-primary-dark"
            />
            <Typography
              tag="h3"
              text="Login to Your Account"
              className="highlight font-bold text-primary-dark lg:-mt-1.5"
            />
            {/* <Typography tag="p" text="Magic is Pawsible!" className="!text-[#9B9B9B] mt-2 sm:mt-2 lg:mt-3" /> */}
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-2 sm:pr-7 pb-4 sm:pb-2">
              <Input 
                variant="roundedEdgeInput" 
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleInputChange}
                placeholder="Enter your mail" />
                {formErrors.emailId && (
                  <Typography tag="span" text={formErrors.emailId} className="text-red-500" />
                )}
                <Input
                  variant="roundedEdgeInput"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                />
                {formErrors.password && (
                  <Typography tag="span" text={formErrors.password} className="text-red-500" />
                )}
                {isError && (
                <Typography 
                  tag="span" 
                  text={(error as ApiError)?.response?.data?.message || "Login failed. Please try again."} 
                  className="text-red-500" 
                />
              )}
            </div>
            <div
              className="!cursor-pointer"
              onClick={() => startTransition(() => router.push("/reset-password"))}
            >
              <Typography 
                tag="span" 
                text="Forgot Password" 
                className="underline text-[#9B9B9B]"
              />
            </div>
            <Button
              size={"small"}
              variant={"primaryBtn"}
              className="mt-[var(--space-34-38)] mx-auto sm:ml-0"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
        <div className="flex flex-row sm:flex-col mt-2 lg:mt-4   max-sm:justify-center">
          <Typography
            tag="h6"
            text="Don’t have an account?"
            className="!font-medium text-primary-dark"
          />
          <div onClick={() => { 
            if(isAuthenticated) {
              startTransition(() => router.push("/location"));
            } else {
              startTransition(() => router.push("/user-details"));
            }
          }}>
            <Typography
              tag="h6"
              text="Build your plan"
              className="underline text-primary-dark max-sm:ml-1 mt-0.5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
