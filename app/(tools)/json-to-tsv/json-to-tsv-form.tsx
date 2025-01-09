"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Parser } from 'json2csv'

export function JSONToTSVForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleConvert = () => {
    try {
      const jsonObj = JSON.parse(input)
      const parser = new Parser({ delimiter: '\t' })
      const tsv = parser.parse(jsonObj)
      setOutput(tsv)
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
      <Button onClick={handleConvert} className="w-full">Convert JSON to TSV</Button>
      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}
      <Textarea
        placeholder="Converted TSV will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

