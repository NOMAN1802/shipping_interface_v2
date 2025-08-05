"use client"
import { UserOutlined, BankOutlined, NumberOutlined } from '@ant-design/icons'
import { Card, Avatar, Divider } from 'antd'
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { RiMenuAddLine } from "react-icons/ri";
import { BsPersonFill } from "react-icons/bs";



interface InfoCard {
  icon: React.ComponentType<any>
  label: string
  value: string
  color: string
}

const InfoCards = () => {
  const infoCards: InfoCard[] = [
    {
      icon: BsPersonFill,
      label: "Customer name",
      value: "Adedamola Olarele",
      color: "blue"
    },
    {
      icon: HiMiniBuildingOffice2,
      label: "Business name",
      value: "Dolf Technologies",
      color: "blue"
    },
    {
      icon: RiMenuAddLine,
      label: "Unit no.",
      value: "1E",
      color: "blue"
    }
  ]

  return (
    <div className="grid grid-cols-1 bg-white sm:grid-cols-2 lg:grid-cols-3 shadow-md  mb-6 sm:mb-8 rounded-md">
      {infoCards.map((card, index) => {
        const IconComponent = card.icon
        return (
          <div key={index} className="border-0 p-4 ">
            <div className="flex items-center border-r-4  border-r-gray-500">
              <Avatar
                size={40}
                icon={<IconComponent />}
                className="bg-blue-100 text-blue-800 flex-shrink-0 border-blue-600"
              />
              <div className="min-w-0  mx-2">
                <p className="text-gray-500 text-sm p-0 m-0">{card.label}</p>
                <p className="font-semibold text-gray-800 p-0 m-0 text-sm sm:text-base ">{card.value}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default InfoCards 