import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/ui/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Adithya Kashyap | Software Engineer',
  description:
    'Software engineer building thoughtful products. Personal portfolio and blog.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            if (localStorage.getItem('theme') === 'light') {
              document.documentElement.classList.add('light')
            }
          } catch (e) {}
        `}</Script>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
