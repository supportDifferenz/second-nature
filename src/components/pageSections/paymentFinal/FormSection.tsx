import React from 'react'
import AccountDetail from './AccountDetail'
import ShippingDetail from './ShippingDetail'
import BillingDetails from './BillingDetails'
import Payment from './Payment'

export default function FormSection() {
  return (
    <div className='flex flex-col gap-14'>
        <AccountDetail />
        <ShippingDetail />
        <BillingDetails />
        <Payment />
    </div>
  )
}
