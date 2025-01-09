"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import dynamic from 'next/dynamic'

const JSONEditor = dynamic(() => import('jsoneditor-react').then((mod) => mod.JSONEditor), { ssr: false })
import 'jsoneditor-react/es/editor.min.css'

export function JSONEditorForm() {
  const [json, setJson] = useState<any>({})

  const handleChange = (newJson: any) => {
    setJson(newJson)
  }

  return (
    <div className="space-y-4">
      <div className="h-[500px] border rounded">
        <JSONEditor
          value={json}
          onChange={handleChange}
          mode="tree"
          allowedModes={['tree', 'code']}
        />
      </div>
      <Button onClick={() => console.log(json)} className="w-full">Log JSON to Console</Button>
    </div>
  )
}

