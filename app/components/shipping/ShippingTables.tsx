"use client"
import { useState } from 'react'
import { Collapse, Table, Tag, Button, Space } from 'antd'
import { DownOutlined, UpOutlined } from '@ant-design/icons'

const { Panel } = Collapse

const ShippingTables = () => {
  const [activeKey, setActiveKey] = useState<string[]>([])

  // First table data - Shipment Details (Collapsible)
  const shipmentColumns = [
    {
      title: 'Shipment ID',
      dataIndex: 'id',
      key: 'id',
      responsive: ['md'],
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Active' ? 'green' : status === 'Pending' ? 'orange' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Shipping Date',
      dataIndex: 'shippingDate',
      key: 'shippingDate',
      responsive: ['lg'],
    },
    {
      title: 'ETA',
      dataIndex: 'eta',
      key: 'eta',
      responsive: ['lg'],
    },
    {
      title: 'Total Cost',
      dataIndex: 'totalCost',
      key: 'totalCost',
    },
  ]

  const shipmentData = [
    {
      key: '1',
      id: 'SH-001',
      customer: 'John Carter',
      status: 'Active',
      shippingDate: 'JUL-25-2025',
      eta: 'AUG-05-2025',
      totalCost: '$510.00',
    },
    {
      key: '2',
      id: 'SH-002',
      customer: 'Adedamola Olarele',
      status: 'Pending',
      shippingDate: 'JUL-28-2025',
      eta: 'AUG-08-2025',
      totalCost: '$420.00',
    },
    {
      key: '3',
      id: 'SH-003',
      customer: 'Sarah Johnson',
      status: 'Delivered',
      shippingDate: 'JUL-20-2025',
      eta: 'JUL-30-2025',
      totalCost: '$380.00',
    },
  ]

  // Second table data - Package Details
  const packageColumns = [
    {
      title: 'Package ID',
      dataIndex: 'id',
      key: 'id',
      responsive: ['md'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
      responsive: ['lg'],
    },
    {
      title: 'Dimensions',
      dataIndex: 'dimensions',
      key: 'dimensions',
      responsive: ['lg'],
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ]

  const packageData = [
    {
      key: '1',
      id: 'PKG-001',
      description: 'Electronics Package',
      weight: '2.5 kg',
      dimensions: '30x20x15 cm',
      value: '$150.00',
    },
    {
      key: '2',
      id: 'PKG-002',
      description: 'Clothing Items',
      weight: '1.8 kg',
      dimensions: '25x18x12 cm',
      value: '$75.00',
    },
    {
      key: '3',
      id: 'PKG-003',
      description: 'Books Collection',
      weight: '3.2 kg',
      dimensions: '35x25x20 cm',
      value: '$45.00',
    },
  ]

  // Third table data - Tracking History
  const trackingColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      responsive: ['md'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'In Transit' ? 'blue' : status === 'Delivered' ? 'green' : 'orange'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      responsive: ['lg'],
    },
  ]

  const trackingData = [
    {
      key: '1',
      date: 'JUL-25-2025',
      location: 'Miami, FL',
      status: 'In Transit',
      description: 'Package picked up by carrier',
    },
    {
      key: '2',
      date: 'JUL-26-2025',
      location: 'Atlanta, GA',
      status: 'In Transit',
      description: 'Package in sorting facility',
    },
    {
      key: '3',
      date: 'JUL-27-2025',
      location: 'Sebring, FL',
      status: 'Out for Delivery',
      description: 'Package out for final delivery',
    },
  ]

  return (
    <div className="space-y-6 mt-8">
      {/* First Table - Collapsible Shipment Details */}
      <Collapse 
        activeKey={activeKey}
        onChange={setActiveKey}
        ghost
        expandIcon={({ isActive }) => isActive ? <UpOutlined /> : <DownOutlined />}
      >
        <Panel 
          header={
            <span className="text-lg font-semibold text-gray-800">
              Shipment Details (Collapsible)
            </span>
          } 
          key="1"
        >
          <div className="overflow-x-auto">
            <Table 
              columns={shipmentColumns} 
              dataSource={shipmentData} 
              pagination={false}
              size="middle"
              scroll={{ x: 600 }}
            />
          </div>
        </Panel>
      </Collapse>

      {/* Second Table - Package Details */}
      <div className="bg-white rounded-lg shadow-sm border-0 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Package Details</h3>
        <div className="overflow-x-auto">
          <Table 
            columns={packageColumns} 
            dataSource={packageData} 
            pagination={false}
            size="middle"
            scroll={{ x: 600 }}
          />
        </div>
      </div>

      {/* Third Table - Tracking History */}
      <div className="bg-white rounded-lg shadow-sm border-0 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Tracking History</h3>
        <div className="overflow-x-auto">
          <Table 
            columns={trackingColumns} 
            dataSource={trackingData} 
            pagination={false}
            size="middle"
            scroll={{ x: 600 }}
          />
        </div>
      </div>
    </div>
  )
}

export default ShippingTables 