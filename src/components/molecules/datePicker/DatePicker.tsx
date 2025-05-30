"use client";

import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DateOfBirthPicker({ dateOfBirth, setDateOfBirth, className }: { dateOfBirth: string; setDateOfBirth: (date: string) => void; className?: string }) {
  // const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false); // Control popover manually

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDateOfBirth(format(selectedDate, "yyyy-MM-dd"));
      setOpen(false); // Close popover
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          className={cn(
            `${className} text-primary-dark justify-between bg-white hover:bg-white max-w-[380px] w-[90%] sm:w-[40%] lg:w-[30%] hover:border-[#A1A1A1] data-[placeholder]:text-[#9B9B9B] h-13 sm:h-15 rounded-full border border-[#A1A1A1] outline-none data-[state=open]:border-secondary-1 px-4 py-2`,
            !dateOfBirth && "text-muted-foreground"
          )}
        >
          {dateOfBirth ? format(dateOfBirth, "dd-MM-yyyy") : "DD-MM-YYYY"}
          <div className="relative w-6">
            <Image src="icons/calendar.svg" alt="icon" fill className="!static w-full"/>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 mt-2">
        <Calendar
          mode="single"
          selected={dateOfBirth ? new Date(dateOfBirth) : undefined}
          onSelect={handleSelect}
          initialFocus
          className="rounded-md border"
        />
      </PopoverContent>
    </Popover>
  );
}



// import React from 'react'

// export default function DatePicker() {
//   return (
//     <div>DatePicker</div>
//   )
// }
