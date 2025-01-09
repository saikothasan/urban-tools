"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from 'sql-formatter'

export function SQLFormatterForm() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [dialect, setDialect] = useState('sql')

  const handleFormat = () => {
    try {
      const formatted = format(input, {
        language: dialect,
        uppercase: true,
        indentStyle: '  ',
      })
      setOutput(formatted)
    } catch (error) {
      setOutput('Error: Unable to format SQL. Please check your input.')
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter SQL query here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
      />
      <div className="flex space-x-4">
        <Select value={dialect} onValueChange={setDialect}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select SQL dialect" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sql">Standard SQL</SelectItem>
            <SelectItem value="mysql">MySQL</SelectItem>
            <SelectItem value="postgresql">PostgreSQL</SelectItem>
            <SelectItem value="tsql">SQL Server</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleFormat} className="flex-grow">Format SQL</Button>
      </div>
      <Textarea
        placeholder="Formatted SQL will appear here"
        value={output}
        readOnly
        rows={10}
      />
    </div>
  )
}

