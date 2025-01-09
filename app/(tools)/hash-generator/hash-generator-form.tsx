"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import CryptoJS from 'crypto-js'

const hashAlgorithms = [
  { name: 'MD5', func: CryptoJS.MD5 },
  { name: 'SHA-1', func: CryptoJS.SHA1 },
  { name: 'SHA-256', func: CryptoJS.SHA256 },
  { name: 'SHA-512', func: CryptoJS.SHA512 },
  { name: 'SHA-3', func: CryptoJS.SHA3 },
  { name: 'RIPEMD160', func: CryptoJS.RIPEMD160 },
]

export function HashGeneratorForm() {
  const [input, setInput] = useState('')
  const [algorithm, setAlgorithm] = useState('SHA-256')
  const [hash, setHash] = useState('')

  useEffect(() => {
    generateHash()
  }, [input, algorithm])

  const generateHash = () => {
    const selectedAlgorithm = hashAlgorithms.find(algo => algo.name === algorithm)
    if (selectedAlgorithm) {
      const hashValue = selectedAlgorithm.func(input).toString()
      setHash(hashValue)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hash)
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="input">Input</Label>
        <Input
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to hash"
        />
      </div>
      <div>
        <Label htmlFor="algorithm">Hash Algorithm</Label>
        <Select value={algorithm} onValueChange={setAlgorithm}>
          <SelectTrigger id="algorithm">
            <SelectValue placeholder="Select algorithm" />
          </SelectTrigger>
          <SelectContent>
            {hashAlgorithms.map((algo) => (
              <SelectItem key={algo.name} value={algo.name}>{algo.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="hash">Generated Hash</Label>
        <div className="flex space-x-2">
          <Input id="hash" value={hash} readOnly />
          <Button onClick={copyToClipboard}>Copy</Button>
        </div>
      </div>
    </div>
  )
}

