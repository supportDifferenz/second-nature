"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { orderHistoryConfig } from "@/components/config/orderHistoryConfig";
import OrderHistoryCard from "@/components/molecules/orderHistoryCard/OrderHistoryCard";
import DashboardLayout from "@/components/templates/DashboardLayout";
import { OrderHistoryCardPropsType } from "@/components/types/type";

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
    </DashboardLayout>
  );
}
