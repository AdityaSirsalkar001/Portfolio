import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aditya Sirsalkar - Portfolio',
  description: 'Junior Software Developer proficient in C, C++, JavaScript, Python and React. Portfolio showcasing projects and skills.',
  keywords: ['software developer', 'react', 'javascript', 'python', 'portfolio', 'web development'],
  authors: [{ name: 'Aditya Sirsalkar' }],
  creator: 'Aditya Sirsalkar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aditya-portfolio.vercel.app',
    title: 'Aditya Sirsalkar - Portfolio',
    description: 'Junior Software Developer proficient in C, C++, JavaScript, Python and React',
    siteName: 'Aditya Sirsalkar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Sirsalkar - Portfolio',
    description: 'Junior Software Developer proficient in C, C++, JavaScript, Python and React',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
