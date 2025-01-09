"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import dynamic from 'next/dynamic'

const ReactJson = dynamic(() => import('react-json-view'), { ssr: false })

export default function JSONViewerForm() {
  const [input, setInput] = useState("")
  const [jsonData, setJsonData] = useState<any>(null)
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
        <div className="text-red-500 mt-2">{error}</div>
      )}
      {jsonData && (
        <div className="border rounded-md p-4 bg-background">
          <ReactJson src={jsonData} theme="twilight" />
        </div>
      )}
    </div>
  )
}

