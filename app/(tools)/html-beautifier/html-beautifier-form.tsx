"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { html_beautify } from 'js-beautify'

export function HTMLBeautifierForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleBeautify = () => {
    const beautified = html_beautify(input, {
      indent_size: 2,
      wrap_line_length: 80,
      preserve_newlines: true,
      max_preserve_newlines: 2,
    })
    setOutput(beautified)
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter HTML to beautify here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <Button onClick={handleBeautify} className="w-full">Beautify</Button>
      <Textarea
        placeholder="Beautified HTML will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

