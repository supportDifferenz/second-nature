"use client";

import { useState } from "react";
import { format, startOfWeek, endOfWeek, isWithinInterval, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

export default function RangeDatePicker({
  // setSelectedRange,
  setWeeks,
  setDateRange,
  setIsWeekSelected,
  colorClass,
  className,
}: {
  // setSelectedRange?: (range: DateRange) => void;
  setWeeks: (weeks: number) => void;
  setDateRange: (dateRange: { from: string; to: string }) => void;
  setIsWeekSelected: (selected: boolean) => void;
  colorClass?: string;
  className?: string;
}) {
  // Store an array of selected week ranges
  const [selectedWeeks, setSelectedWeeks] = useState<DateRange[]>([]);
  const [open, setOpen] = useState(false);

  // Helper: check if a week (by start date) is already selected
  const isWeekSelected = (weekStart: Date) => {
    return selectedWeeks.some(
      (range) => range.from && isSameDay(range.from, weekStart)
    );
  };

  // Helper: check if a date is in any selected week
  const isDateInSelectedWeeks = (date: Date) => {
    return selectedWeeks.some(
      (range) => range.from && range.to && isWithinInterval(date, { start: range.from, end: range.to })
    );
  };

  // On day click, toggle the week selection
  const handleSelect = (range: { from: Date } | undefined) => {
    if (!range?.from) return;
    const weekStart = startOfWeek(range.from, { weekStartsOn: 0 });
    const weekEnd = endOfWeek(range.from, { weekStartsOn: 0 });
    const alreadySelected = isWeekSelected(weekStart);
    let newWeeks: DateRange[];
    if (alreadySelected) {
      // Remove this week
      newWeeks = selectedWeeks.filter(
        (r) => !(r.from && isSameDay(r.from, weekStart))
      );
    } else {
      // Add this week (up to 8)
      if (selectedWeeks.length >= 8) return;
      newWeeks = [...selectedWeeks, { from: weekStart, to: weekEnd }];
    }
    setSelectedWeeks(newWeeks);
    setWeeks(newWeeks.length);
    setIsWeekSelected(newWeeks.length > 0);
    // Only update setSelectedRange and setDateRange if there are selected weeks
    if (newWeeks.length > 0) {
      const sorted = [...newWeeks].filter(w => w.from && w.to).sort((a, b) => (a.from!.getTime() - b.from!.getTime()));
      if (sorted[0].from && sorted[sorted.length - 1].to) {
        // setSelectedRange({ from: sorted[0].from!, to: sorted[sorted.length - 1].to! });
        setDateRange({
          from: format(sorted[0].from!, "yyyy-MM-dd"),
          to: format(sorted[sorted.length - 1].to!, "yyyy-MM-dd"),
        });
      }
    }
    // If no weeks are selected, do not call setSelectedRange or setDateRange
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          className={cn(
            `flex items-center justify-between gap-2 px-2.5 py-2 w-full 
     h-9  rounded-none border border-[#8B3B3B] bg-[#FAFAF0]
     text-[#8B3B3B] hover:bg-[#FAFAF0] outline-none 
     data-[state=open]:border-[#8B3B3B] data-[placeholder]:text-[#9B9B9B]`,
            !selectedWeeks.length && "text-muted-foreground",
            className,
            colorClass
          )}
        >
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center gap-2 w-1/2">
              <Image
                src="/icons/calendar-secondary.svg"
                alt="calendar icon"
                width={32}
                height={32}
                className="shrink-0 !w-4 !h-4"
              />
              <span className="text-sm">
                {selectedWeeks.length > 0 && selectedWeeks[0].from && selectedWeeks[selectedWeeks.length - 1].to
                   ? `${format(selectedWeeks[0].from!, "dd MMM yyyy")}`
                   : "From"}
              </span>
            </div>
            <div className="border-l border-[#8B3B3B] h-5 mx-2.5" />
            <div className="flex items-center gap-2 w-1/2">
              <span className="text-sm">
                {selectedWeeks.length > 0 && selectedWeeks[0].from && selectedWeeks[selectedWeeks.length - 1].to
                   ? `${format(selectedWeeks[selectedWeeks.length - 1].to!, "dd MMM yyyy")}`
                   : "To"}
              </span>
            </div>
            {/* <div className="w-1/2 text-left">
              <span className="text-sm">
                {selectedWeeks.length > 0
                  ? `${selectedWeeks.length} week${selectedWeeks.length > 1 ? 's' : ''}`
                  : "To"}
              </span>
            </div> */}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 mt-2 bg-white">
        <Calendar
          mode="single"
          selected={new Date()}
          onSelect={(date) => {
            if (date) {
              handleSelect({ from: date });
            }
          }}
          className="rounded-md"
          modifiers={{
            selected: isDateInSelectedWeeks
          }}
          modifiersClassNames={{
            selected: "bg-green-600 text-white"
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

