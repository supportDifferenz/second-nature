"use client";

import { useState } from "react";
import { format, parse } from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DateOfBirthPicker({ dateOfBirth, setDateOfBirth, colorClass, className }: { dateOfBirth: string; setDateOfBirth: (date: string) => void; colorClass?: string; className?: string }) {
  // const [date, setDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false); // Control popover manually

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDateOfBirth(format(selectedDate, "dd-MM-yyyy"));
      setOpen(false); // Close popover
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setOpen(!open)}
          className={cn(
            `${className} ${colorClass} text-primary-dark justify-between bg-white hover:bg-white w-[90%] sm:w-[40%] lg:w-[30%] hover:border-[#A1A1A1] data-[placeholder]:text-[#9B9B9B] h-13  rounded-full border border-[#A1A1A1] outline-none data-[state=open]:border-secondary-1 px-4 py-2`,
            !dateOfBirth && "text-muted-foreground"
          )}
        >
          {dateOfBirth ? format(parse(dateOfBirth, "dd-MM-yyyy", new Date()), "dd-MM-yyyy") : "DD-MM-YYYY"}
          <div className="relative w-[22px]">
            <Image src="icons/calendar.svg" alt="icon" fill className="!static w-full hover:scale-105 transition-transform duration-300 ease-in-out" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 mt-2 bg-white">
        <Calendar
          mode="single"
          selected={dateOfBirth ? parse(dateOfBirth, "dd-MM-yyyy", new Date()) as Date : undefined}
          // selected={dateOfBirth ? new Date(dateOfBirth) : undefined}
          onSelect={handleSelect}
          initialFocus
          className="rounded-md min-h-[330px]" 
          captionLayout="dropdown"
          disabled={{ after: new Date() }} // Prevent future dates
        />
      </PopoverContent>
    </Popover>
  );
}



// // import React from 'react'

// // export default function DatePicker() {
// //   return (
// //     <div>DatePicker</div>
// //   )
// // }
// "use client";

// import { useState } from "react";
// import { format, parse } from "date-fns";
// import { enUS } from "date-fns/locale";
// import { cn } from "@/lib/utils";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { Calendar as ReactDateRange } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import "./datePickerCustom.css";

// type Props = {
//   dateOfBirth: string;
//   setDateOfBirth: (date: string) => void;
//   colorClass?: string;
//   className?: string;
// };

// // Define a custom type for the selection object
// type DateRangeSelection = Record<string, {
//   startDate?: Date;
//   endDate?: Date;
//   key?: string;
// }>;

// export default function DateOfBirthPicker({
//   dateOfBirth,
//   setDateOfBirth,
//   colorClass,
//   className,
// }: Props) {
//   const [open, setOpen] = useState(false);

//   const parsedDate = dateOfBirth
//     ? parse(dateOfBirth, "dd-MM-yyyy", new Date())
//     : new Date();

//   const handleSelect = (date: Date) => {
//     setDateOfBirth(format(date, "dd-MM-yyyy"));
//     setOpen(false);
//   };

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           onClick={() => setOpen(!open)}
//           className={cn(
//             `${className} ${colorClass} text-primary-dark justify-between bg-white hover:bg-white w-[90%] sm:w-[40%] lg:w-[30%] hover:border-[#A1A1A1] data-[placeholder]:text-[#9B9B9B] h-13 sm:h-15 rounded-full border border-[#A1A1A1] outline-none data-[state=open]:border-secondary-1 px-4 py-2`,
//             !dateOfBirth && "text-muted-foreground"
//           )}
//         >
//           {dateOfBirth ? format(parsedDate, "dd-MM-yyyy") : "DD-MM-YYYY"}
//           <div className="relative w-6">
//             <Image
//               src="/icons/calendar.svg"
//               alt="icon"
//               fill
//               className="!static w-full"
//             />
//           </div>
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-auto p-0 mt-2 overflow-hidden">
//         <ReactDateRange
//           onChange={(item: DateRangeSelection) => {
//             const range = item["selection"];
//             if (range?.startDate) {
//               handleSelect(range.startDate);
//             }
//           }}
//           showDateDisplay={false}
//           showPreview={false}
//           showMonthAndYearPickers={true}
//           months={1}
//           direction="vertical"
//           locale={enUS}
//           editableDateInputs={false}
//           moveRangeOnFirstSelection={false}
//           ranges={[
//             {
//               startDate: parsedDate,
//               endDate: parsedDate,
//               key: "selection",
//             },
//           ]}
//           maxDate={new Date()}
//         />
//       </PopoverContent>
//     </Popover>
//   );
// }


