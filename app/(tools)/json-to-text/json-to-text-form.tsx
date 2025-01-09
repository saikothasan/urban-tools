"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function JSONToTextForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [includeKeys, setIncludeKeys] = useState(true)

  const jsonToText = (obj: any, indent = ''): string => {
    if (typeof obj !== 'object' || obj === null) {
      return String(obj)
    }

    let result = ''
    if (Array.isArray(obj)) {
      for (const item of obj) {
        result += `${indent}- ${jsonToText(item, indent + '  ')}\n`
      }
    } else {
      for (const [key, value] of Object.entries(obj)) {
        if (includeKeys) {
          result += `${indent}${key}: ${jsonToText(value, indent + '  ')}\n`
        } else {
          result += `${indent}${jsonToText(value, indent + '  ')}\n`
        }
      }
    }
    return result.trim()
  }

  const handleConvert = () => {
    try {
      const jsonObj = JSON.parse(input)
      const text = jsonToText(jsonObj)
      setOutput(text)
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
      <div className="flex items-center space-x-2">
        <Checkbox
          id="includeKeys"
          checked={includeKeys}
          onCheckedChange={(checked) => setIncludeKeys(checked as boolean)}
        />
        <label htmlFor="includeKeys">Include keys in output</label>
      </div>
      <Button onClick={handleConvert} className="w-full">Convert JSON to Text</Button>
      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}
      <Textarea
        placeholder="Converted text will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

