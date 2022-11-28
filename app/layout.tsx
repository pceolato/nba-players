import './global.css';

import Image from 'next/image'

import { NavLink } from "./nav-link"
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-900 text-gray-200">
        <header className="flex items-center justify-between max-w-5xl w-11/12 mx-auto pb-32 pt-4">
          <Image
            src="/Logo.svg"
            alt="Logo NBA-PLAYERS"
            width={81}
            height={46}
          />
          <nav className="flex gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/players/1323">Jogadores</NavLink>
          </nav>
          <Link href="https://github.com/pceolato/nba-players">
            <Image
              src="/github-logo.svg"
              alt="Logo NBA-PLAYERS"
              width={42}
              height={42}
            />
          </Link>
        </header>
        {children}
        <footer className="fixed bottom-0 w-full h-12 flex items-center justify-center bg-gray-700 text-white">
          <p>
            Orgulhosamente feito por <Link href="https://github.com/pceolato" className="text-orange-500 hover:text-orange-100">Pedro Ceolato</Link>
          </p>
        </footer>
      </body>
    </html>
  )
}
