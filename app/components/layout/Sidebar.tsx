"use client";
import { 
  HomeOutlined, 
  UserOutlined, 
  FileTextOutlined, 
  ShoppingOutlined, 
  CarOutlined, 
  TeamOutlined, 
  SettingOutlined, 
  QuestionCircleOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import { Avatar, Badge, Tooltip } from 'antd';
import { useState, useEffect } from 'react';

interface SidebarItem {
  key: string;
  icon: React.ComponentType;
  label: string;
  notificationCount?: number;
}

interface SidebarProps {
  activeKey?: string;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  items?: SidebarItem[];
  user?: {
    name: string;
    avatar?: string;
    notificationCount?: number;
  };
}

const defaultItems: SidebarItem[] = [
  { key: "1", icon: HomeOutlined, label: "Home" },
  { key: "2", icon: UserOutlined, label: "Users" },
  { key: "3", icon: FileTextOutlined, label: "Documents" },
  { key: "4", icon: ShoppingOutlined, label: "Products" },
  { key: "5", icon: CarOutlined, label: "Shipments", notificationCount: 3 },
  { key: "6", icon: TeamOutlined, label: "Team" },
  { key: "7", icon: SettingOutlined, label: "Settings" },
  { key: "8", icon: QuestionCircleOutlined, label: "Help" },
];

const Sidebar = ({ 
  activeKey = "5", 
  collapsed: propCollapsed = false,
  onCollapse,
  items = defaultItems,
  user = { name: "User", notificationCount: 1 }
}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(propCollapsed);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCollapsed(propCollapsed);
  }, [propCollapsed]);

  const toggleCollapse = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    onCollapse?.(newCollapsed);
  };

  return (
    <div className={`fixed flex flex-col min-h-screen bg-blue-600 transition-all duration-300 z-50
      ${collapsed ? 'w-16 sm:w-20' : 'w-48 sm:w-56'}`}
    >
      {/* Logo and Collapse Button */}
      <div className="flex items-center justify-between p-3 border-b border-blue-500">
        {!collapsed && (
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 mr-2 bg-white rounded">
              <span className="text-sm font-bold text-blue-600">S</span>
            </div>
            <span className="text-sm font-medium text-white">ShipmentPro</span>
          </div>
        )}
        {collapsed && (
          <div className="flex items-center justify-center w-8 h-8 mx-auto bg-white rounded">
            <span className="text-sm font-bold text-blue-600">S</span>
          </div>
        )}
        <button 
          onClick={toggleCollapse}
          className="hidden ml-auto text-blue-200 hover:text-white sm:block"
        >
          {collapsed ? '»' : '«'}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 py-4 overflow-y-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.key === activeKey;
          
          return (
            <Tooltip 
              key={item.key} 
              title={collapsed ? item.label : null} 
              placement="right"
            >
              <div
                className={`flex items-center mx-2 mb-1 p-2 rounded cursor-pointer transition-colors
                  ${isActive ? 'bg-blue-700 text-white' : 'text-blue-200 hover:bg-blue-700 hover:text-white'}
                  ${collapsed ? 'justify-center' : 'justify-start'}`}
              >
                <div className="relative">
                  <Icon  />
                  {item.notificationCount && !isActive && (
                    <Badge 
                      count={item.notificationCount} 
                      size="small" 
                      className="absolute -top-2 -right-2"
                    />
                  )}
                </div>
                {!collapsed && (
                  <span className="ml-3 text-sm whitespace-nowrap">
                    {item.label}
                    {item.notificationCount && isActive && (
                      <Badge 
                        count={item.notificationCount} 
                        size="small" 
                        className="ml-2"
                      />
                    )}
                  </span>
                )}
              </div>
            </Tooltip>
          );
        })}
      </div>

      {/* User Section */}
      <div className="p-3 border-t border-blue-500">
        {collapsed ? (
          <Tooltip title={user.name} placement="right">
            <Badge count={user.notificationCount} size="small">
              <Avatar 
                size="default"
                className="flex items-center justify-center mx-auto bg-orange-500"
              >
                {user.name.charAt(0)}
              </Avatar>
            </Badge>
          </Tooltip>
        ) : (
          <div className="flex items-center">
            <Badge count={user.notificationCount} size="small">
              <Avatar 
                size="default"
                className="flex items-center justify-center mr-2 bg-orange-500"
              >
                {user.name.charAt(0)}
              </Avatar>
            </Badge>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white truncate">{user.name}</p>
              <p className="text-xs text-blue-200 truncate">Admin</p>
            </div>
            <LogoutOutlined className="text-blue-200 cursor-pointer hover:text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;