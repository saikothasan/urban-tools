"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue }

const JSONTree: React.FC<{ data: JSONValue; indent?: number }> = ({ data, indent = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  if (typeof data !== 'object' || data === null) {
    return <span className="ml-4">{JSON.stringify(data)}</span>
  }

  const isArray = Array.isArray(data)

  return (
    <div style={{ marginLeft: `${indent * 20}px` }}>
      <span onClick={() => setIsExpanded(!isExpanded)} style={{ cursor: 'pointer' }}>
        {isExpanded ? '▼' : '►'} {isArray ? '[]' : '{}'}
      </span>
      {isExpanded && (
        <div>
          {Object.entries(data).map(([key, value]) => (
            <div key={key}>
              <span className="text-blue-500">{isArray ? '' : `"${key}": `}</span>
              <JSONTree data={value} indent={indent + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function JSONViewerForm() {
  const [input, setInput] = useState("")
  const [jsonData, setJsonData] = useState<JSONValue | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleView = () => {
    try {
      const parsed = JSON.parse(input)
      setJsonData(parsed)
      setError(null)
    } catch (err) {
      setError("Invalid JSON: Please check your input and try again.")
      setJsonData(null)
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
      <Button onClick={handleView} className="w-full">View JSON</Button>
      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {jsonData && (
        <div className="border rounded-md p-4 bg-background overflow-auto max-h-96">
          <JSONTree data={jsonData} />
        </div>
      )}
    </div>
  )
}

