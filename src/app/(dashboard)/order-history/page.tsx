"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { orderHistoryConfig } from "@/components/config/orderHistoryConfig";
import OrderHistoryCard from "@/components/molecules/orderHistoryCard/OrderHistoryCard";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { OrderHistoryCardPropsType } from "@/components/types/type";

import { Button } from "@/components/ui/button";
import { ProteinChangePopup } from "@/components/pageSections/dashboard/orderHistory/ProteinChangePopup";
import { DowngradePlanPopup } from "@/components/pageSections/dashboard/orderHistory/DowngradePlanPopup";
import { CancelSubscriptionPopup } from "@/components/pageSections/dashboard/orderHistory/CancelSubscriptionPopup";

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

const breakpointColumnsObj = {
  default: 2,
  1150: 1,
};

export default function OrderHistory() {
  
  const [isProteinPopupOpen, setIsProteinPopupOpen] = React.useState(false);
  const [isDowngradePlanOpen, setIsDowngradePlanOpen] = React.useState(false);
  const [isCancelPopupOpen, setIsCancelPopupOpen] = React.useState(false);
  const [_, setIsPausePopupOpen] = React.useState(false);
  const [currentProtein, setCurrentProtein] = React.useState("chicken");
  return (
    <DashboardLayout>
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
