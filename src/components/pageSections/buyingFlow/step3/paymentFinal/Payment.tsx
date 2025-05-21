import Typography from '@/components/atoms/typography/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { useUserStore } from '@/zustand/store/userDataStore'
import { usePetStore } from '@/zustand/store/petDataStore'
import { useCreateSubscriptionHook } from '@/hooks/subscriptionHooks/createSubscriptionHook'

interface ShippingFormData {
  firstName: string;
  lastName: string;
  contactNo?: string;
  mobile?: string;
  address: string;
  aptSuite: string;
  municipality: string;
}

interface BillingFormData extends ShippingFormData {
  useDifferentBilling: boolean;
}

interface PaymentProps {
  shippingFormData: ShippingFormData;
  billingFormData: BillingFormData;
}

export default function Payment({ shippingFormData, billingFormData }: PaymentProps) {

  const { userDetails } = useUserStore();
  const { createdPets } = usePetStore();
  const { mutate: createSubscription } = useCreateSubscriptionHook();

  const handleContinue = () => {
    createSubscription(
      {
        user_id: userDetails.userId,
        account: {
          firstName: userDetails.firstName,
          lastName: userDetails.lastName,
          email: userDetails.emailAddress,
          mobileNumber: userDetails.phoneNumber,
          password: userDetails.password,
        },
        shippingDetails: {
          firstName: shippingFormData.firstName,
          lastName: shippingFormData.lastName,
          contactNo: shippingFormData.mobile ?? "",
          address: shippingFormData.address,
          aptSuite: shippingFormData.aptSuite,
          municipality: shippingFormData.municipality,
        },
        billingDetails: {
          firstName: billingFormData.firstName,
          lastName: billingFormData.lastName,
          contactNo: billingFormData.mobile ?? "",
          address: billingFormData.address,
          aptSuite: billingFormData.aptSuite,
          municipality: billingFormData.municipality,
          useDifferentBilling: billingFormData.useDifferentBilling,
        },
        subscriptiondate: new Date().toISOString().split("T")[0],
        promoCode: "",
        subscribeToOffers: true,
        pets: createdPets,
        payment: {
          method: "credit_card",
          cardNumber: "4111111111111111",
          cardExpiry: "12/25",
          cardCVV: "123",
        },
      },
      {
        onSuccess: () => {
          console.log('Subscription created successfully');
          // setShowPaymentDetails(true);
          // setIsSubmittingAddress(false);
        },
        onError: (error) => {
          console.error('Error in creating subscription', error);
          // setIsSubmittingAddress(false);
        },
      }
    );
  }

  return (
    <div className="flex flex-col gap-[var(--space-30-60)]">
      <Typography
        tag="h5"
        text="Payment"
        className="uppercase text-primary-dark"
      />
      <div className='w-[300px]'>
        <Image className='!static inset-0 w-full !h-full object-cover object-center' src="/images/payment-card.webp" alt='payment-card' fill/>
      </div>
      <Button 
        className="w-full"
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  )
}
