"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { minify } from 'terser'

export function JSMinifierForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleMinify = async () => {
    try {
      const result = await minify(input, {
        mangle: true,
        compress: {
          dead_code: true,
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          hoist_funs: true,
          keep_fargs: false,
          hoist_vars: true,
          if_return: true,
          join_vars: true,
          cascade: true,
          side_effects: true,
          warnings: false,
        },
      })
      setOutput(result.code || "")
    } catch (error) {
      setOutput("Error: Invalid JavaScript")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter JavaScript to minify here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <Button onClick={handleMinify} className="w-full">Minify</Button>
      <Textarea
        placeholder="Minified JavaScript will appear here"
        value={output}
        readOnly
        rows={10}
        className="w-full font-mono"
      />
    </div>
  )
}

