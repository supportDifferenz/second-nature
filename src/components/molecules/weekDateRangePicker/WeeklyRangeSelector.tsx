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

'use client'

import { useState } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format, isBefore, isToday, isAfter, isSameDay } from "date-fns"

export default function DayRangeSelector({
  setDateRangeFromCalender,
  setIsWeekSelected,
}: {
  setDateRangeFromCalender: (range: { from: Date; to: Date }) => void;
  setIsWeekSelected: (selected: boolean) => void;
}) {
  const [selectionMode, setSelectionMode] = useState<'from' | 'to'>('from')
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date } | null>(null)
  const [open, setOpen] = useState(false);

  console.log("Date range weekly range selector:", dateRange)

  const handleDateSelect = (date: Date | undefined) => {
    setIsWeekSelected(false);
    if (!date) return

    // Prevent selecting past dates (except today)
    if (isBefore(date, new Date()) && !isToday(date)) {
      return
    }

    if (selectionMode === 'from') {
      const newFrom = date
      const newTo = dateRange?.to && !isBefore(date, dateRange.to) 
        ? date
        : dateRange?.to || date
      
      setDateRange({
        from: newFrom,
        to: newTo
      })
      setDateRangeFromCalender({ 
        from: newFrom, 
        to: newTo 
      })
      setSelectionMode('to')
    } else {
      const newTo = date
      const newFrom = dateRange?.from && isAfter(dateRange.from, date)
        ? date
        : dateRange?.from || date
      
      setDateRange({
        from: newFrom,
        to: newTo
      })
      setDateRangeFromCalender({
        from: newFrom,
        to: newTo
      })
      setOpen(false)
    }
  }

  const renderDateBox = (date: Date | null, part: "day" | "month" | "year") => {
    if (!date) return <div className="border border-r-0 w-full last:border-r-[1px] border-[#944446] px-3 py-2 text-center">--</div>
    const value = {
      day: format(date, "dd"),
      month: format(date, "MM"),
      year: format(date, "yyyy")
    }[part]
    return <div className="border border-r-0 last:border-r-[1px] border-[#944446] px-3 py-2 w-full text-center">{value}</div>
  }

  return (
    <div className="flex items-start gap-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex flex-col sm:flex-row cursor-pointer gap-4 sm:gap-8 select-none w-full">
            {/* FROM */}
            <div 
              className="flex flex-col items-start grow"
              onClick={() => setSelectionMode('from')}
            >
              <label className="mb-1 text-sm">From</label>
              <div className="flex w-full grow">
                {renderDateBox(dateRange?.from ?? null, "day")}
                {renderDateBox(dateRange?.from ?? null, "month")}
                {renderDateBox(dateRange?.from ?? null, "year")}
              </div>
            </div>

            {/* TO */}
            <div 
              className="flex flex-col items-start grow"
              onClick={() => setSelectionMode('to')}
            >
              <label className="mb-1 text-sm">To</label>
              <div className="flex w-full">
                {renderDateBox(dateRange?.to ?? null, "day")}
                {renderDateBox(dateRange?.to ?? null, "month")}
                {renderDateBox(dateRange?.to ?? null, "year")}
              </div>
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0 mt-2">
          <div className="p-2 text-sm font-medium text-center">
            {selectionMode === 'from' ? 'Select start date' : 'Select end date'}
          </div>
          <Calendar
            mode="single"
            selected={selectionMode === 'from' ? dateRange?.from : dateRange?.to}
            onSelect={handleDateSelect}
            disabled={(date) => {
              // Disable past dates except today
              const isPastDate = isBefore(date, new Date()) && !isToday(date)
              
              // For 'to' date selection, disable dates before from date
              if (selectionMode === 'to' && dateRange?.from) {
                return isPastDate || isBefore(date, dateRange.from)
              }
              
              return isPastDate
            }}
            modifiers={{
              rangeStart: (date) => dateRange ? isSameDay(date, dateRange.from) : false,
              rangeEnd: (date) => dateRange ? isSameDay(date, dateRange.to) : false,
              inRange: (date) => {
                if (!dateRange) return false
                return date > dateRange.from && date < dateRange.to
              },
              today: isToday
            }}
            modifiersClassNames={{
              rangeStart: "bg-blue-500 text-white",
              rangeEnd: "bg-green-600 text-white",
              inRange: "bg-green-600 text-white",
              today: "border border-green-500"
            }}
            modifiersStyles={{
              rangeStart: { borderRadius: '6px 0 0 6px' },
              rangeEnd: { borderRadius: '0 6px 6px 0' },
              inRange: { borderRadius: '0' }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}