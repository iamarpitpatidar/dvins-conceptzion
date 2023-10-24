import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
  title: 'Dvins Conceptzion',
  description:
    "Elevate your space with Dvins Conceptizion's visionary interior design. Unleash your imagination and let us craft your dream environment.",
  authors: { name: 'Arpit Patidar', url: 'https://arpitpatidar.com' },
  keywords: [
    'Interior design',
    'Home decor',
    'Office design',
    'Interior architecture',
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  alternates: {
    canonical: new URL(process.env.NEXT_PUBLIC_APP_URL),
    languages: {
      en: '/en',
    },
  },
  openGraph: {
    title: `Create Your Store PWA App and Mobile Website in Minutes - ${process.env.NEXT_PUBLIC_APP_NAME}`,
    description: `Build your store's Progressive Web App (PWA) and mobile website effortlessly with ${process.env.NEXT_PUBLIC_APP_NAME}`,
    url: new URL(process.env.NEXT_PUBLIC_APP_URL),
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    locale: 'en_SG',
    type: 'website',
    images: '',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iamarpitpatidar',
  },
  appleWebApp: {
    capable: true,
    title: process.env.NEXT_PUBLIC_APP_NAME,
    statusBarStyle: 'black-translucent',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
