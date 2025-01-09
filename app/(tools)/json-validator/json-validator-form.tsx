"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, XCircle } from 'lucide-react'

export function JSONValidatorForm() {
  const [input, setInput] = useState("")
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleValidate = () => {
    try {
      JSON.parse(input)
      setIsValid(true)
      setError(null)
    } catch (err) {
      setIsValid(false)
      setError(err instanceof Error ? err.message : "Unknown error occurred")
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
      <Button onClick={handleValidate} className="w-full">Validate JSON</Button>
      {isValid !== null && (
        <Alert variant={isValid ? "default" : "destructive"}>
          {isValid ? (
            <>
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Valid JSON</AlertTitle>
              <AlertDescription>
                The input is valid JSON.
              </AlertDescription>
            </>
          ) : (
            <>
              <XCircle className="h-4 w-4" />
              <AlertTitle>Invalid JSON</AlertTitle>
              <AlertDescription>
                {error}
              </AlertDescription>
            </>
          )}
        </Alert>
      )}
    </div>
  )
}

