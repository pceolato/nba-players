'use client'
import './global.css';

import { DM_Sans } from '@next/font/google'

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavLink } from "./nav-link";

const dmSans = DM_Sans({ 
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  return (
    <html className={dmSans.className}>
      <head />
      <body className="scrollbar-hide bg-gray-900 text-gray-200">
        <header className="flex items-center justify-between max-w-5xl w-11/12 mx-auto pb-32 pt-4">
          <Image
            src="/Logo.svg"
            alt="Logo NBA-PLAYERS"
            width={81}
            height={46}
          />
          <nav className="flex gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href={`${pathname}`}>{pathname === '/' ? '' : 'Jogador'}</NavLink>
          </nav>
          <Link href="https://github.com/pceolato/nba-players">
            <Image
              src="/github-logo.svg"
              alt="Logo github"
              width={42}
              height={42}
            />
          </Link>
        </header>
        {children}
        <footer className="fixed bottom-0 w-full h-8 flex items-center justify-center bg-gray-700 text-gray-200">
          <p className="text-sm">
            @2022 - <Link href="https://github.com/pceolato" className="text-orange-500 hover:text-orange-100">Pedro Ceolato</Link>
          </p>
        </footer>
      </body>
    </html>
  )
}
