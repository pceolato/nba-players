import Image from 'next/image'
import Link from 'next/link'

import { Cards } from './list-card'

import logoNBA from '../assets/logo-nba.svg'

export default function Page() {
    return (
        <main className="max-w-5xl w-11/12 mx-auto">
            <section
                className="flex justify-between items-center pb-20"
            >
                <div>
                    <h1
                        className="text-title font-bold text-3xl pb-3.5"
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
                            Mais sobre NBA
                        </Link>
                    </button>
                </div>

                <Image
                    src={logoNBA}
                    alt="Logo NBA"
                    width={86}
                    height={180}
                />
            </section>
            <section className="lg:w-181 m-auto pb-20">
                <h1 className="text-center text-3xl text-title font-bold pb-4">Sobre a NBA</h1>
                <p className="text-center">
                    A National Basketball Association é a principal liga de basquetebol 
                    profissional da América do Norte. Com 30 franquias, a NBA também é 
                    considerada a principal liga de basquete do mundo.
                </p>
            </section>
            <div className="pb-5 flex flex-col">
                <h1 className="text-center font-bold text-title text-3xl">Jogadores</h1>
                <Link href="/players" className="m-auto text-sm hover:text-gray-300 underline">Clique aqui para buscar por nome</Link>
            </div>
            <Cards />
        </main>
    )
}