'use client';

import Image from 'next/image'
import { useState } from 'react';
import { Card } from '../card';

import { Alert } from "@material-tailwind/react";

export interface Player {
    id: string;
    name: string;
    team: string;
}

export default function Page() {
    const [searchPlayers, setSearchPlayers] = useState('')
    const [players, setPlayers] = useState<Player[]>([])

    const [show, setShow] = useState(false);


    async function getPlayers() {
        try {
            if (searchPlayers === '') {
                setShow(true)
                return;
            }

            const trimPlayer = searchPlayers.trim();

            fetch(`https://www.balldontlie.io/api/v1/players/?search=${trimPlayer}`)
                .then(res => res.json())
                .then(data => data.data.length <= 0 ? alert('jogador não encontrado') : data.data)
                .then(data => setPlayers(data))

        } catch (err) {
            console.log(err)
        } finally {
            setSearchPlayers('')
        }
    }

    function handleKeyDown(e: { key: string; }) {
        if (e.key === 'Enter') getPlayers();
    }


    return (
        <div className="max-w-5xl w-11/12 m-auto flex flex-col">
            <Alert
                show={show}
                className="text-red-300"
            >
                Digite um nome
            </Alert>
            <div className="w-full flex gap-2 pb-8">
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
                        value={searchPlayers}
                        onChange={e => setSearchPlayers(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onKeyUp={e => e.key !== 'Enter' ? setShow(false) : ''}
                        placeholder="Procure pelo nome"
                    />
                </div>
                <button 
                    className="w-2/6 bg-orange-500 hover:bg-orange-100 text-white text-lg font-medium rounded p-4"
                    onClick={getPlayers}
                >
                    Buscar
                </button>
            </div>
            <div className="flex flex-wrap gap-y-8 justify-between">
                {players?.map((player: any) => (
                    <Card
                        key={player.id}
                        id={player.id}
                        name={`${player.first_name} ${player.last_name}`}
                        team={player.team.name}
                    />
                ))}
            </div>
        </div>
    )
}