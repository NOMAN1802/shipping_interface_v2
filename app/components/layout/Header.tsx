"use client"
import { BellOutlined, AppstoreOutlined, FileTextOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 mx-20 bg-white border-b border-gray-200 sm:px-6 h-14 sm:h-16">
      <div className="flex items-center space-x-2 text-sm sm:text-base">
        <div className="flex items-center space-x-2">
          <FileTextOutlined className="w-4 h-4 text-gray-600 sm:w-5 sm:h-5" />
          <span className="text-gray-600">Shipments</span>
        </div>
        <span className="text-gray-400">/</span>
        <span className="font-medium text-gray-900">Create New</span>
      </div>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <BellOutlined className="w-5 h-5 text-gray-600 transition-colors cursor-pointer hover:text-gray-800" />
        <AppstoreOutlined className="w-5 h-5 text-gray-600 transition-colors cursor-pointer hover:text-gray-800" />
      </div>
    </header>
  )
}

export default Header 