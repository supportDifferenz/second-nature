import React from 'react'

const OrderHistoryCardSkelton = () => {
  return (
    <div className="break-inside-avoid rounded-xl border border-[#E4E7D3] bg-[#FDFFF4] p-4 sm:p-6 h-fit relative space-y-6 max-w-[345px] animate-pulse">
        <span className="block text-white uppercase font-normal px-[13px] py-[3px] absolute -top-[.8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap bg-gray-200 rounded-md w-[50%] h-5"></span>

        <div className="text-center mb-7">
            <div className="h-6 bg-gray-200 rounded w-2/3 mx-auto mb-4"></div>
            <div className="flex items-center justify-center gap-2 w-24 h-6 mx-auto bg-gray-200 rounded"></div>
        </div>

        <div className="rounded-lg border border-secondary-1 p-4 px-3 text-center relative">
            <div className="absolute -top-[.8px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-4 bg-gray-200 rounded"></div>

            <div className="flex justify-center items-center gap-2 mt-2 mb-4">
            <div className="w-7 h-7 bg-gray-200 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-200 rounded"></div>
            </div>

            <div className="w-40 h-4 bg-gray-200 rounded mx-auto my-2"></div>
            <div className="mt-4 h-4 bg-gray-200 rounded w-56 mx-auto"></div>
        </div>

        <div className="flex items-end justify-between">
            <div>
            <div className="pb-1 border-b border-[#E4E7D3] space-y-1">
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
            </div>
            <div className="pt-1 space-y-1">
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
            </div>
            <div className="text-right space-y-1">
            <div className="h-4 w-20 bg-gray-200 rounded ml-auto"></div>
            <div className="h-5 w-24 bg-gray-200 rounded ml-auto"></div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="col-span-2 h-10 bg-gray-200 rounded"></div>
            <div className="col-span-1 h-10 bg-gray-200 rounded"></div>
            <div className="col-span-1 h-10 bg-gray-200 rounded"></div>
        </div>
    </div>
  )
}

export default OrderHistoryCardSkelton