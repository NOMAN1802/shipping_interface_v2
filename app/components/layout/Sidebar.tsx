"use client"

import type React from "react"
import ProfileImage from '../../../assests/profileImage.png'
import Logo from '../../../assests/logo.png'
import { useState, useEffect } from "react"
import {
  HomeOutlined,
  UserOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  CarOutlined,
  TeamOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons"
import Image from "next/image"

interface SidebarItem {
  key: string
  icon: React.ComponentType
  label: string
  notificationCount?: number
  isSpecial?: boolean // for the orange shipment item
}

interface SidebarProps {
  activeKey?: string
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  items?: SidebarItem[]
  user?: {
    name: string
    avatar?: string
    notificationCount?: number
  }
}

const defaultItems: SidebarItem[] = [
  { key: "1", icon: HomeOutlined, label: "Home" },
  { key: "2", icon: UserOutlined, label: "Users" },
  { key: "3", icon: FileTextOutlined, label: "Documents" },
  { key: "4", icon: ShoppingOutlined, label: "Products" },
  { key: "5", icon: CarOutlined, label: "Shipments", notificationCount: 3, isSpecial: true },
  { key: "6", icon: TeamOutlined, label: "Team" },
  { key: "7", icon: QuestionCircleOutlined, label: "Help" },
]

const Sidebar = ({
  activeKey = "5",
  collapsed: propCollapsed = false,
  onCollapse,
  items = defaultItems,
  user = { name: "User", notificationCount: 1 },
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true) // Always collapsed to match image
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />}

     {/* Sidebar */}
     <div
        className={`fixed left-0 top-0 h-full bg-blue-600 transition-all duration-300 z-50 flex flex-col w-16`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center p-4 border-b border-blue-500">
          <div className="flex items-center justify-center  bg-white rounded">
          <Image
                src={Logo}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
                width={20}
                height={20}
              />
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 ">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = item.key === activeKey

            return (
              <div
                key={item.key}
                className={`relative flex items-center justify-center mx-2 mb-1 p-3 cursor-pointer transition-all duration-200 ${
                  item.isSpecial
                    ? "bg-orange-500 text-white hover:bg-orange-600 rounded-md"
                    : isActive
                      ? "bg-blue-700 text-white"
                      : "text-blue-200 hover:bg-blue-700 hover:text-white"
                }`}
                title={item.label}
              >
                <Icon  />
              </div>
            )
          })}
        </div>
           {/* Bottom Section - Fixed at bottom */}
           <div className="mt-auto border-t border-blue-500">
          {/* User Avatar */}
          <div className="flex items-center justify-center p-3 relative">
              <Image
                src={ProfileImage}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover"
                width={20}
                height={20}
              />
       
          </div>

          {/* Settings */}
          <div className="flex items-center justify-center p-3 text-blue-200 hover:bg-blue-700 hover:text-white cursor-pointer transition-colors">
            <SettingOutlined className="text-lg" />
          </div>

          {/* Logout */}
          <div className="flex items-center justify-center p-3 text-blue-200 hover:bg-blue-700 hover:text-white cursor-pointer transition-colors">
            <LogoutOutlined className="text-lg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
