"use client";
import { Card, Input, Row, Col } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

const ConsigneeDetails = () => {
  const [additionalDetails, setAdditionalDetails] = useState('');
  
  const consigneeInfo = [
    { label: "Full Name", value: "John Carter" },
    { label: "Email Address", value: "john@wakabuy.com" },
    { label: "Phone Number", value: "+1 01539 702257" },
    { label: "Address Line 1", value: "20 Cooper Square" },
    { label: "Country", value: "USA" },
  ];

  const locationInfo = [
    { label: "State", value: "Florida" },
    { label: "City", value: "Sebring" },
    { label: "Zip", value: "33875" },
  ];

  return (
    <div
    >
      <div className=" bg-white  border-t rounded-[18px]">
        
       <div className='pt-4 px-3'>
       <div>
          <p className='text-lg font-semibold'>Consignee Details</p>
        </div>
        {/* Main Consignee Info - Vertical on all screens */}
        <div className="grid grid-cols-1 gap-3">
          {consigneeInfo.map((info, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center">
              <p className="mb-1 text-sm font-medium text-gray-600 sm:mb-0 sm:w-1/3 sm:text-base">
                {info.label}
              </p>
              <p className="text-sm text-gray-800 sm:text-base sm:w-2/3">
                {info.value}
              </p>
            </div>
          ))}
        </div>

        {/* Location Info - Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3 sm:gap-4">
          {locationInfo.map((info, index) => (
            <div key={index} className="flex flex-col">
              <p className="mb-1 text-sm font-medium text-gray-600 sm:text-base">
                {info.label}
              </p>
              <p className="text-sm text-gray-800 sm:text-base">
                {info.value}
              </p>
            </div>
          ))}
        </div>

      
       </div>
      </div>

      
    </div>
  );
};

export default ConsigneeDetails;