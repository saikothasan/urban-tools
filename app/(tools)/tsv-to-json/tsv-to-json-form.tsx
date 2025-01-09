"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Papa from 'papaparse'

interface ParseResult<T> {
  data: T[]
  errors: Papa.ParseError[]
  meta: Papa.ParseMeta
}

export function TSVToJSONForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [hasHeader, setHasHeader] = useState(true)

  const handleConvert = () => {
    Papa.parse<Record<string, unknown>>(input, {
      delimiter: '\t',
      header: hasHeader,
      complete: (results: ParseResult<Record<string, unknown>>) => {
        setOutput(JSON.stringify(results.data, null, 2))
        setError(null)
      },
      error: (error: Error) => {
        setError(`Error parsing TSV: ${error.message}`)
        setOutput("")
      }
    })
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
          onCheckedChange={(checked) => setHasHeader(checked === true)}
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

