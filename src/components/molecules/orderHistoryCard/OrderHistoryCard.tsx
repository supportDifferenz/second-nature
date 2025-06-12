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
  invoiceData,
  bowlSize,
  buttonStatus,
  protein,
  subId,
  petId,
  userId,
}) => {

  const proteinImageSrc = protein === "lamb"
    ? "/icons/card-lamb.svg"
    : protein === "beef"
    ? "/icons/card-beef.svg"
    : "/icons/card-chicken.svg";

  const [isProteinPopupOpen, setIsProteinPopupOpen] = useState(false);
  const [isDowngradePopupOpen, setIsDowngradePopupOpen] = useState(false);
  const [isCancelPopupOpen, setIsCancelPopupOpen] = useState(false);
  const [currentProtein, setCurrentProtein] = useState(protein);
  const [changeProteinError, setChangeProteinError] = useState("");
  const [planChangeError, setPlanChangeError] = useState("");
  const [planChangeReason, setPlanChangeReason] = useState("");
  const [cancelReason, setCancelReason] = useState("");
  // const [subIdFromProp, setSubIdFromProp] = useState("");
  // const [petIdFromProp, setPetIdFromProp] = useState("");
  // const [userIdFromProp, setUserIdFromProp] = useState("");

  const { mutate: changeProtein, isPending: isChangeProteinPending } = useChangeProtein();
  const { mutate: downgradePlan } = useDowngradePlan();
  const { mutate: upgradePlan } = useUpgradePlan();
  const { mutate: cancelPlan } = useCancelPlan();

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

  // useEffect(() => {
  //   console.log('Current protein:', currentProtein);
  // }, [currentProtein]);

  console.log("Current protein in order history card", currentProtein);
  console.log("Protein in order history card", protein);
  console.log("Cancel reason in order history page", cancelReason);

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
            <a href={invoiceData?.filePath} target="_blank" className="flex items-center">
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
            className="absolute -top-[.8px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
          />
          <Typography
            tag="p"
            text={pausedPeriod}
            className="text-primary-dark font-bold block"
          />
        </div>
      )}

      {status === "cancel" && cancellationTitle && cancellationDate && (
        <div className=" rounded-lg border border-secondary-1 p-4 px-1 text-center relative ">
          <Typography
            tag="p"
            text={cancellationTitle}
            className="absolute -top-[.8px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
          />
          <Typography
            tag="p"
            text={cancellationDate}
            className="text-primary-dark font-bold block"
          />
        </div>
      )}

      {/* meal item details */}
      <div className="rounded-lg border border-secondary-1 p-4 px-3 text-center relative ">
        <Typography
          tag="p"
          text={subtitle}
          className="absolute -top-[.8px]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap subtitle3 font-bold bg-[#FDFFF4] px-1 text-secondary-1"
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
              <Button className="w-full" size="md">
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
              <Button key={i} className="w-full" size="md">
                {btn}
              </Button>
            ))}
          </div>
        )
      ) : (
        <div className="flex flex-col gap-2 mt-4">
          {buttons.map((btn, i) => (
            <Button key={i} className="w-full" size="md">
              {btn}
            </Button>
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
    </div>
  );
};

export default OrderHistoryCard;
