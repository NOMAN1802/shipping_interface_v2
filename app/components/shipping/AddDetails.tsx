import TextArea from 'antd/es/input/TextArea'
import React from 'react'

export default function AddDetails() {
  return (
      <div className="pt-2 col-span-2 h-full">
      <TextArea
        placeholder="Add Details"
        rows={3}
        className="w-full py-3 text-sm border-gray-300 sm:text-base hover:border-blue-400 focus:border-blue-500"
      />
    </div>
  )
}
