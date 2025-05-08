"use client";

import Typography from '@/components/atoms/typography/Typography'
import AlertBar from '@/components/molecules/alertBar/AlertBar'
import { InputLabeled } from '@/components/molecules/inputLabeled/InputLabeled'
// import { Input } from '@/components/ui/input'
import React,{ useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import BillingDetails from './BillingDetails'
import Payment from './Payment';
import { useUserStore } from '@/zustand/store/userDataStore';
import { useCreateAddressHook } from '@/hooks/subscriptionHooks/createAddressHook';

interface ShippingFormData {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  aptSuite: string;
  municipality: string;
}

export interface BillingFormData {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  aptSuite: string;
  municipality: string;
  useDifferentBilling: boolean;
}

export default function ShippingDetail() {

  // const [ showBillingDetails, setShowBillingDetails ] = useState(false);

  // const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowBillingDetails(false);
  // }

  const { userDetails, setUserDetails } = useUserStore();
  const { mutate } = useCreateAddressHook();
  const [selectedCheckBox, setSelectedCheckBox] = useState(true);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [ showPaymentDetails, setShowPaymentDetails ] = useState(false);
  const [ isSubmittingAddress, setIsSubmittingAddress ] = useState(false);

  const [shippingFormData, setShippingFormData] = useState<ShippingFormData>({
    firstName: '',
    lastName: '',
    mobile: '',
    address: '',
    aptSuite: '',
    municipality: ''
  });

  const [billingFormData, setBillingFormData] = useState<BillingFormData>({
    firstName: '',
    lastName: '',
    mobile: '',
    address: '',
    aptSuite: '',
    municipality: '',
    useDifferentBilling: true,
  });

  const [shippingErrors, setShippingErrors] = useState<Record<string, string>>({
    firstName: '',
    lastName: '',
    mobile: '',
    address: '',
    aptSuite: '',
    municipality: ''
  });
  const [billingErrors, setBillingErrors] = useState<Record<string, string>>({
    firstName: '',
    lastName: '',
    mobile: '',
    address: '',
    aptSuite: '',
    municipality: '',
  });

  // const isContinueButtonDisabled = shippingFormData.firstName === '' || shippingFormData.lastName === '' || shippingFormData.mobile === '' || shippingFormData.address === '' || shippingFormData.municipality === '' || billingFormData.firstName === '' || billingFormData.lastName === '' || billingFormData.mobile === '' || billingFormData.address === '' || billingFormData.municipality === '' || ( shippingErrors.firstName !== '' || shippingErrors.lastName !== '' || shippingErrors.mobile !== '' || shippingErrors.address !== '' || shippingErrors.municipality !== '' || shippingErrors.aptSuite !== '' || billingErrors.firstName !== '' || billingErrors.lastName !== '' || billingErrors.mobile !== '' || billingErrors.address !== '' || billingErrors.municipality !== '' || billingErrors.aptSuite !== '');

  console.log('Shipping form data in checkout page is', shippingFormData);
  console.log('Shipping errors in checkout page is', shippingErrors);
  console.log('Billing form data in checkout page is', billingFormData);
  console.log('Billing errors in checkout page is', billingErrors);

  // Sync billing data when checkbox is unchecked
  useEffect(() => {
    if (!selectedCheckBox) {
      setBillingFormData({ ...shippingFormData, useDifferentBilling: false });
    } else if(selectedCheckBox) {
      setBillingFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        address: "",
        aptSuite: "",
        municipality: "",
        useDifferentBilling: true,
      });
    }
  }, [selectedCheckBox]);

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
      case 'aptSuite':
        if (!value.trim()) return 'Apartment or Suite is required';
        if (value.length < 2) return 'Apartment/Suite must be at least 2 characters';
        return '';
      case 'municipality':
        if (!value.trim()) return 'Municipality is required';
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

    setShippingFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if the field has been touched
    if (touched[name]) {
      setShippingErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    }

  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setShippingErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateShippingForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(shippingFormData).forEach(key => {
        const error = validateField(key, shippingFormData[key as keyof ShippingFormData]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
    });

    setShippingErrors(newErrors);
    // Mark all fields as touched to show errors
    setTouched({
      firstName: true,
      lastName: true,
      mobile: true,
      address: true,
      aptSuite: true,
      municipality: true
    });

    return isValid;
  };

  const validateBillingForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(billingFormData).forEach(key => {
      if (key !== 'isUseDifferentBilling') {
        const error = validateField(key, billingFormData[key as keyof ShippingFormData]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    setBillingErrors(newErrors);
    // Mark all fields as touched to show errors
    setTouched({
      firstName: true,
      lastName: true,
      mobile: true,
      address: true,
      aptSuite: true,
      municipality: true
    });

    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const shippingValid = validateShippingForm();
    const billingValid = validateBillingForm();

    if(shippingValid && billingValid) {

      // Proceed with shipping details submission
      console.log('Shipping details submitted:', shippingFormData);
      setShowPaymentDetails(true);
      setIsSubmittingAddress(true);

      setUserDetails({
        ...userDetails,
        shippingDetails: shippingFormData,
        billingDetails: billingFormData,
      })

      mutate({
        user_id: userDetails.userId,
        shippingAddress: [{
          firstName: shippingFormData.firstName,
          lastName: shippingFormData.lastName,
          contactNo: shippingFormData.mobile,
          address: shippingFormData.address,
          aptSuite: shippingFormData.aptSuite,
          municipality: shippingFormData.municipality,
        }],
        billingAddress: [{
          firstName: billingFormData.firstName,
          lastName: billingFormData.lastName,
          contactNo: billingFormData.mobile,
          address: billingFormData.address,
          aptSuite: billingFormData.aptSuite,
          municipality: billingFormData.municipality,
          useDifferentBilling: billingFormData.useDifferentBilling,
        }],
      },
    {
      onSuccess: (data) => {
        console.log('User details updated successfully:', data);
        setIsSubmittingAddress(false);
      },
      onError: (error) => {
        console.error('Error updating user details:', error);
        setIsSubmittingAddress(false);
      },
    });

    }  

  };

  console.log("User details in checkout page when click on continue button in address section is", userDetails);

  return (
    <div className="flex flex-col gap-[var(--space-30-60)]">

      <Typography
        tag="h5"
        text="Shipping Details"
        className="uppercase text-primary-dark"
      />
      <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-[var(--space-30-52)]"
      >

        <InputLabeled
          name="firstName"
          label="First Name" 
          placeholder="Enter your first name" 
          variant="roundedEdgeInput" 
          value={shippingFormData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={shippingErrors.firstName}
        />
        <InputLabeled
          name="lastName"
          label="Last Name" 
          placeholder="Enter your last name" 
          variant="roundedEdgeInput" 
          value={shippingFormData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={shippingErrors.lastName}
        />
        <InputLabeled 
          name="mobile"
          label="Mobile Number" 
          placeholder="Enter your mobile number" 
          variant="roundedEdgeInput" 
          value={shippingFormData.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          error={shippingErrors.mobile}
        />

        <div className='flex flex-col gap-[var(--space-8-17)]'>
            <InputLabeled
              name="address"
              label="Address" 
              placeholder="Address*" 
              variant="roundedEdgeInput"
              value={shippingFormData.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={shippingErrors.address}
            />
            {/* <Input
              name="aptSuite"
              variant='roundedEdgeInput' 
              placeholder='Apt, Suite*' 
              className='bg-white'
              value={formData.aptSuite}
              onChange={handleChange}
              onBlur={handleBlur}
            /> */}
            <InputLabeled
              name="aptSuite"
              variant='roundedEdgeInput' 
              placeholder='Apt, Suite*' 
              className='bg-white'
              value={shippingFormData.aptSuite}
              onChange={handleChange}
              onBlur={handleBlur}
              error={shippingErrors.aptSuite}
            />
            {/* <Input
              name="municipality"
              variant='roundedEdgeInput' 
              placeholder='Municipality*' 
              className='bg-white'
              value={formData.municipality}
              onChange={handleChange}
              onBlur={handleBlur}
              // error={errors.municipality}
            /> */}
            <InputLabeled
              name="municipality"
              variant='roundedEdgeInput' 
              placeholder='Municipality*' 
              className='bg-white'
              value={shippingFormData.municipality}
              onChange={handleChange}
              onBlur={handleBlur}
              error={shippingErrors.municipality}
            />
        </div>

        <AlertBar 
          text="My billing details different from shipping address" 
          selectedCheckBox={selectedCheckBox} 
          setSelectedCheckBox={setSelectedCheckBox} 
        />

        <BillingDetails
          billingFormData={billingFormData}
          setBillingFormData={setBillingFormData}
          isSynced={!selectedCheckBox}
          billingErrors={billingErrors}
          setBillingErrors={setBillingErrors}
          // isContinueButtonDisabled={isContinueButtonDisabled}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmittingAddress}
          // onClick={handleContinue}
        >
          { isSubmittingAddress ? "Loading..." : "Continue" }
        </Button>

      </form>

      { showPaymentDetails && <Payment /> }

        
    </div>
  )
}