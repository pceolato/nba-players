import Image from 'next/image'
import Link from 'next/link'
import { Cards } from './list-card'

export default function Page() {
    return (
        <main className="max-w-5xl w-11/12 mx-auto">
            <section
                className="flex justify-between items-center pb-20"
            >
                <div>
                    <h1
                        className="text-white font-bold text-3xl pb-3.5"
                    >
                        Conheça sobre jogadores <br/> da NBA
                    </h1>
                    <p className="text-sm pb-8">Acompanhe informações</p>
                    <button 
                        className="w-52 lg:w-full h-10 rounded bg-red-500 text-white font-medium hover:bg-red-300"
                    >
                        <Link
                            href="https://www.nba.com/players"
                            target="_blank"
                        >
                            Confira todos jogadores
                        </Link>
                    </button>
                </div>

                <Image
                    src="/logo-nba.svg"
                    alt="Logo NBA"
                    width={86}
                    height={180}
                />
            </section>
            <div className="w-full flex pb-9">
                <div className="bg-white/20 w-full flex items-center p-4 rounded">
                    <Image
                        src="/search-icon.svg"
                        alt="Icone de busca"
                        width={30}
                        height={30}
                    />
                    <input 
                        type="text" 
                        className="bg-transparent h-8 w-full pl-4 outline-0 text-white placeholder-white/60"
                        placeholder="Procure pelo nome" 
                    />
                </div>
            </div>
            <section className="lg:w-181 m-auto pb-20">
                <h1 className="text-center text-3xl text-white font-bold pb-4">Sobre a NBA</h1>
                <p className="text-center">
                    A National Basketball Association é a principal liga de basquetebol 
                    profissional da América do Norte. Com 30 franquias, a NBA também é 
                    considerada a principal liga de basquete do mundo.
                </p>
            </section>
            <Cards />
        </main>
    )
}