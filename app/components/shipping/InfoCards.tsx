"use client"

import type React from "react"

import { HiMiniBuildingOffice2 } from "react-icons/hi2"
import { RiMenuAddLine } from "react-icons/ri"
import { BsPersonFill } from "react-icons/bs"
import { Avatar } from "antd"

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
      color: "blue",
    },
    {
      icon: HiMiniBuildingOffice2,
      label: "Business name",
      value: "Dolf Technologies",
      color: "blue",
    },
    {
      icon: RiMenuAddLine,
      label: "Unit no.",
      value: "1E",
      color: "blue",
    },
  ]

  return (
    <div className="bg-gray-50 py-4 px-6 mb-6 sm:mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {infoCards.map((card, index) => {
          const IconComponent = card.icon
          return (
            <div key={index} className="flex items-center gap-3 pt-4 sm:pt-0 first:pt-0 relative">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-blue-500">
              <Avatar
                size={40}
                icon={<IconComponent />}
                className="bg-blue-100 text-blue-800 flex-shrink-0 border-blue-600"
              />
              </div>
              <div className="min-w-0">
                <p className="text-gray-500 text-sm mb-1">{card.label}</p>
                <p className="font-semibold text-gray-800 text-base">{card.value}</p>
              </div>

              {/* Mobile horizontal divider */}
              {index < infoCards.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 sm:hidden" />
              )}

              {/* Desktop vertical divider */}
              {index < infoCards.length - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-px h-2/3 my-auto bg-gray-300 hidden sm:block" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InfoCards
