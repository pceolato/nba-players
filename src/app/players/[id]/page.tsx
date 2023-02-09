'use client';

import { usePathname } from 'next/navigation';
import { DribbbleLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { api } from '../../../lib/axios';
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

export default function Page() {
    const [player, setPlayer] = useState<PlayerProps>({} as PlayerProps)

    const pathname = usePathname();

    async function getPlayer(path: string | null) {
        try {
            const response = await api.get(`${path}`)
            const data = response.data

            const player = {
                name: `${data.first_name} ${data.last_name}`,
                position: data.position,
                team: data.team.full_name,
                initials: data.team.abbreviation,
                city: data.team.city,
                conference: data.team.conference,
                division: data.team.division
            }

            setPlayer(player)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPlayer(pathname)
    }, [pathname])


    return (
        <div className="max-w-3xl w-11/12 m-auto flex flex-col">
            <header className="flex w-full justify-center md:justify-between items-center pb-9">
                <DribbbleLogo size={86} color="#C9082A" className="hidden md:inline-block" />
                <h1 className="text-4xl text-title font-bold text-center">{player.name || '...'}</h1>
                <DribbbleLogo size={86} color="#17408B" className="hidden md:inline-block" />
            </header>
            <div className="w-full bg-card border rounded">
                <div className="p-6 flex flex-col gap-10">
                    <div className="flex justify-between">
                        <CardInfos title="Posição" description={player.position} />
                        <CardInfos title="Time" description={`${player.team} (${player.initials})`} />
                        <CardInfos title="Cidade" description={player.city} />
                    </div>
                    <div className="flex justify-around">
                        <CardInfos title="Conferência" description={player.conference} />
                        <CardInfos title="Divisão" description={player.division} />
                    </div>
                </div>
            </div>
        </div>
    )
}