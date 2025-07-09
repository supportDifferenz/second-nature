// import React, { useState, useEffect } from "react";
// import { format, addDays, startOfWeek, endOfWeek, addWeeks, isSameDay, isWithinInterval } from 'date-fns';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Button } from "@/components/ui/button";

// interface DateRange {
//   from: Date;
//   to: Date;
// }

// interface WeekDateRangePickerProps {
//   value?: DateRange;
//   onChange?: (range: DateRange) => void;
//   numberOfWeeks?: number;
//   className?: string;
// }

// export default function WeekDateRangePicker({
//   value,
//   onChange,
//   numberOfWeeks = 5,
//   className,
// }: WeekDateRangePickerProps) {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [selectedWeek, setSelectedWeek] = useState<DateRange | null>(
//     value || {
//       from: startOfWeek(new Date(), { weekStartsOn: 1 }),
//       to: endOfWeek(new Date(), { weekStartsOn: 1 })
//     }
//   );
//   const [selectionMode, setSelectionMode] = useState<'start' | 'end'>('start');

//   // Update the selected date range when value changes externally
//   useEffect(() => {
//     if (value) {
//       setSelectedWeek(value);
//     }
//   }, [value]);

//   // Navigate to previous month
//   const prevMonth = () => {
//     setCurrentMonth(prev => addWeeks(prev, -4));
//   };

//   // Navigate to next month
//   const nextMonth = () => {
//     setCurrentMonth(prev => addWeeks(prev, 4));
//   };

//   // Get calendar weeks for the current view
//   const getCalendarWeeks = () => {
//     const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
//     const firstDayOfCalendar = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });

//     const weeks = [];
//     let currentDate = firstDayOfCalendar;

//     for (let weekIndex = 0; weekIndex < numberOfWeeks; weekIndex++) {
//       const week = [];
//       for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
//         week.push(new Date(currentDate));
//         currentDate = addDays(currentDate, 1);
//       }
//       weeks.push(week);
//     }

//     return weeks;
//   };

//   // Handle when a day is clicked to select a week
//   const handleDayClick = (day: Date) => {
//     const weekStart = startOfWeek(day, { weekStartsOn: 1 });
//     const weekEnd = endOfWeek(day, { weekStartsOn: 1 });

//     if (selectionMode === 'start') {
//       const newSelection = {
//         from: weekStart,
//         to: weekEnd
//       };
//       setSelectedWeek(newSelection);
//       onChange?.(newSelection);
//       setSelectionMode('end');
//     } else {
//       // If this week is before the start week, swap them
//       if (weekStart < selectedWeek!.from) {
//         const newSelection = {
//           from: weekStart,
//           to: selectedWeek!.to
//         };
//         setSelectedWeek(newSelection);
//         onChange?.(newSelection);
//       } else {
//         const newSelection = {
//           from: selectedWeek!.from,
//           to: weekEnd
//         };
//         setSelectedWeek(newSelection);
//         onChange?.(newSelection);
//       }
//       setSelectionMode('start'); // Reset selection mode after complete range
//     }
//   };

//   // Check if a date is the start of the selected week
//   const isWeekStart = (day: Date): boolean => {
//     return selectedWeek ? isSameDay(day, selectedWeek.from) : false;
//   };

//   // Check if a date is the end of the selected week
//   const isWeekEnd = (day: Date): boolean => {
//     return selectedWeek ? isSameDay(day, selectedWeek.to) : false;
//   };

//   // Check if a date is within the selected week range
//   const isInSelectedWeekRange = (day: Date): boolean => {
//     if (!selectedWeek) return false;

//     return isWithinInterval(day, {
//       start: selectedWeek.from,
//       end: selectedWeek.to
//     });
//   };

//   // Get week number (ISO week)
//   const getWeekNumber = (date: Date): number => {
//     const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
//     d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
//     const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
//     return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
//   };

//   // Calendar weeks data
//   const weeks = getCalendarWeeks();

//   // Day names
//   const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   return (
//     <div className={cn("border rounded-lg p-3", className)}>
//       {/* Header with month/year and navigation */}
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex space-x-2">
//           <div className="text-green-600 font-medium">{currentMonth.getFullYear()}</div>
//           <div className="text-green-600 font-medium">{format(currentMonth, 'MMMM')}</div>
//         </div>
//         <div className="flex items-center space-x-1">
//           <Button 
//             // variant="ghost" 
//             size="icon" 
//             onClick={prevMonth}
//             className="text-green-600 hover:text-green-700 hover:bg-green-50"
//           >
//             <ChevronLeft className="h-5 w-5" />
//           </Button>
//           <Button 
//             // variant="ghost" 
//             size="icon" 
//             onClick={nextMonth}
//             className="text-green-600 hover:text-green-700 hover:bg-green-50"
//           >
//             <ChevronRight className="h-5 w-5" />
//           </Button>
//         </div>
//       </div>

//       {/* Weekday headers */}
//       <div className="grid grid-cols-8 mb-1">
//         <div className="text-center text-gray-500 text-sm"></div>
//         {dayNames.map(day => (
//           <div key={day} className="text-center text-gray-500 text-sm">
//             {day}
//           </div>
//         ))}
//       </div>

//       {/* Calendar grid */}
//       <div className="grid grid-cols-1 gap-1">
//         {weeks.map((week, weekIndex) => (
//           <div key={weekIndex} className="grid grid-cols-8 h-8">
//             {/* Week number column */}
//             <div className="flex items-center justify-center text-gray-500 text-sm">
//               {getWeekNumber(week[0])}
//             </div>

//             {/* Days in the week */}
//             {week.map((day, dayIndex) => {
//               const isCurrentMonth = day.getMonth() === currentMonth.getMonth();
//               const isSelected = isInSelectedWeekRange(day);
//               const isStart = isWeekStart(day);
//               const isEnd = isWeekEnd(day);

//               // Determine styles based on position in selection
//               let roundedClasses = "";
//               if (isStart) roundedClasses = "rounded-l-full";
//               if (isEnd) roundedClasses = `${roundedClasses} rounded-r-full`;
//               if (isStart && isEnd) roundedClasses = "rounded-full";

//               return (
//                 <div
//                   key={dayIndex}
//                   onClick={() => handleDayClick(day)}
//                   className={cn(
//                     "flex items-center justify-center cursor-pointer",
//                     !isCurrentMonth && "text-gray-300",
//                     isCurrentMonth && !isSelected && "hover:bg-green-50",
//                     isSelected && "bg-green-600 text-white",
//                     roundedClasses
//                   )}
//                 >
//                   {format(day, 'd')}
//                 </div>
//               );
//             })}
//           </div>
//         ))}
//       </div>

//       {/* Instructions */}
//       <div className="mt-3 text-sm text-gray-500 text-center">
//         Click to select a week range
//       </div>
//     </div>
//   );
// }


// old code
// ---------------------------------------------------------------------------------

// 'use client'

// import { useState } from "react"
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
// import { Calendar } from "@/components/ui/calendar"
// import { format, isBefore, isToday, isAfter, isSameDay } from "date-fns"

// export default function DayRangeSelector({
//   setDateRangeFromCalender,
//   setIsWeekSelected,
// }: {
//   setDateRangeFromCalender: (range: { from: Date; to: Date }) => void;
//   setIsWeekSelected: (selected: boolean) => void;
// }) {
//   const [selectionMode, setSelectionMode] = useState<'from' | 'to'>('from')
//   const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | null>(null)
//   const [open, setOpen] = useState(false);

//   console.log("Date range weekly range selector:", dateRange)

//   const handleDateSelect = (date: Date | undefined) => {
//     setIsWeekSelected(false);
//     if (!date) return

//     // Prevent selecting past dates (except today)
//     if (isBefore(date, new Date()) && !isToday(date)) {
//       return
//     }

//     if (selectionMode === 'from') {
//       const newFrom = date
//       const newTo = dateRange?.to && !isBefore(date, dateRange.to) 
//         ? date
//         : dateRange?.to || date

//       setDateRange({
//         from: newFrom,
//         to: newTo
//       })
//       setDateRangeFromCalender({ 
//         from: newFrom, 
//         to: newTo 
//       })
//       setSelectionMode('to')
//     } else {
//       const newTo = date
//       const newFrom = dateRange?.from && isAfter(dateRange.from, date)
//         ? date
//         : dateRange?.from || date

//       setDateRange({
//         from: newFrom,
//         to: newTo
//       })
//       setDateRangeFromCalender({
//         from: newFrom,
//         to: newTo
//       })
//       setOpen(false)
//     }
//   }

//   const renderDateBox = (date: Date | null, part: "day" | "month" | "year") => {
//     if (!date) return <div className="border border-r-0 w-full last:border-r-[1px] border-[#944446] px-3 py-2 text-center">--</div>
//     const value = {
//       day: format(date, "dd"),
//       month: format(date, "MM"),
//       year: format(date, "yyyy")
//     }[part]
//     return <div className="border border-r-0 last:border-r-[1px] border-[#944446] px-3 py-2 w-full text-center">{value}</div>
//   }

//   return (
//     <div className="flex items-start gap-4">
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <div className="flex flex-col sm:flex-row cursor-pointer gap-4 sm:gap-8 select-none w-full">
//             {/* FROM */}
//             <div 
//               className="flex flex-col items-start grow"
//               onClick={() => setSelectionMode('from')}
//             >
//               <label className="mb-1 text-sm">From</label>
//               <div className="flex w-full grow">
//                 {renderDateBox(dateRange?.from ?? null, "day")}
//                 {renderDateBox(dateRange?.from ?? null, "month")}
//                 {renderDateBox(dateRange?.from ?? null, "year")}
//               </div>
//             </div>

//             {/* TO */}
//             <div 
//               className="flex flex-col items-start grow"
//               onClick={() => setSelectionMode('to')}
//             >
//               <label className="mb-1 text-sm">To</label>
//               <div className="flex w-full">
//                 {renderDateBox(dateRange?.to ?? null, "day")}
//                 {renderDateBox(dateRange?.to ?? null, "month")}
//                 {renderDateBox(dateRange?.to ?? null, "year")}
//               </div>
//             </div>
//           </div>
//         </PopoverTrigger>

//         <PopoverContent className="w-auto p-0 mt-2">
//           <div className="p-2 text-sm font-medium text-center">
//             {selectionMode === 'from' ? 'Select start date' : 'Select end date'}
//           </div>
//           <Calendar
//             mode="single"
//             selected={selectionMode === 'from' ? dateRange?.from : dateRange?.to}
//             onSelect={handleDateSelect}
//             disabled={(date) => {
//               // Disable past dates except today
//               const isPastDate = isBefore(date, new Date()) && !isToday(date)

//               // For 'to' date selection, disable dates before from date
//               if (selectionMode === 'to' && dateRange?.from) {
//                 return isPastDate || isBefore(date, dateRange.from)
//               }

//               return isPastDate
//             }}
//             modifiers={{
//               rangeStart: (date) => dateRange ? isSameDay(date, dateRange.from) : false,
//               rangeEnd: (date) => dateRange ? isSameDay(date, dateRange.to) : false,
//               inRange: (date) => {
//                 if (!dateRange) return false
//                 return date > dateRange.from && date < dateRange.to
//               },
//               today: isToday
//             }}
//             modifiersClassNames={{
//               rangeStart: "bg-blue-500 text-white",
//               rangeEnd: "bg-green-600 text-white",
//               inRange: "bg-green-600 text-white",
//               today: "border border-green-500"
//             }}
//             modifiersStyles={{
//               rangeStart: { borderRadius: '6px 0 0 6px' },
//               rangeEnd: { borderRadius: '0 6px 6px 0' },
//               inRange: { borderRadius: '0' }
//             }}
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   )
// }

// "use client";

// import { useEffect, useState } from "react";
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";

// // ✅ Local type for the selection range
// type DateRangeItem = {
//   startDate: Date;
//   endDate: Date;
//   key: string;
// };

// export default function DayRangeSelector({
//   setDateRangeFromCalender,
//   setIsWeekSelected,
// }: {
//   setDateRangeFromCalender: (range: { from: Date; to: Date }) => void;
//   setIsWeekSelected: (selected: boolean) => void;
// }) {
//   const [open, setOpen] = useState(false);

//   const [range, setRange] = useState<DateRangeItem[]>([
//     {
//       startDate: new Date(),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   useEffect(() => {
//     setDateRangeFromCalender({
//       from: range[0].startDate,
//       to: range[0].endDate,
//     });
//     setIsWeekSelected(false);

//     // ✅ DOM MutationObserver to override calendar styles
//     const overrideColor = () => {
//       const selected = document.querySelectorAll(
//         ".rdrDaySelected, .rdrDayStartPreview, .rdrDayEndPreview, .rdrDayInPreview"
//       );
//       selected.forEach((el) => {
//         (el as HTMLElement).style.backgroundColor = "#2BB673";
//         (el as HTMLElement).style.color = "white";
//       });
//     };

//     overrideColor();

//     const calendarEl = document.querySelector(".rdrCalendarWrapper");
//     const observer = new MutationObserver(overrideColor);
//     if (calendarEl) {
//       observer.observe(calendarEl, { childList: true, subtree: true });
//     }

//     return () => observer.disconnect();
//   }, [range, setDateRangeFromCalender, setIsWeekSelected]); // ✅ Added safe dependencies

//   const handleSelect = (item: { selection: DateRangeItem }) => {
//     setRange([item.selection]);
//     setOpen(false);
//   };

//   return (
//     <div className="flex items-start gap-4">
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <div
//             className="flex flex-col gap-1 p-3 border rounded cursor-pointer w-[280px]"
//             onClick={() => setOpen(!open)}
//           >
//             <div className="text-sm text-gray-500">Selected Range</div>
//             <div className="text-base font-medium">
//               {format(range[0].startDate, "MMM d, yyyy")} -{" "}
//               {format(range[0].endDate, "MMM d, yyyy")}
//             </div>
//           </div>
//         </PopoverTrigger>

//         <PopoverContent className="w-auto p-0 mt-2">
//           <DateRange
//             editableDateInputs={false}
//             onChange={handleSelect}
//             moveRangeOnFirstSelection={false}
//             ranges={range}
//             months={1}
//             direction="vertical"
//             showDateDisplay={false}
//             minDate={new Date()} // disable past dates
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

export default function RangeDatePicker({
  selectedRange,
  setSelectedRange,
  colorClass,
  className,
}: {
  selectedRange: DateRange;
  setSelectedRange: (range: DateRange) => void;
  colorClass?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  const handleSelect = (range: DateRange | undefined) => {
    if (range?.from) {
      setSelectedRange(range);
    }
  };

  // const getFormattedRange = () => {
  //   const { from, to } = selectedRange;
  //   if (from && to) return `${format(from, "dd-MM-yyyy")} → ${format(to, "dd-MM-yyyy")}`;
  //   if (from) return `${format(from, "dd-MM-yyyy")} → ...`;
  //   return "DD-MM-YYYY → DD-MM-YYYY";
  // };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>


        {/* <Button
          onClick={() => setOpen(!open)}
          className={cn(
            `${className} ${colorClass} text-primary-dark justify-between bg-white hover:bg-white w-[90%] sm:w-[40%] lg:w-[30%] hover:border-[#A1A1A1] data-[placeholder]:text-[#9B9B9B] h-13 sm:h-15 rounded-full border border-[#A1A1A1] outline-none data-[state=open]:border-secondary-1 px-4 py-2`,
            !selectedRange.from && "text-muted-foreground"
          )}
        >
          {getFormattedRange()}
          <div className="relative w-6">
            <Image src="icons/calendar.svg" alt="calendar icon" fill className="!static w-full" />
          </div>
        </Button> */}

        <Button
          onClick={() => setOpen(!open)}
          className={cn(
            `flex items-center justify-between gap-2 px-2.5 py-2 w-full 
     h-9  rounded-none border border-[#8B3B3B] bg-[#FAFAF0]
     text-[#8B3B3B] hover:bg-[#FAFAF0] outline-none 
     data-[state=open]:border-[#8B3B3B] data-[placeholder]:text-[#9B9B9B]`,
            !selectedRange.from && "text-muted-foreground",
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
                {selectedRange?.from ? format(selectedRange.from, "dd MMM yyyy") : "From"}
              </span>
            </div>
            <div className="border-l border-[#8B3B3B] h-5 mx-2.5" />
            <div className="w-1/2 text-left">
              <span className="text-sm">
                {selectedRange?.to ? format(selectedRange.to, "dd MMM yyyy") : "To"}
              </span>
            </div>
          </div>
        </Button>


      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 mt-2 bg-white">
        <Calendar
          mode="range"
          selected={selectedRange}
          onSelect={handleSelect}
          className="rounded-md"
        />
      </PopoverContent>
    </Popover>
  );
}

