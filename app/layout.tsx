import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Noto_Serif_JP } from 'next/font/google'

import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['300', '400', '500', '700'],
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'MOPERO 4U | SWALLOW - あなたの次の"こがない"自転車。',
  description:
    'SWALLOWの特定小型原付 MOPERO 4U。免許不要、16歳以上で乗れる新しい移動手段。自転車の延長として、日常をもっと楽に。',
}

export const viewport: Viewport = {
  themeColor: '#f5f0ea',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
