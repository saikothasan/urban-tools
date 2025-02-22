"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export function HTMLMinifierForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [removeComments, setRemoveComments] = useState(true)

  const handleMinify = () => {
    let minified = input
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
    
    if (removeComments) {
      minified = minified.replace(/<!--[\s\S]*?-->/g, '')
    }
    
    setOutput(minified.trim())
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter HTML to minify here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="removeComments"
          checked={removeComments}
          onCheckedChange={(checked) => setRemoveComments(checked === true)}
        />
        <label htmlFor="removeComments">Remove comments</label>
      </div>
      <Button onClick={handleMinify} className="w-full">Minify</Button>
      <Textarea
        placeholder="Minified HTML will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

