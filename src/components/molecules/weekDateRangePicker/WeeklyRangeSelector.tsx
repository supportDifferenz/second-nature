"use client";

import { useState } from "react";
import { format, startOfWeek, endOfWeek, addWeeks, isBefore, isAfter, isSameDay } from "date-fns";
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
  setWeeks,
  setDateRange,
  setIsWeekSelected,
  colorClass,
  className,
  minDate,
}: {
  setWeeks: (weeks: number) => void;
  setDateRange: (dateRange: { from: string; to: string }) => void;
  setIsWeekSelected: (selected: boolean) => void;
  colorClass?: string;
  className?: string;
  minDate?: Date;
}) {
  const [range, setRange] = useState<DateRange>({ from: undefined, to: undefined });
  const [open, setOpen] = useState(false);

  // Helper: get all week start dates between two dates (inclusive)
  const getAllWeekRanges = (start: Date, end: Date): DateRange[] => {
    const weeks: DateRange[] = [];
    let current = startOfWeek(start, { weekStartsOn: 0 });
    const last = startOfWeek(end, { weekStartsOn: 0 });
    while (!isAfter(current, last)) {
      weeks.push({
        from: current,
        to: endOfWeek(current, { weekStartsOn: 0 }),
      });
      current = addWeeks(current, 1);
    }
    return weeks;
  };

  // Helper: check if a date is in the selected week range
  const isDateInSelectedWeeks = (date: Date) => {
    if (!range.from) return false;
    const weekStart = startOfWeek(date, { weekStartsOn: 0 });
    if (!range.to) {
      // Only one week selected
      return isSameDay(weekStart, startOfWeek(range.from, { weekStartsOn: 0 }));
    }
    // Range selected
    return (
      !isBefore(weekStart, startOfWeek(range.from, { weekStartsOn: 0 })) &&
      !isAfter(weekStart, startOfWeek(range.to, { weekStartsOn: 0 }))
    );
  };

  // On day click, handle week range selection
  const handleSelect = (selected: { from: Date } | undefined) => {
    if (!selected?.from) return;
    if (minDate && isBefore(selected.from, minDate)) return;
    const weekStart = startOfWeek(selected.from, { weekStartsOn: 0 });
    const weekEnd = endOfWeek(selected.from, { weekStartsOn: 0 });

    if (!range.from) {
      // Start new range
      setRange({ from: weekStart, to: undefined });
      setWeeks(1);
      setIsWeekSelected(true);
      setDateRange({
        from: format(weekStart, "yyyy-MM-dd"),
        to: format(weekEnd, "yyyy-MM-dd"),
      });
    } else {
      // If already in range, reset
      if (
        (range.to &&
          !isBefore(weekStart, startOfWeek(range.from, { weekStartsOn: 0 })) &&
          !isAfter(weekStart, startOfWeek(range.to, { weekStartsOn: 0 }))) ||
        (!range.to && isSameDay(weekStart, startOfWeek(range.from, { weekStartsOn: 0 })))
      ) {
        setRange({ from: undefined, to: undefined });
        setWeeks(0);
        setIsWeekSelected(false);
        setDateRange({ from: "", to: "" });
        return;
      }
      // Always extend from the first selected week to the most recent click
      let newFrom = range.from;
      let newTo = weekStart;
      if (isBefore(newTo, newFrom)) {
        [newFrom, newTo] = [newTo, newFrom];
      }
      const allWeeks = getAllWeekRanges(newFrom, newTo);
      if (allWeeks.length > 8) {
        // Optionally, show an alert or feedback here
        return; // Do not allow selecting more than 8 weeks
      }
      setRange({ from: newFrom, to: newTo });
      setWeeks(allWeeks.length);
      setIsWeekSelected(true);
      setDateRange({
        from: format(allWeeks[0].from!, "yyyy-MM-dd"),
        to: format(allWeeks[allWeeks.length - 1].to!, "yyyy-MM-dd"),
      });
    }
  };

  // Displayed range for button
  const displayFrom =
    range.from ? format(range.from, "dd MMM yyyy") : "From";
  const displayTo =
    range.to
      ? format(endOfWeek(range.to, { weekStartsOn: 0 }), "dd MMM yyyy")
      : range.from
      ? format(endOfWeek(range.from, { weekStartsOn: 0 }), "dd MMM yyyy")
      : "To";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          className={cn(
            `flex items-center justify-between gap-2 px-2.5 py-2 w-full 
     h-9  rounded-none border border-[#8B3B3B] bg-[#FAFAF0]
     text-[#8B3A3A] hover:bg-[#FAFAF0] outline-none 
     data-[state=open]:border-[#8B3B3B] data-[placeholder]:text-[#9B9B9B]`,
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
              <span className="text-sm">{displayFrom}</span>
            </div>
            <div className="border-l border-[#8B3B3B] h-5 mx-2.5" />
            <div className="flex items-center gap-2 w-1/2">
              <span className="text-sm">{displayTo}</span>
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 mt-2 bg-white">
        <Calendar
          mode="single"
          selected={range.from || new Date()}
          onSelect={(date) => {
            if (date) {
              handleSelect({ from: date });
            }
          }}
          className="rounded-md"
          modifiers={{
            selected: isDateInSelectedWeeks,
          }}
          modifiersClassNames={{
            selected: "bg-[#9C3A3A] text-white", // Brand color for selected weeks
          }}
          fromDate={minDate}
        />
      </PopoverContent>
    </Popover>
  );
}

