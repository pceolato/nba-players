'use client';

import Image from 'next/image';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CardInfos } from './card-infos';

interface PlayerProps {
    name: string;
    position: string;
    team: string;
    initials: string;
    city: string;
    conference: string;
    division: string;
}

export default function Page()  {
    const [player, setPlayer] = useState<PlayerProps>({} as PlayerProps)

    const pathname = usePathname();

    useEffect(() => {
        try {
            fetch(`https://www.balldontlie.io/api/v1/${pathname}`)
               .then(res => res.json())
               .then(data => setPlayer({
                    name: `${data.first_name} ${data.last_name}`,
                    position: data.position,
                    team: data.team.full_name,
                    initials: data.team.abbreviation,
                    city: data.team.city,
                    conference: data.team.conference,
                    division: data.team.division
                }))
                
        } catch (err) {
            console.log(err)
        }

    }, [pathname])


    return (
        <div className="max-w-3xl w-11/12 m-auto flex flex-col">
            <header className="flex w-full justify-center md:justify-between items-center pb-9">
                <Image
                    className="hidden md:inline-block"
                    src="/bool-red-lg.svg"
                    alt="Icone de busca"
                    width={70}
                    height={70}
                />
                <h1 className="text-4xl text-title font-bold text-center">{player.name || '...'}</h1>
                <Image
                    className="hidden md:inline-block"
                    src="/bool-blue-lg.svg"
                    alt="Icone de busca"
                    width={70}
                    height={70}
                />
            </header>
            <div className="w-full bg-card border rounded">
                <div className="p-6 flex flex-col gap-10">
                    <div className="flex justify-between">
                        <CardInfos title="Posição" description={player.position}/>
                        <CardInfos title="Time" description={`${player.team} (${player.initials})`}/>
                        <CardInfos title="Cidade" description={player.city}/>
                    </div>
                    <div className="flex justify-around">
                        <CardInfos title="Conferência" description={player.conference}/>
                        <CardInfos title="Divisão" description={player.division}/>
                    </div>
                </div>
            </div>
        </div>
    )
}