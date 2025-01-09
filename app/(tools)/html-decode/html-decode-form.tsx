"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function HTMLDecodeForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleDecode = () => {
    try {
      const decoded = input.replace(/&([^;]+);/g, (match, entity) => {
        const entities: { [key: string]: string } = {
          amp: "&",
          lt: "<",
          gt: ">",
          quot: '"',
          apos: "'",
          nbsp: " ",
          copy: "©",
          reg: "®",
        }
        return entities[entity] || match
      })
      setOutput(decoded)
      setError(null)
    } catch (err) {
      setError('An error occurred while decoding. Please check your input and try again.')
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter HTML-encoded text here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        className="w-full"
      />
      <Button onClick={handleDecode} className="w-full">Decode</Button>
      {error && (
        <div className="text-red-500 mt-2">{error}</div>
      )}
      <Textarea
        placeholder="Decoded output will appear here"
        value={output}
        readOnly
        rows={5}
        className="w-full"
      />
    </div>
  )
}

