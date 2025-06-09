import type { MealPlanStatus } from "@/components/types/type";

export const orderHistoryConfig: Record<
  MealPlanStatus,
  {
    label: string;
    tagColor: string;
    buttons: string[];
    planType?: "regular" | "trial";
  }
> = {
  active: {
    label: "CURRENT MEAL PLAN",
    tagColor: "#2ECC71",
    buttons: ["Downgrade to Half-Bowl", "Pause Plan", "Cancel"],
    planType: "regular",
  },
  paused: {
    label: "PAUSED PLAN",
    tagColor: "#F39C12",
    buttons: ["Restart Plan"],
    planType: "regular",
  },
  cancel: {
    label: "CANCELLATION DATE",
    tagColor: "#E63946",
    buttons: ["Restart Plan"],
    planType: "regular",
  },
  paymentfailed: {
    label: "PAYMENT FAILED",
    tagColor: "#E74C3C",
    buttons: ["Update Payment"],
    planType: "regular",
  },
  expired: {
    label: "EXPIRED PLAN",
    tagColor: "#BDBDBD",
    buttons: ["Reorder"],
    planType: "trial",
  },
  endingsoon: {
    label: "ENDING SOON",
    tagColor: "#F39C12",
    buttons: ["Reorder"],
    planType: "trial",
  },
  renewalneeded: {
    label: "RENEWAL NEEDED",
    tagColor: "#D35400",
    buttons: ["Update Payment"],
    planType: "trial",
  },
};

export const getOrderHistoryConfig = (status: MealPlanStatus) => {
  return orderHistoryConfig[status];
};
