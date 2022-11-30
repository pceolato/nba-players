import Link from "next/link";
import { use } from "react";
import { Card } from "./card";

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
