"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      )

      console.log(result.text)
      setSubmitStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      {submitStatus === 'success' && (
        <Alert>
          <AlertDescription>
            Thank you for your message! We'll get back to you as soon as possible.
          </AlertDescription>
        </Alert>
      )}
      {submitStatus === 'error' && (
        <Alert variant="destructive">
          <AlertDescription>
            An error occurred while sending your message. Please try again later.
          </AlertDescription>
        </Alert>
      )}
    </form>
  )
}

