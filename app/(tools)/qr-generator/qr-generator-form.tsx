"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import QRCode from 'qrcode'

export function QRGeneratorForm() {
  const [input, setInput] = useState("")
  const [qrCode, setQRCode] = useState("")

  const handleGenerate = async () => {
    try {
      const url = await QRCode.toDataURL(input)
      setQRCode(url)
    } catch (error) {
      console.error("Error generating QR code:", error)
    }
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Enter text or URL for QR code"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={handleGenerate} className="w-full">Generate QR Code</Button>
      {qrCode && (
        <div className="mt-4 flex justify-center">
          <img src={qrCode} alt="Generated QR Code" className="max-w-full" />
        </div>
      )}
    </div>
  )
}

