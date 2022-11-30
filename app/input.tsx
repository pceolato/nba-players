'use client';

import Image from 'next/image'

export function Input() {
    return (
        <div className="w-full flex pb-9">
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
                    placeholder="Procure pelo nome" 
                />
            </div>
        </div>
    )
}