import Typography from '@/components/atoms/typography/Typography'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import { useUserStore } from '@/zustand/store/userDataStore'
import { usePetStore } from '@/zustand/store/petDataStore'
import { useCreatePetHook } from '@/hooks/subscriptionHooks/createPetHook';
import { useCreateSubscriptionHook } from '@/hooks/subscriptionHooks/createSubscriptionHook'
import { useRouter } from 'next/navigation'

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

type CreatedPet = {
    petId: string;
    name: string;
    type: string;
    gender: string;
    location: string;
    dateOfBirth: string;
    ageMonth: number;
    ageYear: number;
    breed: string;
    crossBreeds: string[];
    activityLevel: string;
    currentWeight: number;
    targetWeight: number;
    plan: {
      type: string;
      duration: string;
      price: number;
      protein: string;
      bowlSize: string;
      planStatus: string;
      isChangedprotein: boolean;
      isDowngrade: boolean;
      isUpgrade: boolean;
    };
  };

export default function Payment({ shippingFormData, billingFormData }: PaymentProps) {

  const router = useRouter();

  const { userDetails } = useUserStore();
  const { pets, clearPetDetails, createdPetsFromAPI, removeCreatedPetsFromAPI } = usePetStore();
  const { mutate: createPet } = useCreatePetHook();
  const { mutate: createSubscription } = useCreateSubscriptionHook();

  const [createPetError, setCreatePetError] = useState("");
  const [createSubscriptionError, setCreateSubscriptionError] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  // const handleContinue = () => {

  //   pets.map((pet) => {
  //     createPet({
  //       user_id: userDetails.userId,
  //       name: pet.name || "",
  //       type: pet.catOrDog || "",
  //       gender: pet.gender || "",
  //       location: pet.location || "",
  //       dateOfBirth: pet.dateOfBirth || "",
  //       ageMonth: pet.ageMonth || 0,
  //       ageYear: pet.ageYear || 0,
  //       breed: pet.breed || "",
  //       crossBreeds: [ pet.crossBreed || "" ],
  //       activityLevel: pet.activityLevel || "",
  //       currentWeight: pet.currentWeight || 0,
  //       targetWeight: pet.targetWeight || 0,
  //       plan: {
  //           type: pet.planType || "",
  //           duration: pet.planType === "regular" ? "28" : "7",
  //           price: pet.planPrice || 0,
  //           protein: pet.protein || "",
  //           bowlSize: pet.bowlSize || "",
  //       },
  //     }, {
  //       onSuccess: (response) => {
  //         console.log('Pet created successfully:', response);
  //         const createdPet: createdPetDetails = {
  //           petId: response.result.Pets._id,
  //           name: response.result.Pets.name,
  //           type: response.result.Pets.type,
  //           gender: response.result.Pets.gender,
  //           location: response.result.Pets.location,
  //           dateOfBirth: response.result.Pets.dateOfBirth,
  //           ageMonth: response.result.Pets.ageMonth,
  //           ageYear: response.result.Pets.ageYear,
  //           breed: response.result.Pets.breed,
  //           crossBreeds: response.result.Pets.crossBreeds,
  //           activityLevel: response.result.Pets.activityLevel,
  //           currentWeight: response.result.Pets.currentWeight ?? 0,
  //           targetWeight: response.result.Pets.targetWeight ?? 0,
  //           plan: {
  //             type: response.result.Pets.plan.type,
  //             duration: response.result.Pets.plan.duration,
  //             price: response.result.Pets.plan.price,
  //             protein: response.result.Pets.plan.protein,
  //             bowlSize: response.result.Pets.plan.bowlSize
  //           }
  //         };

  //           usePetStore.getState().addCreatedPet({
  //           ...createdPet,
  //           currentWeight: createdPet.currentWeight ?? 0,
  //           targetWeight: createdPet.targetWeight ?? 0,
  //           });
  //       },
  //       onError: (error) => {
  //         console.error('Error updating address:', error);
  //       },
  //     });
  //   })

  //   createSubscription(
  //     {
  //       user_id: userDetails.userId,
  //       account: {
  //         firstName: userDetails.firstName,
  //         lastName: userDetails.lastName,
  //         email: userDetails.emailAddress,
  //         mobileNumber: userDetails.phoneNumber,
  //         password: userDetails.password,
  //       },
  //       shippingDetails: {
  //         firstName: shippingFormData.firstName,
  //         lastName: shippingFormData.lastName,
  //         contactNo: shippingFormData.mobile ?? "",
  //         address: shippingFormData.address,
  //         aptSuite: shippingFormData.aptSuite,
  //         municipality: shippingFormData.municipality,
  //       },
  //       billingDetails: {
  //         firstName: billingFormData.firstName,
  //         lastName: billingFormData.lastName,
  //         contactNo: billingFormData.mobile ?? "",
  //         address: billingFormData.address,
  //         aptSuite: billingFormData.aptSuite,
  //         municipality: billingFormData.municipality,
  //         useDifferentBilling: billingFormData.useDifferentBilling,
  //       },
  //       subscriptiondate: new Date().toISOString().split("T")[0],
  //       promoCode: "",
  //       subscribeToOffers: true,
  //       pets: createdPets,
  //       payment: {
  //         method: "credit_card",
  //         cardNumber: "4111111111111111",
  //         cardExpiry: "12/25",
  //         cardCVV: "123",
  //       },
  //     },
  //     {
  //       onSuccess: () => {
  //         console.log('Subscription created successfully');
  //       },
  //       onError: (error) => {
  //         console.error('Error in creating subscription', error);
  //       },
  //     }
  //   );
    
  // }

  // const handleContinue = async () => {
  //   type CreatedPet = {
  //     petId: string;
  //     name: string;
  //     type: string;
  //     gender: string;
  //     location: string;
  //     dateOfBirth: string;
  //     ageMonth: number;
  //     ageYear: number;
  //     breed: string;
  //     crossBreeds: string[];
  //     activityLevel: string;
  //     currentWeight: number;
  //     targetWeight: number;
  //     plan: {
  //       type: string;
  //       duration: string;
  //       price: number;
  //       protein: string;
  //       bowlSize: string;
  //     };
  //   };

  //   const createdPets: CreatedPet[] = [];

  //   try {
  //     // Step 1: Create all pets
  //     await Promise.all(
  //       pets.map(
  //         (pet) =>
  //           new Promise<void>((resolve, reject) => {
  //             createPet(
  //               {
  //                 user_id: userDetails.userId,
  //                 name: pet.name || "",
  //                 type: pet.catOrDog || "",
  //                 gender: pet.gender || "",
  //                 location: pet.location || "",
  //                 dateOfBirth: pet.dateOfBirth || "",
  //                 ageMonth: pet.ageMonth || 0,
  //                 ageYear: pet.ageYear || 0,
  //                 breed: pet.breed || "",
  //                 crossBreeds: [pet.crossBreed || ""],
  //                 activityLevel: pet.activityLevel || "",
  //                 currentWeight: pet.currentWeight || 0,
  //                 targetWeight: pet.targetWeight || 0,
  //                 plan: {
  //                   type: pet.planType || "",
  //                   duration: pet.planType === "regular" ? "28" : "7",
  //                   price: pet.planPrice || 0,
  //                   protein: pet.protein || "",
  //                   bowlSize: pet.bowlSize || "",
  //                 },
  //               },
  //               {
  //                 onSuccess: (response) => {
  //                   console.log("✅ Pet created:", response.result.Pets);

  //                   const p = response.result.Pets;
  //                   const createdPet = {
  //                     petId: p._id,
  //                     name: p.name,
  //                     type: p.type,
  //                     gender: p.gender,
  //                     location: p.location,
  //                     dateOfBirth: p.dateOfBirth,
  //                     ageMonth: p.ageMonth,
  //                     ageYear: p.ageYear,
  //                     breed: p.breed,
  //                     crossBreeds: p.crossBreeds,
  //                     activityLevel: p.activityLevel,
  //                     currentWeight: p.currentWeight ?? 0,
  //                     targetWeight: p.targetWeight ?? 0,
  //                     plan: {
  //                       type: p.plan.type,
  //                       duration: p.plan.duration,
  //                       price: p.plan.price,
  //                       protein: p.plan.protein,
  //                       bowlSize: p.plan.bowlSize,
  //                     },
  //                   };

  //                   usePetStore.getState().addCreatedPet(createdPet);
  //                   createdPets.push(createdPet);
  //                   resolve();
  //                 },
  //                 onError: (error) => {
  //                   console.error("❌ Failed to create pet:", pet.name, error);
  //                   reject(`Failed to create pet "${pet.name}"`);
  //                 },
  //               }
  //             );
  //           })
  //       )
  //     );

  //     // Step 2: All pets created successfully
  //     console.log("✅ All pets created. Proceeding to create subscription...");

  //     createSubscription(
  //       {
  //         user_id: userDetails.userId,
  //         account: {
  //           firstName: userDetails.firstName,
  //           lastName: userDetails.lastName,
  //           email: userDetails.emailAddress,
  //           mobileNumber: userDetails.phoneNumber,
  //           password: userDetails.password,
  //         },
  //         shippingDetails: {
  //           firstName: shippingFormData.firstName,
  //           lastName: shippingFormData.lastName,
  //           contactNo: shippingFormData.mobile ?? "",
  //           address: shippingFormData.address,
  //           aptSuite: shippingFormData.aptSuite,
  //           municipality: shippingFormData.municipality,
  //         },
  //         billingDetails: {
  //           firstName: billingFormData.firstName,
  //           lastName: billingFormData.lastName,
  //           contactNo: billingFormData.mobile ?? "",
  //           address: billingFormData.address,
  //           aptSuite: billingFormData.aptSuite,
  //           municipality: billingFormData.municipality,
  //           useDifferentBilling: billingFormData.useDifferentBilling,
  //         },
  //         subscriptiondate: new Date().toISOString().split("T")[0],
  //         promoCode: "",
  //         subscribeToOffers: true,
  //         pets: createdPets,
  //         payment: {
  //           method: "credit_card",
  //           cardNumber: "4111111111111111",
  //           cardExpiry: "12/25",
  //           cardCVV: "123",
  //         },
  //       },
  //       {
  //         onSuccess: () => {
  //           console.log("✅ Subscription created successfully");
  //         },
  //         onError: (error) => {
  //           console.error("❌ Failed to create subscription:", error);
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     console.error("🚨 Error during pet creation or subscription flow:", error);
  //   }
  // };

  const handleContinue = async () => {
    const createdPets: CreatedPet[] = [];

    setIsSubscribing(true);

    try {
      // Create pets one-by-one (sequentially)
      for (const pet of pets) {
        await new Promise<void>((resolve, reject) => {
          createPet(
            {
              user_id: userDetails.userId,
              name: pet.name || "",
              type: pet.catOrDog || "",
              gender: pet.gender || "",
              location: pet.location || "",
              dateOfBirth: pet.dateOfBirth || "",
              ageMonth: pet.ageMonth || 0,
              ageYear: pet.ageYear || 0,
              breed: pet.breed || "",
              crossBreeds: [pet.crossBreed || ""],
              activityLevel: pet.activityLevel || "",
              currentWeight: pet.currentWeight || 0,
              targetWeight: pet.targetWeight || 0,
              plan: {
                type: pet.planType || "",
                duration: pet.planType === "Regular" ? "28" : "7",
                price: pet.planPrice || 0,
                protein: pet.protein || "",
                bowlSize: pet.bowlSize || "",
              },
            },
            {
              onSuccess: (res) => {
                const p = res.result.Pets;
                const createdPet = {
                  petId: p._id,
                  name: p.name,
                  type: p.type,
                  gender: p.gender,
                  location: p.location,
                  dateOfBirth: p.dateOfBirth,
                  ageMonth: p.ageMonth,
                  ageYear: p.ageYear,
                  breed: p.breed,
                  crossBreeds: p.crossBreeds,
                  activityLevel: p.activityLevel,
                  currentWeight: p.currentWeight,
                  targetWeight: p.targetWeight,
                  plan: {
                    ...p.plan,
                    planStatus: "active",
                    isChangeprotein: false,
                    isDowngrade: false,
                    isPaused: false,       
                  },
                };
                createdPets.push(createdPet);
                usePetStore.getState().addCreatedPetsFromAPI(createdPet);
                resolve();
              },
              onError: (error) => {
                setCreatePetError("Error in creating pet");
                console.error('Failed to create pet:', error);
                reject(error);
              }
            }
          );
        });
      }

      clearPetDetails();

      console.log("Created pets from API", createdPetsFromAPI);

      // After all pets created, create subscription
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
          pets: createdPets.length > 0 ? createdPets : createdPetsFromAPI.map(pet => ({
            ...pet,
            plan: {
              ...pet.plan,
              planStatus: (pet.plan as { planStatus?: string }).planStatus ?? "active",
              isChangedprotein: (pet.plan as { isChangedprotein?: boolean }).isChangedprotein ?? false,
              isDowngrade: (pet.plan as { isDowngrade?: boolean }).isDowngrade ?? false,
              isUpgrade: (pet.plan as { isUpgrade?: boolean }).isUpgrade ?? false
            }
          })),
          // pets: createdPets,
          payment: {
            method: "credit_card",
            cardNumber: "4111111111111111",
            cardExpiry: "12/25",
            cardCVV: "123",
          },
          isDeleted: false,
        },
        {
          onSuccess: () => {
            console.log("Subscription created successfully");
            setIsSubscribing(false);
            removeCreatedPetsFromAPI();
            router.push("/");
          },
          onError: (error) => {
            setCreateSubscriptionError("Error in creating subscription");
            console.error("Failed to create subscription:", error);
            setIsSubscribing(false);},
        }
      );

    } catch (error) {
      console.error("Error in pet/subscription flow:", error);
      setIsSubscribing(false);
    }
  };

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
        disabled={isSubscribing}
      >
        { isSubscribing ? "Loading..." : "Continue" }
      </Button>
      <Typography
        tag="p"
        text={createPetError}
        className="text-sm text-red-500 block"
      />
      <Typography
        tag="p"
        text={createSubscriptionError}
        className="text-sm text-red-500 block"
      />
    </div>
  )
}
