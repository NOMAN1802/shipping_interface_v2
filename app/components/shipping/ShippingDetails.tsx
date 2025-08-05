"use client"
import { Card } from 'antd'

const ShippingDetails = () => {
  const shippingInfo = [
    { label: "Method Name", value: "Air Freight" },
    { label: "Shipping Date", value: "JUL-25-2025" },
    { label: "Carrier", value: "WakaCargo Standard", isLogo: true },
    { label: "ETA", value: "AUG-05-2025" },
    { label: "Price", value: "$20.00" },
  ]

  return (
    <div className=" bg-white  border-t rounded-[18px]">
        
    <div className='pt-4 px-3'>
    <div>
       <p className='text-lg font-semibold'>Shipping Details</p>
     </div>
      <div className="space-y-4 sm:space-y-6">
        {shippingInfo.map((info, index) => (
          <div key={index}>
            <p className="text-gray-600 font-medium mb-1 text-sm">{info.label}</p>
            {info.isLogo ? (
              <div>
                <span className="text-orange-500 font-semibold text-sm">WakaCargo</span>
                <span className="text-gray-500 ml-2 text-sm">Standard</span>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">{info.value}</p>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default ShippingDetails 