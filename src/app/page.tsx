import QRCodeGenerator from '@/components/QRCodeGenerator'
import React from 'react'

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900">
    <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
    <QRCodeGenerator />
  </main>
  )
}

export default page