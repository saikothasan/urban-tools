"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { css as css_beautify } from 'js-beautify'

export function CSSBeautifierForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleBeautify = () => {
    const beautified = css_beautify(input, {
      indent_size: 2,
      preserve_newlines: false,
    })
    setOutput(beautified)
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter CSS to beautify here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <Button onClick={handleBeautify} className="w-full">Beautify</Button>
      <Textarea
        placeholder="Beautified CSS will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

