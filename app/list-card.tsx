import { use } from "react";
import { Card } from "./card";

export interface Player {
    id: string;
    name: string;
    team: string;
}

async function getPlayers() {
    try {
        const res = await fetch(`https://www.balldontlie.io/api/v1/players`);
        const json = await res.json();
    
        return json.data;

    } catch (err) {
        console.log(err)
    }
}

export function Cards() {
    const players = use(getPlayers())
    
    return (
        <>
            <h1 className="text-center font-bold text-white text-3xl">Jogadores</h1>
            <p className="text-center pb-5 text-sm">Clique para mais informações</p>
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
        </>
    )
}
