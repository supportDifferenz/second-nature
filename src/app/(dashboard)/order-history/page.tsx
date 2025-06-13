"use client";

import React, { useState, useEffect } from "react";
import Typography from "@/components/atoms/typography/Typography";
// import Masonry from "react-masonry-css";
// import { orderHistoryConfig } from "@/components/config/orderHistoryConfig";
import OrderHistoryCard from "@/components/molecules/orderHistoryCard/OrderHistoryCard";
import DashboardLayout from "@/components/templates/DashboardLayout";
// import { OrderHistoryCardPropsType } from "@/components/types/type";
import { MealPlanStatus } from "@/components/types/type";
// import { Button } from "@/components/ui/button";
import { ProteinChangePopup } from "@/components/pageSections/dashboard/orderHistory/ProteinChangePopup";
import { DowngradePlanPopup } from "@/components/pageSections/dashboard/orderHistory/DowngradePlanPopup";
import { CancelSubscriptionPopup } from "@/components/pageSections/dashboard/orderHistory/CancelSubscriptionPopup";
import { useUserStore } from "@/zustand/store/userDataStore";
import { useGetSubscriptionDetailsByUserId } from "@/hooks/subscriptionHooks/getSubscriptionDetailsByUserIdHook";
import { useGetSubscriptionDetailsByUserIdAndPetId } from "@/hooks/subscriptionHooks/getSubscriptionDetailsBySubIdAndPetId";
import { useGetInvoiceBySubIdAndPetId } from "@/hooks/subscriptionHooks/getInvoiceDetailsBySubIdAndPetId";
import OrderHistoryCardSkelton from "@/components/skeltons/OrderHistoryCardSkelton";
import { useOrderHistoryStore } from "@/zustand/store/orderHistoryDataStore";
import { PauseDeliveriesPopup } from "@/components/pageSections/dashboard/orderHistory/PauseDeliveriesPopup";
import { format } from "date-fns";

// const orderHistoryData: OrderHistoryCardPropsType[] = [
//   {
//     title: "Jackie's Meal",
//     subtitle: "FOUR WEEKS PLAN - FULL BOWL",
//     planDuration: "4 weeks",
//     itemName: "Chicken Bowl",
//     note: "Change protein for my next order",
//     noteDetails: "Order today get new protein from: 24 Apr 2025",
//     processingNote: "(We need 5 days to process your request)",
//     planStartDate: "01 Mar 2025",
//     planEndDate: "29 Mar 2025",
//     orderDate: "29 Mar 2025",
//     price: 300,
//     status: "active",
//     hasInvoice: true,
//   },
//   {
//     title: "Jackie's Meal",
//     subtitle: "FOUR WEEKS PLAN - FULL BOWL",
//     planDuration: "4 weeks",
//     itemName: "Chicken Bowl",
//     planStartDate: "01 Mar 2025",
//     planEndDate: "29 Mar 2025",
//     orderDate: "29 Mar 2025",
//     price: 300,
//     status: "paused",
//     hasInvoice: true,
//     pausedDuration: "PAUSED DURATION",
//     pausedPeriod: "13 Mar 2025 to 20 Mar 2025",
//   },
//   {
//     title: "Jackie's Meal",
//     subtitle: "FOUR WEEKS PLAN - FULL BOWL",
//     planDuration: "4 weeks",
//     itemName: "Chicken Bowl",
//     planStartDate: "01 Mar 2025",
//     planEndDate: "29 Mar 2025",
//     orderDate: "29 Mar 2025",
//     price: 300,
//     status: "cancel",
//     hasInvoice: true,
//     cancellationTitle: "CANCELLATION DATE",
//     cancellationDate: "13 Mar 2025",
//   },
//   {
//     title: "Jackie's Meal",
//     subtitle: "FOUR WEEKS PLAN - FULL BOWL",
//     planDuration: "4 weeks",
//     itemName: "Chicken Bowl",
//     note: "Change protein for my next order",
//     noteDetails: "Order today get new protein from: 24 Apr 2025",
//     processingNote: "(We need 5 days to process your request)",
//     planStartDate: "01 Mar 2025",
//     planEndDate: "29 Mar 2025",
//     orderDate: "29 Mar 2025",
//     price: 300,
//     status: "paymentfailed",
//     hasInvoice: true,
//   },
//   {
//     title: "Jackie's Meal",
//     subtitle: "ONE WEEK PLAN - FULL BOWL",
//     planDuration: "1 week",
//     itemName: "Chicken Bowl",
//     planStartDate: "01 Mar 2025",
//     planEndDate: "08 Mar 2025",
//     orderDate: "08 Mar 2025",
//     price: 100,
//     status: "active",
//     hasInvoice: true,
//   },
//   {
//     title: "Jackie's Meal",
//     subtitle: "ONE WEEK PLAN - FULL BOWL",
//     planDuration: "1 week",
//     itemName: "Chicken Bowl",
//     planStartDate: "01 Mar 2025",
//     planEndDate: "08 Mar 2025",
//     orderDate: "08 Mar 2025",
//     price: 100,
//     status: "endingsoon",
//     hasInvoice: true,
//   },
//   {
//     title: "Jackie's Meal",
//     subtitle: "ONE WEEK PLAN - FULL BOWL",
//     planDuration: "1 week",
//     itemName: "Chicken Bowl",
//     planStartDate: "01 Mar 2025",
//     planEndDate: "08 Mar 2025",
//     orderDate: "08 Mar 2025",
//     price: 100,
//     status: "expired",
//     hasInvoice: true,
//   },
// ];

// const currentMealPlan: OrderHistoryCardPropsType = {
//   title: "Jackie's Meal",
//   subtitle: "FOUR WEEKS PLAN - FULL BOWL",
//   planDuration: "4 weeks",
//   itemName: "Chicken Bowl",
//   note: "Change protein for my next order",
//   noteDetails: "Order today get new protein from: 24 Apr 2025",
//   processingNote: "(We need 5 days to process your request)",
//   planStartDate: "01 Mar 2025",
//   planEndDate: "29 Mar 2025",
//   orderDate: "29 Mar 2025",
//   price: 300,
//   status: "current",
//   hasInvoice: true,
// }

// const currentMealConfig = {
//   label: "CURRENT MEAL PLAN",
//   tagColor: "#2ECC71",
//   buttons: ["Downgrade to Half-Bowl", "Pause Plan", "Cancel"],
// }

// const breakpointColumnsObj = {
//   default: 2,
//   1150: 1,
// };

export default function OrderHistory() {

  const { selectedPetFromOrderHistory, selectedPetIndexFromOrderHistory, setSelectedPetIndexFromOrderHistory, setSelectedPetFromOrderHistory } = useOrderHistoryStore();

  const [isProteinPopupOpen, setIsProteinPopupOpen] = useState(false);
  const [isDowngradePlanOpen, setIsDowngradePlanOpen] = useState(false);
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
  const [isPausePopupOpen, setIsPausePopupOpen] = useState(false);
  
  const [isProteinPopupOpen, setIsProteinPopupOpen] = useState(false);
  const [isDowngradePlanOpen, setIsDowngradePlanOpen] = useState(false);
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
  // const [, setIsPausePopupOpen] = useState(false);
  const [currentProtein, setCurrentProtein] = useState("chicken");
  const [selectedPetIndex, setselectedPetIndex] = useState(0);
  // const [cancelReason, setCancelReason] = useState("");

  // const [subId, setSubId] = useState<string>("");
  // const [petId, setPetId] = useState<string>("");
  const [selectedPet, setSelectedPet] = useState<PetInfo | null>(null);

  const { userDetails } = useUserStore();
  const userId = userDetails?.userId;
  const { data: subscriptionDetails } = useGetSubscriptionDetailsByUserId(userId);
  const { data: subscriptionDetailsBySubIdAndPetId } = useGetSubscriptionDetailsByUserIdAndPetId(userId ?? "", selectedPet?.petId ?? "");
  const { data: invoiceData } = useGetInvoiceBySubIdAndPetId(selectedPet?.subId ?? "", selectedPet?.petId ?? "");

  const dataFromAPI = subscriptionDetailsBySubIdAndPetId?.result;
  const planDataFromAPI = subscriptionDetailsBySubIdAndPetId?.result?.pets[0]?.plan;
  const planStartDateFromAPI = dataFromAPI?.subscriptiondate;
  let formattedStartDate = "DD MM YY";
  let formattedEndDate = "DD MM YY";
  if (planStartDateFromAPI) {

    const [year, month, day] = planStartDateFromAPI.split("-"); 
    const startDate = new Date(year, month - 1, day);
    formattedStartDate = startDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    // Calculate end date (28 days later)
    const endDate = new Date(startDate);
    if (planDataFromAPI?.type === "Trial") {
      endDate.setDate(startDate.getDate() + 7);
    } else {
      endDate.setDate(startDate.getDate() + 28);
    }
    // endDate.setDate(startDate.getDate() + 28);
    formattedEndDate = endDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

  } else {
    // handle the case where planStartDateFromAPI is undefined
    // for example, you can set a default value for formattedDate
    formattedStartDate = 'Unknown';
    formattedEndDate = 'Unknown';
  }

  console.log("Plan type in order history page is", planDataFromAPI?.type);

  const planCardData = {
    regular: {
      activePlan: {
        title: `${dataFromAPI?.pets[0]?.name}'s Meal`,
        // title: "Jackie's Meal",
        subtitle: "FOUR WEEKS PLAN - FULL BOWL",
        planDuration: "4 weeks",
        itemName: `${dataFromAPI?.pets[0]?.plan.protein} Bowl`,
        // itemName: "Chicken Bowl",
        note: "Change protein for my next order",
        noteDetails: "Order today get new protein from: 24 Apr 2025",
        processingNote: "(We need 5 days to process your request)",
        planStartDate: `${formattedStartDate}`,
        // planStartDate: "01 Mar 2025",
        planEndDate: `${formattedEndDate}`,
        orderDate: "29 Mar 2025",
        price: Number(dataFromAPI?.pets[0]?.plan.price),
        // price: 300,
        status: "active" as MealPlanStatus,
        hasInvoice: true,
      },
      pausedPlan: {
        title: `${dataFromAPI?.pets[0]?.name}'s Meal`,
        // title: "Jackie's Meal",
        subtitle: "FOUR WEEKS PLAN - FULL BOWL",
        planDuration: "4 weeks",
        itemName: `${dataFromAPI?.pets[0]?.plan.protein} Bowl`,
        // itemName: "Chicken Bowl",
        planStartDate: `${formattedStartDate}`,
        // planStartDate: "01 Mar 2025",
        planEndDate: `${formattedEndDate}`,
        // planEndDate: "29 Mar 2025",
        orderDate: "29 Mar 2025",
        price: Number(dataFromAPI?.pets[0]?.plan.price),
        // price: 300,
        status: "paused" as MealPlanStatus,
        hasInvoice: true,
        pausedDuration: "PAUSED DURATION",
        pausedPeriod: "13 Mar 2025 to 20 Mar 2025",
      },
      cancelledPlan: {
        title: `${dataFromAPI?.pets[0]?.name}'s Meal`,
        // title: "Jackie's Meal",
        subtitle: "FOUR WEEKS PLAN - FULL BOWL",
        planDuration: "4 weeks",
        itemName: `${dataFromAPI?.pets[0]?.plan.protein} Bowl`,
        // itemName: "Chicken Bowl",
        planStartDate: `${formattedStartDate}`,
        // planStartDate: "01 Mar 2025",
        planEndDate: `${formattedEndDate}`,
        // planEndDate: "29 Mar 2025",
        orderDate: "29 Mar 2025",
        price: Number(dataFromAPI?.pets[0]?.plan.price),
        // price: 300,
        status: "cancel" as MealPlanStatus,
        hasInvoice: true,
        cancellationTitle: "CANCELLATION DATE",
        cancellationDate: "13 Mar 2025",
      },
      paymentFailedPlan: {
        title: `${dataFromAPI?.pets[0]?.name}'s Meal`,
        // title: "Jackie's Meal",
        subtitle: "FOUR WEEKS PLAN - FULL BOWL",
        planDuration: "4 weeks",
        itemName: `${dataFromAPI?.pets[0]?.plan.protein} Bowl`,
        // itemName: "Chicken Bowl",
        note: "Change protein for my next order",
        noteDetails: "Order today get new protein from: 24 Apr 2025",
        processingNote: "(We need 5 days to process your request)",
        planStartDate: `${formattedStartDate}`,
        // planStartDate: "01 Mar 2025",
        planEndDate: `${formattedEndDate}`,
        // planEndDate: "29 Mar 2025",
        orderDate: "29 Mar 2025",
        price: Number(dataFromAPI?.pets[0]?.plan.price),
        // price: 300,
        status: "paymentfailed" as MealPlanStatus,
        hasInvoice: true,
      },
    },
    trial: {
      activePlan: {
        title: `${dataFromAPI?.pets[0]?.name}'s Meal`,
        // title: "Jackie's Meal",
        subtitle: "ONE WEEK PLAN - FULL BOWL",
        planDuration: "1 week",
        itemName: `${dataFromAPI?.pets[0]?.plan.protein} Bowl`,
        // itemName: "Chicken Bowl",
        planStartDate: `${formattedStartDate}`,
        // planStartDate: "01 Mar 2025",
        planEndDate: `${formattedEndDate}`,
        // planEndDate: "08 Mar 2025",
        orderDate: "08 Mar 2025",
        price: Number(dataFromAPI?.pets[0]?.plan.price),
        // price: 100,
        status: "active" as MealPlanStatus,
        hasInvoice: true,
      },
      endingSoonPlan: {
        title: `${dataFromAPI?.pets[0]?.name}'s Meal`,
        // title: "Jackie's Meal",
        subtitle: "ONE WEEK PLAN - FULL BOWL",
        planDuration: "1 week",
        itemName: `${dataFromAPI?.pets[0]?.plan.protein} Bowl`,
        // itemName: "Chicken Bowl",
        planStartDate: `${formattedStartDate}`,
        // planStartDate: "01 Mar 2025",
        planEndDate: `${formattedEndDate}`,
        // planEndDate: "08 Mar 2025",
        orderDate: "08 Mar 2025",
        price: Number(dataFromAPI?.pets[0]?.plan.price),
        // price: 100,
        status: "endingsoon" as MealPlanStatus,
        hasInvoice: true,
      },
      expiredPlan: {
        title: `${dataFromAPI?.pets[0]?.name}'s Meal`,
        // title: "Jackie's Meal",
        subtitle: "ONE WEEK PLAN - FULL BOWL",
        planDuration: "1 week",
        itemName: `${dataFromAPI?.pets[0]?.plan.protein} Bowl`,
        // itemName: "Chicken Bowl",
        planStartDate: `${formattedStartDate}`,
        // planStartDate: "01 Mar 2025",
        planEndDate: `${formattedEndDate}`,
        // planEndDate: "08 Mar 2025",
        orderDate: "08 Mar 2025",
        price: Number(dataFromAPI?.pets[0]?.plan.price),
        // price: 100,
        status: "expired" as MealPlanStatus,
        hasInvoice: true,
      },
    }
  }

  const mealConfig = {
    regular: {
      activeMealConfig: {
        planType: "regular",
        label: "CURRENT MEAL PLAN",
        tagColor: "#2ECC71",
        buttons: ["Downgrade to Half-Bowl", "Pause Plan", "Cancel"],
      },
      pausedMealConfig: {
        planType: "regular",
        label: "PAUSED PLAN",
        tagColor: "#F39C12",
        buttons: ["Restart Plan"],
      },
      cancelledMealConfig: {
        planType: "regular",
        label: "CANCELLATION DATE",
        tagColor: "#E63946",
        buttons: ["Restart Plan"],
      },
      paymentFailedMealConfig: {
        planType: "regular",
        label: "PAYMENT FAILED",
        tagColor: "#E74C3C",
        buttons: ["Update Payment"],
      },
    },
    trial: {
      activeMealConfig: {
        planType: "trial",
        label: "CURRENT MEAL PLAN",
        tagColor: "#2ECC71",
        buttons: []
        // buttons: ["Downgrade to Half-Bowl", "Pause Plan", "Cancel"],
      },
      endingSoonMealConfig: {
        planType: "trial",
        label: "ENDING SOON",
        tagColor: "#F39C12",
        buttons: ["Reorder"],
      },
      expiredMealConfig: {
        planType: "trial",
        label: "EXPIRED PLAN",
        tagColor: "#BDBDBD",
        buttons: ["Reorder"],
      },
    }
  }

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

  // const selectedPetIndex = 0;

  useEffect(() => {
    if (petInfoList.length > 0 && !selectedPet) {
      setSelectedPet(petInfoList[0]);
      setSelectedPetFromOrderHistory(petInfoList[0]);
    }
  }, [petInfoList, selectedPet]);

  useEffect(() => {
    if (selectedPetIndexFromOrderHistory) {
      setselectedPetIndex(selectedPetIndexFromOrderHistory)
    }
  }, [selectedPetIndexFromOrderHistory]);

  useEffect(() => {
    if (selectedPetFromOrderHistory) {
      setSelectedPet(selectedPetFromOrderHistory);
    }
  }, [selectedPetFromOrderHistory]);

  console.log("Subscription Details in order history", subscriptionDetails);
  console.log("Subscription Details By SubId And PetId in order history", subscriptionDetailsBySubIdAndPetId);
  console.log("Invoice Data in order history", invoiceData);
  console.log("Card data", subscriptionDetailsBySubIdAndPetId?.result);
  console.log("Selected Pet in order history", selectedPet);
  console.log("Selected pet index from store", selectedPetIndexFromOrderHistory);


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
                className={`font-bold cursor-pointer underline ${index === selectedPetIndex ? "text-[#944446] underline-[#944446]" : ""}`}
                onClick={() => {
                  // setSubId(petData.subId);
                  // setPetId(petData.petId);
                  setselectedPetIndex(index);
                  setSelectedPetIndexFromOrderHistory(index);
                  setSelectedPet(petData);
                  setSelectedPetFromOrderHistory(petData);
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
        {
          planDataFromAPI
            ? (
              <>
                {planDataFromAPI?.type === "Regular" && planDataFromAPI?.planStatus === "active" && (
                  <OrderHistoryCard
                    {...planCardData.regular.activePlan}
                    statusLabel={mealConfig.regular.activeMealConfig.label}
                    statusColor={mealConfig.regular.activeMealConfig.tagColor}
                    buttons={mealConfig.regular.activeMealConfig.buttons}
                    planType={mealConfig.regular.activeMealConfig.planType as "regular" | "trial"}
                    // dataFromAPI={dataFromAPI}
                    invoiceData={invoiceData}
                    bowlSize={planDataFromAPI?.bowlSize}
                    buttonStatus={planDataFromAPI}
                    subId={selectedPet?.subId}
                    petId={selectedPet?.petId}
                    userId={userId}
                    protein={dataFromAPI?.pets[0]?.plan.protein}
                  />
                )}
                {planDataFromAPI?.type === "Regular" && planDataFromAPI?.planStatus === "paused" && (
                  <OrderHistoryCard
                    {...planCardData.regular.pausedPlan}
                    statusLabel={mealConfig.regular.pausedMealConfig.label}
                    statusColor={mealConfig.regular.pausedMealConfig.tagColor}
                    buttons={mealConfig.regular.pausedMealConfig.buttons}
                    planType={mealConfig.regular.pausedMealConfig.planType as "regular" | "trial"}
                    subId={selectedPet?.subId}
                    petId={selectedPet?.petId}
                    userId={userId}
                  />
                )}
                {planDataFromAPI?.type === "Regular" && planDataFromAPI?.planStatus === "cancel" && (
                  <OrderHistoryCard
                    {...planCardData.regular.cancelledPlan}
                    statusLabel={mealConfig.regular.cancelledMealConfig.label}
                    statusColor={mealConfig.regular.cancelledMealConfig.tagColor}
                    buttons={mealConfig.regular.cancelledMealConfig.buttons}
                    planType={mealConfig.regular.cancelledMealConfig.planType as "regular" | "trial"}
                    subId={selectedPet?.subId}
                    petId={selectedPet?.petId}
                    userId={userId}
                  />
                )}
                {planDataFromAPI?.type === "Regular" && planDataFromAPI?.planStatus === "paymentfailed" && (
                  <OrderHistoryCard
                    {...planCardData.regular.paymentFailedPlan}
                    statusLabel={mealConfig.regular.paymentFailedMealConfig.label}
                    statusColor={mealConfig.regular.paymentFailedMealConfig.tagColor}
                    buttons={mealConfig.regular.paymentFailedMealConfig.buttons}
                    planType={mealConfig.regular.paymentFailedMealConfig.planType as "regular" | "trial"}
                    subId={selectedPet?.subId}
                    petId={selectedPet?.petId}
                    userId={userId}
                  />
                )}
                {planDataFromAPI?.type === "Trial" && planDataFromAPI?.planStatus === "active" && (
                  <OrderHistoryCard
                    {...planCardData.trial.activePlan}
                    statusLabel={mealConfig.trial.activeMealConfig.label}
                    statusColor={mealConfig.trial.activeMealConfig.tagColor}
                    buttons={mealConfig.trial.activeMealConfig.buttons}
                    planType={mealConfig.trial.activeMealConfig.planType as "regular" | "trial"}
                    subId={selectedPet?.subId}
                    petId={selectedPet?.petId}
                    userId={userId}
                  />
                )}
                {planDataFromAPI?.type === "Trial" && planDataFromAPI?.planStatus === "endingsoon" && (
                  <OrderHistoryCard
                    {...planCardData.trial.endingSoonPlan}
                    statusLabel={mealConfig.trial.endingSoonMealConfig.label}
                    statusColor={mealConfig.trial.endingSoonMealConfig.tagColor}
                    buttons={mealConfig.trial.endingSoonMealConfig.buttons}
                    planType={mealConfig.trial.endingSoonMealConfig.planType as "regular" | "trial"}
                    subId={selectedPet?.subId}
                    petId={selectedPet?.petId}
                    userId={userId}
                  />
                )}
                {planDataFromAPI?.type === "Trial" && planDataFromAPI?.planStatus === "expired" && (
                  <OrderHistoryCard
                    {...planCardData.trial.expiredPlan}
                    statusLabel={mealConfig.trial.expiredMealConfig.label}
                    statusColor={mealConfig.trial.expiredMealConfig.tagColor}
                    buttons={mealConfig.trial.expiredMealConfig.buttons}
                    planType={mealConfig.trial.expiredMealConfig.planType as "regular" | "trial"}
                    subId={selectedPet?.subId}
                    petId={selectedPet?.petId}
                    userId={userId}
                  />
                )}
              </>
            )
            : <div>
              <OrderHistoryCardSkelton />
            </div>
        }
      </div>

      {/* <div className="mb-6">
        <OrderHistoryCard
          {...planCardData.regular.activePlan}
          statusLabel={mealConfig.regular.activeMealConfig.label}
          statusColor={mealConfig.regular.activeMealConfig.tagColor}
          buttons={mealConfig.regular.activeMealConfig.buttons}
          planType={mealConfig.regular.activeMealConfig.planType as "regular" | "trial"}
        />
      </div> */}

      {/* <Masonry
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
                planType={config.planType as "regular" | "trial"}
              />
            </div>
          );
        })}
      </Masonry> */}
      {/* <Button onClick={() => setIsProteinPopupOpen(true)}>
        Change Protein
      </Button> */}
      {/* <Button onClick={() => setIsDowngradePlanOpen(true)}>
        Downgrade Plan
      </Button> */}
      {/* <Button onClick={() => setIsCancelPopupOpen(true)}>
        Cancel Subscription
      </Button> */}
      {/* <Button onClick={() => setIsPausePopupOpen(true)}>
        Pause Deliveries
      </Button> */}
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
          // setCancelReason(reason);
          console.log(`Cancellation reason: ${reason}`);
        }}
      // cancelReason={cancelReason}
      // setCancelReason={setCancelReason}
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

      <PauseDeliveriesPopup
  isOpen={isPausePopupOpen}
  onClose={() => setIsPausePopupOpen(false)}
  onConfirm={(dateRange) => {
    console.log(`Paused from ${format(dateRange.from, "dd MMM yyyy")} to ${format(dateRange.to, "dd MMM yyyy")}`);
  }}
/>

    </DashboardLayout>
  );
}
