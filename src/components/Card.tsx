/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

import { DribbbleLogo } from 'phosphor-react';

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
                    <DribbbleLogo size={40} color="#17408B" />
                </div>
            </Link>
        </button>
    )
}