"use client";

import Typography from "@/components/atoms/typography/Typography";
import { InputLabeled } from "@/components/molecules/inputLabeled/InputLabeled";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // Add this import if using Next.js
// import Payment from "./Payment";

interface BillingFormData {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  aptSuite: string;
  municipality: string;
  useDifferentBilling: boolean;
}

interface FormErrors {
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
  billingErrors: FormErrors;
  setBillingErrors: React.Dispatch<React.SetStateAction<FormErrors>>;  // isContinueButtonDisabled: boolean;
  isBillingEditEnabled: boolean;
  setIsBillingEditEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  showEditBillControl: boolean;
}

export default function BillingDetails({ billingFormData, setBillingFormData, isSynced, billingErrors, setBillingErrors, isBillingEditEnabled, setIsBillingEditEnabled, showEditBillControl }: BillingDetailsProps) {

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
    const updatedErrors: FormErrors = {
      firstName: billingErrors.firstName,
      lastName: billingErrors.lastName,
      mobile: billingErrors.mobile,
      address: billingErrors.address,
      aptSuite: billingErrors.aptSuite,
      municipality: billingErrors.municipality,
    };
    let changed = false;
  
    (Object.keys(billingErrors) as (keyof FormErrors)[]).forEach((key) => {
      const field = key as keyof BillingFormData;
      const value = billingFormData[field];

      // Ensure we only validate string fields
      if (typeof value === 'string') {
        const currentError = validateField(field, value);
        if (!currentError && billingErrors[key]) {
          updatedErrors[key] = '';
          changed = true;
        }
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
        if (value.length < 1) return 'Last name must be at least 1 character';
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

    if (name === "mobile") {
      const numbersOnly = value.replace(/\D/g, '').slice(0, 15);
      setBillingFormData(prev => ({ ...prev, [name]: numbersOnly }));
      if (touched[name]) {
        setBillingErrors(prev => ({ ...prev, [name]: validateField(name,numbersOnly) }));
      }
      return;
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

      <div className="flex justify-between">
        <Typography
          tag="h5"
          text="Billing Details"
          className="uppercase text-primary-dark"
        />

        <div className="flex flex-row items-center">

          {
            showEditBillControl && (
              <>
                {
                  !isSynced && (
                    <>
                      {
                        !isBillingEditEnabled && (
                          <Button 
                            variant={"nullBtn"} 
                            className="text-secondary-1"
                            onClick={() => setIsBillingEditEnabled(true)}
                          >
                            <Image
                              src="/icons/edit.svg"
                              alt="Edit"
                              width={24}
                              height={24}
                              className="!static w-full object-contain"
                            />
                            Edit
                          </Button>
                        )
                      }
                      {
                        isBillingEditEnabled && (
                          <Button 
                            variant={"nullBtn"} 
                            className="text-secondary-1 ml-3"
                            onClick={() => setIsBillingEditEnabled(false)}
                          >
                            Exit
                          </Button>
                        )
                      }
                    </>
                  )
                }
              </>
            )
          }
          
        </div>
        
      </div>
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
          // disabled={isSynced && !isBillingEditEnabled}
          disabled={!isBillingEditEnabled}
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
          // disabled={isSynced && !isBillingEditEnabled}
          disabled={!isBillingEditEnabled}
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
          // disabled={isSynced && !isBillingEditEnabled}
          disabled={!isBillingEditEnabled}
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
            // disabled={isSynced && !isBillingEditEnabled}
            disabled={!isBillingEditEnabled}
          />
          <InputLabeled
            name="aptSuite"
            variant='roundedEdgeInput' 
            placeholder='Apt, Suite*' 
            className='bg-white'
            value={billingFormData.aptSuite}
            onChange={handleChange}
            onBlur={handleBlur}
            error={billingErrors.aptSuite}
            // disabled={isSynced && !isBillingEditEnabled}
            disabled={!isBillingEditEnabled}
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
            // disabled={isSynced && !isBillingEditEnabled}
            disabled={!isBillingEditEnabled}
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
