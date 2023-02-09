'use client';

import { useState } from 'react';
import { Card } from '../../components/Card';

import { Alert } from "@material-tailwind/react";
import { SearchIcon } from '../../components/Search-icon';
import { api } from '../../lib/axios';

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
        const trimPlayer = searchPlayers.trim();
        try {
            if (searchPlayers === '' || trimPlayer.length === 0) {
                setShow(true)
                return;
            }

            const response = await api.get('/players', {
                params: {
                    search: trimPlayer
                }
            })

            const players = response.data

            if(players.data.length <= 0) alert('jogador não encontrado')

            setPlayers(players.data)

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
                <div className="bg-input w-full flex items-center p-4 rounded border-inputBorder">
                    <SearchIcon />
                    <input
                        type="text"
                        className="bg-transparent h-8 w-full pl-4 outline-0 text-title placeholder-phInput"
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
            <div className="flex flex-wrap gap-8">
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