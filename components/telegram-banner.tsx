import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"

export function TelegramBanner() {
  return (
    <Alert variant="default" className="rounded-none border-t-0 border-x-0">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        Join our Telegram community for updates and discussions!{' '}
        <Link href="https://t.me/drkingbd" className="font-medium underline underline-offset-4">
          Join now
        </Link>
      </AlertDescription>
    </Alert>
  )
}

