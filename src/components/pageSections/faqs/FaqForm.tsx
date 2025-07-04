import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import Image from "next/image";
import React, { useState } from "react";
import { z } from "zod";
import { useCreateFaq } from "@/hooks/subscriptionHooks/createFaqHook";

// Define Zod schema matching the API structure
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  emailId: z.string().min(1, "Email is required").email("Please enter a valid email"),
  contactNo: z.string().min(1, "Mobile number is required"),
  message: z.string().min(1, "Message is required"),
  isActive: z.boolean().default(true),
  isDeleted: z.boolean().default(false),
  createdOn: z.string().default(new Date().toISOString()),
  modifiedOn: z.string().default(new Date().toISOString()),
  additionalProp1: z.object({}).default({})
});

export default function FaqForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const { mutate: createFaq } = useCreateFaq();

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      emailId: formData.get('email') as string,
      contactNo: formData.get('mobileNumber') as string,
      message: formData.get('message') as string,
      isActive: true,
      isDeleted: false,
      createdOn: new Date().toISOString(),
      modifiedOn: new Date().toISOString(),
      additionalProp1: {}
    };

    try {
      // Validate the form data
      formSchema.parse(formValues);
      setErrors({});

      createFaq(
        { formData: formValues },
        {
          onSuccess: () => {
            // Show success toast
            toast.success("Message sent successfully 🎉", {
              description: "We'll get back to you ASAP. Meanwhile, go vibe with your pet.",
            });
          },
          onError: () => {
            // Show error toast
            toast.error("Failed to send message", {
              description: "Please try again later.",
            });
          }
        }
      );

      // Show success toast
      // toast.success("Message sent successfully 🎉", {
      //   description: "We'll get back to you ASAP. Meanwhile, go vibe with your pet.",
      // });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          const field = err.path[0];
          newErrors[field] = err.message;
        });
        setErrors(newErrors);
      } else {
        toast.error("Failed to send message", {
          description: "Please try again later.",
        });
      }
    }
  };

  return (
    <div className="rounded-2xl lg:w-[49.2vw] ml-auto bg-primary-light px-[var(--space-20-57)] pt-14 sm:pt-12 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 mt-[var(--space-70-100)]">
      <div className="flex flex-col items-center sm:items-start lg:flex-row mb-3 lg:mb-3.5">
        <Typography tag="h2" text="Your Questions," className="text-primary-dark" />
        <Typography tag="h2" text="Answered" className="highlight text-primary-dark" />
      </div>
      <Typography
        tag="p"
        text="Have questions about our natural pet food? Explore our FAQ section for quick and helpful answers to common queries about ingredients, feeding, storage, and more."
        className="font-bold text-text-color text-center lg:text-left px-3.5 sm:px-0"
      />

      <form
        onSubmit={handleSubmit}
        className="pb-[var(--space-40-48)] pt-[var(--space-26-36)] border-b border-[#A1A1A1]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-16-24)]">
          <div className="flex flex-col w-full">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              First Name
            </Label>
            <Input 
              name="firstName"
              placeholder="Enter your first name*" 
              className="bg-white" 
              variant="roundedEdgeInput"
              onBlur={() => handleBlur('firstName')}
            />
            {touched.firstName && errors.firstName && (
              <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              Last Name
            </Label>
            <Input 
              name="lastName"
              placeholder="Enter your last name" 
              className="bg-white" 
              variant="roundedEdgeInput"
              onBlur={() => handleBlur('lastName')}
            />
          </div>
          <div className="flex flex-col w-full">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              Email Address
            </Label>
            <Input 
              name="email"
              placeholder="Enter your email address*" 
              className="bg-white" 
              variant="roundedEdgeInput"
              onBlur={() => handleBlur('emailId')}
            />
            {touched.emailId && errors.emailId && (
              <span className="text-red-500 text-sm mt-1">{errors.emailId}</span>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              Mobile Number
            </Label>
            <Input 
              name="mobileNumber"
              placeholder="Enter your mobile number*" 
              className="bg-white" 
              variant="roundedEdgeInput"
              onBlur={() => handleBlur('contactNo')}
            />
            {touched.contactNo && errors.contactNo && (
              <span className="text-red-500 text-sm mt-1">{errors.contactNo}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col mt-4 sm:mt-4.5 lg:mt-4.5 mb-[var(--space-26-36)]">
          <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
            Message
          </Label>
          <Textarea 
            name="message"
            placeholder="Enter your message" 
            className="bg-white rounded-3xl border border-[#A1A1A1] outline-none px-4 py-2 sm:h-36"
            onBlur={() => handleBlur('message')}
          />
          {touched.message && errors.message && (
            <span className="text-red-500 text-sm mt-1">{errors.message}</span>
          )}
        </div>

        <Button type="submit" size={"md"} variant={"primaryBtn"} className="w-fit text-white">
          Send
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row gap-2 mt-10 sm:items-center">
        <Typography tag="h6" text="Need Help" className="text-primary-dark" />
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Button size={"small"} variant={"LinkBtnPrimaryText"} className="w-fit text-white">
            <div className="relative">
              <Image src="/icons/phone.svg" alt="icon" fill className="!static !w-5" />
            </div>
            +974-555-556-16
          </Button>
          <Button size={"small"} variant={"LinkBtnPrimaryText"} className="w-fit text-white">
            <div className="relative">
              <Image src="/icons/mail.svg" alt="icon" fill className="!static !w-5" />
            </div>
            info@secondnature.qa
          </Button>
        </div>
      </div>
    </div>
  );
}









// import Typography from "@/components/atoms/typography/Typography";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "@/components/ui/sonner";
// import Image from "next/image";
// import React from "react";

// export default function FaqForm() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // ✅ Show Sonner toast
//     toast.success("Message sent successfully 🎉", {
//       description: "We’ll get back to you ASAP. Meanwhile, go vibe with your pet.",
//     });

//     // ✅ Optionally reset form
//     e.currentTarget.reset();
//   };

//   return (
//     <div className="rounded-2xl lg:w-[49.2vw] ml-auto bg-primary-light px-[var(--space-20-57)] pt-14 sm:pt-12 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 mt-[var(--space-70-100)]">
//       <div className="flex flex-col items-center sm:items-start lg:flex-row mb-3 lg:mb-3.5">
//         <Typography tag="h2" text="Your Questions," className="text-primary-dark" />
//         <Typography tag="h2" text="Answered" className="highlight text-primary-dark" />
//       </div>
//       <Typography
//         tag="p"
//         text="Have questions about our natural pet food? Explore our FAQ section for quick and helpful answers to common queries about ingredients, feeding, storage, and more."
//         className="font-bold text-text-color text-center lg:text-left px-3.5 sm:px-0"
//       />

//       <form
//         onSubmit={handleSubmit}
//         className="pb-[var(--space-40-48)] pt-[var(--space-26-36)] border-b border-[#A1A1A1]"
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-16-24)]">
//           <div className="flex flex-col w-full">
//             <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
//               First Name
//             </Label>
//             <Input placeholder="Enter your first name*" className="bg-white" variant="roundedEdgeInput" />
//           </div>
//           <div className="flex flex-col w-full">
//             <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
//               Last Name
//             </Label>
//             <Input placeholder="Enter your last name" className="bg-white" variant="roundedEdgeInput" />
//           </div>
//           <div className="flex flex-col w-full">
//             <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
//               Email Address
//             </Label>
//             <Input placeholder="Enter your email address*" className="bg-white" variant="roundedEdgeInput" />
//           </div>
//           <div className="flex flex-col w-full">
//             <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
//               Mobile Number
//             </Label>
//             <Input placeholder="Enter your mobile number*" className="bg-white" variant="roundedEdgeInput" />
//           </div>
//         </div>
//         <div className="flex flex-col mt-4 sm:mt-4.5 lg:mt-4.5 mb-[var(--space-26-36)]">
//           <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
//             Message
//           </Label>
//           <Textarea placeholder="Enter your message" className="bg-white rounded-3xl border border-[#A1A1A1] outline-none px-4 py-2 sm:h-36" />
//         </div>

//         <Button type="submit" size={"md"} variant={"primaryBtn"} className="w-fit text-white">
//           Send
//         </Button>
//       </form>

//       <div className="flex flex-col sm:flex-row gap-2 mt-10 sm:items-center">
//         <Typography tag="h6" text="Need Help" className="text-primary-dark" />
//         <div className="flex flex-col sm:flex-row sm:items-center gap-2">
//           <Button size={"small"} variant={"LinkBtnPrimaryText"} className="w-fit text-white">
//             <div className="relative">
//               <Image src="/icons/phone.svg" alt="icon" fill className="!static !w-5" />
//             </div>
//             +974-555-556-16
//           </Button>
//           <Button size={"small"} variant={"LinkBtnPrimaryText"} className="w-fit text-white">
//             <div className="relative">
//               <Image src="/icons/mail.svg" alt="icon" fill className="!static !w-5" />
//             </div>
//             info@secondnature.qa
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
