import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

export default function ActionButton() {
  return (
   <div className='pt-4'>
     {/* Action Buttons - Responsive */}
     <div className="flex flex-col items-center justify-end gap-4 sm:flex-row">
        <Button
          icon={<ArrowLeftOutlined />}
          className="w-full text-gray-700 font-semibold border-gray-300 sm:w-auto rounded-full bg-red-200 hover:bg-gray-50"
          size="large"
        >
          <span className="hidden sm:inline">Back</span>
        </Button>

        <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-4 sm:w-auto">
          <Button
            className="w-full font-semibold  border-gray-300 sm:w-auto hover:bg-gray-50 rounded-full bg-blue-800 text-white"
            size="large"
          >
            Save for Later
          </Button>
          <Button
            type="primary"
            className="w-full font-semibold text-blue-600 border-blue-600 sm:w-auto hover:bg-blue-700 rounded-full bg-blue-200"
            size="large"
          >
            Create Shipment
          </Button>
        </div>
      </div>
   </div>
  )
}
