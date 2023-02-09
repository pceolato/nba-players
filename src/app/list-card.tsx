import { use } from "react";
import { Card } from "../components/Card";
import { api } from "../lib/axios";

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
        const response = await api.get('/players');

        return response.data.data;
    } catch (err) {
        console.log(err)
    }
}

export function Cards() {
    const players =  use(getPlayers());
    return (
            <div className="flex flex-wrap gap-8 mb-10">
                {players?.map((player: CardsProps) => (
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
