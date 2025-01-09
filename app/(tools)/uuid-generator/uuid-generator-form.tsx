"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { v4 as uuidv4 } from 'uuid'

export function UUIDGeneratorForm() {
  const [count, setCount] = useState(1)
  const [removeHyphens, setRemoveHyphens] = useState(false)
  const [uuids, setUuids] = useState<string[]>([])

  const generateUUIDs = () => {
    const newUUIDs = Array.from({ length: count }, () => {
      let uuid = uuidv4()
      if (removeHyphens) {
        uuid = uuid.replace(/-/g, '')
      }
      return uuid
    })
    setUuids(newUUIDs)
  }

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex-grow">
          <Label htmlFor="count">Number of UUIDs</Label>
          <Input
            id="count"
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Switch
            id="remove-hyphens"
            checked={removeHyphens}
            onCheckedChange={setRemoveHyphens}
          />
          <Label htmlFor="remove-hyphens">Remove hyphens</Label>
        </div>
      </div>
      <Button onClick={generateUUIDs} className="w-full">Generate UUIDs</Button>
      <div className="space-y-2">
        {uuids.map((uuid, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Input value={uuid} readOnly />
            <Button onClick={() => copyToClipboard(uuid)}>Copy</Button>
          </div>
        ))}
      </div>
    </div>
  )
}

