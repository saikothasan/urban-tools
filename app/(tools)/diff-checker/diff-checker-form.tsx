"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { diffLines, Change } from 'diff'

function DiffResult({ diff }: { diff: Change[] }) {
  return (
    <pre className="whitespace-pre-wrap bg-secondary p-4 rounded-md">
      {diff.map((part, index) => (
        <span
          key={index}
          className={
            part.added ? "bg-green-200 dark:bg-green-900" :
            part.removed ? "bg-red-200 dark:bg-red-900" : ""
          }
        >
          {part.value}
        </span>
      ))}
    </pre>
  )
}

export function DiffCheckerForm() {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [diff, setDiff] = useState<Change[]>([])

  const handleCompare = () => {
    const result = diffLines(text1, text2)
    setDiff(result)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Textarea
          placeholder="Enter first text here"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
          rows={10}
        />
        <Textarea
          placeholder="Enter second text here"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
          rows={10}
        />
      </div>
      <Button onClick={handleCompare} className="w-full">Compare Texts</Button>
      {diff.length > 0 && <DiffResult diff={diff} />}
    </div>
  )
}

