import React, { useState } from "react";
import { format, startOfWeek, endOfWeek, addWeeks } from 'date-fns';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Popup } from "@/components/molecules/popupSkelton/popup";
import Typography from "@/components/atoms/typography/Typography";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import WeekDateRangePicker from "@/components/molecules/weekDateRangePicker/WeekDateRangePicker";


// Define types
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
  // nextDeliveryDate = "20th June 2025",
}) => {
  const [selectedOption, setSelectedOption] = useState<WeekOption>("1week");
  const today = new Date();
  
  // Initialize date range with proper week start/end
  const [dateRange, setDateRange] = useState<DateRange>({
    from: initialRange?.from || startOfWeek(today, { weekStartsOn: 1 }),
    to: initialRange?.to || endOfWeek(addWeeks(today, 1), { weekStartsOn: 1 })
  });
  
  const [reason, setReason] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = () => {
    onConfirm(dateRange, reason);
  };

  // Handle preset week selections
  const handleWeekOptionChange = (value: WeekOption) => {
    setSelectedOption(value);
    
    if (value !== "custom") {
      const weekCount = parseInt(value.replace('week', ''), 10);
      
      setDateRange({
        from: startOfWeek(today, { weekStartsOn: 1 }),
        to: endOfWeek(addWeeks(today, weekCount), { weekStartsOn: 1 })
      });
      
      setShowCalendar(false);
    } else {
      setShowCalendar(true);
    }
  };

  // Handle date range selection from calendar
  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range);
  };

  // Format for display in the duration header
  const formatDisplayDate = (date: Date): string => {
    return format(date, "dd.MMM.yyyy");
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      title="Pause Deliveries"
      size={"md"}
      footer={
        <div className="flex justify-center w-full px-7 border-t border-[#E4E7D3] py-7 pt-5 mt-5">
          <Button onClick={handleSubmit} className="w-full" size={"md"}>
            Submit
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-5">
        {/* Week Range Display */}
        <div className="border border-green-700 rounded-md p-4 mb-2">
          <div className="text-center text-green-700 font-medium">
            <div className="text-xs uppercase mb-2">DURATION</div>
            <div>{formatDisplayDate(dateRange.from)} to {formatDisplayDate(dateRange.to)}</div>
          </div>
        </div>
        
        {/* Week Selection Options */}
        <RadioGroup 
          value={selectedOption} 
          onValueChange={(value) => handleWeekOptionChange(value as WeekOption)}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1week" id="option-1week" className="data-[state=checked]:bg-red-600">
              <Check className={cn(
                "h-4 w-4 text-white",
                selectedOption === "1week" ? "opacity-100" : "opacity-0"
              )} />
            </RadioGroupItem>
            <Label htmlFor="option-1week" className="cursor-pointer">Next 1 week</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2weeks" id="option-2weeks" className="data-[state=checked]:bg-red-600">
              <Check className={cn(
                "h-4 w-4 text-white",
                selectedOption === "2weeks" ? "opacity-100" : "opacity-0"
              )} />
            </RadioGroupItem>
            <Label htmlFor="option-2weeks" className="cursor-pointer">Next 2 weeks</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3weeks" id="option-3weeks" className="data-[state=checked]:bg-red-600">
              <Check className={cn(
                "h-4 w-4 text-white",
                selectedOption === "3weeks" ? "opacity-100" : "opacity-0"
              )} />
            </RadioGroupItem>
            <Label htmlFor="option-3weeks" className="cursor-pointer">Next 3 weeks</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4weeks" id="option-4weeks" className="data-[state=checked]:bg-red-600">
              <Check className={cn(
                "h-4 w-4 text-white",
                selectedOption === "4weeks" ? "opacity-100" : "opacity-0"
              )} />
            </RadioGroupItem>
            <Label htmlFor="option-4weeks" className="cursor-pointer">Next 4 weeks</Label>
          </div>
          
          {/* Separator */}
          <div className="flex items-center my-2">
            <Separator className="flex-grow" />
            <span className="px-4 text-gray-500 text-sm uppercase">OR</span>
            <Separator className="flex-grow" />
          </div>
          
          {/* Custom Week Selection */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem 
                value="custom" 
                id="option-custom" 
                className="data-[state=checked]:bg-red-600"
              >
                <Check className={cn(
                  "h-4 w-4 text-white",
                  selectedOption === "custom" ? "opacity-100" : "opacity-0"
                )} />
              </RadioGroupItem>
              <Label htmlFor="option-custom" className="cursor-pointer">Select Week(s)</Label>
            </div>
          </div>
        </RadioGroup>
        
        {/* Week-based Date Range Picker */}
        {showCalendar && (
          <div className="mt-2">
            <WeekDateRangePicker 
              value={dateRange}
              onChange={handleDateRangeChange}
            />
          </div>
        )}
        
        {/* Reason Textarea */}
        <div className="relative mt-2">
          <Typography 
            tag="label" 
            text="kindly state your reason" 
            className="font-normal uppercase whitespace-nowrap absolute bg-white subtitle2 text-secondary-1 -top-[7px] left-1/2 transform -translate-x-1/2 px-1"
          />
          <Textarea 
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <Typography
          tag="p"
          text={`Pause deliveries will take effect from ${formatDisplayDate(dateRange.from)}`}
          className="text-warning-meal-red text-center"
        />
      </div>
    </Popup>
  );
};