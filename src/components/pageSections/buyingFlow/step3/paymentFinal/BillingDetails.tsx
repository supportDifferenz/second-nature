"use client";

import Typography from "@/components/atoms/typography/Typography";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
// import Payment from "./Payment";

interface BillingFormData {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  aptSuite: string;
  municipality: string;
}

interface BillingDetailsProps {
  billingFormData: BillingFormData;
  setBillingFormData: React.Dispatch<React.SetStateAction<BillingFormData>>;
  isSynced: boolean;
  billingErrors: Record<string, string>;
  setBillingErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  // isContinueButtonDisabled: boolean;
}

export default function BillingDetails({ billingFormData, setBillingFormData, isSynced, billingErrors, setBillingErrors }: BillingDetailsProps) {

  // const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // const [billingFormData, setBillingFormData] = useState<BillingFormData>({
  //   firstName: '',
  //   lastName: '',
  //   mobile: '',
  //   address: '',
  //   aptSuite: '',
  //   municipality: ''
  // });

  useEffect(() => {
    const updatedErrors: Record<string, string> = { ...billingErrors };
    let changed = false;
  
    Object.keys(billingErrors).forEach((key) => {
      const field = key as keyof BillingFormData;
      const currentError = validateField(field, billingFormData[field]);
      if (!currentError && billingErrors[field]) {
        delete updatedErrors[field];
        changed = true;
      }
    });
  
    if (changed) {
      setBillingErrors(updatedErrors);
    }
  }, [billingFormData]);
  

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
      case 'mobile':
        if (!value) return 'Mobile number is required';
        if (!/^[0-9]{10,15}$/.test(value)) return 'Please enter a valid mobile number (10-15 digits)';
        return '';
      case 'address':
        if (!value.trim()) return 'Address is required';
        if (value.length < 5) return 'Address must be at least 5 characters';
        return '';
      case 'municipality':
        if (!value.trim()) return 'Municipality is required';
        return '';
      default:
        return '';
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    // if (isSynced) return; // Prevent changes when synced
    const { name, value } = e.target;

    if (name === "mobile" && /[^0-9]/.test(value)) {
      return; // Block input if non-numeric
    }
    
    setBillingFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if the field has been touched
    if (touched[name]) {
      setBillingErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setBillingErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };
  
  // const validateForm = () => {
  //   const newErrors: Record<string, string> = {};
  //   let isValid = true;

  //   Object.keys(billingFormData).forEach(key => {
  //     if (key !== 'aptSuite') { // aptSuite is optional
  //       const error = validateField(key, billingFormData[key as keyof BillingFormData]);
  //       if (error) {
  //         newErrors[key] = error;
  //         isValid = false;
  //       }
  //     }
  //   });

  //   setErrors(newErrors);
  //   // Mark all fields as touched to show errors
  //   setTouched({
  //     firstName: true,
  //     lastName: true,
  //     mobile: true,
  //     address: true,
  //     aptSuite: true,
  //     municipality: true
  //   });

  //   return isValid;
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     // Proceed with shipping details submission
  //     console.log('Shipping details submitted:', billingFormData);
  //     setShowPaymentDetails(true);
  //   }
  // };

  // const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowPaymentDetails(true);
  // }

  return (
    <div className="flex flex-col gap-[var(--space-30-60)]">

      <Typography
        tag="h5"
        text="Billing Details"
        className="uppercase text-primary-dark"
      />
      <div className="flex flex-col gap-[var(--space-30-52)]  pb-14 border-b border-secondary-2">

        <InputLabeled
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          variant="roundedEdgeInput"
          value={billingFormData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={billingErrors.firstName}
          disabled={isSynced}
        />
        <InputLabeled
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          variant="roundedEdgeInput"
          value={billingFormData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={billingErrors.lastName}
          disabled={isSynced}
        />
        <InputLabeled
          name="mobile"
          label="Mobile Number"
          placeholder="Enter your mobile number"
          variant="roundedEdgeInput"
          type="tel"
          value={billingFormData.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          error={billingErrors.mobile}
          disabled={isSynced}
        />

        <div className="flex flex-col gap-[var(--space-8-17)]">
          <InputLabeled
            name="address"
            label="Address"
            placeholder="Address*"
            variant="roundedEdgeInput"
            value={billingFormData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            error={billingErrors.address}
            disabled={isSynced}
          />
          <InputLabeled
            name="aptSuite"
            variant='roundedEdgeInput' 
            placeholder='Apt, Suite*' 
            className='bg-white'
            value={billingFormData.aptSuite}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSynced}
          />
          {/* <Input
            variant="roundedEdgeInput"
            placeholder="Apt, Suite*"
            className="bg-white"
          /> */}
          <InputLabeled
            name="municipality"
            variant='roundedEdgeInput' 
            placeholder='Municipality*' 
            className='bg-white'
            value={billingFormData.municipality}
            onChange={handleChange}
            onBlur={handleBlur}
            error={billingErrors.municipality}
            disabled={isSynced}
          />
          {/* <Input
            variant="roundedEdgeInput"
            placeholder="Municipality*"
            className="bg-white"
          /> */}
        </div>
        {/* <Button
          type="submit"
          className="w-full"
          disabled={isContinueButtonDisabled}
          // onClick={handleContinue}
        >
          Continue
        </Button> */}
      </div>

    </div>
  );
}
