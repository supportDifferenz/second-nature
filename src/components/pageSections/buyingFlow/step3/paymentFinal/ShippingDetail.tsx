import Typography from '@/components/atoms/typography/Typography'
import AlertBar from '@/components/molecules/alertBar/AlertBar'
import { InputLabeled } from '@/components/molecules/inputLabeled/InputLabeled'
import { Input } from '@/components/ui/input'
import React from 'react'
import BillingDetails from './BillingDetails'

export default function ShippingDetail() {

  // const [ showBillingDetails, setShowBillingDetails ] = useState(false);

  // const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setShowBillingDetails(false);
  // }

  return (
    <div className="flex flex-col gap-[var(--space-30-60)]">

      <Typography
        tag="h5"
        text="Shipping Details"
        className="uppercase text-primary-dark"
      />
      <form className="flex flex-col gap-[var(--space-30-52)]">
        <InputLabeled label="First Name" placeholder="Enter your first name" variant="roundedEdgeInput" />
        <InputLabeled label="Last Name" placeholder="Enter your last name" variant="roundedEdgeInput" />
        <InputLabeled label="Mobile Number" placeholder="Enter your mobile number" variant="roundedEdgeInput" />

        <div className='flex flex-col gap-[var(--space-8-17)]'>
            <InputLabeled label="Address" placeholder="Address*" variant="roundedEdgeInput"/>
            <Input variant='roundedEdgeInput' placeholder='Apt, Suite*' className='bg-white'/>
            <Input variant='roundedEdgeInput' placeholder='Municipality*' className='bg-white'/>
        </div>

        <AlertBar text="Email me with exclusive offers, new arrival alerts and cart reminders." />
      </form>

      <BillingDetails />
        
    </div>
  )
}
