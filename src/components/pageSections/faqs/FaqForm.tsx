import Typography from "@/components/atoms/typography/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { z } from "zod";
import { useCreateFaq } from "@/hooks/subscriptionHooks/createFaqHook";

// Type definitions
type FormValues = {
  firstName: string;
  lastName: string;
  emailId: string;
  contactNo: string;
  message: string;
  isActive: boolean;
  isDeleted: boolean;
  createdOn: string;
  modifiedOn: string;
  additionalProp1: Record<string, unknown>;
};

type FormFields = keyof Omit<FormValues, 'isActive' | 'isDeleted' | 'createdOn' | 'modifiedOn' | 'additionalProp1'>;
type FormErrors = Partial<Record<FormFields, string>>;
type TouchedFields = Partial<Record<FormFields, boolean>>;

// Zod schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  emailId: z.string().min(1, "Email is required").email("Please enter a valid email"),
  contactNo: z.string()
    .min(1, "Mobile number is required")
    .regex(/^[0-9]+$/, "Must contain only numbers")
    .min(10, "Must be at least 10 digits")
    .max(15, "Must be at most 15 digits"),
  message: z.string().min(1, "Message is required"),
  isActive: z.boolean().default(true),
  isDeleted: z.boolean().default(false),
  createdOn: z.string().default(new Date().toISOString()),
  modifiedOn: z.string().default(new Date().toISOString()),
  additionalProp1: z.record(z.unknown()).default({})
});

export default function FaqForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { mutate: createFaq } = useCreateFaq();

  const handleBlur = (field: FormFields) => {
    if (!touched[field]) {
      setTouched(prev => ({ ...prev, [field]: true }));
      validateField(field);
    }
  };

  const getFormValues = (form: HTMLFormElement): FormValues => {
    const formData = new FormData(form);

    return {
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
  };

  const validateField = (field: FormFields) => {
    if (!formRef.current) return;

    const formValues = getFormValues(formRef.current);
    const fieldValue = formValues[field];

    try {
      const fieldSchema = z.object({
        [field]: formSchema.shape[field]
      });

      fieldSchema.parse({ [field]: fieldValue });
      setErrors(prev => ({ ...prev, [field]: '' }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [field]: error.errors[0].message }));
      }
    }
  };

  const validateForm = (formValues: FormValues): boolean => {
    try {
      formSchema.parse(formValues);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach(err => {
          const field = err.path[0] as FormFields;
          if (field in formValues) {
            newErrors[field] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setIsSubmitting(true);

    const formValues = getFormValues(e.currentTarget);

    // Mark all fields as touched
    const allFieldsTouched: TouchedFields = {
      firstName: true,
      lastName: true,
      emailId: true,
      contactNo: true,
      message: true
    };
    setTouched(allFieldsTouched);

    if (!validateForm(formValues)) {
      toast.error("Form validation failed", {
        description: "Please check all required fields.",
      });
      setIsSubmitting(false);
      return;
    }

    createFaq(
      { formData: formValues },
      {
        onSuccess: () => {
          toast.success("Message sent successfully 🎉", {
            description: "We'll get back to you ASAP. Meanwhile, go vibe with your pet.",
          });
          // Clear the form
          if (formRef.current) {
            formRef.current.reset();
          }
          setTouched({});
          setIsSubmitted(false);
        },
        onError: (error) => {
          toast.error("Failed to send message", {
            description: error instanceof Error ? error.message : "Please try again later.",
          });
        },
        onSettled: () => {
          setIsSubmitting(false);
        }
      }
    );
  };

  const shouldShowError = (field: FormFields): boolean => {
    return (touched[field] || isSubmitted) && Boolean(errors[field]);
  };

  return (
    <div className=" pt-[50px] lg:mt-[50px]">
      <div className="rounded-2xl lg:w-[49.2vw] ml-auto bg-primary-light px-[var(--space-20-57)] pt-14 sm:pt-12 lg:pt-10 pb-8 sm:pb-10  lg:pb-12 ">
        <div className="flex flex-col items-center sm:items-start  mb-3 lg:mb-3.5">
          <h2 className="text-primary-dark highlight" >
          Contact Us,

        </h2>
          <h2 className=" text-primary-dark" >To Your Questions Answered</h2>
      </div>
      <Typography
        tag="p"
        text="Have questions about our natural pet food? Explore our FAQ section for quick and helpful answers to common queries about ingredients, feeding, storage, and more."
        className="font-bold text-text-color text-center lg:text-left px-3.5 sm:px-0"
      />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="pb-[var(--space-40-48)] pt-[var(--space-26-36)] border-b border-[#A1A1A1]"
        noValidate
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
              disabled={isSubmitting}
            />
            {shouldShowError('firstName') && (
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
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col w-full">
            <Label className="!mb-1.5 text-mob-16 sm:text-tab-18 lg:text-web-22 text-primary-dark !font-bold">
              Email Address
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email address*"
              className="bg-white"
              variant="roundedEdgeInput"
              onBlur={() => handleBlur('emailId')}
              disabled={isSubmitting}
            />
            {shouldShowError('emailId') && (
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
              disabled={isSubmitting}
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              onChange={(e) => {
                const numericValue = e.target.value.replace(/[^0-9]/g, '');
                const limitedValue = numericValue.slice(0, 15);
                e.target.value = limitedValue;
              }}
            />
            {shouldShowError('contactNo') && (
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
            placeholder="Enter your message*"
            className="bg-white rounded-3xl border border-[#A1A1A1] outline-none px-4 py-2 sm:h-36"
            onBlur={() => handleBlur('message')}
            disabled={isSubmitting}
          />
          {shouldShowError('message') && (
            <span className="text-red-500 text-sm mt-1">{errors.message}</span>
          )}
        </div>

        <Button
          type="submit"
          size={"md"}
          variant={"primaryBtn"}
          className="w-fit text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
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
          <Button size={"small"} variant={"LinkBtnPrimaryText"} className="w-fit text-white lowercase">
            <div className="relative">
              <Image src="/icons/mail.svg" alt="icon" fill className="!static !w-5" />
            </div>
            info@secondnature.qa
          </Button>
        </div>
      </div>
    </div>
    </div >
  );
}