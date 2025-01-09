"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import * as JavaScriptObfuscator from 'javascript-obfuscator'

export function JSObfuscatorForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleObfuscate = () => {
    try {
      const obfuscationResult = JavaScriptObfuscator.obfuscate(input, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 0.75
      })
      setOutput(obfuscationResult.getObfuscatedCode())
    } catch (error) {
      setOutput("Error: Unable to obfuscate the code")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter JavaScript to obfuscate here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <Button onClick={handleObfuscate} className="w-full">Obfuscate</Button>
      <Textarea
        placeholder="Obfuscated JavaScript will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

