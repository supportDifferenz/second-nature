import React, { useState } from "react";
import { format, endOfWeek, addWeeks, addDays } from "date-fns";
// import { format, startOfWeek, endOfWeek, addWeeks, addDays } from "date-fns";
import { Button } from "@/components/ui/button";
import { Popup } from "@/components/molecules/popupSkelton/popup";
import Typography from "@/components/atoms/typography/Typography";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
// import WeeklyRangeSelector from "@/components/molecules/weekDateRangePicker/WeeklyRangeSelector";
import RangeDatePicker from "@/components/molecules/weekDateRangePicker/WeeklyRangeSelector";

// Types
type WeekOption = "1week" | "2weeks" | "3weeks" | "4weeks" | "custom";

interface DateRange {
  from: Date;
  to: Date;
}

interface PauseDeliveriesPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (dateRange: DateRange, reason: string) => void;
  initialRange?: DateRange;
  nextDeliveryDate?: string;
}

export const PauseDeliveriesPopup: React.FC<PauseDeliveriesPopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
  initialRange,
}) => {
  const [selectedOption, setSelectedOption] = useState<WeekOption>("1week");
  const today = new Date();

  console.log("Today", today);

  const [isWeekSelected, setIsWeekSelected] = useState(true);
  const [dateRange, setDateRange] = useState<DateRange>({
    from: addDays(today, 1),
    to: initialRange?.to || endOfWeek(addWeeks(today, 1), { weekStartsOn: 1 }),
  });
  // const [dateRangeFromCalender, setDateRangeFromCalender] = useState<{ from: Date; to: Date } | null>(null);
  const [dateRangeFromCalender] = useState<{ from: Date; to: Date } | null>(null);
  const [range, setRange] = useState<{ from: Date | undefined; to?: Date | undefined }>({
    from: undefined,
    to: undefined,
  });


  console.log("Date range in pop up:", dateRange);

  const [reason,] = useState<string>("");

  const handleSubmit = () => {
    if (isWeekSelected === true) {
      onConfirm(dateRange, reason)
    } else if (isWeekSelected === false) {
      onConfirm(dateRangeFromCalender!, reason)
    }
  };



  // const handleWeekOptionChange = (value: WeekOption) => {
  //   setSelectedOption(value);
  //   setIsWeekSelected(true);

  //   if (value !== "custom") {
  //     const weekCount = parseInt(value.replace("week", ""), 7);

  //     setDateRange({
  //       from: startOfWeek(today, { weekStartsOn: 1 }),
  //       to: endOfWeek(addWeeks(today, weekCount), { weekStartsOn: 1 }),
  //     });
  //   }
  // };

  const handleWeekOptionChange = (value: WeekOption) => {
    setSelectedOption(value);
    setIsWeekSelected(true);

    if (value !== "custom") {
      let daysToAdd = 0;
      switch (value) {
        case "1week":
          daysToAdd = 7;
          break;
        case "2weeks":
          daysToAdd = 14;
          break;
        case "3weeks":
          daysToAdd = 21;
          break;
        case "4weeks":
          daysToAdd = 28;
          break;
        default:
          break;
      }

      setDateRange({
        from: addDays(today, 1), // Always set from date to tomorrow
        to: addDays(today, 1 + daysToAdd), // Add days to get end date
      });
    }
  };

  console.log("Is week selected", isWeekSelected);

  const formatDisplayDate = (date: Date): string => format(date, "dd.MMM.yyyy");

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Pause Deliveries For"
      size="md"
      footer={
        <div className="flex justify-center w-full px-7 border-t border-[#d1d3c9] py-7 pt-5 mt-5">
          <Button onClick={handleSubmit} className="w-full bg-[#9C3A3A]" size="md">
            Submit
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-5">
        {/* Duration Display */}
        <div className="border border-[#9C3A3A] rounded-md p-4 mb-2 relative">
          <Typography
            tag="label"
            text="DURATION"
            className="font-normal uppercase absolute bg-[#FDFFF4] subtitle2 text-secondary-1 -top-[7px] left-1/2 transform -translate-x-1/2 px-1 text-[#9C3A3A]"
          />
          <div className="text-center text-[#00683D] font-medium h6">
            {formatDisplayDate(dateRange.from)} to {formatDisplayDate(dateRange.to)}
          </div>
        </div>

        {/* Week Selection */}
        <RadioGroup
          value={selectedOption}
          onValueChange={(value) => handleWeekOptionChange(value as WeekOption)}
          className="flex flex-wrap gap-4"
        >
          {[
            { value: "1week", label: "Next 1 week" },
            { value: "2weeks", label: "Next 2 weeks" },
            { value: "3weeks", label: "Next 3 weeks" },
            { value: "4weeks", label: "Next 4 weeks" },
          ].map(({ value, label }) => (
            <div key={value} className="flex items-center space-x-2 w-[47%] lg:w-[45%] relative">
              <RadioGroupItem value={value} id={`option-${value}`} className="sr-only" />
              <div
                className="w-8 h-8 sm:w-7 sm:h-7 rounded-full p-1 cursor-pointer"
                onClick={() => handleWeekOptionChange(value as WeekOption)}
              >
                <Image
                  src={
                    selectedOption === value
                      ? "/icons/checked.svg"
                      : "/icons/unchecked-default.svg"
                  }
                  alt={selectedOption === value ? "checked" : "unchecked"}
                  fill
                  className="!static w-fit h-full"
                />
              </div>
              <Label htmlFor={`option-${value}`} className="cursor-pointer mb-0">
                {label}
              </Label>
            </div>
          ))}

          {/* Separator */}
          <div className="flex items-center my-2 w-full">
            <Separator className="flex-1 bg-[#d1d3c9]" />
            <span className="px-4 text-gray-500 text-sm uppercase">OR</span>
            <Separator className="flex-1 bg-[#d1d3c9]" />
          </div>

          {/* Custom Week Selector */}
          <div className="flex items-center space-x-2 w-full relative">
            <RadioGroupItem value="custom" id="option-custom" className="sr-only" />
            <div
              className="w-8 h-8 sm:w-7 sm:h-7 rounded-full p-1 cursor-pointer"
              onClick={() => handleWeekOptionChange("custom")}
            >
              <Image
                src={
                  selectedOption === "custom"
                    ? "/icons/checked.svg"
                    : "/icons/unchecked-default.svg"
                }
                alt={selectedOption === "custom" ? "checked" : "unchecked"}
                fill
                className="!static w-fit h-full"
              />
            </div>
            <Label htmlFor="option-custom" className="cursor-pointer mb-0">
              Select Week(s)
            </Label>
          </div>
        </RadioGroup>
        {/* <WeeklyRangeSelector setDateRangeFromCalender={setDateRangeFromCalender} setIsWeekSelected={setIsWeekSelected} /> */}
        <RangeDatePicker selectedRange={range} setSelectedRange={setRange} />

      </div>
    </Popup>
  );
};
