'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Player } from '../app/players/page';

export function Card({name, team, id}: Player) {
    return (
        <button className="w-full lg:w-80 bg-card border-solid border-cardBorder border-gray-400 rounded hover:bg-hoverCard">
            <Link
                href={`/players/${id}`}
            >
                <div className="flex justify-between p-6">
                    <div>
                        <h3 className="text-left text-xl text-title font-bold">{ name }</h3>
                        <p className="text-left">{ team }</p>
                    </div>
                    <Image
                        src="/bool-blue.svg"
                        alt="Bola de basquete azul"
                        width={40}
                        height={40}
                    />
                </div>
            </Link>
        </button>
    )
}