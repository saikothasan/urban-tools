import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Suspense } from 'react'
import Loading from './loading'
import { TelegramBanner } from '@/components/telegram-banner'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Developer Tools',
  description: 'A collection of useful online tools for developers',
  verification: {
    google: 'Sbfx36AwCwEHYjToOifCyG__NTdz9sPGgLnjuBHUQkM',
    yandex: '72904a48e4645a5f',
    bing: 'CB016FED5B8E40A292F2D7B22B869A8B',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/favicon.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <TelegramBanner />
            <Header />
            <Suspense fallback={<Loading />}>
              <main className="flex-grow container mx-auto px-4 py-8">
                {children}
              </main>
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P40CPRPDHP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P40CPRPDHP');
          `}
        </Script>
      </body>
    </html>
  )
}

