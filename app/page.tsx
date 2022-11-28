import Image from 'next/image'

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
                        className="lg:w-full md:w-full sm:w-10 h-10 rounded bg-red-500 text-white font-medium"
                    >
                        Confira todos jogadores
                    </button>
                </div>

                <Image
                    src="/logo-nba.svg"
                    alt="Logo NBA-PLAYERS"
                    width={86}
                    height={180}
                />
            </section>
            <div className="w-full flex">
                <div className="bg-white/20 w-full flex items-center p-4 rounded">
                    <Image
                        src="/search-icon.svg"
                        alt="Logo NBA-PLAYERS"
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
        </main>
    )
}