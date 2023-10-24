import type { Metadata } from 'next'
import { Be_Vietnam_Pro } from 'next/font/google'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

import '@assets/vendors/liquid-icon/lqd-essentials/lqd-essentials.min.css'
import '@assets/css/globals.css'

import Header from '@shared/Header'

const vietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500'],
  subsets: ['latin'],
})

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
    title: `${process.env.NEXT_PUBLIC_APP_NAME} - Elevating Interior Design Creativity`,
    description: `Experience the future of interior design with ${process.env.NEXT_PUBLIC_APP_NAME}. Transform your space with cutting-edge creativity and personalized solutions.`,
    url: new URL(process.env.NEXT_PUBLIC_APP_URL),
    siteName: process.env.NEXT_PUBLIC_APP_NAME,
    locale: 'en_SG',
    type: 'website',
    images: ['/api/og'],
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
      <body
        className={clsx('lqd-cc-outer-hidden', vietnamPro.className)}
        data-lqd-cc="true"
        data-mobile-nav-breakpoint="1199"
        data-mobile-nav-style="modern"
        data-mobile-nav-scheme="dark"
        data-mobile-nav-trigger-alignment="right"
        data-mobile-header-scheme="gray"
        data-mobile-logo-alignment="default"
        data-mobile-header-builder="true"
        data-overlay-onmobile="false"
        data-disable-animations-onmobile="true"
      >
        <div className="bg-white" id="wrap">
          <div className="lqd-sticky-placeholder hidden"></div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
