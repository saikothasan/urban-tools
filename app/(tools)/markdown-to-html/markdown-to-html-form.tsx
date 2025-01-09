"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { marked } from 'marked'

export function MarkdownToHTMLForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const convertToHTML = () => {
    try {
      const html = marked(input)
      setOutput(html)
    } catch (error) {
      setOutput("Error: Unable to convert Markdown to HTML.")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter Markdown here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
      />
      <Button onClick={convertToHTML} className="w-full">Convert to HTML</Button>
      <Textarea
        placeholder="Converted HTML will appear here"
        value={output}
        readOnly
        rows={10}
      />
    </div>
  )
}

