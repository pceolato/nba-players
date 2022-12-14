import { use } from "react";
import { Card } from "../components/Card";

interface CardsProps {
    id: string;
    first_name: string;
    last_name: string;
    team: {
        name: string;
    }
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
    const players =  use(getPlayers());
    
    return (
            <div className="flex flex-wrap gap-8 mb-10">
                {players.map((player: CardsProps) => (
                    <Card 
                        key={player.id}
                        id={player.id}
                        name={`${player.first_name} ${player.last_name}`}
                        team={player.team.name}
                    />
                ))}
            </div>
    )
}
