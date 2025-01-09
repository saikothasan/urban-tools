"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function JSONEditorForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutput(formatted)
      setError(null)
    } catch (err) {
      setError("Invalid JSON: Please check your input and try again.")
      setOutput("")
    }
  }

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
      <div className="flex space-x-2">
        <Button onClick={handleFormat} className="flex-grow">Format JSON</Button>
        <Button onClick={handleMinify} className="flex-grow">Minify JSON</Button>
      </div>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Textarea
        placeholder="Formatted or minified JSON will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

