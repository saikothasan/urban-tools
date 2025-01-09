"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Papa from 'papaparse'

export function TSVToJSONForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [hasHeader, setHasHeader] = useState(true)

  const handleConvert = () => {
    try {
      Papa.parse(input, {
        delimiter: '\t',
        header: hasHeader,
        complete: (results) => {
          setOutput(JSON.stringify(results.data, null, 2))
          setError(null)
        },
        error: (error) => {
          setError(`Error parsing TSV: ${error.message}`)
          setOutput("")
        }
      })
    } catch (err) {
      setError("Invalid TSV: Please check your input and try again.")
      setOutput("")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter TSV data here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="hasHeader"
          checked={hasHeader}
          onCheckedChange={(checked) => setHasHeader(checked as boolean)}
        />
        <label htmlFor="hasHeader">TSV has header row</label>
      </div>
      <Button onClick={handleConvert} className="w-full">Convert TSV to JSON</Button>
      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}
      <Textarea
        placeholder="Converted JSON will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

