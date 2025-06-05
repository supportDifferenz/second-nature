import type { MealPlanStatus } from "@/components/types/type";

export const orderHistoryConfig: Record<
  MealPlanStatus,
  {
    label: string;
    tagColor: string;
    buttons: string[];
  }
> = {
  active: {
    label: "CURRENT MEAL PLAN",
    tagColor: "#2ECC71",
    buttons: ["Downgrade to Half-Bowl", "Pause Plan", "Cancel"],
  },
  paused: {
    label: "PAUSED PLAN",
    tagColor: "#F39C12",
    buttons: ["Restart Plan"],
  },
  cancel: {
    label: "CANCELLATION DATE",
    tagColor: "#E63946",
    buttons: ["Restart Plan"],
  },
  paymentfailed: {
    label: "PAYMENT FAILED",
    tagColor: "#E74C3C",
    buttons: ["Update Payment"],
  },
  expired: {
    label: "EXPIRED PLAN",
    tagColor: "#BDBDBD",
    buttons: ["Reorder"],
  },
  endingsoon: {
    label: "ENDING SOON",
    tagColor: "#F39C12",
    buttons: ["Reorder"],
  },
  renewalneeded: {
    label: "RENEWAL NEEDED",
    tagColor: "#D35400",
    buttons: ["Update Payment"],
  },
};

export const getOrderHistoryConfig = (status: MealPlanStatus) => {
  return orderHistoryConfig[status];
};
