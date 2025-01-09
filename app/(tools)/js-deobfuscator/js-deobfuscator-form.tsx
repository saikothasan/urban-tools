"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { js_beautify } from 'js-beautify'

export function JSDeObfuscatorForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleDeObfuscate = () => {
    try {
      // This is a simple deobfuscation attempt using beautification
      const deobfuscated = js_beautify(input, {
        indent_size: 2,
        space_in_empty_paren: true,
        unescape_strings: true,
      })
      setOutput(deobfuscated)
    } catch (error) {
      setOutput("Error: Unable to deobfuscate the code")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter obfuscated JavaScript here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <Button onClick={handleDeObfuscate} className="w-full">DeObfuscate</Button>
      <Textarea
        placeholder="DeObfuscated JavaScript will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

