"use client"
import MainLayout from './components/layout/MainLayout'
import ShippingInterface from './components/shipping/ShippingInterface'

export default function Home() {
  return (
    <MainLayout>
      <ShippingInterface />
    </MainLayout>
  )
}
