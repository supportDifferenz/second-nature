"use client";

import Typography from '@/components/atoms/typography/Typography'
import AlertBar from '@/components/molecules/alertBar/AlertBar'
import { InputLabeled } from '@/components/molecules/inputLabeled/InputLabeled'
// import { Input } from '@/components/ui/input'
import React,{ useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import BillingDetails from './BillingDetails'
import Payment from './Payment';

interface ShippingFormData {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  aptSuite: string;
  municipality: string;
}

interface BillingFormData {
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
  aptSuite: string;
  municipality: string;
}

export default function ShippingDetail() {

  // const [ showBillingDetails, setShowBillingDetails ] = useState(false);

  // const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowBillingDetails(false);
  // }

  const [selectedCheckBox, setSelectedCheckBox] = useState(true);
  const [shippingErrors, setShippingErrors] = useState<Record<string, string>>({});
  const [billingErrors, setBillingErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [ showPaymentDetails, setShowPaymentDetails ] = useState(false);

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
    municipality: ''
  });

  const isContinueButtonDisabled = shippingFormData.firstName === '' || shippingFormData.lastName === '' || shippingFormData.mobile === '' || shippingFormData.address === '' || shippingFormData.municipality === '' || billingFormData.firstName === '' || billingFormData.lastName === '' || billingFormData.mobile === '' || billingFormData.address === '' || billingFormData.municipality === '' || ( shippingErrors.firstName !== '' || shippingErrors.lastName !== '' || shippingErrors.mobile !== '' || shippingErrors.address !== '' || shippingErrors.municipality !== '' || shippingErrors.aptSuite !== '' || billingErrors.firstName !== '' || billingErrors.lastName !== '' || billingErrors.mobile !== '' || billingErrors.address !== '' || billingErrors.municipality !== '' || billingErrors.aptSuite !== '');

  console.log('Shipping form data in checkout page is', shippingFormData);
  console.log('Billing form data in checkout page is', billingFormData);

  // Sync billing data when checkbox is unchecked
  useEffect(() => {
    if (!selectedCheckBox) {
      setBillingFormData({ ...shippingFormData });
    } else if(selectedCheckBox) {
      setBillingFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        address: "",
        aptSuite: "",
        municipality: ""
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    Object.keys(shippingFormData).forEach(key => {
      if (key !== 'aptSuite') { // aptSuite is optional
        const error = validateField(key, shippingFormData[key as keyof ShippingFormData]);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with shipping details submission
      console.log('Shipping details submitted:', shippingFormData);
      setShowPaymentDetails(true);
    }
  };

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
          disabled={isContinueButtonDisabled}
          // onClick={handleContinue}
        >
          Continue
        </Button>

      </form>

      { showPaymentDetails && <Payment /> }

        
    </div>
  )
}
