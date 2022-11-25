import { NavLink } from "./nav-link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <header>
          <nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/players/1323">Jogadores</NavLink>
          </nav>
        </header>
        {children}
        <footer
        >
          Orgulhosamente feito por <strong>Pedro Ceolato</strong>
        </footer>
      </body>
    </html>
  )
}
