import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import portfolioImage from "../public/images/portfolio.jpeg";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  openGraph: {
    title: 'Diego Martins | Fullstack Developer',
    description: 'Fullstack Developer especializado en React, Node.js y desarrollo de servidores.',
    url: 'https://portfolio-cyan-delta-17.vercel.app/',
    siteName: 'Diego Martins',
    images: [
      {
        url: portfolioImage.src,  // <-- tu imagen
        width: 1200,
        height: 630,
        alt: 'Diego Martins - Fullstack Developer',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  title: 'Diego Martins | Fullstack Developer',
  description: 'Fullstack Developer especializado en React, Node.js y desarrollo de servidores. Creando experiencias digitales únicas.',
  keywords: ['fullstack developer', 'react', 'node.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Diego Martins' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f1a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
