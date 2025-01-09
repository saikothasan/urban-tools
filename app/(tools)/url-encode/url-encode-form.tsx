"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function URLEncodeForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleEncode = () => {
    const encoded = encodeURIComponent(input)
    setOutput(encoded)
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter text to encode here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        className="w-full"
      />
      <Button onClick={handleEncode} className="w-full">Encode</Button>
      <Textarea
        placeholder="Encoded output will appear here"
        value={output}
        readOnly
        rows={5}
        className="w-full"
      />
    </div>
  )
}

