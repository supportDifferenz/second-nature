import Typography from '@/components/atoms/typography/Typography'
import Header from '@/components/organism/header/Header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

export default function VerifyEmail() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <Header isOnlyBrandHeader={true} />
      <div className='flex grow   items-center justify-center portrait:min-h-[400px] portrait:h-[calc(100dvh-127)] landscape:min-h-[430px] landscape:h-[calc(100dvh-140px)] landscape:max-h-[800px] '>
        <div className='max-w-[800px] w-full lg:w-[75%] xl:w-[55%]  mx-auto bg-white  flex flex-col-reverse lg:flex-row justify-start lg:justify-center items-center gap-[40px]'>
          <div className='relative flex-1 shrink-0 w-full '>

            <picture>
              <source srcSet="/images/verify-email.webp" media="(min-width: 992px)" />
              <source srcSet="/images/verify-email-mob.webp" media="(max-width: 991.98px)" />
              <img src="/images/verify-email.webp" alt="Description of image" className='w-full h-[43dvh] sm:h-auto sm:max-h-[40dvh] lg:max-h-max object-cover object-top lg:object-center'/>

            </picture>
          </div>
          <div className='flex-1 shrink-0  w-[90%] sm:w-[60%] lg:w-full'>
            <form action="">
              <Typography
                tag="h2"
                text="Verify your Email"
                className="text-primary-dark mb-[5.5dvh] lg:!text-[32px] text-center lg:text-left !font-bold"
              />
              <Input
                type="text"
                variant={"roundedEdgeInputLg"}
                className={`w-full  text-start text-primary-dark font-semibold  placeholder-[#7C7C7C] h-12 mb-[2dvh] placeholder:font-medium focus:placeholder-slate-300 !pr-0`}
                placeholder="Type Your Name"
              />
              <Input
                type="text"
                variant={"roundedEdgeInputLg"}
                className={`w-full  text-start text-primary-dark font-semibold  placeholder-[#7C7C7C] h-12 mb-[3.5dvh] placeholder:font-medium focus:placeholder-slate-300 !pr-0`}
                placeholder="Type Your Mail"
              />
              <Button
                type="submit"
                className="hover:scale-105 transition-transform duration-300 ease-in-out mx-auto lg:mx-0"
              >
                Next
                <div className="w-5">
                  <Image
                    src="/icons/arrow-next-long.svg"
                    alt="icon"
                    fill
                    className="!static w-full object-contain"
                  />
                </div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
