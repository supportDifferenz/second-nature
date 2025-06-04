"use client";

import React,{ useState, useEffect } from "react";
import Typography from "@/components/atoms/typography/Typography";
import Masonry from "react-masonry-css";
import { orderHistoryConfig } from "@/components/config/orderHistoryConfig";
import OrderHistoryCard from "@/components/molecules/orderHistoryCard/OrderHistoryCard";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { OrderHistoryCardPropsType } from "@/components/types/type";
import { Button } from "@/components/ui/button";
import { ProteinChangePopup } from "@/components/pageSections/dashboard/orderHistory/ProteinChangePopup";
import { DowngradePlanPopup } from "@/components/pageSections/dashboard/orderHistory/DowngradePlanPopup";
import { CancelSubscriptionPopup } from "@/components/pageSections/dashboard/orderHistory/CancelSubscriptionPopup";
import { useUserStore } from "@/zustand/store/userDataStore";
import { useGetSubscriptionDetailsByUserId } from "@/hooks/subscriptionHooks/getSubscriptionDetailsByUserIdHook";
import { useGetSubscriptionDetailsBySubIdAndPetId } from "@/hooks/subscriptionHooks/getSubscriptionDetailsBySubIdAndPetId";
import { useGetInvoiceBySubIdAndPetId } from "@/hooks/subscriptionHooks/getInvoiceDetailsBySubIdAndPetId";

const orderHistoryData: OrderHistoryCardPropsType[] = [
  {
    title: "Jackie's Meal",
    subtitle: "FOUR WEEKS PLAN - FULL BOWL",
    planDuration: "4 weeks",
    itemName: "Chicken Bowl",
    note: "Change protein for my next order",
    noteDetails: "Order today get new protein from: 24 Apr 2025",
    processingNote: "(We need 5 days to process your request)",
    planStartDate: "01 Mar 2025",
    planEndDate: "29 Mar 2025",
    orderDate: "29 Mar 2025",
    price: 300,
    status: "current",
    hasInvoice: true,
  },
  {
    title: "Jackie's Meal",
    subtitle: "FOUR WEEKS PLAN - FULL BOWL",
    planDuration: "4 weeks",
    itemName: "Chicken Bowl",
    planStartDate: "01 Mar 2025",
    planEndDate: "29 Mar 2025",
    orderDate: "29 Mar 2025",
    price: 300,
    status: "paused",
    hasInvoice: true,
    pausedDuration: "PAUSED DURATION",
    pausedPeriod: "13 Mar 2025 to 20 Mar 2025",
  },
  {
    title: "Jackie's Meal",
    subtitle: "FOUR WEEKS PLAN - FULL BOWL",
    planDuration: "4 weeks",
    itemName: "Chicken Bowl",
    planStartDate: "01 Mar 2025",
    planEndDate: "29 Mar 2025",
    orderDate: "29 Mar 2025",
    price: 300,
    status: "cancelled",
    hasInvoice: true,
    cancellationTitle: "CANCELLATION DATE",
    cancellationDate: "13 Mar 2025",
  },
  {
    title: "Jackie's Meal",
    subtitle: "FOUR WEEKS PLAN - FULL BOWL",
    planDuration: "4 weeks",
    itemName: "Chicken Bowl",
    note: "Change protein for my next order",
    noteDetails: "Order today get new protein from: 24 Apr 2025",
    processingNote: "(We need 5 days to process your request)",
    planStartDate: "01 Mar 2025",
    planEndDate: "29 Mar 2025",
    orderDate: "29 Mar 2025",
    price: 300,
    status: "payment_failed",
    hasInvoice: true,
  },
  {
    title: "Jackie's Meal",
    subtitle: "ONE WEEK PLAN - FULL BOWL",
    planDuration: "1 week",
    itemName: "Chicken Bowl",
    planStartDate: "01 Mar 2025",
    planEndDate: "08 Mar 2025",
    orderDate: "08 Mar 2025",
    price: 100,
    status: "current",
    hasInvoice: true,
  },
  {
    title: "Jackie's Meal",
    subtitle: "ONE WEEK PLAN - FULL BOWL",
    planDuration: "1 week",
    itemName: "Chicken Bowl",
    planStartDate: "01 Mar 2025",
    planEndDate: "08 Mar 2025",
    orderDate: "08 Mar 2025",
    price: 100,
    status: "ending_soon",
    hasInvoice: true,
  },
  {
    title: "Jackie's Meal",
    subtitle: "ONE WEEK PLAN - FULL BOWL",
    planDuration: "1 week",
    itemName: "Chicken Bowl",
    planStartDate: "01 Mar 2025",
    planEndDate: "08 Mar 2025",
    orderDate: "08 Mar 2025",
    price: 100,
    status: "expired",
    hasInvoice: true,
  },
];

const currentMealPlan: OrderHistoryCardPropsType = {
  title: "Jackie's Meal",
  subtitle: "FOUR WEEKS PLAN - FULL BOWL",
  planDuration: "4 weeks",
  itemName: "Chicken Bowl",
  note: "Change protein for my next order",
  noteDetails: "Order today get new protein from: 24 Apr 2025",
  processingNote: "(We need 5 days to process your request)",
  planStartDate: "01 Mar 2025",
  planEndDate: "29 Mar 2025",
  orderDate: "29 Mar 2025",
  price: 300,
  status: "current",
  hasInvoice: true,
}

const currentMealConfig = {
  label: "CURRENT MEAL PLAN",
  tagColor: "#2ECC71",
  buttons: ["Downgrade to Half-Bowl", "Pause Plan", "Cancel"],
}

const breakpointColumnsObj = {
  default: 2,
  1150: 1,
};

export default function OrderHistory() {
  
  const [isProteinPopupOpen, setIsProteinPopupOpen] = useState(false);
  const [isDowngradePlanOpen, setIsDowngradePlanOpen] = useState(false);
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
  const [, setIsPausePopupOpen] = useState(false);
  const [currentProtein, setCurrentProtein] = useState("chicken");

  // const [subId, setSubId] = useState<string>("");
  // const [petId, setPetId] = useState<string>("");
  const [selectedPet, setSelectedPet] = useState<PetInfo | null>(null);

  const { userDetails } = useUserStore();
  const userId = userDetails?.userId;
  const { data: subscriptionDetails } = useGetSubscriptionDetailsByUserId(userId);
  const { data: subscriptionDetailsBySubIdAndPetId } = useGetSubscriptionDetailsBySubIdAndPetId(selectedPet?.subId ?? "", selectedPet?.petId ?? "");
  const { data: invoiceData } = useGetInvoiceBySubIdAndPetId(selectedPet?.subId ?? "", selectedPet?.petId ?? "");

  type Pet = { petId?: string; name?: string };
  type SubscriptionRecord = { _id: string; pets?: Pet[] };
  type PetInfo = { name: string; petId: string; subId: string };

  function extractAllPetInfo(data: { result: SubscriptionRecord[] } | undefined): PetInfo[] {
    const petInfo: PetInfo[] = [];

    // Check if data and result exist
    if (data?.result && Array.isArray(data.result)) {
      // Iterate through each record in the result array
      data.result.forEach((record: SubscriptionRecord) => {
        // Check if pets array exists and iterate through it
        if (record.pets && Array.isArray(record.pets)) {
          record.pets.forEach(pet => {
            // Add pet info to the array if both name and petId exist
            if (pet.name && pet.petId) {
              petInfo.push({
                name: pet.name,
                petId: pet.petId,
                subId: record._id,
              });
            }
          });
        }
      });
    }

    return petInfo;
  }

  // Extract all pet info from subscriptionDetails
  const petInfoList = extractAllPetInfo(subscriptionDetails);
  console.log("petInfoList in order history", petInfoList);

  // const petNames = ["Dog1","Dog2","Cat1"];

  const selectedPetIndex = 0;

  useEffect(() => {
    if (petInfoList.length > 0 && !selectedPet) {
      setSelectedPet(petInfoList[0]);
    }
  }, [petInfoList, selectedPet]);

  console.log("subscription Details in order history", subscriptionDetails);
  console.log("subscription Details By SubId And PetId in order history", subscriptionDetailsBySubIdAndPetId);
  console.log("invoice Data in order history", invoiceData);

  return (
    <DashboardLayout>
      <Typography
        tag="h5"
        text="Order History"
        className="capitalize !font-normal mb-6 text-black"
      />

      {
        <ul className="flex items-center gap-5 pb-[7dvh] flex-wrap">
          {petInfoList.length > 0 ? (
            petInfoList.map((petData, index) => (
              <li 
                key={index} 
                className={`font-bold underline ${ index === selectedPetIndex ? "text-[#944446] underline-[#944446]" : ""}`}
                onClick={() => {
                  // setSubId(petData.subId);
                  // setPetId(petData.petId);
                  setSelectedPet(petData);
                }}
              >
                {petData.name}
              </li>
            ))
          ) : (
            <li className="font-bold">No Subscriptions found</li>
          )}     
        </ul>
      }

      <div className="mb-6">
        <OrderHistoryCard
          {...currentMealPlan}
          statusLabel={currentMealConfig.label}
          statusColor={currentMealConfig.tagColor}
          buttons={currentMealConfig.buttons}
        />
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-(--space-20-40) "
        columnClassName="space-y-(--space-20-40)"
      >
        {orderHistoryData.map((order, index) => {
          const config = orderHistoryConfig[order.status];
          return (
            <div key={index}>
              <OrderHistoryCard
                {...order}
                statusLabel={config.label}
                statusColor={config.tagColor}
                buttons={config.buttons}
              />
            </div>
          );
        })}
      </Masonry>
      <Button onClick={() => setIsProteinPopupOpen(true)}>
        Change Protein
      </Button>
      <Button onClick={() => setIsDowngradePlanOpen(true)}>
        Downgrade Plan
      </Button>
      <Button onClick={() => setIsCancelPopupOpen(true)}>
        Cancel Subscription
      </Button>
      <Button onClick={() => setIsPausePopupOpen(true)}>
        Pause Deliveries
      </Button>
      <ProteinChangePopup
        isOpen={isProteinPopupOpen}
        onClose={() => setIsProteinPopupOpen(false)}
        currentSelection={currentProtein}
        onSave={(protein) => {
          setCurrentProtein(protein);
          // API call to update protein
        }}
      />

      <DowngradePlanPopup
        isOpen={isDowngradePlanOpen}
        onClose={() => setIsDowngradePlanOpen(false)}
        onConfirm={() => {
          // API call to downgrade plan
          setIsDowngradePlanOpen(false);
        }}
      />

      <CancelSubscriptionPopup
        isOpen={isCancelPopupOpen}
        onClose={() => setIsCancelPopupOpen(false)}
        onCancel={(reason) => {
          // API call to cancel with reason
          console.log(`Cancellation reason: ${reason}`);
        }}
      />

      {/* <PauseDeliveriesPopup
        isOpen={isPausePopupOpen}
        onClose={() => setIsPausePopupOpen(false)}
        onPause={(startDate, endDate, reason) => {
          // API call to pause deliveries
          console.log(
            `Paused from ${startDate} to ${endDate}. Reason: ${reason}`
          );
        }}
      /> */}
    </DashboardLayout>
  );
}
