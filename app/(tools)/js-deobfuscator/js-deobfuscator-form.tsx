"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2, AlertCircle } from 'lucide-react'
import * as esprima from 'esprima'
import * as escodegen from 'escodegen'
import * as esmangle from 'esmangle'
import * as estraverse from 'estraverse'

interface DeobfuscationOptions {
  renameVariables: boolean
  foldConstants: boolean
  removeDeadCode: boolean
  simplifyExpressions: boolean
  decodeStrings: boolean
  unminify: boolean
}

export function JSDeObfuscatorForm() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [analysis, setAnalysis] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState<DeobfuscationOptions>({
    renameVariables: true,
    foldConstants: true,
    removeDeadCode: true,
    simplifyExpressions: true,
    decodeStrings: true,
    unminify: true,
  })

  const handleDeObfuscate = async () => {
    setIsLoading(true)
    setError(null)
    setOutput("")
    setAnalysis([])

    try {
      // Parse the input JavaScript
      const ast = esprima.parseScript(input)

      let deobfuscatedAst: any = ast
      const analysisSteps: string[] = []

      // Apply deobfuscation techniques based on selected options
      if (options.decodeStrings) {
        deobfuscatedAst = decodeStrings(deobfuscatedAst)
        analysisSteps.push("Decoded obfuscated strings")
      }

      if (options.foldConstants) {
        deobfuscatedAst = foldConstants(deobfuscatedAst)
        analysisSteps.push("Folded constant expressions")
      }

      if (options.simplifyExpressions) {
        deobfuscatedAst = simplifyExpressions(deobfuscatedAst)
        analysisSteps.push("Simplified complex expressions")
      }

      if (options.removeDeadCode) {
        deobfuscatedAst = removeDeadCode(deobfuscatedAst)
        analysisSteps.push("Removed dead code")
      }

      if (options.renameVariables) {
        deobfuscatedAst = renameVariables(deobfuscatedAst)
        analysisSteps.push("Renamed variables for improved readability")
      }

      // Generate the deobfuscated code
      const deobfuscatedCode = escodegen.generate(deobfuscatedAst, {
        format: options.unminify ? {
          indent: {
            style: '  ',
            base: 0,
          },
          newline: '\n',
          space: ' ',
          quotes: 'auto',
        } : {
          indent: {
            style: '',
            base: 0,
          },
          newline: '',
          space: '',
          quotes: 'auto',
        },
      })

      setOutput(deobfuscatedCode)
      setAnalysis(analysisSteps)
    } catch (err) {
      setError("Error: Unable to deobfuscate the code. Please check if it's valid JavaScript.")
    } finally {
      setIsLoading(false)
    }
  }

  const decodeStrings = (ast: any): any => {
    return estraverse.replace(ast, {
      enter: function (node: any) {
        if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'atob') {
          if (node.arguments[0].type === 'Literal') {
            return {
              type: 'Literal',
              value: atob(node.arguments[0].value),
              raw: `"${atob(node.arguments[0].value)}"`
            }
          }
        }
      }
    })
  }

  const foldConstants = (ast: any): any => {
    return estraverse.replace(ast, {
      leave: function (node: any) {
        if (node.type === 'BinaryExpression' && node.left.type === 'Literal' && node.right.type === 'Literal') {
          const left = node.left.value
          const right = node.right.value
          let result: number

          switch (node.operator) {
            case '+': result = left + right; break
            case '-': result = left - right; break
            case '*': result = left * right; break
            case '/': result = left / right; break
            default: return node
          }

          return {
            type: 'Literal',
            value: result,
            raw: result.toString()
          }
        }
      }
    })
  }

  const simplifyExpressions = (ast: any): any => {
    return esmangle.optimize(ast)
  }

  const removeDeadCode = (ast: any): any => {
    return esmangle.optimize(ast, [
      [esmangle.pass.Registry.pass.deadcode.transformations]
    ])
  }

  const renameVariables = (ast: any): any => {
    let counter = 0
    const variableMap = new Map<string, string>()

    return estraverse.replace(ast, {
      enter: function (node: any) {
        if (node.type === 'Identifier' && !variableMap.has(node.name)) {
          variableMap.set(node.name, `v${counter++}`)
        }
      },
      leave: function (node: any) {
        if (node.type === 'Identifier' && variableMap.has(node.name)) {
          return {
            ...node,
            name: variableMap.get(node.name)
          }
        }
      }
    })
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Enter obfuscated JavaScript here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full font-mono"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="renameVariables"
            checked={options.renameVariables}
            onCheckedChange={(checked) => setOptions(prev => ({ ...prev, renameVariables: checked === true }))}
          />
          <Label htmlFor="renameVariables">Rename Variables</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="foldConstants"
            checked={options.foldConstants}
            onCheckedChange={(checked) => setOptions(prev => ({ ...prev, foldConstants: checked === true }))}
          />
          <Label htmlFor="foldConstants">Fold Constants</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="removeDeadCode"
            checked={options.removeDeadCode}
            onCheckedChange={(checked) => setOptions(prev => ({ ...prev, removeDeadCode: checked === true }))}
          />
          <Label htmlFor="removeDeadCode">Remove Dead Code</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="simplifyExpressions"
            checked={options.simplifyExpressions}
            onCheckedChange={(checked) => setOptions(prev => ({ ...prev, simplifyExpressions: checked === true }))}
          />
          <Label htmlFor="simplifyExpressions">Simplify Expressions</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="decodeStrings"
            checked={options.decodeStrings}
            onCheckedChange={(checked) => setOptions(prev => ({ ...prev, decodeStrings: checked === true }))}
          />
          <Label htmlFor="decodeStrings">Decode Strings</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="unminify"
            checked={options.unminify}
            onCheckedChange={(checked) => setOptions(prev => ({ ...prev, unminify: checked === true }))}
          />
          <Label htmlFor="unminify">Unminify (Format Code)</Label>
        </div>
      </div>
      <Button onClick={handleDeObfuscate} className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Deobfuscating...
          </>
        ) : (
          'Deobfuscate'
        )}
      </Button>
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {(output || analysis.length > 0) && (
        <Tabs defaultValue="output" className="w-full">
          <TabsList>
            <TabsTrigger value="output">Deobfuscated Code</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="output">
            <Card>
              <CardHeader>
                <CardTitle>Deobfuscated JavaScript</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={output}
                  readOnly
                  rows={10}
                  className="w-full font-mono"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analysis">
            <Card>
              <CardHeader>
                <CardTitle>Deobfuscation Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {analysis.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}

