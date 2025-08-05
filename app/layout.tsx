import type { Metadata } from "next"
import "./globals.css"
import { ConfigProvider } from 'antd'

export const metadata: Metadata = {
  title: "Shipping Interface",
  description: "Modern shipping interface with Ant Design",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#F2F6F9]">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#2563eb',
              borderRadius: 6,

            },
          }}
          
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  )
}
