"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import dynamic from 'next/dynamic'
import { AlertCircle } from 'lucide-react'
import localeEn from 'react-json-editor-ajrm/locale/en'

const JSONEditor = dynamic<any>(() => import('react-json-editor-ajrm'), { ssr: false })

interface JSONEditorProps {
  id: string
  placeholder: any
  locale: any
  height: string
  width: string
}

export function JSONEditorForm() {
  const [jsonData, setJsonData] = useState<any>({})
  const [formattedJson, setFormattedJson] = useState("")
  const [minifiedJson, setMinifiedJson] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleJsonChange = (data: { jsObject: any; json: string; error: any }) => {
    if (data.error) {
      setError(data.error.reason)
    } else {
      setError(null)
      setJsonData(data.jsObject)
      setFormattedJson(JSON.stringify(data.jsObject, null, 2))
      setMinifiedJson(JSON.stringify(data.jsObject))
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>JSON Editor</CardTitle>
        </CardHeader>
        <CardContent>
          <JSONEditor
            id="json-editor"
            placeholder={jsonData}
            onChange={handleJsonChange}
            locale={localeEn}
            height="300px"
            width="100%"
          />
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="formatted" className="w-full">
        <TabsList>
          <TabsTrigger value="formatted">Formatted</TabsTrigger>
          <TabsTrigger value="minified">Minified</TabsTrigger>
        </TabsList>
        <TabsContent value="formatted">
          <Card>
            <CardHeader>
              <CardTitle>Formatted JSON</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                {formattedJson}
              </pre>
              <Button onClick={() => copyToClipboard(formattedJson)} className="mt-2">
                Copy Formatted JSON
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="minified">
          <Card>
            <CardHeader>
              <CardTitle>Minified JSON</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                {minifiedJson}
              </pre>
              <Button onClick={() => copyToClipboard(minifiedJson)} className="mt-2">
                Copy Minified JSON
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

