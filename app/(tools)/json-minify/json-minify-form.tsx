"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function JSONMinifyForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input)
      const minified = JSON.stringify(parsed)
      setOutput(minified)
      setError(null)
    } catch (err) {
      setError("Invalid JSON: Please check your input and try again.")
      setOutput("")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter JSON data here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <Button onClick={handleMinify} className="w-full">Minify JSON</Button>
      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}
      <Textarea
        placeholder="Minified JSON will appear here"
        value={output}
        readOnly
        rows={5}
        className="w-full font-mono"
      />
    </div>
  )
}

