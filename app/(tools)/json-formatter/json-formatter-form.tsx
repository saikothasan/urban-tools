"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function JSONFormatterForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [indentation, setIndentation] = useState("2")
  const [error, setError] = useState<string | null>(null)

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, parseInt(indentation))
      setOutput(formatted)
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
        <Select value={indentation} onValueChange={setIndentation}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select indentation" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2">2 spaces</SelectItem>
            <SelectItem value="4">4 spaces</SelectItem>
            <SelectItem value="8">8 spaces</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleFormat} className="flex-grow">Format JSON</Button>
      </div>
      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}
      <Textarea
        placeholder="Formatted JSON will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

