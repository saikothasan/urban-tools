"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { js_beautify } from 'js-beautify'

export function JSBeautifierForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleBeautify = () => {
    const beautified = js_beautify(input, {
      indent_size: 2,
      space_in_empty_paren: true,
    })
    setOutput(beautified)
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter JavaScript to beautify here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <Button onClick={handleBeautify} className="w-full">Beautify</Button>
      <Textarea
        placeholder="Beautified JavaScript will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

