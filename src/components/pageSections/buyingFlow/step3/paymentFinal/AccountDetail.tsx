"use client";

import Typography from "@/components/atoms/typography/Typography";
import AlertBar from "@/components/molecules/alertBar/AlertBar";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import { Button } from "@/components/ui/button";
import React,{ useState } from "react";
import ShippingDetail from "./ShippingDetail";
import { useUserStore } from "@/zustand/store/userDataStore";
import useAuthStore from "@/zustand/store/authDataStore";
import { useCreateUserHook } from "@/hooks/userHooks/createUserHook";

export default function AccountDetail() {

  const { userDetails, setUserDetails } = useUserStore();
  const { isAuthenticated, setIsAuthenticated } = useAuthStore();
  const { mutate } = useCreateUserHook();
  // const [ showShippingDetails, setShowShippingDetails ] = useState(false);
  const [ accountDetailsError, setAccountDetailsError ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);
  const [ selectedCheckBox, setSelectedCheckBox ] = useState(true);
  // const [ showContinueButton, setShowContinueButton ] = useState(true);
  // const [ isUserCreated, setIsUserCreated ] = useState(false);

  const [formData, setFormData] = useState({
    firstName: userDetails.firstName || "",
    lastName: userDetails.lastName || "",
    email: userDetails.emailAddress || "",
    mobile: userDetails.phoneNumber || "",
    password: userDetails.password || "",
    repeatPassword: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'firstName':
        if (!value.trim()) return 'First name is required';
        if (value.length < 2) return 'First name must be at least 2 characters';
        return '';
      case 'lastName':
        if (!value.trim()) return 'Last name is required';
        if (value.length < 2) return 'Last name must be at least 2 characters';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return '';
      case 'mobile':
        if (!value) return 'Mobile number is required';
        if (!/^[0-9]{10,15}$/.test(value)) return 'Please enter a valid mobile number (10-15 digits)';
        return '';
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/[A-Z]/.test(value)) return 'Must contain at least one uppercase letter';
        if (!/[a-z]/.test(value)) return 'Must contain at least one lowercase letter';
        if (!/[0-9]/.test(value)) return 'Must contain at least one number';
        return '';
      case 'repeatPassword':
        if (!value) return 'Please repeat your password';
        if (value !== formData.password) return 'Passwords do not match';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    if (name === "mobile" && /[^0-9]/.test(value)) {
      return; // Block input if non-numeric
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if the field has been touched
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    // Mark all fields as touched to show errors
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      mobile: true,
      password: true,
      repeatPassword: true
    });

    return isValid;
  };

  // const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowShippingDetails(true);
  // }

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    setIsLoading(true);

    if (validateForm()) {

      setUserDetails({
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.email,
        phoneNumber: formData.mobile,
        password: formData.password
      });

      mutate(
        {
          ...userDetails,
          firstname: formData.firstName,
          lastname: formData.lastName,
          emailId: formData.email,
          contactNo: formData.mobile,
          password: formData.password,
        },
        {
          onSuccess: (data) => {
            console.log("Create user successful", data);
            // setShowShippingDetails(true);
            setAccountDetailsError("");
            setIsLoading(false);
            console.log("User ID is",data.result.userId);
            setUserDetails({ ...userDetails, userId: data.result.userId });
            // setShowContinueButton(false);
            // setIsUserCreated(true);
            setIsAuthenticated(true);
          },
          onError: (error) => {
            console.error("Create user failed", error);
            setAccountDetailsError((error as { response?: { data?: { message?: string } } })?.response?.data?.message || "An unexpected error occurred");
            setIsLoading(false);
            // setIsUserCreated(false);
          },
          onSettled: () => {
            setIsLoading(false);
          },
        }
      );

    }
  };

  console.log("Form data is",formData);

  return (
    <div className="flex flex-col gap-[var(--space-30-60)]">

      <div>
        <Typography
          tag="h5"
          text="Account Details"
          className="uppercase text-primary-dark"
        />
        <Typography
          tag="h6"
          text="Easily manage your plan, deliveries and profile from your online account."
          className="!font-normal pr-2.5 text-primary-dark"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[var(--space-30-52)] pb-14 border-b border-secondary-2"
      >
        <InputLabeled 
          name="firstName"
          label="First Name" 
          placeholder="Enter your first name" 
          variant="roundedEdgeInput"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstName}
        />
        <InputLabeled
          name="lastName"
          label="Last Name" 
          placeholder="Enter your last name" 
          variant="roundedEdgeInput" 
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.lastName}
        />
        <InputLabeled
          name="email"
          label="Email Address" 
          placeholder="Enter your email address" 
          type="email"
          variant="roundedEdgeInput" 
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <InputLabeled 
          name="mobile"
          label="Mobile Number" 
          placeholder="Enter your mobile number" 
          type="tel"
          variant="roundedEdgeInput"
          value={formData.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.mobile} 
        />
        <AlertBar 
          text="Email me with exclusive offers, new arrival alerts and cart reminders."
          selectedCheckBox={selectedCheckBox}
          setSelectedCheckBox={setSelectedCheckBox}
        />

        {
          !isAuthenticated &&
          <>
            <InputLabeled 
              name="password"
              label="Password" 
              placeholder="Enter your password" 
              type="password"
              variant="roundedEdgeInput" 
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
            />
            <InputLabeled 
              name="repeatPassword"
              label="Repeat Password" 
              placeholder="Repeat your password" 
              type="password"
              variant="roundedEdgeInput" 
              value={formData.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.repeatPassword}
            />
          </>
        }

        {/* <InputLabeled 
          name="password"
          label="Password" 
          placeholder="Enter your password" 
          type="password"
          variant="roundedEdgeInput" 
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password}
        />
        <InputLabeled 
          name="repeatPassword"
          label="Repeat Password" 
          placeholder="Repeat your password" 
          type="password"
          variant="roundedEdgeInput" 
          value={formData.repeatPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.repeatPassword}
        /> */}

        { !isAuthenticated &&
            <Button 
              type="submit"
              className="w-full"
              disabled={ !(formData.firstName && formData.lastName && formData.email && formData.mobile && formData.password === formData.repeatPassword) }
              // onClick={handleContinue}
            >
              { isLoading ? "Loading..." : "Continue" }
            </Button>
        }
        
        <Typography
          tag="p"
          text={accountDetailsError}
          className="text-sm text-red-500 block"
        />
      </form>

      { isAuthenticated && <ShippingDetail /> }
      
    </div>
  );
}
