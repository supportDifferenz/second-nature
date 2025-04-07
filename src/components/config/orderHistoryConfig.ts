import type { MealPlanStatus } from "@/components/types/type";

export const orderHistoryConfig: Record<
  MealPlanStatus,
  {
    label: string;
    tagColor: string;
    buttons: string[];
  }
> = {
  current: {
    label: "CURRENT MEAL PLAN",
    tagColor: "#2ECC71",
    buttons: ["Downgrade to Half-Bowl", "Pause Plan", "Cancel"],
  },
  paused: {
    label: "PAUSED PLAN",
    tagColor: "#F39C12",
    buttons: ["Restart Plan"],
  },
  cancelled: {
    label: "CANCELLATION DATE",
    tagColor: "#E63946",
    buttons: ["Restart Plan"],
  },
  payment_failed: {
    label: "PAYMENT FAILED",
    tagColor: "#E74C3C",
    buttons: ["Update Payment"],
  },
  expired: {
    label: "EXPIRED PLAN",
    tagColor: "#BDBDBD",
    buttons: ["Reorder"],
  },
  ending_soon: {
    label: "ENDING SOON",
    tagColor: "#F39C12",
    buttons: ["Reorder"],
  },
  renewal_needed: {
    label: "RENEWAL NEEDED",
    tagColor: "#D35400",
    buttons: ["Update Payment"],
  },
};

export const getOrderHistoryConfig = (status: MealPlanStatus) => {
  return orderHistoryConfig[status];
};
