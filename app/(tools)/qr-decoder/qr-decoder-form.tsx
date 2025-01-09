"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import jsQR from "jsqr"

export function QRDecoderForm() {
  const [output, setOutput] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDecode = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.drawImage(img, 0, 0)
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
        const code = jsQR(imageData.data, imageData.width, imageData.height)
        if (code) {
          setOutput(code.data)
        } else {
          setOutput("No QR code found in the image")
        }
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleDecode}
        ref={fileInputRef}
        className="hidden"
      />
      <Button onClick={() => fileInputRef.current?.click()} className="w-full">
        Upload QR Code Image
      </Button>
      <Textarea
        placeholder="Decoded QR code content will appear here"
        value={output}
        readOnly
        rows={5}
        className="w-full"
      />
    </div>
  )
}

