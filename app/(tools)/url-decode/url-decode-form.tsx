"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function URLDecodeForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(input)
      setOutput(decoded)
    } catch (error) {
      setOutput("Error: Invalid URL encoding")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter URL-encoded text here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        className="w-full"
      />
      <Button onClick={handleDecode} className="w-full">Decode</Button>
      <Textarea
        placeholder="Decoded output will appear here"
        value={output}
        readOnly
        rows={5}
        className="w-full"
      />
    </div>
  )
}

