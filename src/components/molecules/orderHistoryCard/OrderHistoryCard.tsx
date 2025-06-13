import React,{ useState } from "react";
import { OrderHistoryCardPropsType } from "@/components/types/type";
import BadgeTitle from "@/components/atoms/badgeTitle/BadgeTitle";
import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import Icon from "@/components/atoms/icon/Icon";
import { ProteinChangePopup } from "@/components/pageSections/dashboard/orderHistory/ProteinChangePopup";
import { DowngradePlanPopup } from "@/components/pageSections/dashboard/orderHistory/DowngradePlanPopup";
import { CancelSubscriptionPopup } from "@/components/pageSections/dashboard/orderHistory/CancelSubscriptionPopup";
import { useChangeProtein } from "@/hooks/subscriptionHooks/changeProteinHook";
import { useDowngradePlan } from "@/hooks/subscriptionHooks/downgradePlanHook";
import { useUpgradePlan } from "@/hooks/subscriptionHooks/upgradePlanHook";
import { useCancelPlan } from "@/hooks/subscriptionHooks/cancelPlanHook";
import { useRestartPlan } from "@/hooks/subscriptionHooks/restartPlanHook";
import { useOrderHistoryStore } from "@/zustand/store/orderHistoryDataStore";
import { useGetSubscriptionDetailsByUserIdAndPetId } from "@/hooks/subscriptionHooks/getSubscriptionDetailsBySubIdAndPetId";
import { useCreateSubscriptionHook } from "@/hooks/subscriptionHooks/createSubscriptionHook";
import { useGetInvoiceBySubIdAndPetId } from "@/hooks/subscriptionHooks/getInvoiceDetailsBySubIdAndPetId";
import { useUserStore } from "@/zustand/store/userDataStore";
import { PauseDeliveriesPopup } from "@/components/pageSections/dashboard/orderHistory/PauseDeliveriesPopup";
import { format } from "date-fns";
import { usePausePlan } from "@/hooks/subscriptionHooks/pausePlanHook";

const OrderHistoryCard: React.FC<
  OrderHistoryCardPropsType & {
    statusLabel: string;
    statusColor: string;
    buttons: string[];
    planType: "regular" | "trial";
    invoiceData?: { filePath: string };
    bowlSize?: string;
    buttonStatus?: {
      isDowngrade: boolean;
      isUpgrade: boolean;
      isChangeprotein: boolean;
    };
    subId?: string;
    petId?: string;
    userId?: string;
    protein?: string;
  }
> = ({
  title,
  subtitle,
  // planDuration,
  itemName,
  planStartDate,
  planEndDate,
  // orderDate,
  price,
  note,
  // noteDetails,
  processingNote,
  hasInvoice,
  pausedDuration,
  pausedPeriod,
  cancellationTitle,
  cancellationDate,
  statusLabel,
  statusColor,
  buttons,
  status,
  planType,
  // invoiceData,
  bowlSize,
  buttonStatus,
  protein,
  subId,
  petId,
  userId,
}) => {

  const { userDetails } = useUserStore();
  const userIdFromStore = userDetails?.userId;
  const { selectedPetFromOrderHistory } = useOrderHistoryStore();
  const subIdFromStore = selectedPetFromOrderHistory?.subId ?? "";
  const petIdFromStore = selectedPetFromOrderHistory?.petId ?? "";
  const { data: subscriptionDetails } = useGetSubscriptionDetailsByUserIdAndPetId(userIdFromStore ?? "", petIdFromStore ?? "");
  const userIdFromAPI = subscriptionDetails?.result?.user_id ?? "";
  const accountFromAPI = subscriptionDetails?.result?.account ?? "";
  const shippingDetailsFromAPI = subscriptionDetails?.result?.shippingDetails ?? "";
  const billingDetailsFromAPI = subscriptionDetails?.result?.billingDetails ?? "";
  const subscriptionDateFromAPI = subscriptionDetails?.result?.subscriptiondate ?? "";
  const promoCodeFromAPI = subscriptionDetails?.result?.promocode ?? "";
  const subscribeToOffersFromAPI = subscriptionDetails?.result?.subscribeToOffers ?? true;
  const petsFromAPI = subscriptionDetails?.result?.pets ?? [];
  const paymentFromAPI = subscriptionDetails?.result?.payment ?? "";
  // const isDeletedFromAPI = subscriptionDetails?.result?.isDeleted ?? false;
  const cancellationDateFromAPI = subscriptionDetails?.result?.lastChange?.Date;

  let formattedCancellationDate = "";

  if (cancellationDateFromAPI) {
    // 1. SAFELY PARSE THE DATE (Handles YYYY-MM-DD or ISO formats)
    const parsedDate = new Date(cancellationDateFromAPI);

    // 2. VALIDATE THE DATE
    if (!isNaN(parsedDate.getTime())) { // Check if date is valid
      // 3. FORMAT AS "DD MMM YYYY" (e.g., "13 Mar 2025")
      formattedCancellationDate = parsedDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } else {
      console.error("Invalid date format:", cancellationDateFromAPI);
      formattedCancellationDate = "Invalid date"; // Fallback
    }
  }

  const proteinImageSrc = protein === "lamb"
    ? "/icons/card-lamb.svg"
    : protein === "beef"
    ? "/icons/card-beef.svg"
    : "/icons/card-chicken.svg";

  const [isProteinPopupOpen, setIsProteinPopupOpen] = useState(false);
  const [isDowngradePopupOpen, setIsDowngradePopupOpen] = useState(false);
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
  const [isPausePopupOpen, setIsPausePopupOpen] = useState(false);
  const [currentProtein, setCurrentProtein] = useState(protein);
  const [changeProteinError, setChangeProteinError] = useState("");
  const [planChangeError, setPlanChangeError] = useState("");
  const [planChangeReason, setPlanChangeReason] = useState("");
  const [cancelReason, setCancelReason] = useState("");
  const [restartPlanError, setRestartPlanError] = useState("");
  const [reOrderPlanError, setReOrderPlanError] = useState("");
  const [pauseStartDate, setPauseStartDate] = useState("");
  const [pauseEndDate, setPauseEndDate] = useState("");
  // const [subIdFromProp, setSubIdFromProp] = useState("");
  // const [petIdFromProp, setPetIdFromProp] = useState("");
  // const [userIdFromProp, setUserIdFromProp] = useState("");

  const { mutate: changeProtein, isPending: isChangeProteinPending } = useChangeProtein();
  const { mutate: downgradePlan } = useDowngradePlan();
  const { mutate: upgradePlan } = useUpgradePlan();
  const { mutate: cancelPlan } = useCancelPlan();
  const { mutate: restartPlan } = useRestartPlan();
  const { mutate: createSubscription } = useCreateSubscriptionHook();
  const { mutate: pausePlan } = usePausePlan();
  const { data: invoiceDataFromAPI } = useGetInvoiceBySubIdAndPetId(subIdFromStore, petIdFromStore);
  

  const handleChangeProtein = (subId: string, petId: string, userId: string, proteinType: string) => {
    changeProtein(
      { 
        subId,
        petId, 
        userId, 
        proteinType
      },
      {
        onSuccess: () => {
          setCurrentProtein(protein);
          setIsProteinPopupOpen(false);
          setChangeProteinError("");
          window.location.reload();
        },
        onError: (error) => {
          setCurrentProtein(protein);
          if (error instanceof Error) {
            setChangeProteinError(error.message || "Error in protein change");
          }
        }
      }
    );
  }

  const handleDowngrade = () => {
    // const downgradeReason = "User requested downgrade"; // Set your reason here or get from user input
    if (subId && petId && userId) {
      downgradePlan(
        { 
          subId, 
          petId, 
          userId,
          downgradeReason: planChangeReason,
        },
        {
          onSuccess: () => {
            setIsDowngradePopupOpen(false);
            setPlanChangeError("");
            window.location.reload();
          },
          onError: (error) => {
            if (error instanceof Error) {
              setPlanChangeError(error.message || "Error in downgrade plan");
            }
          }
        }
      );
    } else {
      console.error("subId, petId, or userId is undefined");
    }
  }

  const handleUpgrade = () => {
    // const upgradeReason = "User requested upgrade"; // Set your reason here or get from user input
    if (subId && petId && userId) {
      upgradePlan(
        { 
          subId, 
          petId, 
          userId, 
          upgradeReason: planChangeReason,
        },
        {
          onSuccess: () => {
            setIsDowngradePopupOpen(false);
            setPlanChangeError("");
            window.location.reload();
          },
          onError: (error) => {
            if (error instanceof Error) {
              setPlanChangeError(error.message || "Error in upgrade plan");
            }
          }
        }
      );
    } else {
      console.error("subId, petId, or userId is undefined");
    }
  }

  const handleCancel = () => {
    if (subId && petId && userId) {
      cancelPlan(
        {
          subId,
          petId,
          userId,
          formData: {
            cancelReason: cancelReason
          }
        },
        {
          onSuccess: () => {
            setIsCancelPopupOpen(false);
            window.location.reload();
          },
          onError: (error: unknown) => {
            if (error instanceof Error) {
              setPlanChangeError(error.message || "Error in cancel plan");
            }
          }
        }
      );
    } else {
      console.error("subId, petId, or userId is undefined");
      setPlanChangeError("subId, petId, or userId is undefined");
    }
  }

  const handleRestart = () => {
    // alert(`SubId: ${subId}, PetId: ${petId}, UserId: ${userId}`);  
    if (subId && petId && userId) {
      // alert("Clicked restart plan");
      restartPlan(
        {
          subId,
          petId,
          userId,
        },
        {
          onSuccess: () => {
            // setIsCancelPopupOpen(false);
            setRestartPlanError("");
            window.location.reload();
          },
          onError: (error: unknown) => {
            if (error instanceof Error) {
              setRestartPlanError(error.message || "Error in restart plan");
            }
          }
        }
      );
    } else {
      console.error("subId, petId, or userId is undefined");
      setRestartPlanError("subId, petId, or userId is undefined");
    }
  }

  const handleReOrder = () => {
    createSubscription(
      {
        user_id: userIdFromAPI,
        account: accountFromAPI,
        shippingDetails: shippingDetailsFromAPI,
        billingDetails: billingDetailsFromAPI,
        subscriptiondate: subscriptionDateFromAPI,
        promoCode: promoCodeFromAPI,
        subscribeToOffers: subscribeToOffersFromAPI,
        // pets: petsFromAPI,
        pets: Array.isArray(petsFromAPI)
          ? petsFromAPI.map((pet: {
              plan: { [key: string]: unknown; planStatus?: string };
              [key: string]: unknown;
            }) => ({
              ...pet,
              plan: {
                ...pet.plan,
                planStatus: "active",
              },
            }))
          : petsFromAPI,
        payment: paymentFromAPI,
        isDeleted: false,
      },
      {
        onSuccess: (data) => {
          console.log("Re order success",data);
          setReOrderPlanError("");
          window.location.reload();
        },
        onError: (error: unknown) => {
          if (error instanceof Error) {
            setReOrderPlanError(error.message || "Error in re order");
          }
        }
      }
    )
  }

  const handlePausePlan = () => {
    if (subId && petId && userId) {
      pausePlan(
        {
          subId,
          petId,
          userId,
          formData: {
            pauseReason: "User requested pause",
            weeks: 0,
            startDate: pauseStartDate,
            endDate: pauseEndDate
          }
        },
        {
          onSuccess: () => {
            // setPausePlanError("");
            window.location.reload();
          },
          onError: (error: unknown) => {
            // if (error instanceof Error) {
            //   setPausePlanError(error.message || "Error in pause plan");
            // }
            console.log("Error in pause plan", error);
          }
        }
      );
    }
  }

  // useEffect(() => {
  //   console.log('Current protein:', currentProtein);
  // }, [currentProtein]);

  // console.log("Current protein in order history card", currentProtein);
  // console.log("Protein in order history card", protein);
  // console.log("Cancel reason in order history page", cancelReason);
  // console.log("Buttons in order history card", buttons);
  // console.log(`SubId: ${subId}, PetId: ${petId}, UserId: ${userId}`);
  // console.log("Selected pet from order history page", selectedPetFromOrderHistory);
  // console.log("Subscription data from order history page", subscriptionDetails);
  // console.log("User id from API", userIdFromAPI);
  // console.log("Account from API", accountFromAPI);
  // console.log("Shipping details from API", shippingDetailsFromAPI);
  // console.log("Billing details from API", billingDetailsFromAPI);
  // console.log("Subscription date from API", subscriptionDateFromAPI);
  // console.log("Promo code from API", promoCodeFromAPI);
  // console.log("Subscribe to offers from API", subscribeToOffersFromAPI);
  // console.log("Pets from API", petsFromAPI);
  // console.log("Payment from API", paymentFromAPI);
  // console.log("Invoice file path", invoiceDataFromAPI?.filePath);
  console.log("Formatted cancellation date", formattedCancellationDate);

  return (
    <div className="break-inside-avoid rounded-xl border border-[#E4E7D3] bg-[#FDFFF4] p-4 sm:p-6  h-fit relative space-y-6 max-w-[345px]">
      {/* status */}
      <BadgeTitle
        label={statusLabel}
        color={statusColor}
        variant="squared"
        className="absolute -top-[.8px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap"
      />

      {/* pet name & invoice */}
      <div className="text-center mb-7">
        <Typography
          tag="h5"
          text={title}
          className="text-primary-dark font-medium text-lg"
        />
        {hasInvoice && (
          <Button variant={"nullBtn"} className="border mx-auto">
            <a href={invoiceDataFromAPI?.filePath} target="_blank" className="flex items-center">
            {/* <a href="https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf" target="_blank" className="flex items-center"> */}
              <div className="w-5">
              <Image
                src="/icons/download.svg"
                alt="INVOICE"
                fill
                className="!static w-full object-contain"
              />
            </div>
              invoice
            </a>
          </Button>
        )}
      </div>

      {status === "paused" && pausedDuration && pausedPeriod && (
        <div className=" rounded-lg border border-secondary-1 p-4 px-1 text-center relative ">
          <Typography
            tag="p"
            text={pausedDuration}
            className="absolute -top-[.8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
          />
          <Typography
            tag="p"
            text={pausedPeriod}
            className="text-primary-dark font-bold block"
          />
        </div>
      )}

      {status === "cancel" && cancellationTitle && cancellationDate && (
        <div className="rounded-lg border border-secondary-1 p-4 px-1 text-center relative">
          <Typography
            tag="p"
            text={cancellationTitle}
            className="absolute -top-[.8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
          />
          <Typography
            tag="p"
            // text={cancellationDate}
            text={formattedCancellationDate}
            // text={cancellationDateFromAPI}
            className="text-primary-dark font-bold block"
          />
        </div>
      )}

      {/* meal item details */}
      <div className="rounded-lg border border-secondary-1 p-4 px-3 text-center relative ">
        <Typography
          tag="p"
          text={subtitle}
          className="absolute -top-[.8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
        />
        <div className="flex justify-center items-center gap-1">
          <div className="w-7">
            <Image
              src={proteinImageSrc}
              // src="icons/chicken-vector-icon.svg"
              alt={itemName}
              // alt="Chicken"
              fill
              className="!static w-full object-contain"
            />
          </div>
          <Typography
            tag="h5"
            text={itemName}
            className="text-sm font-semibold capitalize text-primary-dark"
          />
        </div>

        {note && (
          <>
            {
              buttonStatus?.isChangeprotein
              ? (
                  <Typography
                    tag="p"
                    text="Protein has been changed"
                  />
                )
              : (
                <Button
                  variant={"linkSecondary"}
                  className="underline mt-2 whitespace-normal"
                  onClick={() => setIsProteinPopupOpen(true)}
                >
                  Change protein for my next order
                </Button>
              )
            }
            
            {/* {noteDetails && (
              <Typography
                tag="p"
                text={noteDetails}
                className="mt-2 subtitle3"
              />
            )} */}
            {processingNote && (
              <Typography
                tag="p"
                text={processingNote}
                className="mt-4 subtitle3 text-[#818181]"
              />
            )}
          </>
        )}
      </div>

      {/* price section */}
      <div className="flex items-end">
        <div className="min-w-min">
          {/* Plan Start Date */}
          <div className="pb-1 border-b border-[#E4E7D3]">
            <Typography
              tag="p"
              text="Plan Start Date"
              className="subtitle3 text-black"
            />
            <Typography
              tag="p"
              text={planStartDate}
              className="bodyBtnText text-primary-dark"
            />
          </div>
          {/* Plan Renewal  Date */}
          <div className="pt-1">
            <Typography
              tag="p"
              text="Plan Renewal Date"
              className="subtitle3 text-black"
            />
            <Typography
              tag="p"
              text={planEndDate}
              className="bodyBtnText text-primary-dark"
            />
          </div>
        </div>
        {/* Order Price */}
        <div className="grow text-right">
          <Typography
            tag="p"
            text="Order Price"
            className="subtitle3 text-black"
          />
          <Typography
            tag="h5"
            text={`${price} QAR`}
            className="text-primary-dark"
          />
        </div>
      </div>

      {/*nav button */}
      {status === "active" ? (
        planType === "regular" ? (
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-2">
              {/* <Button 
                className="w-full"
                size="md"
                onClick={() => setIsDowngradePopupOpen(true)}
              >
                {buttons[0]}
              </Button> */}

              {
                bowlSize === "half"
                ? (
                  <Button 
                    className="w-full"
                    size="md"
                    onClick={() => setIsDowngradePopupOpen(true)}
                  >
                    Upgrade to Full-Bowl
                  </Button>
                )
                : (
                  <Button 
                    className="w-full"
                    size="md"
                    onClick={() => setIsDowngradePopupOpen(true)}
                  >
                    Downgrade to Half-Bowl
                  </Button>
                )
              }
              
            </div>
            <div className="col-span-1">
              <Button 
                className="w-full" 
                size="md"
                onClick={() => setIsPausePopupOpen(true)}
              >
                {buttons[1]} {/* Pause Plan */}
              </Button>
            </div>
            <div className="col-span-1">
              <Button 
                className="w-full" 
                size="md"
                onClick={() => setIsCancelPopupOpen(true)}
              >
                {buttons[2]} {/* Cancel */}
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 mt-4">
            {buttons.map((btn, i) => (
              <Button 
                key={i} 
                className="w-full" 
                size="md"
              >
                {btn}
              </Button>
            ))}
          </div>
        )
      ) : (
        <div className="flex flex-col gap-2 mt-4">
          {buttons.map((btn, i) => (
            <>
              <Button 
                key={i} 
                className="w-full" 
                size="md"
                onClick={() => {
                  if (btn === "Restart Plan") {
                    handleRestart();
                  } else if (btn === "Reorder") {
                    handleReOrder();
                  }
                }}
              >
                {
                  btn === "Restart Plan"
                    ? "Restart Plan"
                    : btn === "Reorder"
                    ? "Reorder"
                    : btn
                }
              </Button>
              <Typography
                tag="p"
                text={restartPlanError}
                // text="Restart plan error"
                className="text-red-600 text-center"
              />
              <Typography
                tag="p"
                text={reOrderPlanError}
                // text="Restart plan error"
                className="text-red-600 text-center"
              />
            </> 
          ))}
        </div>
      )}

      <ProteinChangePopup
        key={currentProtein}
        isOpen={isProteinPopupOpen}
        onClose={() => setIsProteinPopupOpen(false)}
        currentSelection={currentProtein}
        onSave={(proteinType) => {
          setCurrentProtein(proteinType);
          if (subId && petId && userId) {
            handleChangeProtein(subId, petId, userId, proteinType);
          } else {
            console.error("subId, petId, or userId is undefined");
            setChangeProteinError("subId, petId, or userId is undefined");
          }
          // API call to update protein
        }}
        changeProteinError={changeProteinError}
        isChangeProteinLoading={isChangeProteinPending}
      />
      
      <DowngradePlanPopup
        isOpen={isDowngradePopupOpen}
        onClose={() => setIsDowngradePopupOpen(false)}
        onConfirm={() => {
          // API call to downgrade plan
          setIsDowngradePopupOpen(false);
        }}
        bowlSize={bowlSize}
        isDowngrade={buttonStatus?.isDowngrade}
        isUpgrade={buttonStatus?.isUpgrade}
        planStartDate={planStartDate}
        planChangeError={planChangeError}
        planChangeReason={planChangeReason}
        setPlanChangeReason={setPlanChangeReason}
        handleDowngrade={handleDowngrade}
        handleUpgrade={handleUpgrade}
      />
      
      <CancelSubscriptionPopup
        isOpen={isCancelPopupOpen}
        onClose={() => setIsCancelPopupOpen(false)}
        onCancel={(reason) => {
          // API call to cancel with reason
          setCancelReason(reason);
          handleCancel();
          console.log(`Cancellation reason: ${reason}`);
        }}
      />

      <PauseDeliveriesPopup
        isOpen={isPausePopupOpen}
        onClose={() => setIsPausePopupOpen(false)}
        onConfirm={(dateRange) => {
          setPauseStartDate(format(dateRange.from, "dd MMM yyyy"));
          setPauseEndDate(format(dateRange.to, "dd MMM yyyy"));
          console.log(`Paused from ${format(dateRange.from, "dd MMM yyyy")} to ${format(dateRange.to, "dd MMM yyyy")}`);
          console.log(`Paused from ${dateRange.from} to ${dateRange.to}`);
          handlePausePlan();
          setIsPausePopupOpen(false);
        }}
      />
    </div>
  );
};

export default OrderHistoryCard;
