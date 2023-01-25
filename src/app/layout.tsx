'use client';
import './global.css';

import { DM_Sans } from '@next/font/google'

import Link from 'next/link';

import { NavLink } from "../components/Nav-link";
import { ThemeProvider } from '../contexts/ThemeContext';
import { Toggle } from '../components/Toggle';
import { GithubLink } from '../components/Github-link';
import { Logo } from '../components/Logo';
import { useEffect, useState } from 'react';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dmSans'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <html>
      <head />
      {isMounted && (
        <body className={`${dmSans.variable} scrollbar-hide bg-body text-subtitle font-sans`}>
          <ThemeProvider>
            <header className="flex items-center justify-between max-w-5xl w-11/12 mx-auto pb-32 pt-4">
              <Logo />
              <nav className="flex gap-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/players" player>Jogador</NavLink>
              </nav>
              <div className="flex items-center gap-2">
                <Toggle />
                <GithubLink />
              </div>
            </header>
            {children}
            <footer className="fixed bottom-0 w-full h-8 flex items-center justify-center bg-gray-700 text-gray-200">
              <p className="text-sm">
                @2022 - <Link href="https://github.com/pceolato" className="text-orange-500 hover:text-orange-100">Pedro Ceolato</Link>
              </p>
            </footer>
          </ThemeProvider>
        </body>
      )}
    </html>
  )
}
